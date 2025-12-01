export interface LiveDataResponse {
    currentlyInside: number;
    last5m: number;
    last15m: number;
    last60m: number;
    sparkline: number[]; // last 60 mins, 1 datapoint per 5 mins, etc.
}

export interface OverviewResponse {
    storeId: string;
    date: string;
    live: LiveDataResponse;
}
