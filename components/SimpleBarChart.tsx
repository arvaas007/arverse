
import React from 'react';
import { BarData } from '@/lib/data-neraca';

export default function SimpleBarChart({ data, title }: { data: BarData[], title?: string }) {
    // Find max value to scale charts relative to the biggest bar
    const maxValue = Math.max(...data.map(d => d.value));

    return (
        <div className="w-full">
            {title && <h4 className="text-sm font-semibold text-gray-900 mb-4">{title}</h4>}
            <div className="space-y-4">
                {data.map((item, index) => (
                    <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium text-gray-700">{item.label}</span>
                            <span className="font-bold text-gray-900">{item.displayValue}</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                            <div
                                className={`h-full rounded-full ${item.color || 'bg-primary'}`}
                                style={{ width: `${(item.value / maxValue) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
