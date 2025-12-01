import { JsonEventRepository } from '@/server/domain/status/repositories/JSONEventRepository';
import { StatusRetriever } from '@/server/domain/status/StatusRetriever';
import { NextResponse } from 'next/server';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ storeId: string }> }
) {
    const { storeId } = await params;

    const url = new URL(request.url);
    const dateParam = url.searchParams.get('date');

    const asOf = parseAsOfDate(dateParam);

    const repo = new JsonEventRepository();
    const retriever = new StatusRetriever(repo);

    const live = await retriever.getLiveData(storeId, asOf);

    return NextResponse.json({
        storeId,
        date: dateParam ?? asOf.toISOString(),
        live
    });
}

function parseAsOfDate(dateParam: string | null): Date {
    if (!dateParam) return new Date();

    if (dateParam.includes('T')) {
        // Full timestamp provided → real-time inspection
        return new Date(dateParam);
    }

    // Date-only: interpret as historical
    return new Date(dateParam + 'T23:59:59Z');
}
