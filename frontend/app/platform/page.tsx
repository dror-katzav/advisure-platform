export default function Platform() {
    return (
        <div className="bg-off-white">
            <div className="bg-advisure-blue py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">The Advisure Platform</h1>
                    <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
                        A seamless, tech-enabled infrastructure designed to bring clarity and efficiency to private placement.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-advisure-silver/20 hover:border-advisure-blue/30 transition-all group">
                        <div className="h-12 w-12 bg-advisure-gold/10 rounded-xl flex items-center justify-center text-advisure-gold mb-6 font-bold text-xl group-hover:bg-advisure-gold group-hover:text-white transition-colors">01</div>
                        <h3 className="text-xl font-bold text-charcoal mb-4">Scalable Execution</h3>
                        <p className="text-charcoal/70 leading-relaxed">Eliminates fragmented carrier workflows by centralizing design, application, and tracking.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-advisure-silver/20 hover:border-advisure-blue/30 transition-all group">
                        <div className="h-12 w-12 bg-advisure-gold/10 rounded-xl flex items-center justify-center text-advisure-gold mb-6 font-bold text-xl group-hover:bg-advisure-gold group-hover:text-white transition-colors">02</div>
                        <h3 className="text-xl font-bold text-charcoal mb-4">Operational Transparency</h3>
                        <p className="text-charcoal/70 leading-relaxed">Pending Cases and dashboards provide real-time visibility into every client engagement.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-advisure-silver/20 hover:border-advisure-blue/30 transition-all group">
                        <div className="h-12 w-12 bg-advisure-gold/10 rounded-xl flex items-center justify-center text-advisure-gold mb-6 font-bold text-xl group-hover:bg-advisure-gold group-hover:text-white transition-colors">03</div>
                        <h3 className="text-xl font-bold text-charcoal mb-4">Data-Driven Conversations</h3>
                        <p className="text-charcoal/70 leading-relaxed">Illustrations and policy information empower advisors to explain structural value with data.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-advisure-silver/20 hover:border-advisure-blue/30 transition-all group">
                        <div className="h-12 w-12 bg-advisure-gold/10 rounded-xl flex items-center justify-center text-advisure-gold mb-6 font-bold text-xl group-hover:bg-advisure-gold group-hover:text-white transition-colors">04</div>
                        <h3 className="text-xl font-bold text-charcoal mb-4">Enhanced Client Service</h3>
                        <p className="text-charcoal/70 leading-relaxed">Ongoing oversight tools help advisors stay proactive with clients post-implementation.</p>
                    </div>
                </div>

                <div className="mt-24 text-center">
                    <h2 className="text-3xl font-bold text-charcoal mb-8">Ready to modernize your insurance stack?</h2>
                    <a href="/schedule-demo" className="inline-flex items-center justify-center px-10 py-5 bg-advisure-blue text-white text-xl font-bold rounded-full hover:bg-advisure-blue/90 transition-all shadow-lg hover:shadow-xl">
                        Explore the Platform
                    </a>
                </div>
            </div>
        </div>
    );
}
