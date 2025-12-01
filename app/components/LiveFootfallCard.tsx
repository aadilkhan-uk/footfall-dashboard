import React from 'react';
import { TrendingUp } from 'lucide-react';
import Sparkline from './Sparkline';
import { LiveDataResponse } from '../types/api';

interface LiveFootfallCardProps {
    data?: LiveDataResponse;
}

export default function LiveFootfallCard({ data }: LiveFootfallCardProps) {
    // Default dummy data if no data provided (or loading state could be handled here)
    const sparklineData = data?.sparkline || [10, 15, 12, 20, 25, 18, 22, 30, 28, 25, 20, 24, 28, 35, 30, 25, 20, 22, 28, 32];
    const currentVisitors = data?.currentlyInside ?? 84;
    const entries = data?.last60m ?? 124; // Assuming last60m is entries, or we might need a separate field if API changes
    const last5m = data?.last5m ?? 12;
    const last15m = data?.last15m ?? 34;

    return (
        <div className="dashboard-card flex flex-col h-full min-h-[300px]">
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></div>
                    <span className="font-medium text-foreground">Live Footfall</span>
                </div>
                <div className="text-xs text-muted-foreground text-right">
                    Last 60<br />min
                </div>
            </div>

            <div className="flex justify-between items-end mb-6">
                <div>
                    <div className="text-5xl font-bold tracking-tight">{currentVisitors}</div>
                    <div className="text-sm text-muted-foreground mt-1">
                        visitors<br />currently<br />inside
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-xl font-bold text-foreground">+{entries}</div>
                    <div className="text-sm font-medium text-foreground">entries</div>
                </div>
            </div>

            <div className="h-16 mb-6 w-full">
                <Sparkline data={sparklineData} color="#f59e0b" strokeWidth={2} />
            </div>

            <div className="mt-auto pt-4 border-t border-border flex justify-between items-center text-xs text-muted-foreground">
                <div>
                    <span className="font-bold text-foreground">{last5m}</span> in last<br />5m
                </div>
                <div>
                    <span className="font-bold text-foreground">{last15m}</span> in last<br />15m
                </div>
                <div className="flex items-center gap-1 text-emerald-500 font-medium">
                    <TrendingUp className="w-3 h-3" />
                    Trending<br />up
                </div>
            </div>
        </div>
    );
}
