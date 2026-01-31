export default function Platform() {
    return (
        <div className="bg-off-white">
            <div className="bg-advisure-green py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">The Advisure Platform</h1>
                    <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
                        A seamless, tech-enabled infrastructure designed to bring clarity and efficiency to private placement.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-advisure-silver/20">
                        <div className="h-12 w-12 bg-advisure-gold/10 rounded-xl flex items-center justify-center text-advisure-gold mb-6 font-bold text-xl">01</div>
                        <h3 className="text-xl font-bold text-charcoal mb-4">Sophisticated Design</h3>
                        <p className="text-charcoal/70">Customized structural design that integrates insurance with institutional investment strategies.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-advisure-silver/20">
                        <div className="h-12 w-12 bg-advisure-gold/10 rounded-xl flex items-center justify-center text-advisure-gold mb-6 font-bold text-xl">02</div>
                        <h3 className="text-xl font-bold text-charcoal mb-4">Streamlined Implementation</h3>
                        <p className="text-charcoal/70">Coordinating carriers, underwriting, and documentation through a frictionless digital workflow.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-advisure-silver/20">
                        <div className="h-12 w-12 bg-advisure-gold/10 rounded-xl flex items-center justify-center text-advisure-gold mb-6 font-bold text-xl">03</div>
                        <h3 className="text-xl font-bold text-charcoal mb-4">Ongoing Oversight</h3>
                        <p className="text-charcoal/70">Active monitoring and reporting to ensure structures remain aligned with client needs.</p>
                    </div>
                </div>

                <div className="mt-24 text-center">
                    <h2 className="text-3xl font-bold text-charcoal mb-8">Ready to modernize your insurance stack?</h2>
                    <a href="/schedule-demo" className="inline-flex items-center justify-center px-10 py-5 bg-advisure-green text-white text-xl font-bold rounded-full hover:bg-advisure-green/90 transition-all shadow-lg hover:shadow-xl">
                        Explore the Platform
                    </a>
                </div>
            </div>
        </div>
    );
}
