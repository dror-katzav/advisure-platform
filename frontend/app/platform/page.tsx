import Link from 'next/link';
import Image from 'next/image';

export default function Platform() {
    return (
        <div className="bg-off-white font-sans text-charcoal">
            {/* Hero Section */}
            <div className="bg-advisure-blue py-24 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden rounded-b-[3rem] lg:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%22 height=%22100%22 filter=%22url(%23n)%22 opacity=%220.15%22/%3E%3C/svg%3E')] mix-blend-soft-light opacity-50 pointer-events-none"></div>
                
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">The Advisure <span className="text-gradient">Platform</span></h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed mb-10">
                        A seamless, tech-enabled infrastructure designed to bring clarity, efficiency, and scale to private placement strategies.
                    </p>
                    <div className="inline-flex flex-wrap justify-center gap-4">
                        <span className="glass px-4 py-2 rounded-full text-sm font-semibold text-white">AI-Powered Modeling</span>
                        <span className="glass px-4 py-2 rounded-full text-sm font-semibold text-white">Automated Compliance</span>
                        <span className="glass px-4 py-2 rounded-full text-sm font-semibold text-white">End-to-End Workflow</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
                <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 p-8 lg:p-12 mb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-charcoal mb-6">Model the Impact of Structure</h2>
                            <p className="text-lg text-charcoal/70 mb-6 leading-relaxed">
                                Our platform enables you to move beyond abstract concepts. With integrated AI and data modeling, advisors can instantly quantify the after-tax impact of PPLI vs Traditional taxable accounts across varied scenarios, market conditions, and time horizons.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex gap-4 items-start">
                                    <span className="text-advisure-blue mt-1">✓</span>
                                    <span className="text-charcoal/80 font-medium">Scenario-based stress testing</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="text-advisure-blue mt-1">✓</span>
                                    <span className="text-charcoal/80 font-medium">Instant Monte Carlo tax impact analysis</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="text-advisure-blue mt-1">✓</span>
                                    <span className="text-charcoal/80 font-medium">Client-ready visual proposals</span>
                                </li>
                            </ul>
                            <Link href="/schedule-demo" className="text-advisure-gold font-bold hover:text-advisure-blue transition-colors flex items-center gap-2">
                                See the Modeling Tool in Action
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </Link>
                        </div>
                        <div className="bg-off-white rounded-2xl p-6 border border-gray-200 shadow-inner h-[350px] flex items-center justify-center relative overflow-hidden">
                             <div className="absolute w-[150%] h-[150%] bg-gradient-to-tr from-advisure-blue/5 to-advisure-gold/10 animate-pulse"></div>
                             <div className="relative z-10 text-center">
                                 <div className="text-5xl mb-4">📊</div>
                                 <p className="font-mono text-sm text-charcoal/50">Interactive Modeling Interface Placeholder</p>
                             </div>
                        </div>
                    </div>
                </div>

                {/* Platform Features Grid */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-charcoal mb-6">Unified Workflow</h2>
                    <p className="text-xl text-charcoal/70">
                        We resolve the operational complexity of private placement so you can focus on advising.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover-lift group">
                        <div className="h-14 w-14 bg-advisure-blue/5 rounded-2xl flex items-center justify-center text-advisure-blue mb-6 group-hover:bg-advisure-blue group-hover:text-white transition-all">
                            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-charcoal mb-3">Compliance & AML</h3>
                        <p className="text-sm text-charcoal/70 leading-relaxed">Integrated KYC, AML, and accreditation checks built directly into the onboarding funnel. Zero redundant paperwork.</p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover-lift group">
                        <div className="h-14 w-14 bg-advisure-gold/10 rounded-2xl flex items-center justify-center text-advisure-gold mb-6 group-hover:bg-advisure-gold group-hover:text-white transition-all">
                            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-charcoal mb-3">Seamless Funding</h3>
                        <p className="text-sm text-charcoal/70 leading-relaxed">Coordinate capital calls, premium deposits, and in-kind asset transfers effortlessly between custodians and carriers.</p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover-lift group">
                        <div className="h-14 w-14 bg-advisure-blue/5 rounded-2xl flex items-center justify-center text-advisure-blue mb-6 group-hover:bg-advisure-blue group-hover:text-white transition-all">
                            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-charcoal mb-3">Carrier Connectivity</h3>
                        <p className="text-sm text-charcoal/70 leading-relaxed">Direct integrations with leading PPLI/PPA carriers ensure applications are submitted, tracked, and approved without manual friction.</p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover-lift group">
                        <div className="h-14 w-14 bg-advisure-gold/10 rounded-2xl flex items-center justify-center text-advisure-gold mb-6 group-hover:bg-advisure-gold group-hover:text-white transition-all">
                            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-charcoal mb-3">Ongoing Oversight</h3>
                        <p className="text-sm text-charcoal/70 leading-relaxed">Consolidated reporting dashboards provide a single pane of glass into policy performance, tax benefits, and compliance status.</p>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="bg-advisure-blue text-white rounded-[3rem] p-12 lg:p-20 text-center shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-advisure-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                    
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to see it in action?</h2>
                        <p className="text-xl text-white/80 mb-10">
                            Book a demo to see how Advisure strips away the complexity of private placement so you can scale institutional solutions for your clients.
                        </p>
                        <Link href="/schedule-demo" className="hover-lift inline-flex items-center justify-center px-10 py-5 bg-advisure-gold text-white text-xl font-bold rounded-full shadow-lg">
                            Schedule a Platform Demo
                        </Link>
                    </div>
                </div>
            </div>
            <div className="h-24"></div>
        </div>
    );
}
