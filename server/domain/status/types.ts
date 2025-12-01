export type Direction = 'IN' | 'OUT';

export interface DoorEvent {
    id: number;
    sensor_id: string;
    direction: Direction;
    ts_utc: string;  // or Date if you parse it at load time
    seq: number;
    device_meta?: Record<string, unknown>;
}

export interface LiveData {
    currentlyInside: number;
    last5m: number;
    last15m: number;
    last60m: number;
    sparkline: number[]; // last 60 mins, 1 datapoint per 5 mins, etc.
}
