import Link from 'next/link';

export default function PPLI() {
    return (
        <div className="bg-off-white font-sans text-charcoal pb-24">
            {/* Hero Section */}
            <div className="bg-advisure-blue py-24 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden rounded-b-[3rem] lg:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%22 height=%22100%22 filter=%22url(%23n)%22 opacity=%220.15%22/%3E%3C/svg%3E')] mix-blend-soft-light opacity-50 pointer-events-none"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="text-advisure-gold font-bold tracking-widest uppercase text-sm mb-4 block">Education & Strategy</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Understanding Private Placement</h1>
                    <p className="text-xl text-white/90 font-medium leading-relaxed">
                        A clearer view of a misunderstood structure.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 space-y-12">

                {/* Section 1: A Structure — Not a Product */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 hover-lift relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-advisure-gold/5 rounded-bl-full"></div>
                    <h2 className="text-3xl font-bold text-advisure-blue mb-4">A Structure — Not a Product</h2>
                    <p className="text-lg text-charcoal/80 leading-relaxed mb-4">
                        Private Placement Life Insurance (PPLI) and Private Placement Variable Annuities (PPVA) are institutional, tax-advantaged structures that allow investments to grow more efficiently within a defined framework.
                    </p>
                    <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
                        It is not a standalone product — but a way to hold and manage assets. These structures are designed for high net worth and ultra-high net worth clients, providing powerful advantages such as:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-off-white p-6 rounded-2xl">
                            <h3 className="text-lg font-bold mb-2 text-charcoal">Institutional Investment Access</h3>
                            <p className="text-charcoal/70 text-sm leading-relaxed">Access premier alternative investments and asset managers, often at lower minimums than otherwise available.</p>
                        </div>
                        <div className="bg-off-white p-6 rounded-2xl">
                            <h3 className="text-lg font-bold mb-2 text-charcoal">Tax Alpha</h3>
                            <p className="text-charcoal/70 text-sm leading-relaxed">Shield high-tax, high-turnover strategies from ongoing drag, significantly improving long-term compounding and performance.</p>
                        </div>
                        <div className="bg-off-white p-6 rounded-2xl">
                            <h3 className="text-lg font-bold mb-2 text-charcoal">Diversification &amp; Flexibility</h3>
                            <p className="text-charcoal/70 text-sm leading-relaxed">Effectively diversify beyond traditional asset classes with greater control over structure and planning.</p>
                        </div>
                        <div className="bg-off-white p-6 rounded-2xl">
                            <h3 className="text-lg font-bold mb-2 text-charcoal">Estate &amp; Legacy Control</h3>
                            <p className="text-charcoal/70 text-sm leading-relaxed">Enhance legacy planning with greater control over how your assets are held, taxed, and transferred over time.</p>
                        </div>
                    </div>
                </div>

                {/* Section 2: Why It's Been Underutilized */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 hover-lift relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-advisure-blue/5 rounded-bl-full"></div>
                    <h2 className="text-3xl font-bold text-advisure-blue mb-4">The Gap Has Been Infrastructure</h2>
                    <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
                        Despite its benefits, adoption has been limited. Not because the strategy doesn&apos;t work — but because the systems to deliver it haven&apos;t existed.
                    </p>
                    <div className="space-y-4">
                        {[
                            { label: 'Operational complexity', detail: 'Fragmented carrier processes, manual paperwork, and disconnected workflows have made implementation impractical at scale.' },
                            { label: 'Lack of integration', detail: 'Private placement has historically lived outside the systems RIAs rely on — no reporting integration, no visibility into positions.' },
                            { label: 'Limited accessibility for RIAs', detail: 'Without dedicated infrastructure, independent advisors couldn\'t offer these strategies efficiently to their clients.' },
                        ].map(({ label, detail }) => (
                            <div key={label} className="bg-off-white p-5 rounded-2xl border border-gray-100">
                                <h3 className="font-bold text-charcoal mb-1">{label}</h3>
                                <p className="text-sm text-charcoal/60 leading-relaxed">{detail}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 3: Common Misconceptions */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 hover-lift relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-advisure-gold/5 rounded-bl-full"></div>
                    <h2 className="text-3xl font-bold text-advisure-blue mb-4">Reframing the Category</h2>
                    <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
                        Common misconceptions have kept private placement from its full potential. Here&apos;s a clearer picture:
                    </p>

                    {/* Column headers */}
                    <div className="grid grid-cols-2 gap-4 mb-2 px-1">
                        <p className="text-xs font-bold uppercase tracking-widest text-red-400">Common belief</p>
                        <p className="text-xs font-bold uppercase tracking-widest text-advisure-blue">The reality</p>
                    </div>

                    <div className="space-y-3">
                        {[
                            {
                                myth: '"It\'s just insurance"',
                                reality: 'It\'s a portfolio structure — a tax-advantaged wrapper for holding institutional investments.',
                            },
                            {
                                myth: '"It\'s too complex"',
                                reality: 'Complexity has historically been operational, not structural. With the right infrastructure, it\'s no more complex than any other allocation.',
                            },
                            {
                                myth: '"It doesn\'t fit my model"',
                                reality: 'It hasn\'t — until now. Advisure is built to make private placement fit seamlessly into the RIA model.',
                            },
                        ].map(({ myth, reality }) => (
                            <div key={myth} className="grid grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-100">
                                <div className="bg-red-50 p-5 flex items-start gap-3 border-r border-gray-100">
                                    <span className="text-red-300 font-bold text-lg leading-none mt-0.5 shrink-0">✕</span>
                                    <span className="text-charcoal/60 italic text-sm leading-relaxed line-through decoration-red-200">{myth}</span>
                                </div>
                                <div className="bg-blue-50 p-5 flex items-start gap-3">
                                    <span className="text-advisure-blue font-bold text-lg leading-none mt-0.5 shrink-0">✓</span>
                                    <span className="text-charcoal font-medium text-sm leading-relaxed">{reality}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-6 bg-blue-50 border-l-4 border-advisure-blue rounded-r-2xl">
                        <p className="text-charcoal/80 font-medium italic">
                            With the right infrastructure, private placement becomes practical — not theoretical.
                        </p>
                    </div>
                </div>

                {/* Bridge to Platform */}
                <div className="mt-8 text-center">
                    <h3 className="text-2xl font-bold mb-6">Understanding the strategy is just step one.</h3>
                    <p className="text-lg text-charcoal/70 mb-8 max-w-2xl mx-auto">
                        Advisure provides the platform to easily model, implement, and monitor these strategies at scale — without disrupting how you already manage assets.
                    </p>
                    <Link href="/platform" className="hover-lift inline-flex items-center justify-center px-10 py-5 bg-advisure-blue text-white text-lg font-bold rounded-full shadow-lg">
                        Explore the Platform
                    </Link>
                </div>

            </div>
        </div>
    );
}
