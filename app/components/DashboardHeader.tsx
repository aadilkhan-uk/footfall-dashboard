import React from 'react';
import { MapPin, RotateCw, MoreHorizontal } from 'lucide-react';

export default function DashboardHeader() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
                <h1 className="text-2xl font-bold text-foreground mb-2">Dashboard — Overview</h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Oxford Street Store</span>
                    </div>
                    <span className="hidden md:inline">•</span>
                    <div className="flex items-center gap-1">
                        <RotateCw className="w-4 h-4" />
                        <span>Last update: 32s ago</span>
                    </div>
                    <span className="hidden md:inline">•</span>
                    <div>Today: Mon, Dec 1</div>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <div className="bg-white dark:bg-neutral-800 rounded-lg p-1 border border-border flex">
                    <button className="px-4 py-1.5 text-sm font-medium bg-background shadow-sm rounded-md text-foreground">
                        Today
                    </button>
                    <button className="px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Week
                    </button>
                </div>
                <button className="p-2 bg-white dark:bg-neutral-800 border border-border rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors">
                    <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
                </button>
            </div>
        </div>
    );
}
