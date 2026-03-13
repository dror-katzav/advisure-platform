import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-off-white">
      {/* Hero Section */}
      <section className="relative bg-advisure-blue py-24 lg:py-36 overflow-hidden rounded-b-[3rem] lg:rounded-b-[5rem]">
        {/* Subtle background element */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%22 height=%22100%22 filter=%22url(%23n)%22 opacity=%220.15%22/%3E%3C/svg%3E')] mix-blend-soft-light opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-xs text-white/90 shadow-soft mb-8">
                  <span className="h-2 w-2 rounded-full bg-advisure-gold" />
                  Strategic Partnership
                </div>
              <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-[1.1] tracking-tight">
                At Advisure, we believe the most powerful wealth strategies emerge when <span className="text-advisure-gold bg-clip-text">investment and insurance work together</span>.
              </h1>
              <div className="mt-8 text-xl text-white/80 leading-relaxed font-medium space-y-4">
                <p>
                  We are solving the problem of market fragmentation and the challenge of not integrating and optimizing insurance structures for high-net-worth investors. We seek to enable RIAs to offer improved portfolio outcomes by enhancing:
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                    <span className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-xl text-sm font-semibold">Diversification</span>
                    <span className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-xl text-sm font-semibold">After-tax returns</span>
                    <span className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-xl text-sm font-semibold">Risk adjusted returns</span>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/schedule-demo"
                  className="inline-flex items-center justify-center px-8 py-4 bg-advisure-gold text-white text-lg font-bold rounded-full hover:bg-advisure-gold/90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  Schedule a demo
                </Link>
                <Link
                  href="/platform"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/30 text-white text-lg font-bold rounded-full hover:bg-white/10 transition-all"
                >
                  Explore Platform
                </Link>
              </div>
            </div>

            <div className="mt-12 lg:mt-0 relative">
                <div className="bg-white rounded-3xl p-8 shadow-2xl relative z-20 border border-black/5 transform lg:translate-y-12">
                    <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                        <div className="font-bold text-charcoal text-lg">Platform Workflow</div>
                        <div className="text-xs font-semibold bg-green-50 text-green-700 px-3 py-1 rounded-full border border-green-200">Active</div>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="bg-off-white p-5 rounded-2xl flex items-start gap-4 hover:shadow-md transition duration-300 border border-transparent hover:border-gray-200">
                            <div className="w-10 h-10 rounded-full bg-advisure-blue/10 flex items-center justify-center shrink-0">
                                <span className="w-3 h-3 rounded-full bg-advisure-blue"></span>
                            </div>
                            <div>
                                <h4 className="font-bold text-charcoal text-sm">Private Placement Insurance (PPLI)</h4>
                                <p className="text-xs text-charcoal/60 mt-1 leading-relaxed">Gain access to premier alternative asset managers.</p>
                            </div>
                        </div>
                        
                        <div className="bg-off-white p-5 rounded-2xl flex items-start gap-4 hover:shadow-md transition duration-300 border border-transparent hover:border-gray-200">
                            <div className="w-10 h-10 rounded-full bg-advisure-gold/10 flex items-center justify-center shrink-0">
                                <span className="w-3 h-3 rounded-full bg-advisure-gold"></span>
                            </div>
                            <div>
                                <h4 className="font-bold text-charcoal text-sm">Private Placement Annuities (PPA)</h4>
                                <p className="text-xs text-charcoal/60 mt-1 leading-relaxed">Speeds implementation and reduces complexity.</p>
                            </div>
                        </div>
                        
                        <div className="bg-off-white p-5 rounded-2xl flex items-start gap-4 hover:shadow-md transition duration-300 border border-transparent hover:border-gray-200">
                            <div className="w-10 h-10 rounded-full bg-charcoal/5 flex items-center justify-center shrink-0">
                                <span className="w-3 h-3 rounded-full bg-charcoal/40"></span>
                            </div>
                            <div>
                                <h4 className="font-bold text-charcoal text-sm">AI Empowered Platform</h4>
                                <p className="text-xs text-charcoal/60 mt-1 leading-relaxed">Incorporate tax-efficient structures securely.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Decorative background elements behind the card */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* "We exist to change that" Section */}
      <section className="py-32 bg-off-white relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-bold text-advisure-gold tracking-widest uppercase mb-4">The Challenge</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-charcoal tracking-tight">
            We exist to change that.
          </h2>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="relative h-[600px] md:h-[800px] rounded-[3rem] lg:rounded-[5rem] overflow-hidden mx-4 lg:mx-8 shadow-2xl z-10 -mt-10 border-8 border-white">
        <Image
          src="/hero-v5.png"
          alt="Modern Financial Advisors"
          fill
          className="object-cover hover:scale-105 transition duration-[2000ms]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/20 to-transparent" />
      </section>

      {/* Infrastructure Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8">
              End to End Infrastructure for RIAs for Insurance, Annuities and Privately Placed Alternative Investment strategies
            </h2>
            <div className="space-y-6 text-xl text-charcoal/80 leading-relaxed">
              <p>
                By incorporating institutional quality insurance structures and strategies into the portfolio construction process, we empower RIAs to deliver better advice and superior outcomes.
              </p>
              <p className="font-semibold text-advisure-gold">
                Same Investment Strategy. Different Structure. Leverage sophisticated insurance wrappers: PPLI and PPA.
              </p>
              <p>
                Our AI empowered technology reduces complexity, removes friction, and brings clarity to decision-making — so accredited and qualified investors can confidently pursue better risk-adjusted returns and after-tax results.
              </p>
              <p className="text-advisure-blue font-bold text-3xl pt-4">
                This is the future of wealth management:
              </p>
              <p className="text-charcoal/60 font-medium text-xl">
                integrated, transparent, and built for advisors who lead. We seek to integrate the process of enhancing after-tax outcomes by providing seemless accessto PPLI and PPA and to improving diversification by incorporating privately placed alternatives through a single, AI empowered platform.
              </p>

              <div className="pt-12">
                <Link
                  href="/schedule-demo"
                  className="inline-flex items-center justify-center px-10 py-5 bg-advisure-gold text-white text-xl font-bold rounded-full hover:bg-advisure-gold/90 transition-all shadow-lg hover:shadow-xl"
                >
                  Schedule a demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
