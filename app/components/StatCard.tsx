import React from 'react';
import { LucideIcon } from 'lucide-react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface StatCardProps {
    title: string;
    icon?: LucideIcon;
    mainValue: string;
    subValue?: string;
    subText?: string;
    trend?: 'up' | 'down' | 'neutral';
    trendValue?: string;
}

export default function StatCard({
    title,
    icon: Icon,
    mainValue,
    subText,
    trend,
    trendValue
}: StatCardProps) {
    return (
        <div className="dashboard-card flex flex-col justify-between h-full min-h-[200px]">
            <div className="flex justify-between items-start">
                <h3 className="text-muted-foreground font-medium">{title}</h3>
                {Icon && <Icon className="w-5 h-5 text-muted-foreground" />}
            </div>

            <div className="mt-auto">
                <div className="text-4xl font-bold tracking-tight mb-2">{mainValue}</div>

                {(trend || subText) && (
                    <div className="flex items-center gap-2 text-sm">
                        {trend && trendValue && (
                            <span className={`flex items-center font-medium ${trend === 'up' ? 'text-emerald-500' :
                                    trend === 'down' ? 'text-rose-500' : 'text-muted-foreground'
                                }`}>
                                {trend === 'up' ? <ArrowUpRight className="w-4 h-4 mr-0.5" /> :
                                    trend === 'down' ? <ArrowDownRight className="w-4 h-4 mr-0.5" /> : null}
                                {trendValue}
                            </span>
                        )}
                        {subText && <span className="text-muted-foreground">{subText}</span>}
                    </div>
                )}
            </div>
        </div>
    );
}
