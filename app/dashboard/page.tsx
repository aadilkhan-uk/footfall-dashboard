import React from 'react';
import DashboardHeader from '../components/DashboardHeader';
import StatCard from '../components/StatCard';
import LiveFootfallCard from '../components/LiveFootfallCard';
import { Users, Clock, Activity, AlertTriangle } from 'lucide-react';
import { OverviewResponse } from '../types/api';

async function getOverviewData(): Promise<OverviewResponse | null> {
    try {
        // In a real app, use an environment variable for the base URL
        // For now, hardcoding as per request, but using 127.0.0.1 to avoid localhost issues in some environments
        const res = await fetch('http://127.0.0.1:3000/api/stores/store-oxford-1/overview?date=2025-11-27T11:21:38Z', {
            cache: 'no-store'
        });

        if (!res.ok) {
            console.error('Failed to fetch data', res.status, res.statusText);
            return null;
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

export default async function Dashboard() {
    const data = await getOverviewData();

    return (
        <div className="min-h-screen bg-background text-foreground p-8 font-sans transition-colors duration-300">
            <DashboardHeader />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                <LiveFootfallCard data={data?.live} />

                <StatCard
                    title="Total Today"
                    icon={Users}
                    mainValue="1,248"
                    trend="up"
                    trendValue="12%"
                    subText="vs typical"
                />

                <StatCard
                    title="Peak Hour"
                    icon={Clock}
                    mainValue="1:00 PM"
                    trend="down"
                    trendValue="5m earlier"
                    subText="vs typical"
                />

                <StatCard
                    title="Avg / Hour"
                    icon={Activity}
                    mainValue="86"
                    trend="up"
                    trendValue="4.5%"
                    subText="vs typical"
                />

                <StatCard
                    title="Queue Risk"
                    icon={AlertTriangle}
                    mainValue="High"
                    trend="up"
                    trendValue="Warning"
                    subText="vs typical"
                />
            </div>

            {/* Placeholder for future graphs and data */}
            <div className="mt-8">
                {/* More content will go here */}
            </div>
        </div>
    );
}
