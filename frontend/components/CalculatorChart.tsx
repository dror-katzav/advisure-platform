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
        <div style={{ height: 400, width: '100%', background: '#141412', padding: '1.5rem 0.5rem 0.5rem' }}>
            <p style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#5F5E5A', marginBottom: '1.25rem', paddingLeft: '0.5rem' }}>Wealth Accumulation</p>
            <ResponsiveContainer width="100%" height="85%">
                <LineChart
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                    <XAxis
                        dataKey="year"
                        stroke="#5F5E5A"
                        tick={{ fill: '#888780', fontSize: 11 }}
                        label={{ value: 'Years', position: 'insideBottomRight', offset: -5, fill: '#5F5E5A', fontSize: 11 }}
                    />
                    <YAxis
                        stroke="#5F5E5A"
                        tick={{ fill: '#888780', fontSize: 11 }}
                        tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                    />
                    <Tooltip
                        formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
                        contentStyle={{ background: '#1E1E1B', border: '0.5px solid rgba(255,255,255,0.1)', borderRadius: 0, fontSize: 12, color: '#FAFAF8' }}
                    />
                    <Legend wrapperStyle={{ fontSize: 12, color: '#888780' }} />
                    <Line
                        type="monotone"
                        dataKey="traditional_value"
                        name="Traditional Investment"
                        stroke="#5F5E5A"
                        strokeWidth={2}
                        dot={false}
                    />
                    <Line
                        type="monotone"
                        dataKey="ppli_value"
                        name="PPLI Strategy"
                        stroke="#C9A96E"
                        strokeWidth={2.5}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
