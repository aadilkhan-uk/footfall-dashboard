import fs from 'node:fs/promises';
import path from 'node:path';
import { IEventRepository } from '../interfaces/IEventRepository';
import { DoorEvent } from '../types';

export class JsonEventRepository implements IEventRepository {
    private readonly filePath: string;

    constructor(filePath?: string) {
        this.filePath = filePath ?? path.join(process.cwd(), 'server/data/events.json');
    }

    async getEventsForStore(storeId: string, from: Date, to: Date): Promise<DoorEvent[]> {

        console.log(this.filePath);
        const raw = await fs.readFile(this.filePath, 'utf-8');

        const events: DoorEvent[] = JSON.parse(raw);
        return events.filter(e => {
            if (e.sensor_id !== storeId) return false;
            const ts = new Date(e.ts_utc);
            return ts >= from && ts < to;
        });
    }

    async getLiveEvents(storeId: string, asOf: Date): Promise<DoorEvent[]> {
        const raw = await fs.readFile(this.filePath, 'utf-8');
        const events: DoorEvent[] = JSON.parse(raw);

        const windowStart = new Date(asOf.getTime() - 60 * 60 * 1000); // last 60 min

        return events.filter(e => {
            if (e.sensor_id !== storeId) return false;
            const ts = new Date(e.ts_utc);
            return ts >= windowStart && ts <= asOf;
        });
    }
}