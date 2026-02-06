export default function Partners() {
    return (
        <div className="bg-off-white">
            <div className="bg-advisure-blue py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">Our Partners</h1>
                    <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
                        Uniting industry leaders to deliver superior after-tax results.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold text-charcoal mb-6">Built on Collaboration</h2>
                    <p className="text-lg text-charcoal/70">
                        Advisure works with leading insurance carriers, institutional asset managers, and specialized trust companies to create robust, transparent, and high-performing private placement solutions.
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
