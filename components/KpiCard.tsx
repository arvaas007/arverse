
import React from 'react';
import { KpiMetric } from '@/lib/data-neraca';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

export default function KpiCard({ metric }: { metric: KpiMetric }) {
    return (
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-2">{metric.label}</h3>
            <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold text-gray-900">{metric.value}</span>
            </div>

            {metric.trend && (
                <div className={`flex items-center mt-4 text-sm font-medium ${metric.trendUp === true ? 'text-emerald-600' : metric.trendUp === false ? 'text-rose-600' : 'text-gray-500'}`}>
                    {metric.trendUp === true && <ArrowUpRight className="w-4 h-4 mr-1" />}
                    {metric.trendUp === false && <ArrowDownRight className="w-4 h-4 mr-1" />}
                    {metric.trendUp === undefined && <Minus className="w-4 h-4 mr-1" />}
                    <span>{metric.trend}</span>
                </div>
            )}

            {metric.description && (
                <p className="text-gray-400 text-xs mt-2">{metric.description}</p>
            )}
        </div>
    );
}
