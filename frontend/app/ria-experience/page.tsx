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
        background: '#1E1E1B',
        border: '0.5px solid rgba(255,255,255,0.08)',
        padding: '2.5rem',
    };

    const sectionLabelStyle: React.CSSProperties = {
        fontSize: 10,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: '#5F5E5A',
        display: 'block',
        marginBottom: '1.25rem',
    };

    return (
        <div style={{ background: '#141412', color: '#FAFAF8', minHeight: '100vh' }}>

            {/* ── HEADER ────────────────────────────── */}
            <div className="grain-overlay relative overflow-hidden" style={{ paddingTop: '10rem', paddingBottom: '5rem', paddingLeft: '3rem', paddingRight: '3rem', borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(46,125,212,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
                    <span className="eyebrow" style={{ display: 'block', marginBottom: '1.5rem' }}>Financial Model</span>
                    <h1 className="font-serif" style={{ fontSize: 'clamp(40px,6vw,72px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '1.5rem' }}>
                        Model the Tax Alpha
                    </h1>
                    <p style={{ fontSize: 18, color: '#888780', maxWidth: 560, lineHeight: 1.75 }}>
                        Enter your client&apos;s portfolio assumptions and see the after-tax difference a private placement structure delivers over time.
                    </p>
                </div>
            </div>

            {/* ── CALCULATOR ────────────────────────── */}
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '5rem 3rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', alignItems: 'start' }}>

                    {/* Inputs Panel */}
                    <div style={inputPanelStyle}>
                        <p className="font-serif" style={{ fontSize: 22, fontWeight: 300, color: '#FAFAF8', marginBottom: '2rem' }}>Assumptions</p>

                        <div style={{ marginBottom: '2.5rem' }}>
                            <span style={sectionLabelStyle}>Portfolio Details</span>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ fontSize: 12, color: '#888780', display: 'block', marginBottom: '0.75rem' }}>
                                    Initial Investment:{' '}
                                    <span style={{ color: '#C9A96E', fontWeight: 500, fontSize: 15 }}>
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
                                    style={{ width: '100%', accentColor: '#C9A96E' }}
                                />
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#5F5E5A', marginTop: '0.35rem' }}>
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
                                className="rounded-xl border-advisure-silver/30"
                            />

                            <div style={{ marginTop: '1.25rem' }}>
                                <label style={{ fontSize: 12, color: '#888780', display: 'block', marginBottom: '0.5rem' }}>Time Horizon (Years)</label>
                                <select
                                    name="years"
                                    value={formData.years}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%', background: '#282825', border: '0.5px solid rgba(255,255,255,0.1)',
                                        color: '#FAFAF8', padding: '0.65rem 0.85rem', fontSize: 13,
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
                                <Input label="Fed Tax" name="fed_tax_rate" type="number" step="0.1" value={(formData.fed_tax_rate * 100).toFixed(1)} onChange={handleChange} className="rounded-xl border-advisure-silver/30" />
                                <Input label="Cap Gains" name="cap_gains_rate" type="number" step="0.1" value={(formData.cap_gains_rate * 100).toFixed(1)} onChange={handleChange} className="rounded-xl border-advisure-silver/30" />
                                <Input label="NIIT" name="niit_rate" type="number" step="0.1" value={(formData.niit_rate * 100).toFixed(1)} onChange={handleChange} className="rounded-xl border-advisure-silver/30" />
                                <Input label="State Tax" name="state_tax_rate" type="number" step="0.1" value={(formData.state_tax_rate * 100).toFixed(1)} onChange={handleChange} className="rounded-xl border-advisure-silver/30" />
                            </div>
                        </div>
                    </div>

                    {/* Results Panel */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {results && (
                            <>
                                {/* Key Metrics */}
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
                                    <div style={{ background: '#1E1E1B', padding: '1.75rem 2rem' }}>
                                        <p style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#5F5E5A', marginBottom: '0.75rem' }}>Traditional</p>
                                        <p style={{ fontSize: 26, fontWeight: 500, color: '#FAFAF8' }}>
                                            ${results.final_traditional_value.toLocaleString()}
                                        </p>
                                    </div>
                                    <div style={{ background: '#1E2A3A', padding: '1.75rem 2rem', borderTop: '3px solid #2E7DD4' }}>
                                        <p style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#2E7DD4', marginBottom: '0.75rem' }}>PPLI Strategy</p>
                                        <p style={{ fontSize: 26, fontWeight: 500, color: '#FAFAF8' }}>
                                            ${results.final_ppli_value.toLocaleString()}
                                        </p>
                                    </div>
                                    <div style={{ background: '#1E1B14', padding: '1.75rem 2rem', borderTop: '3px solid #C9A96E' }}>
                                        <p style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '0.75rem' }}>Tax Savings</p>
                                        <p style={{ fontSize: 26, fontWeight: 500, color: '#C9A96E' }}>
                                            ${results.total_tax_savings.toLocaleString()}
                                        </p>
                                    </div>
                                </div>

                                {/* Chart */}
                                <div style={{ background: '#1E1E1B', border: '0.5px solid rgba(255,255,255,0.08)', padding: '2rem' }}>
                                    <CalculatorChart data={results.results} />
                                </div>
                            </>
                        )}

                        <div style={{ background: 'rgba(46,125,212,0.06)', border: '0.5px solid rgba(46,125,212,0.2)', padding: '2.5rem', textAlign: 'center' }}>
                            <h3 className="font-serif" style={{ fontSize: 22, fontWeight: 300, color: '#FAFAF8', marginBottom: '0.75rem' }}>Unlock the full power of Private Placement</h3>
                            <p style={{ color: '#888780', fontSize: 14, marginBottom: '2rem', lineHeight: 1.7 }}>
                                This calculator illustrates the tax-drag reduction. Our platform handles the full implementation.
                            </p>
                            <a href="/schedule-demo" className="btn-outline">
                                Schedule a full strategy session
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
