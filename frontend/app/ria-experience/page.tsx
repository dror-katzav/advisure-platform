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
        setFormData(prev => ({ ...prev, [name]: isNaN(numValue) ? 0 : numValue }));
    };

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, initial_investment: parseFloat(e.target.value) }));
    };

    const inputPanelStyle: React.CSSProperties = {
        background: '#FFFFFF',
        border: '1px solid rgba(0, 0, 0, 0.08)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
        padding: '2.5rem',
    };

    const sectionLabelStyle: React.CSSProperties = {
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: '#8B6F3E',
        display: 'block',
        marginBottom: '1.25rem',
    };

    return (
        <div style={{ background: '#FBFBFA', color: '#141412', minHeight: '100vh' }}>

            {/* ── HEADER ────────────────────────────── */}
            <div className="relative overflow-hidden" style={{ paddingTop: '10rem', paddingBottom: '5rem', paddingLeft: '3rem', paddingRight: '3rem', borderBottom: '1px solid rgba(0, 0, 0, 0.06)', background: '#F4F4F0' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,111,62,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
                    <span className="eyebrow" style={{ display: 'block', marginBottom: '1.5rem' }}>Financial Model</span>
                    <h1 className="font-serif text-[#141412]" style={{ fontSize: 'clamp(40px,6vw,72px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '1.5rem' }}>
                        Model the Tax Alpha
                    </h1>
                    <p style={{ fontSize: 18, color: '#5F5E5A', maxWidth: 560, lineHeight: 1.75 }}>
                        Enter your client&apos;s portfolio assumptions and see the after-tax difference a private placement structure delivers over time.
                    </p>
                </div>
            </div>

            {/* ── CALCULATOR ────────────────────────── */}
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '5rem 3rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', alignItems: 'start' }}>

                    {/* Inputs Panel */}
                    <div style={inputPanelStyle}>
                        <p className="font-serif" style={{ fontSize: 24, fontWeight: 400, color: '#141412', marginBottom: '2rem' }}>Assumptions</p>

                        <div style={{ marginBottom: '2.5rem' }}>
                            <span style={sectionLabelStyle}>Portfolio Details</span>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ fontSize: 12, color: '#5F5E5A', display: 'block', marginBottom: '0.75rem' }}>
                                    Initial Investment:{' '}
                                    <span style={{ color: '#8B6F3E', fontWeight: 600, fontSize: 15 }}>
                                        ${formData.initial_investment.toLocaleString()}
                                    </span>
                                </label>
                                <input
                                    type="range"
                                    min="1000000"
                                    max="20000000"
                                    step="500000"
                                    value={formData.initial_investment}
                                    onChange={handleSliderChange}
                                    style={{ width: '100%', accentColor: '#8B6F3E' }}
                                />
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#888780', marginTop: '0.35rem' }}>
                                    <span>$1M</span><span>$20M</span>
                                </div>
                            </div>

                            <Input
                                label="Annual Return Rate (%)"
                                name="annual_return_rate"
                                type="number"
                                step="0.1"
                                value={(formData.annual_return_rate * 100).toFixed(1)}
                                onChange={handleChange}
                                className="rounded-xl border-gray-200"
                            />

                            <div style={{ marginTop: '1.25rem' }}>
                                <label style={{ fontSize: 12, color: '#5F5E5A', display: 'block', marginBottom: '0.5rem' }}>Time Horizon (Years)</label>
                                <select
                                    name="years"
                                    value={formData.years}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        background: '#FFFFFF',
                                        border: '1px solid rgba(0, 0, 0, 0.12)',
                                        borderRadius: 6,
                                        color: '#141412',
                                        padding: '0.65rem 0.85rem',
                                        fontSize: 13,
                                        outline: 'none',
                                    }}
                                >
                                    <option value="1">1 Year</option>
                                    <option value="5">5 Years</option>
                                    <option value="10">10 Years</option>
                                    <option value="20">20 Years</option>
                                    <option value="30">30 Years</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <span style={sectionLabelStyle}>Tax Rates</span>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                                <Input label="Fed Tax" name="fed_tax_rate" type="number" step="0.1" value={(formData.fed_tax_rate * 100).toFixed(1)} onChange={handleChange} className="rounded-xl border-gray-200" />
                                <Input label="Cap Gains" name="cap_gains_rate" type="number" step="0.1" value={(formData.cap_gains_rate * 100).toFixed(1)} onChange={handleChange} className="rounded-xl border-gray-200" />
                                <Input label="NIIT" name="niit_rate" type="number" step="0.1" value={(formData.niit_rate * 100).toFixed(1)} onChange={handleChange} className="rounded-xl border-gray-200" />
                                <Input label="State Tax" name="state_tax_rate" type="number" step="0.1" value={(formData.state_tax_rate * 100).toFixed(1)} onChange={handleChange} className="rounded-xl border-gray-200" />
                            </div>
                        </div>
                    </div>

                    {/* Results Panel */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {results && (
                            <>
                                {/* Key Metrics */}
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }}>
                                    <div style={{ background: '#FFFFFF', border: '1px solid rgba(0, 0, 0, 0.08)', padding: '1.75rem 2rem', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                                        <p style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888780', marginBottom: '0.75rem' }}>Traditional</p>
                                        <p style={{ fontSize: 26, fontWeight: 500, color: '#141412' }}>
                                            ${results.final_traditional_value.toLocaleString()}
                                        </p>
                                    </div>
                                    <div style={{ background: '#F4F8FC', border: '1px solid rgba(46, 125, 212, 0.2)', padding: '1.75rem 2rem', borderTop: '3px solid #2E7DD4', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                                        <p style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#1B62B3', marginBottom: '0.75rem', fontWeight: 600 }}>PPLI Strategy</p>
                                        <p style={{ fontSize: 26, fontWeight: 600, color: '#0F3E75' }}>
                                            ${results.final_ppli_value.toLocaleString()}
                                        </p>
                                    </div>
                                    <div style={{ background: '#FBF7EE', border: '1px solid rgba(139, 111, 62, 0.2)', padding: '1.75rem 2rem', borderTop: '3px solid #8B6F3E', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                                        <p style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8B6F3E', marginBottom: '0.75rem', fontWeight: 600 }}>Tax Savings</p>
                                        <p style={{ fontSize: 26, fontWeight: 600, color: '#8B6F3E' }}>
                                            ${results.total_tax_savings.toLocaleString()}
                                        </p>
                                    </div>
                                </div>

                                {/* Chart */}
                                <div style={{ background: '#FFFFFF', border: '1px solid rgba(0, 0, 0, 0.08)', padding: '2rem', boxShadow: '0 2px 12px rgba(0, 0, 0, 0.03)' }}>
                                    <CalculatorChart data={results.results} />
                                </div>
                            </>
                        )}

                        <div style={{ background: '#F4F8FC', border: '1px solid rgba(46,125,212,0.2)', padding: '2.5rem', textAlign: 'center', borderRadius: 4 }}>
                            <h3 className="font-serif" style={{ fontSize: 24, fontWeight: 400, color: '#141412', marginBottom: '0.75rem' }}>Unlock the full power of Private Placement</h3>
                            <p style={{ color: '#5F5E5A', fontSize: 14, marginBottom: '2rem', lineHeight: 1.7 }}>
                                This calculator illustrates the tax-drag reduction. Our platform handles the full implementation.
                            </p>
                            <a href="/schedule-demo" className="btn-primary" style={{ display: 'inline-block' }}>
                                Schedule a strategy session
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
