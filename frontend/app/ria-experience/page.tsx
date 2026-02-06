'use client';

import { useState, useEffect } from 'react';
import { calculatePPLI, CalculatorInput, CalculatorResponse } from '@/lib/api';
import { CalculatorChart } from '@/components/CalculatorChart';
import { Input } from '@/components/ui/Input';

export default function CalculatorPage() {
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<CalculatorResponse | null>(null);

    const [formData, setFormData] = useState<CalculatorInput>({
        initial_investment: 5000000,
        annual_contribution: 0,
        years: 20,
        annual_return_rate: 0.07,
        fed_tax_rate: 0.37,
        state_tax_rate: 0.0,
        cap_gains_rate: 0.20,
        niit_rate: 0.038,
        turnover_rate: 0.20,
        dividend_yield: 0.02,
        ppli_cost_rate: 0.005,
    });

    const handleCalculate = async () => {
        setLoading(true);
        try {
            const data = await calculatePPLI(formData);
            setResults(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            handleCalculate();
        }, 500);

        return () => clearTimeout(timer);
    }, [formData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | any>) => {
        const { name, value } = e.target;
        let numValue = parseFloat(value);

        if (name === 'annual_return_rate' || name.includes('rate') || name === 'dividend_yield') {
            numValue = numValue / 100;
        }

        setFormData(prev => ({
            ...prev,
            [name]: isNaN(numValue) ? 0 : numValue
        }));
    };

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            initial_investment: parseFloat(e.target.value)
        }));
    };

    return (
        <div className="min-h-screen bg-off-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-charcoal sm:text-5xl">
                        RIA Experience: <span className="text-advisure-blue">PPLI Impact</span>
                    </h1>
                    <p className="mt-6 text-xl text-charcoal/60 max-w-2xl mx-auto">
                        Quantify the tax alpha of a Private Placement Life Insurance strategy for your high-net-worth clients.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Inputs Panel */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-advisure-silver/20 h-fit">
                        <h2 className="text-2xl font-bold mb-8 text-charcoal">Assumptions</h2>

                        <div className="space-y-8">
                            <div className="space-y-6">
                                <h3 className="text-xs font-bold text-advisure-silver uppercase tracking-widest">Portfolio Details</h3>

                                <div>
                                    <label className="block text-sm font-bold text-charcoal mb-2">
                                        Initial Investment: <span className="text-advisure-blue font-bold text-lg ml-2">${formData.initial_investment.toLocaleString()}</span>
                                    </label>
                                    <input
                                        type="range"
                                        min="1000000"
                                        max="20000000"
                                        step="500000"
                                        value={formData.initial_investment}
                                        onChange={handleSliderChange}
                                        className="w-full h-2 bg-soft-blue rounded-lg appearance-none cursor-pointer accent-advisure-blue mt-4"
                                    />
                                    <div className="flex justify-between text-xs text-charcoal/40 mt-2 font-medium">
                                        <span>$1M</span>
                                        <span>$20M</span>
                                    </div>
                                </div>

                                <Input
                                    label="Annual Return Rate (%)"
                                    name="annual_return_rate"
                                    type="number"
                                    step="0.1"
                                    value={(formData.annual_return_rate * 100).toFixed(1)}
                                    onChange={handleChange}
                                    className="rounded-xl border-advisure-silver/30"
                                />

                                <div>
                                    <label className="block text-sm font-bold text-charcoal mb-2">Time Horizon (Years)</label>
                                    <select
                                        name="years"
                                        value={formData.years}
                                        onChange={handleChange}
                                        className="block w-full rounded-xl border border-advisure-silver/30 bg-white px-4 py-3 text-sm text-charcoal focus:ring-2 focus:ring-advisure-blue focus:border-transparent outline-none transition-all"
                                    >
                                        <option value="1">1 Year</option>
                                        <option value="5">5 Years</option>
                                        <option value="10">10 Years</option>
                                        <option value="20">20 Years</option>
                                        <option value="30">30 Years</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-xs font-bold text-advisure-silver uppercase tracking-widest">Tax Efficiency</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <Input
                                        label="Fed Tax"
                                        name="fed_tax_rate"
                                        type="number"
                                        step="0.1"
                                        value={(formData.fed_tax_rate * 100).toFixed(1)}
                                        onChange={handleChange}
                                        className="rounded-xl border-advisure-silver/30"
                                    />
                                    <Input
                                        label="Cap Gains"
                                        name="cap_gains_rate"
                                        type="number"
                                        step="0.1"
                                        value={(formData.cap_gains_rate * 100).toFixed(1)}
                                        onChange={handleChange}
                                        className="rounded-xl border-advisure-silver/30"
                                    />
                                    <Input
                                        label="NIIT"
                                        name="niit_rate"
                                        type="number"
                                        step="0.1"
                                        value={(formData.niit_rate * 100).toFixed(1)}
                                        onChange={handleChange}
                                        className="rounded-xl border-advisure-silver/30"
                                    />
                                    <Input
                                        label="State Tax"
                                        name="state_tax_rate"
                                        type="number"
                                        step="0.1"
                                        value={(formData.state_tax_rate * 100).toFixed(1)}
                                        onChange={handleChange}
                                        className="rounded-xl border-advisure-silver/30"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results Panel */}
                    <div className="lg:col-span-2 space-y-12">
                        {results && (
                            <>
                                {/* Key Metrics */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-advisure-silver/20">
                                        <p className="text-sm font-bold text-charcoal/40 uppercase tracking-widest">Traditional</p>
                                        <p className="mt-3 text-3xl font-bold text-charcoal">
                                            ${results.final_traditional_value.toLocaleString()}
                                        </p>
                                    </div>
                                    <div className="bg-advisure-blue p-8 rounded-3xl shadow-xl border border-advisure-blue/20 relative overflow-hidden group">
                                        <p className="text-sm font-bold text-white/60 uppercase tracking-widest relative z-10">PPLI Strategy</p>
                                        <p className="mt-3 text-3xl font-bold text-white relative z-10">
                                            ${results.final_ppli_value.toLocaleString()}
                                        </p>
                                        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
                                    </div>
                                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-advisure-silver/20">
                                        <p className="text-sm font-bold text-advisure-gold uppercase tracking-widest">Tax Savings</p>
                                        <p className="mt-3 text-3xl font-bold text-advisure-gold">
                                            ${results.total_tax_savings.toLocaleString()}
                                        </p>
                                    </div>
                                </div>

                                {/* Chart */}
                                <div className="bg-white p-8 rounded-3xl shadow-sm border border-advisure-silver/20">
                                    <CalculatorChart data={results.results} />
                                </div>
                            </>
                        )}

                        <div className="bg-soft-blue p-8 rounded-3xl text-center">
                            <h3 className="text-xl font-bold text-advisure-blue mb-2">Unlock the full power of Private Placement</h3>
                            <p className="text-charcoal/70 mb-8">This calculator illustrates the tax-drag reduction. Our platform handles the full implementation.</p>
                            <a href="/schedule-demo" className="inline-flex items-center justify-center px-8 py-3 bg-advisure-blue text-white font-bold rounded-full hover:bg-advisure-blue/90 transition-all shadow-md">
                                Schedule a full strategy session
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
