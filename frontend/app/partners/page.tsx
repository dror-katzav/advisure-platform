export default function Partners() {
    return (
        <div className="bg-off-white">
            <div className="bg-advisure-blue py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">Advisure as a Strategic Partner</h1>
                    <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
                        Uniting industry leaders to deliver superior after-tax results and optimize insurance strategy.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold text-charcoal mb-6">Partnering to Deliver Institutional-Grade Outcomes</h2>
                    <p className="text-lg text-charcoal/70 mb-8">
                        At Advisure, we don’t just list logos — we integrate partner capabilities into our platform so advisors can:
                    </p>
                    <ul className="text-left max-w-2xl mx-auto space-y-4">
                        <li className="flex gap-4 items-start">
                            <span className="text-advisure-gold mt-1">✓</span>
                            <span className="text-charcoal/80">Access carrier support without operational friction</span>
                        </li>
                        <li className="flex gap-4 items-start">
                            <span className="text-advisure-gold mt-1">✓</span>
                            <span className="text-charcoal/80">Leverage institutional asset strategies with private insurance structures</span>
                        </li>
                        <li className="flex gap-4 items-start">
                            <span className="text-advisure-gold mt-1">✓</span>
                            <span className="text-charcoal/80">Streamline implementation and monitoring across stakeholders</span>
                        </li>
                        <li className="flex gap-4 items-start">
                            <span className="text-advisure-gold mt-1">✓</span>
                            <span className="text-charcoal/80">Provide best-in-class reporting and oversight to clients</span>
                        </li>
                    </ul>
                    <p className="text-lg font-medium text-advisure-blue mt-8">
                        These partnerships form the backbone of a transparent, scalable infrastructure for RIAs.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="bg-white h-40 rounded-3xl border border-advisure-silver/20 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
                            <span className="text-advisure-silver font-bold uppercase tracking-widest text-sm">Partner Logo {i}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
