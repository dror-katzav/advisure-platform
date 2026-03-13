import Link from 'next/link';

export default function PPLI() {
    return (
        <div className="bg-off-white">
            {/* Hero */}
            <div className="bg-advisure-blue py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">What is Private Placement Life Insurance (PPLI)?</h1>
                    <p className="text-xl text-white/90 max-w-4xl mx-auto font-medium leading-relaxed">
                        Private Placement Life Insurance is a life insurance structure designed for accredited investors that can hold institutional-quality investment strategies within a tax-advantaged insurance wrapper.
                    </p>
                    <p className="mt-4 text-lg text-white/70 max-w-3xl mx-auto">
                        It enables long-term compounding with reduced tax drag — particularly for portfolios with high income, high turnover, or alternative exposure.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 space-y-32">
                {/* Why Structure Matters */}
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-sm font-bold text-advisure-blue tracking-widest uppercase mb-4">Why Structure Matters</h2>
                    <p className="text-2xl text-charcoal/80 mb-6">
                        In taxable portfolios, taxes create drag that compounds over time — reducing after-tax performance. Private placement changes the structure in which returns compound.
                    </p>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-advisure-gold/30 mt-8 inline-block">
                        <p className="text-2xl font-black text-advisure-gold">
                            Tax efficiency isn’t incremental. It’s architectural.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Who it's for */}
                    <div className="bg-white p-10 rounded-3xl shadow-sm border border-advisure-silver/20">
                        <h2 className="text-3xl font-bold text-charcoal mb-8">Who Private Placement Is Best Suited For</h2>
                        <ul className="space-y-4">
                            {[
                                'Accredited investors and high-net-worth clients',
                                'Long time horizons (10+ years)',
                                'High tax environments (federal + state)',
                                'Alternative-heavy or high-turnover strategies',
                                'Clients seeking long-term tax-aware compounding'
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <span className="text-advisure-blue mt-1">✓</span>
                                    <span className="text-charcoal/80 text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* How RIAs Use It */}
                    <div className="bg-white p-10 rounded-3xl shadow-sm border border-advisure-silver/20">
                        <h2 className="text-3xl font-bold text-charcoal mb-8">How RIAs Use Private Placement</h2>
                        <p className="text-charcoal/70 mb-6 font-medium">Private placement is often used to complement:</p>
                        <ul className="space-y-4">
                            {[
                                'Core taxable portfolios',
                                'Alternative allocations',
                                'Income-heavy strategies',
                                'Long-term growth strategies',
                                'Multi-generational planning objectives'
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <span className="text-advisure-gold mt-1">❯</span>
                                    <span className="text-charcoal/80 text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 3 Drivers */}
                <div>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">Three Drivers of the Private Placement Advantage</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-advisure-blue p-8 rounded-3xl text-white">
                            <div className="text-advisure-gold font-bold text-xl mb-4">01</div>
                            <h3 className="text-2xl font-bold mb-4">Reduced Tax Drag</h3>
                            <p className="text-white/80">Minimize ongoing taxation that erodes compounding.</p>
                        </div>
                        <div className="bg-advisure-blue p-8 rounded-3xl text-white">
                            <div className="text-advisure-gold font-bold text-xl mb-4">02</div>
                            <h3 className="text-2xl font-bold mb-4">Structural Flexibility</h3>
                            <p className="text-white/80">Align insurance architecture with portfolio strategy.</p>
                        </div>
                        <div className="bg-advisure-blue p-8 rounded-3xl text-white">
                            <div className="text-advisure-gold font-bold text-xl mb-4">03</div>
                            <h3 className="text-2xl font-bold mb-4">Institutional Strategy Integration</h3>
                            <p className="text-white/80">Access and implement sophisticated investment approaches in a more efficient structure.</p>
                        </div>
                    </div>
                </div>

                {/* What it is NOT */}
                <div className="bg-white p-12 lg:p-16 rounded-[3rem] shadow-sm border border-advisure-silver/20 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-charcoal mb-6">What Private Placement Is <span className="text-red-500">Not</span></h2>
                        <ul className="space-y-4">
                            {[
                                'A retail insurance product',
                                'A commission-driven sales strategy',
                                'A one-size-fits-all solution',
                                'A replacement for portfolio management'
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-center">
                                    <span className="text-red-500 font-bold text-xl">✕</span>
                                    <span className="text-charcoal/80 text-lg font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1 bg-off-white p-8 rounded-3xl">
                        <h3 className="text-2xl font-bold text-charcoal mb-4">Why Execution Matters</h3>
                        <p className="text-charcoal/70 mb-6">Private placement is powerful — but implementation has historically been fragmented, operationally heavy, difficult to coordinate across stakeholders, and hard to monitor transparently.</p>
                        <p className="text-advisure-blue font-bold">This is why Advisure exists. We provide the execution infrastructure required to make the strategy viable at scale.</p>
                    </div>
                </div>

                <div className="text-center bg-advisure-blue text-white p-12 lg:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden">
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to learn more?</h2>
                        <p className="text-xl text-white/80 mb-10">Private placement integrates insurance architecture with institutional investment strategies — reducing tax drag and improving long-term after-tax compounding for accredited investors.</p>
                        <Link
                            href="/schedule-demo"
                            className="inline-flex items-center justify-center px-10 py-5 bg-advisure-gold text-white text-xl font-bold rounded-full hover:bg-advisure-gold/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            Schedule a Demo
                        </Link>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-advisure-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                </div>
            </div>
        </div>
    );
}
