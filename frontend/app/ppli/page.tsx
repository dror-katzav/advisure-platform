import Link from 'next/link';

export default function PPLI() {
    return (
        <div className="bg-off-white font-sans text-charcoal pb-24">
            {/* Hero Section */}
            <div className="bg-advisure-blue py-24 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden rounded-b-[3rem] lg:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%22 height=%22100%22 filter=%22url(%23n)%22 opacity=%220.15%22/%3E%3C/svg%3E')] mix-blend-soft-light opacity-50 pointer-events-none"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="text-advisure-gold font-bold tracking-widest uppercase text-sm mb-4 block">Education & Strategy</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Private Placement Demystified</h1>
                    <p className="text-xl text-white/90 font-medium leading-relaxed">
                        Understanding how and why to wrap institutional-quality investments in tax-advantaged insurance structures.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 space-y-12">
                
                {/* WHAT */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 hover-lift relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-advisure-gold/5 rounded-bl-full"></div>
                    <h2 className="text-3xl font-bold text-advisure-blue mb-4">What is PPLI / PPVA?</h2>
                    <p className="text-lg text-charcoal/80 leading-relaxed">
                        Private Placement Life Insurance (PPLI) and Private Placement Variable Annuities (PPVA) are institutional, tax-efficient structures designed exclusively for accredited and qualified purchasers. 
                    </p>
                    <p className="text-lg text-charcoal/80 leading-relaxed mt-4">
                        Unlike retail insurance products that offer limited, pre-packaged investment options, these private structures allow high-net-worth investors to hold a highly customized portfolio of alternative and traditional assets within the tax-advantaged wrapper of an insurance policy.
                    </p>
                </div>

                {/* WHY */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 hover-lift relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-advisure-blue/5 rounded-bl-full"></div>
                    <h2 className="text-3xl font-bold text-advisure-blue mb-6">Why does it matter?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-off-white p-6 rounded-2xl">
                            <h3 className="text-xl font-bold mb-2">Eliminate Tax Drag</h3>
                            <p className="text-charcoal/70">Ordinary income tax and short-term capital gains on highly inefficient or high-turnover strategies severely degrade compounding. Structuring via PPLI defers or eliminates this drag entirely.</p>
                        </div>
                        <div className="bg-off-white p-6 rounded-2xl">
                            <h3 className="text-xl font-bold mb-2">Institutional Access</h3>
                            <p className="text-charcoal/70">Access hedge funds, private credit, and other elite alternative managers that are otherwise prohibitively taxed when held in traditional brokerage accounts.</p>
                        </div>
                    </div>
                </div>

                {/* WHO */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 hover-lift relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-advisure-gold/5 rounded-bl-full"></div>
                    <h2 className="text-3xl font-bold text-advisure-blue mb-6">Who is it for?</h2>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-4 bg-off-white p-4 rounded-xl border border-gray-100">
                            <svg className="w-6 h-6 text-advisure-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            <span className="font-semibold">Accredited Investors / Qualified Purchasers</span>
                        </li>
                        <li className="flex items-center gap-4 bg-off-white p-4 rounded-xl border border-gray-100">
                            <svg className="w-6 h-6 text-advisure-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            <span className="font-semibold">Clients with long time horizons (10+ years to maximize compound growth)</span>
                        </li>
                        <li className="flex items-center gap-4 bg-off-white p-4 rounded-xl border border-gray-100">
                            <svg className="w-6 h-6 text-advisure-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            <span className="font-semibold">Individuals in high-tax geographic environments</span>
                        </li>
                        <li className="flex items-center gap-4 bg-off-white p-4 rounded-xl border border-gray-100">
                            <svg className="w-6 h-6 text-advisure-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            <span className="font-semibold">Families seeking sophisticated, multi-generational wealth transfer</span>
                        </li>
                    </ul>
                </div>

                {/* WHEN / HOW */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 hover-lift relative overflow-hidden">
                    <h2 className="text-3xl font-bold text-advisure-blue mb-6">How RIAs Implement the Strategy</h2>
                    <p className="text-lg text-charcoal/80 mb-6">
                        RIAs deploy private placement structures as a complement to the core taxable portfolio, carving out the most tax-inefficient components of a client's asset allocation and moving them into the PPLI or PPVA wrapper.
                    </p>
                    <div className="flex gap-4 p-6 bg-soft-blue border-l-4 border-advisure-blue rounded-r-2xl">
                        <svg className="w-8 h-8 text-advisure-blue shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <p className="text-charcoal/80 font-medium">
                            <strong className="text-charcoal block mb-1">When not to use it:</strong> 
                            It is generally not appropriate for short-term liquidity needs or for pure buy-and-hold strategies of highly tax-efficient assets (like broad-market index ETFs), where the structural costs of insurance might outweigh the tax benefits.
                        </p>
                    </div>
                </div>

                {/* Bridge to Platform */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold mb-6">Understanding the strategy is just step one.</h3>
                    <p className="text-lg text-charcoal/70 mb-8 max-w-2xl mx-auto">
                        Historically, the friction of implementation has prevented widespread adoption. Advisure provides the platform to easily model, execute, and monitor these strategies at scale.
                    </p>
                    <Link href="/platform" className="hover-lift inline-flex items-center justify-center px-10 py-5 bg-advisure-blue text-white text-lg font-bold rounded-full shadow-lg">
                        Explore the Implementation Platform
                    </Link>
                </div>

            </div>
        </div>
    );
}
