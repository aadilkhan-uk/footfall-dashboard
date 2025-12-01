import type { DoorEvent } from '../types';

export interface IEventRepository {
    /**
     * Returns all door events for a store between [from, to).
     */
    getEventsForStore(
        storeId: string,
        from: Date,
        to: Date
    ): Promise<DoorEvent[]>;

    getLiveEvents(
        storeId: string,
        asOf: Date
    ): Promise<DoorEvent[]>;
}