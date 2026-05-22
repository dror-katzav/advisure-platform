import Image from 'next/image';

export default function About() {
    return (
        <div className="bg-off-white font-sans text-charcoal pb-24">
            {/* Hero Section */}
            <div className="bg-advisure-blue py-24 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden rounded-b-[3rem] lg:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%22 height=%22100%22 filter=%22url(%23n)%22 opacity=%220.15%22/%3E%3C/svg%3E')] mix-blend-soft-light opacity-50 pointer-events-none"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">About <span className="text-gradient">Advisure</span></h1>
                    <p className="text-xl text-white/90 font-medium leading-relaxed">
                        Building the infrastructure that makes private placement a core part of how RIAs manage wealth.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 space-y-16">

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-10 lg:p-12 rounded-3xl shadow-sm border border-gray-100 hover-lift relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-advisure-gold/5 rounded-bl-full"></div>
                        <h2 className="text-advisure-gold text-sm font-bold uppercase tracking-widest mb-4">Our Mission</h2>
                        <p className="text-2xl md:text-3xl text-charcoal font-bold leading-snug mb-6">
                            We make private placement a seamless, integrated part of the RIA portfolio — not a side conversation.
                        </p>
                        <p className="text-lg text-charcoal/70 leading-relaxed">
                            Advisure eliminates the operational complexity that has kept private placement underutilized. We built the infrastructure so advisors can allocate, implement, and manage these strategies without changing how they run their business.
                        </p>
                    </div>

                    <div className="bg-white p-10 lg:p-12 rounded-3xl shadow-sm border border-gray-100 hover-lift relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-advisure-blue/5 rounded-bl-full"></div>
                        <h2 className="text-advisure-blue text-sm font-bold uppercase tracking-widest mb-4">Our Vision</h2>
                        <p className="text-2xl md:text-3xl text-charcoal font-bold leading-snug mb-6">
                            A future where every RIA can deliver institutional-quality tax efficiency at scale.
                        </p>
                        <p className="text-lg text-charcoal/70 leading-relaxed">
                            We believe private placement insurance should be as accessible and operationally straightforward as any other portfolio allocation — visible in your reporting, aligned with your economics, and beneficial to your clients.
                        </p>
                    </div>
                </div>

                {/* Philosophy */}
                <div className="bg-advisure-blue p-12 lg:p-20 rounded-[3rem] text-white relative overflow-hidden shadow-xl">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C9AE62 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                    <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
                        <h2 className="text-advisure-gold text-sm font-bold uppercase tracking-widest mb-4">Our Core Philosophy</h2>
                        <p className="text-3xl md:text-5xl font-bold leading-tight">We believe structure rivals strategy.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 relative z-10 max-w-5xl mx-auto">
                        <div className="flex gap-6">
                            <div className="text-advisure-gold font-bold text-3xl font-mono opacity-50 block mt-1">01</div>
                            <div>
                                <h3 className="text-2xl font-bold mb-3">Integration, Not Addition</h3>
                                <p className="text-white/70 leading-relaxed">Private placement should fit inside the RIA model — not require a separate workflow, separate reporting, or separate conversation with the client.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="text-advisure-gold font-bold text-3xl font-mono opacity-50 block mt-1">02</div>
                            <div>
                                <h3 className="text-2xl font-bold mb-3">Infrastructure Drives Adoption</h3>
                                <p className="text-white/70 leading-relaxed">The reason private placement has been underutilized isn&apos;t a lack of demand — it&apos;s a lack of infrastructure. We&apos;re here to fix that.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="text-advisure-gold font-bold text-3xl font-mono opacity-50 block mt-1">03</div>
                            <div>
                                <h3 className="text-2xl font-bold mb-3">Long-Term Compounding</h3>
                                <p className="text-white/70 leading-relaxed">Tax drag compounds just as powerfully as returns. Eliminating it over a 20-year horizon creates measurable, meaningful wealth for clients.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="text-advisure-gold font-bold text-3xl font-mono opacity-50 block mt-1">04</div>
                            <div>
                                <h3 className="text-2xl font-bold mb-3">Evaluated, Not Sold</h3>
                                <p className="text-white/70 leading-relaxed">Private placement should be objectively modeled and evaluated as a structural tool for the portfolio, not pushed as a commission product.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="max-w-5xl mx-auto pt-16">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">Leadership Team</h2>
                        <p className="text-xl text-charcoal/60">Decades of expertise across institutional investments, carrier distribution, and advanced technology.</p>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-sm hover-lift flex flex-col md:flex-row gap-8 items-start">
                            <div className="h-24 w-24 shrink-0 rounded-2xl bg-gradient-to-br from-advisure-blue to-advisure-blue/80 flex items-center justify-center text-white text-3xl font-bold shadow-inner">ZM</div>
                            <div>
                                <h3 className="text-2xl font-bold text-charcoal mb-1">Zayda Marrie</h3>
                                <p className="text-advisure-gold font-bold uppercase tracking-wide text-xs mb-4">Former Executive, AIG & MetLife</p>
                                <p className="text-charcoal/70 leading-relaxed">
                                    A seasoned leader in the insurance industry, Zayda has over two decades of experience driving product innovation, distribution strategy, and enterprise growth. She successfully led initiatives generating over $5 billion in economic value.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-sm hover-lift flex flex-col md:flex-row gap-8 items-start">
                            <div className="h-24 w-24 shrink-0 rounded-2xl bg-gradient-to-br from-advisure-blue to-advisure-blue/80 flex items-center justify-center text-white text-3xl font-bold shadow-inner">DP</div>
                            <div>
                                <h3 className="text-2xl font-bold text-charcoal mb-1">Don Plotsky</h3>
                                <p className="text-advisure-gold font-bold uppercase tracking-wide text-xs mb-4">Co-Founder, Uinta Investment Partners</p>
                                <p className="text-charcoal/70 leading-relaxed">
                                    Don has over 40 years of investment management experience as a leader, innovator, and portfolio manager, previously serving as head of product at Western Asset Management and senior executive at CDC Investment Management Corp.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-sm hover-lift flex flex-col md:flex-row gap-8 items-start">
                            <div className="h-24 w-24 shrink-0 rounded-2xl bg-gradient-to-br from-advisure-blue to-advisure-blue/80 flex items-center justify-center text-white text-3xl font-bold shadow-inner">CR</div>
                            <div>
                                <h3 className="text-2xl font-bold text-charcoal mb-1">Corey Rickman</h3>
                                <p className="text-advisure-gold font-bold uppercase tracking-wide text-xs mb-4">Portfolio Analyst, Uinta Investment Partners</p>
                                <p className="text-charcoal/70 leading-relaxed">
                                    Corey brings institutional accounting and portfolio analysis experience from Stone Coast Fund Services and SEI Family Office Services, with a focus on income-based solutions in private markets.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-sm hover-lift flex flex-col md:flex-row gap-8 items-start">
                            <div className="h-24 w-24 shrink-0 rounded-2xl bg-gradient-to-br from-advisure-blue to-advisure-blue/80 flex items-center justify-center text-white text-3xl font-bold shadow-inner">DK</div>
                            <div>
                                <h3 className="text-2xl font-bold text-charcoal mb-1">Dror Katzav</h3>
                                <p className="text-advisure-gold font-bold uppercase tracking-wide text-xs mb-4">Founder & CEO, Atidot</p>
                                <p className="text-charcoal/70 leading-relaxed">
                                    Founder and CEO of Atidot, an AI-driven platform for life insurers. Prior to founding Atidot, Dror spent 11 years as a technology leader in elite IDF Intelligence units. He is a recognized visionary on applying AI to life insurance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
