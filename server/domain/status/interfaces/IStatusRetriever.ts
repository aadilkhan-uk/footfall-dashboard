import type { LiveData } from '../types';

export interface IStatusRetriever {
    /**
     * Computes live stats for the given store at the specified instant.
     * `asOf` is usually "now", but you can override for testing.
     */
    getLiveData(storeId: string, asOf: Date): Promise<LiveData>;
}