import React from 'react';
import Skeleton from '../components/Skeleton';

export default function DashboardLoading() {
    return (
        <div className="min-h-screen bg-background text-foreground p-8 font-sans">
            {/* Header Skeleton */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <Skeleton className="h-8 w-64 mb-2" />
                    <div className="flex gap-4">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-4 w-32" />
                    </div>
                </div>
                <div className="flex gap-2">
                    <Skeleton className="h-9 w-32" />
                    <Skeleton className="h-9 w-9" />
                </div>
            </div>

            {/* Cards Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {/* Live Footfall Card Skeleton */}
                <div className="dashboard-card h-full min-h-[300px] flex flex-col">
                    <div className="flex justify-between mb-4">
                        <Skeleton className="h-6 w-32" />
                        <Skeleton className="h-8 w-12" />
                    </div>
                    <div className="flex justify-between items-end mb-6">
                        <Skeleton className="h-12 w-24" />
                        <Skeleton className="h-12 w-24" />
                    </div>
                    <Skeleton className="h-16 w-full mb-6" />
                    <div className="mt-auto pt-4 border-t border-border flex justify-between">
                        <Skeleton className="h-8 w-20" />
                        <Skeleton className="h-8 w-20" />
                        <Skeleton className="h-8 w-20" />
                    </div>
                </div>

                {/* Stat Cards Skeletons */}
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="dashboard-card h-full min-h-[200px] flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <Skeleton className="h-5 w-24" />
                            <Skeleton className="h-5 w-5" />
                        </div>
                        <div className="mt-auto">
                            <Skeleton className="h-10 w-32 mb-2" />
                            <Skeleton className="h-5 w-24" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
