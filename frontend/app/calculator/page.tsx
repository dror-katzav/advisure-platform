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
            alert('Failed to calculate results');
        } finally {
            setLoading(false);
        }
    };

    // Reactive calculation with debounce
    useEffect(() => {
        const timer = setTimeout(() => {
            handleCalculate();
        }, 500); // 500ms debounce

        return () => clearTimeout(timer);
    }, [formData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        let numValue = parseFloat(value);

        // Convert percentages back to decimals for state if needed, but here we store as decimal.
        // However, the inputs below are sending raw values.
        // Wait, the API expects decimals (0.07). The inputs show %. 
        // Let's handle the conversion at the input level or state level. 
        // For simplicity, let's keep state as decimal (API compliant) and convert in UI.

        // Exception: Initial Investment is raw number. Years is raw number.

        if (name === 'annual_return_rate' || name.includes('rate') || name === 'dividend_yield') {
            numValue = numValue / 100; // Convert 7% to 0.07
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
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        PPLI Impact Calculator
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Compare the long-term growth of a PPLI strategy versus a traditional taxable portfolio.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Inputs Panel */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-fit">
                        <h2 className="text-xl font-semibold mb-6 text-gray-900">Assumptions</h2>

                        <div className="space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Portfolio</h3>

                                {/* Initial Investment Slider */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Initial Investment: <span className="text-black font-semibold">${formData.initial_investment.toLocaleString()}</span>
                                    </label>
                                    <input
                                        type="range"
                                        min="1000000"
                                        max="20000000"
                                        step="500000"
                                        value={formData.initial_investment}
                                        onChange={handleSliderChange}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
                                    />
                                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                                        <span>$1M</span>
                                        <span>$20M</span>
                                    </div>
                                </div>

                                {/* Annual Return */}
                                <Input
                                    label="Annual Return Rate (%)"
                                    name="annual_return_rate"
                                    type="number"
                                    step="0.1"
                                    value={(formData.annual_return_rate * 100).toFixed(1)}
                                    onChange={handleChange}
                                    className="text-black font-medium"
                                />

                                {/* Time Horizon Dropdown */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Time Horizon (Years)</label>
                                    <select
                                        name="years"
                                        value={formData.years}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                    >
                                        <option value="1">1 Year</option>
                                        <option value="5">5 Years</option>
                                        <option value="10">10 Years</option>
                                        <option value="20">20 Years</option>
                                        <option value="30">30 Years</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Tax Rates (%)</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <Input
                                        label="Fed Tax"
                                        name="fed_tax_rate"
                                        type="number"
                                        step="0.1"
                                        value={(formData.fed_tax_rate * 100).toFixed(1)}
                                        onChange={handleChange}
                                        className="text-black font-medium"
                                    />
                                    <Input
                                        label="Cap Gains"
                                        name="cap_gains_rate"
                                        type="number"
                                        step="0.1"
                                        value={(formData.cap_gains_rate * 100).toFixed(1)}
                                        onChange={handleChange}
                                        className="text-black font-medium"
                                    />
                                    <Input
                                        label="NIIT"
                                        name="niit_rate"
                                        type="number"
                                        step="0.1"
                                        value={(formData.niit_rate * 100).toFixed(1)}
                                        onChange={handleChange}
                                        className="text-black font-medium"
                                    />
                                    <Input
                                        label="State Tax"
                                        name="state_tax_rate"
                                        type="number"
                                        step="0.1"
                                        value={(formData.state_tax_rate * 100).toFixed(1)}
                                        onChange={handleChange}
                                        className="text-black font-medium"
                                    />
                                </div>
                            </div>

                            {/* Button Removed for Reactive UI */}
                        </div>
                    </div>

                    {/* Results Panel */}
                    <div className="lg:col-span-2 space-y-8">
                        {results && (
                            <>
                                {/* Key Metrics */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                        <p className="text-sm font-medium text-gray-500">Traditional Value</p>
                                        <p className="mt-2 text-2xl font-bold text-gray-900">
                                            ${results.final_traditional_value.toLocaleString()}
                                        </p>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 border-l-4 border-l-blue-900">
                                        <p className="text-sm font-medium text-blue-900">PPLI Value</p>
                                        <p className="mt-2 text-2xl font-bold text-blue-900">
                                            ${results.final_ppli_value.toLocaleString()}
                                        </p>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                        <p className="text-sm font-medium text-green-600">Tax Advantage</p>
                                        <p className="mt-2 text-2xl font-bold text-green-600">
                                            +${results.total_tax_savings.toLocaleString()}
                                        </p>
                                    </div>
                                </div>

                                {/* Chart */}
                                <CalculatorChart data={results.results} />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
