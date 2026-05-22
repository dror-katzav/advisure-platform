export default function Partners() {
    return (
        <div className="bg-off-white font-sans text-charcoal pb-24">
            {/* Hero Section */}
            <div className="bg-advisure-blue py-24 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden rounded-b-[3rem] lg:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%22 height=%22100%22 filter=%22url(%23n)%22 opacity=%220.15%22/%3E%3C/svg%3E')] mix-blend-soft-light opacity-50 pointer-events-none"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="text-advisure-gold font-bold tracking-widest uppercase text-sm mb-4 block">Our Ecosystem</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Partner With Advisure</h1>
                    <p className="text-xl text-white/90 font-medium leading-relaxed max-w-3xl mx-auto">
                        Helping bring private placement insurance into the modern RIA ecosystem.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 space-y-12">

                {/* Section 1: Built for Strategic Collaboration */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-3xl font-bold text-charcoal mb-6">Built for Strategic Collaboration</h2>
                            <p className="text-lg text-charcoal/70 mb-4 leading-relaxed">
                                At Advisure, we don&apos;t just list logos. We integrate our partners&apos; capabilities directly into our technology platform so advisors can seamlessly deploy sophisticated solutions.
                            </p>
                            <p className="text-lg font-semibold text-advisure-blue mb-8">
                                Not a referral network. A fully integrated ecosystem.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    'Access tier-one carrier support without operational friction',
                                    'Leverage institutional alternative asset strategies',
                                    'Streamline funding and monitoring across custodians',
                                    'Provide best-in-class integrated reporting to clients',
                                ].map((item) => (
                                    <div key={item} className="bg-off-white p-5 rounded-2xl border border-gray-100 flex gap-3 items-start">
                                        <div className="mt-1 bg-advisure-gold/20 p-1.5 rounded-full shrink-0">
                                            <svg className="w-3 h-3 text-advisure-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-charcoal/80 font-medium text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-charcoal/50 uppercase tracking-widest mb-4">We work with</h3>
                            <div className="space-y-3">
                                {[
                                    { label: 'RIAs', desc: 'Independent advisors delivering private placement strategies to HNW clients.' },
                                    { label: 'Insurance Carriers', desc: 'PPLI and PPVA carriers integrated directly into our submission and onboarding workflows.' },
                                    { label: 'Wealth Platforms', desc: 'Portfolio reporting and data platforms enabling seamless position visibility.' },
                                    { label: 'Asset Managers', desc: 'Institutional managers accessible within the private placement structure.' },
                                    { label: 'Strategic Distribution Partners', desc: 'Organizations helping bring this capability to the broader RIA ecosystem.' },
                                ].map(({ label, desc }) => (
                                    <div key={label} className="flex gap-4 items-start p-4 bg-off-white rounded-xl border border-gray-100">
                                        <div className="w-2 h-2 rounded-full bg-advisure-blue shrink-0 mt-2"></div>
                                        <div>
                                            <span className="font-bold text-charcoal">{label}</span>
                                            <p className="text-sm text-charcoal/60 mt-0.5">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Partner logo placeholders */}
                <div>
                    <div className="text-center mb-8">
                        <h3 className="text-sm font-bold text-advisure-blue tracking-widest uppercase mb-2">Our Integration Network</h3>
                        <h2 className="text-3xl font-bold text-charcoal">Connecting the Ecosystem</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div key={i} className="bg-white h-32 rounded-2xl border border-gray-200 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:border-advisure-gold transition-all hover-lift cursor-default shadow-sm text-center px-4">
                                <span className="text-advisure-silver/60 font-bold uppercase tracking-widest text-xs">Partner {i}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 2: How We Work Together */}
                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-3xl font-bold text-charcoal mb-6">A Flexible Partnership Approach</h2>
                            <p className="text-lg text-charcoal/70 leading-relaxed mb-6">Partnerships may include:</p>
                            <div className="space-y-4">
                                {[
                                    'Education and market development',
                                    'Advisor engagement and onboarding',
                                    'Integration and platform alignment',
                                    'Ongoing collaboration and support',
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-4 p-4 bg-off-white rounded-xl border border-gray-100">
                                        <div className="w-2 h-2 rounded-full bg-advisure-gold shrink-0"></div>
                                        <span className="font-medium text-charcoal/80">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Section 3: Why it Matters */}
                        <div className="bg-advisure-blue p-8 rounded-2xl text-white">
                            <h2 className="text-2xl font-bold mb-4">Expanding Access to a Better Structure</h2>
                            <p className="text-white/80 leading-relaxed mb-6">
                                Private placement has historically been limited by access and complexity. Together, we can bring it into broader use — aligned with how RIAs actually operate.
                            </p>
                            <p className="text-advisure-gold font-semibold text-lg">
                                We&apos;re building the infrastructure for the next phase of wealth management.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-charcoal mb-6">Interested in becoming a platform partner?</h3>
                    <a href="/contact" className="hover-lift inline-flex items-center justify-center px-8 py-4 bg-advisure-blue text-white text-lg font-bold rounded-full shadow-lg">
                        Get in Touch
                    </a>
                </div>
            </div>
        </div>
    );
}
