import Image from 'next/image';

export default function About() {
    return (
        <div className="bg-off-white">
            {/* Hero */}
            <div className="bg-advisure-green py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">About Advisure</h1>
                    <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
                        Redefining the intersection of investment and insurance for the modern RIA.
                    </p>
                </div>
            </div>

            {/* Vision / How it works */}
            <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 space-y-24">
                {/* Vision Section */}
                <div className="bg-white p-12 rounded-3xl shadow-sm border border-advisure-silver/20">
                    <h2 className="text-advisure-green text-sm font-bold uppercase tracking-widest mb-4">Our Vision</h2>
                    <p className="text-2xl md:text-3xl text-charcoal font-semibold leading-snug">
                        We envision a future where insurance and investment strategies work seamlessly together to unlock smarter, more powerful outcomes.
                    </p>
                    <p className="mt-8 text-lg text-charcoal/70 leading-relaxed">
                        A future where institutional-quality, tax-advantaged solutions are accessible through modern RIAs and no longer limited by friction, opacity, or legacy constraints. By simplifying complexity and elevating the advisor experience, we aim to empower accredited investors with clarity, confidence, and the ability to achieve superior risk-adjusted, after-tax results.
                    </p>
                </div>

                {/* How Advisure works with RIAs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-charcoal mb-6">How Advisure works with RIAs</h2>
                        <p className="text-lg text-charcoal/70 leading-relaxed">
                            We collaborate with RIAs as a <span className="text-advisure-green font-bold">behind-the-scenes structural design team</span>. You remain the primary relationship owner and investment lead. Advisure handles the complexity of private placement design, implementation, and oversight.
                        </p>
                        <div className="mt-10 p-6 bg-soft-green rounded-2xl border-l-4 border-advisure-green">
                            <h3 className="text-xl font-bold text-advisure-green mb-2">The Result:</h3>
                            <p className="text-charcoal font-medium">
                                Better client outcomes, deeper relationships, and a more differentiated practice.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-80 bg-advisure-silver/10 rounded-3xl overflow-hidden flex items-center justify-center border border-dashed border-advisure-silver/50">
                        <span className="text-advisure-silver font-medium italic">Illustrating the Advisor-Advisure Partnership</span>
                    </div>
                </div>

                {/* Visual Content Sections */}
                <div className="space-y-24">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-charcoal">The Advisure Approach</h2>
                        <p className="mt-4 text-xl text-charcoal/60">A structured path to superior after-tax outcomes.</p>
                    </div>

                    {/* Process Section */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Structural Design', desc: 'Collaborative strategy to define the optimal investment and insurance integration.' },
                            { step: '02', title: 'Implementation', desc: 'Frictionless carrier coordination and streamlined digital documentation.' },
                            { step: '03', title: 'Active Oversight', desc: 'Continuous monitoring of performance, compliance, and tax efficiency.' },
                            { step: '04', title: 'Integrated Reporting', desc: 'Institutional-quality transparency for advisors and clients alike.' },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-advisure-silver/20 relative group hover:border-advisure-green/30 transition-all">
                                <div className="text-5xl font-black text-advisure-green/5 absolute top-4 right-6 group-hover:text-advisure-green/10 transition-colors">{item.step}</div>
                                <h3 className="text-xl font-bold text-charcoal mb-4 relative z-10">{item.title}</h3>
                                <p className="text-charcoal/70 leading-relaxed relative z-10">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Why PPLI Section */}
                        <div className="bg-advisure-green p-10 md:p-12 rounded-[3rem] text-white">
                            <h2 className="text-3xl font-bold mb-8">Why PPLI?</h2>
                            <ul className="space-y-6">
                                {[
                                    { title: 'Tax Alpha', desc: 'Eliminate tax-drag on high-turnover or high-income strategies.' },
                                    { title: 'Institutional Access', desc: 'Direct exposure to private-market and alternative asset classes.' },
                                    { title: 'Modern Efficiency', desc: 'Digital workflows replacing legacy insurance friction.' },
                                    { title: 'Cost Transparency', desc: 'Institutional-level pricing with no hidden layers.' },
                                ].map((item, idx) => (
                                    <li key={idx} className="flex gap-4">
                                        <div className="h-6 w-6 rounded-full bg-advisure-gold flex items-center justify-center shrink-0 mt-1">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <div>
                                            <span className="font-bold block text-lg mb-1">{item.title}</span>
                                            <span className="text-white/70">{item.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Benefits to Advisor Section */}
                        <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-advisure-silver/20 shadow-sm flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-charcoal mb-8">Benefits to the Advisor</h2>
                            <div className="space-y-8">
                                {[
                                    { title: 'Differentiation', desc: 'Offer sophisticated solutions that standard competitors cannot access.' },
                                    { title: 'Client Retention', desc: 'Deepen relationships by solving complex structural challenges.' },
                                    { title: 'Scalable Scale', desc: 'Leverage our infrastructure without increasing your firm’s headcount.' },
                                ].map((item, idx) => (
                                    <div key={idx} className="border-l-4 border-advisure-gold pl-6">
                                        <h3 className="text-xl font-bold text-charcoal mb-2">{item.title}</h3>
                                        <p className="text-charcoal/60 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="pt-24 border-t border-advisure-silver/20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-charcoal">Our Leadership Team</h2>
                        <p className="mt-4 text-xl text-charcoal/60">Expertise across insurance, investments, and technology.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                        {/* Zayda Marrie */}
                        <div className="bg-white p-8 rounded-3xl border border-advisure-silver/10 shadow-sm">
                            <div className="flex items-center gap-6 mb-6">
                                <div className="h-20 w-20 rounded-2xl bg-advisure-green/10 flex items-center justify-center text-advisure-green text-3xl font-bold">ZM</div>
                                <div>
                                    <h3 className="text-2xl font-bold text-charcoal">Zayda Marrie</h3>
                                    <p className="text-advisure-green font-semibold">Former Executive, AIG & MetLife</p>
                                </div>
                            </div>
                            <p className="text-charcoal/70 leading-relaxed">
                                A seasoned leader in the insurance industry, Zayda has over two decades of experience driving product innovation, distribution strategy, and enterprise growth. She successfully led initiatives generating over $5 billion in economic value.
                            </p>
                        </div>

                        {/* Don Plotsky */}
                        <div className="bg-white p-8 rounded-3xl border border-advisure-silver/10 shadow-sm">
                            <div className="flex items-center gap-6 mb-6">
                                <div className="h-20 w-20 rounded-2xl bg-advisure-green/10 flex items-center justify-center text-advisure-green text-3xl font-bold">DP</div>
                                <div>
                                    <h3 className="text-2xl font-bold text-charcoal">Don Plotsky</h3>
                                    <p className="text-advisure-green font-semibold">Co-Founder, Uinta Investment Partners</p>
                                </div>
                            </div>
                            <p className="text-charcoal/70 leading-relaxed mb-4">
                                Don has over 40 years of investment management experience as a leader, innovator and portfolio manager. His primary focus over his career has been on fixed-income and structured products.
                            </p>
                            <details className="text-sm text-charcoal/60 cursor-pointer">
                                <summary className="hover:text-advisure-green transition-colors">View full bio</summary>
                                <div className="mt-4 space-y-2">
                                    <p>Prior to forming Uinta, he served as head of product development and product management at Western Asset Management (2002-2016) and head of the firm’s retail business. He also served on the Management, Strategy and Risk committees.</p>
                                    <p>Don was a senior executive at CDC Investment Management Corp. (1997-2002) and portfolio manager at Advisers Capital Management (1993-1997), Equitable Capital Management (1988-1993) and Hutton Risk Management (1984-1988). Don earned an MBA in finance and economics from New York University’s Stern School of Business (1988).</p>
                                </div>
                            </details>
                        </div>

                        {/* Corey Rickman */}
                        <div className="bg-white p-8 rounded-3xl border border-advisure-silver/10 shadow-sm">
                            <div className="flex items-center gap-6 mb-6">
                                <div className="h-20 w-20 rounded-2xl bg-advisure-green/10 flex items-center justify-center text-advisure-green text-3xl font-bold">CR</div>
                                <div>
                                    <h3 className="text-2xl font-bold text-charcoal">Corey Rickman</h3>
                                    <p className="text-advisure-green font-semibold">Portfolio Analyst, Uinta Investment Partners</p>
                                </div>
                            </div>
                            <p className="text-charcoal/70 leading-relaxed">
                                Corey is a Portfolio Analyst focused on income-based investment solutions in private markets. He joined Uinta in February 2025 after prior roles in fund accounting and client service at Stone Coast Fund Services and SEI Family Office Services, where he worked on accounting and reporting for investment funds.
                            </p>
                        </div>

                        {/* Dror Katzav */}
                        <div className="bg-white p-8 rounded-3xl border border-advisure-silver/10 shadow-sm">
                            <div className="flex items-center gap-6 mb-6">
                                <div className="h-20 w-20 rounded-2xl bg-advisure-green/10 flex items-center justify-center text-advisure-green text-3xl font-bold">DK</div>
                                <div>
                                    <h3 className="text-2xl font-bold text-charcoal">Dror Katzav</h3>
                                    <p className="text-advisure-green font-semibold">Founder & CEO, Atidot</p>
                                </div>
                            </div>
                            <p className="text-charcoal/70 leading-relaxed mb-4">
                                Dror is the Founder and CEO of Atidot, an AI-driven, cloud-based platform for life insurers. Before co-founding Atidot, he spent 11 years as an officer and technology leader in elite units of the IDF Intelligence Corps.
                            </p>
                            <details className="text-sm text-charcoal/60 cursor-pointer">
                                <summary className="hover:text-advisure-green transition-colors">View full bio</summary>
                                <div className="mt-4 space-y-2">
                                    <p>An experienced data scientist, Dror has consulted for leading technology startups on advanced machine learning models. He holds a B.Sc. in Physics and Mathematics from the Hebrew University and an M.Sc. in Management Sciences from Tel Aviv University.</p>
                                    <p>Dror is a frequent speaker at global insurtech conferences and is recognized as a visionary on applying AI to life insurance. He lives in the San Francisco Bay Area.</p>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
