import Link from 'next/link';

export default function Platform() {
    return (
        <div className="bg-off-white font-sans text-charcoal">
            {/* Hero Section */}
            <div className="bg-advisure-blue py-24 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden rounded-b-[3rem] lg:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%22 height=%22100%22 filter=%22url(%23n)%22 opacity=%220.15%22/%3E%3C/svg%3E')] mix-blend-soft-light opacity-50 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">How Advisure <span className="text-gradient">Works</span></h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed mb-10">
                        Private placement insurance — integrated into your strategies, without the operational friction and complexity.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">

                {/* Overview */}
                <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 p-8 lg:p-12 mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-charcoal mb-6">A Simpler Way to Implement Private Placement</h2>
                            <p className="text-lg text-charcoal/70 mb-4 leading-relaxed">
                                Advisure brings together RIAs, carriers, and asset managers into a single, integrated workflow — removing the friction that has historically limited adoption.
                            </p>
                            <p className="text-lg text-charcoal/70 leading-relaxed">
                                You maintain your investment process. We handle the complexity behind the scenes.
                            </p>
                        </div>
                        <div className="bg-off-white rounded-2xl p-8 border border-gray-200">
                            <div className="space-y-4">
                                {[
                                    'Fully integrated into your portfolio workflows',
                                    'Visible within your reporting ecosystem',
                                    'Operationally seamless across carriers and managers',
                                    'Scalable across client portfolios',
                                ].map((item) => (
                                    <div key={item} className="flex gap-4 items-start">
                                        <span className="text-advisure-blue mt-1 font-bold">✓</span>
                                        <span className="text-charcoal/80 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* The 3-Step Process */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-charcoal mb-6">From Allocation to Ongoing Management</h2>
                    <p className="text-xl text-charcoal/70">
                        Three steps. One integrated workflow.
                    </p>
                </div>

                <div className="space-y-6 mb-24">
                    {/* Step 1 — Allocate */}
                    <div className="bg-white rounded-3xl shadow-sm border-l-4 border-advisure-gold border border-gray-100 p-8 lg:p-12 hover-lift">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            <div className="lg:col-span-1 flex items-start">
                                <div className="w-12 h-12 bg-advisure-gold text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg shrink-0">1</div>
                            </div>
                            <div className="lg:col-span-5">
                                <p className="text-xs font-bold text-advisure-gold uppercase tracking-widest mb-2">You do this</p>
                                <h3 className="text-2xl font-bold text-charcoal mb-3">Allocate</h3>
                                <p className="text-charcoal/70 leading-relaxed">
                                    Incorporate private placement as part of your portfolio strategy — just like any other allocation.
                                </p>
                            </div>
                            <div className="lg:col-span-6 bg-amber-50 rounded-2xl p-5">
                                <ul className="space-y-3">
                                    {[
                                        'Align with client objectives',
                                        'Allocate alongside traditional and alternative assets',
                                        'No change to your portfolio construction approach',
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-charcoal/70">
                                            <div className="w-1.5 h-1.5 rounded-full bg-advisure-gold shrink-0"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 — Structure & Integrate */}
                    <div className="bg-white rounded-3xl shadow-sm border-l-4 border-advisure-blue border border-gray-100 p-8 lg:p-12 hover-lift">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            <div className="lg:col-span-1 flex items-start">
                                <div className="w-12 h-12 bg-advisure-blue text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg shrink-0">2</div>
                            </div>
                            <div className="lg:col-span-5">
                                <p className="text-xs font-bold text-advisure-blue uppercase tracking-widest mb-2">Advisure handles this</p>
                                <h3 className="text-2xl font-bold text-charcoal mb-3">Structure &amp; Integrate</h3>
                                <p className="text-charcoal/70 leading-relaxed">
                                    Advisure coordinates across carriers, managers, and legal structures to implement the allocation.
                                </p>
                            </div>
                            <div className="lg:col-span-6 bg-blue-50 rounded-2xl p-5">
                                <ul className="space-y-3">
                                    {[
                                        'Carrier selection and structuring',
                                        'Integration with underlying investments',
                                        'Elimination of manual workflows',
                                        'Fully managed operational process',
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-charcoal/70">
                                            <div className="w-1.5 h-1.5 rounded-full bg-advisure-blue shrink-0"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 — Manage */}
                    <div className="bg-white rounded-3xl shadow-sm border-l-4 border-emerald-500 border border-gray-100 p-8 lg:p-12 hover-lift">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            <div className="lg:col-span-1 flex items-start">
                                <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg shrink-0">3</div>
                            </div>
                            <div className="lg:col-span-5">
                                <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2">Back in your hands</p>
                                <h3 className="text-2xl font-bold text-charcoal mb-3">Manage</h3>
                                <p className="text-charcoal/70 leading-relaxed">
                                    Ongoing management is fully aligned with how you already operate.
                                </p>
                            </div>
                            <div className="lg:col-span-6 bg-emerald-50 rounded-2xl p-5">
                                <ul className="space-y-3">
                                    {[
                                        'Visibility within your reporting ecosystem',
                                        'Ongoing monitoring and servicing',
                                        'Seamless experience for both advisor and client',
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-charcoal/70">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Behind the Scenes */}
                <div className="bg-off-white rounded-3xl border border-gray-200 p-8 lg:p-12 mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-charcoal mb-6">We Handle the Complexity — So You Don&apos;t Have To</h2>
                            <p className="text-lg text-charcoal/70 leading-relaxed mb-6">
                                Private placement has historically required navigating fragmented processes across multiple parties. Advisure centralizes that complexity into a single platform — coordinating:
                            </p>
                            <div className="space-y-3">
                                {['Insurance carriers', 'Investment managers', 'Legal and administrative workflows'].map((item) => (
                                    <div key={item} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100">
                                        <div className="w-2 h-2 rounded-full bg-advisure-blue shrink-0"></div>
                                        <span className="font-semibold text-charcoal/80">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="text-center bg-white rounded-2xl p-10 border border-gray-100">
                            <p className="text-2xl font-bold text-charcoal mb-3 leading-snug">What was once manual and disconnected</p>
                            <p className="text-advisure-blue font-bold text-xl">now becomes streamlined and scalable.</p>
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="bg-advisure-blue text-white rounded-[3rem] p-12 lg:p-20 text-center shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-advisure-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to see it in action?</h2>
                        <p className="text-xl text-white/80 mb-10">
                            Book a conversation to see how Advisure strips away the complexity of private placement so you can scale institutional solutions for your clients.
                        </p>
                        <Link href="/schedule-demo" className="hover-lift inline-flex items-center justify-center px-10 py-5 bg-advisure-gold text-white text-xl font-bold rounded-full shadow-lg">
                            Schedule a Conversation
                        </Link>
                    </div>
                </div>
            </div>
            <div className="h-24"></div>
        </div>
    );
}
