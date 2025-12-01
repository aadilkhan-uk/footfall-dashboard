import React from 'react';
import DashboardHeader from '../components/DashboardHeader';
import StatCard from '../components/StatCard';
import LiveFootfallCard from '../components/LiveFootfallCard';
import { Users, Clock, Activity, AlertTriangle } from 'lucide-react';

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-background text-foreground p-8 font-sans transition-colors duration-300">
            <DashboardHeader />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                <LiveFootfallCard />

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
