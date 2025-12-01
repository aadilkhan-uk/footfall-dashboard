import { IEventRepository } from "./interfaces/IEventRepository";
import { IStatusRetriever } from "./interfaces/IStatusRetriever";
import { JsonEventRepository } from "./repositories/JSONEventRepository";
import { LiveData } from "./types";

export class StatusRetriever implements IStatusRetriever {

    private _repo: IEventRepository;

    constructor(private readonly repo: IEventRepository) {
        this._repo = repo;
    }

    async getLiveData(storeId: string, asOf: Date): Promise<LiveData> {

        const events = await this.repo.getLiveEvents(storeId, asOf);

        // --- Calculate "currentlyInside"
        let inside = 0;
        for (const e of events) {
            if (e.direction === 'IN') inside++;
            else if (e.direction === 'OUT') inside--;
        }

        // --- Filter windows
        // --- Filter windows (only count entries)
        const last5m = events.filter(e =>
            e.direction === 'IN' &&
            new Date(e.ts_utc) >= new Date(asOf.getTime() - 5 * 60 * 1000)
        ).length;

        const last15m = events.filter(e =>
            e.direction === 'IN' &&
            new Date(e.ts_utc) >= new Date(asOf.getTime() - 15 * 60 * 1000)
        ).length;

        const last60m = events.filter(e => e.direction === 'IN').length;

        // --- Sparkline (example: 8 buckets for last hour)
        const sparkline = this.generateSparkline(events, asOf);

        return {
            currentlyInside: inside,
            last5m,
            last15m,
            last60m,
            sparkline
        };
    }

    private generateSparkline(events: any[], asOf: Date): number[] {
        const buckets = 8;
        const bucketSizeMs = (60 * 60 * 1000) / buckets;
        const arr = Array(buckets).fill(0);

        for (const e of events) {
            if (e.direction !== 'IN') continue;
            const diff = asOf.getTime() - new Date(e.ts_utc).getTime();
            const bucket = Math.floor(diff / bucketSizeMs);
            if (bucket >= 0 && bucket < buckets) arr[bucket]++;
        }

        return arr.reverse(); // oldest → newest
    }
}