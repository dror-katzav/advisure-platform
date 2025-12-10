'use client';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { YearResult } from '@/lib/api';

interface CalculatorChartProps {
    data: YearResult[];
}

export function CalculatorChart({ data }: CalculatorChartProps) {
    return (
        <div className="h-[400px] w-full bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Wealth Accumulation</h3>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                        dataKey="year"
                        stroke="#6b7280"
                        label={{ value: 'Years', position: 'insideBottomRight', offset: -5 }}
                    />
                    <YAxis
                        stroke="#6b7280"
                        tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                    />
                    <Tooltip
                        formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
                        contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb' }}
                    />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="traditional_value"
                        name="Traditional Investment"
                        stroke="#9ca3af" // Gray
                        strokeWidth={2}
                        dot={false}
                    />
                    <Line
                        type="monotone"
                        dataKey="ppli_value"
                        name="PPLI Strategy"
                        stroke="#1e3a8a" // Navy Blue (Advisure brand)
                        strokeWidth={3}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
