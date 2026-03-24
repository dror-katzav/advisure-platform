export default function Partners() {
    return (
        <div className="bg-off-white font-sans text-charcoal pb-24">
            {/* Hero Section */}
            <div className="bg-advisure-blue py-24 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden rounded-b-[3rem] lg:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%22 height=%22100%22 filter=%22url(%23n)%22 opacity=%220.15%22/%3E%3C/svg%3E')] mix-blend-soft-light opacity-50 pointer-events-none"></div>
                
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="text-advisure-gold font-bold tracking-widest uppercase text-sm mb-4 block">Our Ecosystem</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Strategic Partnerships</h1>
                    <p className="text-xl text-white/90 font-medium leading-relaxed max-w-3xl mx-auto">
                        Uniting industry-leading carriers, custodians, and asset managers into a single, unified execution platform for RIAs.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-16 mb-24">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold text-charcoal mb-6">Partnering to Deliver Institutional-Grade Outcomes</h2>
                        <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                            At Advisure, we don’t just list logos. We integrate our partners' capabilities directly into our technology platform so independent advisors can deploy sophisticated solutions frictionlessly.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mt-10">
                            <div className="bg-off-white p-6 rounded-2xl border border-gray-100 flex gap-4 items-start">
                                <div className="mt-1 bg-advisure-gold/20 p-1.5 rounded-full"><svg className="w-4 h-4 text-advisure-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                                <span className="text-charcoal/80 font-medium">Access tier-one carrier support without operational friction</span>
                            </div>
                            <div className="bg-off-white p-6 rounded-2xl border border-gray-100 flex gap-4 items-start">
                                <div className="mt-1 bg-advisure-gold/20 p-1.5 rounded-full"><svg className="w-4 h-4 text-advisure-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                                <span className="text-charcoal/80 font-medium">Leverage institutional alternative asset strategies</span>
                            </div>
                            <div className="bg-off-white p-6 rounded-2xl border border-gray-100 flex gap-4 items-start">
                                <div className="mt-1 bg-advisure-gold/20 p-1.5 rounded-full"><svg className="w-4 h-4 text-advisure-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                                <span className="text-charcoal/80 font-medium">Streamline funding and monitoring across custodians</span>
                            </div>
                            <div className="bg-off-white p-6 rounded-2xl border border-gray-100 flex gap-4 items-start">
                                <div className="mt-1 bg-advisure-gold/20 p-1.5 rounded-full"><svg className="w-4 h-4 text-advisure-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                                <span className="text-charcoal/80 font-medium">Provide best-in-class integrated reporting to clients</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-12">
                    <h3 className="text-sm font-bold text-advisure-blue tracking-widest uppercase mb-4">Our Integration Network</h3>
                    <h2 className="text-3xl font-bold text-charcoal mb-4">Connecting the Ecosystem</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div key={i} className="bg-white h-32 rounded-2xl border border-gray-200 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:border-advisure-gold transition-all hover-lift cursor-default shadow-sm text-center px-4">
                            <span className="text-advisure-silver/60 font-bold uppercase tracking-widest text-xs">Partner Entity {i}</span>
                        </div>
                    ))}
                </div>
                
                <div className="mt-24 text-center">
                    <h3 className="text-2xl font-bold text-charcoal mb-6">Interested in becoming a platform partner?</h3>
                    <a href="/contact" className="hover-lift inline-flex items-center justify-center px-8 py-4 bg-advisure-blue text-white text-lg font-bold rounded-full shadow-lg">
                        Get in Touch
                    </a>
                </div>
            </div>
        </div>
    );
}
