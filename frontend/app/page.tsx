import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-off-white font-sans text-charcoal">
      {/* SECTION 1: Hero (Lead w/ Platform + Outcome) */}
      <section className="relative bg-advisure-blue py-24 lg:py-36 overflow-hidden rounded-b-[3rem] lg:rounded-b-[5rem]">
        {/* Subtle background element */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%22 height=%22100%22 filter=%22url(%23n)%22 opacity=%220.15%22/%3E%3C/svg%3E')] mix-blend-soft-light opacity-50 pointer-events-none"></div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-advisure-gold/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-xs text-white/90 shadow-soft mb-8">
                <span className="h-2 w-2 rounded-full bg-advisure-gold animate-pulse" />
                Infrastructure for RIAs
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-[1.1] tracking-tight">
                We are a <span className="text-gradient">private placement insurance platform</span> built for RIAs
              </h1>
              <div className="mt-8 text-xl text-white/80 leading-relaxed font-medium space-y-4">
                <p>
                  We enable advisors to deliver institutional-grade tax efficiency through PPLI and PPVA strategies.
                  We provide a complete, end-to-end solution: from education and opportunity identification to implementation and ongoing management.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <span className="glass px-5 py-2.5 rounded-xl text-sm font-semibold text-white shadow-sm flex items-center gap-2">
                    <svg className="w-4 h-4 text-advisure-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Unlock Tax Alpha
                  </span>
                  <span className="glass px-5 py-2.5 rounded-xl text-sm font-semibold text-white shadow-sm flex items-center gap-2">
                    <svg className="w-4 h-4 text-advisure-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Differentiate Practice
                  </span>
                  <span className="glass px-5 py-2.5 rounded-xl text-sm font-semibold text-white shadow-sm flex items-center gap-2">
                    <svg className="w-4 h-4 text-advisure-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Compete Higher
                  </span>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/schedule-demo"
                  className="hover-lift inline-flex items-center justify-center px-8 py-4 bg-advisure-gold text-white text-lg font-bold rounded-full shadow-xl"
                >
                  Schedule a Demo
                </Link>
                <Link
                  href="/platform"
                  className="hover-lift inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/30 text-white text-lg font-bold rounded-full hover:bg-white/10 transition-all"
                >
                  See How It Works
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative mt-12 lg:mt-0">
              <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/hero-v5.png"
                  alt="Financial Advisors using Platform"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-advisure-blue/80 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Why it matters (Soft Education) */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-6 leading-tight">
              Better structure leads to <span className="text-gradient-blue">better long-term outcomes</span>
            </h2>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              Tax drag and structural inefficiencies materially impact client wealth. We look beyond traditional investments to emphasize tax efficiency as a key driver of compound growth—optimizing how assets are held and transferred.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-off-white p-8 rounded-3xl border border-gray-100 hover-lift">
              <div className="w-12 h-12 rounded-2xl bg-advisure-blue/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-advisure-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Institutional Access</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">Access premier alternative asset managers typically reserved for massive endowments, but with lower minimums.</p>
            </div>
            
            <div className="bg-off-white p-8 rounded-3xl border border-gray-100 hover-lift">
              <div className="w-12 h-12 rounded-2xl bg-advisure-gold/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-advisure-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Tax Alpha</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">Improve after-tax outcomes significantly by shielding highly-taxed, high-turnover strategies from ongoing drag.</p>
            </div>

            <div className="bg-off-white p-8 rounded-3xl border border-gray-100 hover-lift">
              <div className="w-12 h-12 rounded-2xl bg-advisure-blue/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-advisure-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Estate Control</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">Enhance legacy planning with total control over how assets are efficiently structured, held, and eventually transferred.</p>
            </div>

            <div className="bg-off-white p-8 rounded-3xl border border-gray-100 hover-lift">
              <div className="w-12 h-12 rounded-2xl bg-advisure-gold/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-advisure-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Flexibility</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">Diversify effectively while maintaining immense planning flexibility to adapt to changing client circumstances.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/ppli" className="inline-flex items-center gap-2 text-advisure-blue font-bold hover:text-advisure-gold transition-colors">
              Explore the Education Page to learn more
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2.1: The Bridge (Introduce Friction) */}
      <section className="py-20 bg-off-white relative overflow-hidden border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">If the advantages are so clear, why aren't they utilized more?</h2>
              <p className="text-charcoal/70 mb-8 leading-relaxed">
                Despite their immense structural advantages, providing private placement strategies has historically been an uphill battle for independent advisors. Scaling these solutions requires overcoming significant operational hurdles.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-red-400 shrink-0"></div>
                  <span className="font-semibold text-charcoal/80">Operational Complexity & Paperwork</span>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-red-400 shrink-0"></div>
                  <span className="font-semibold text-charcoal/80">Fragmented Systems & Implementation</span>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-red-400 shrink-0"></div>
                  <span className="font-semibold text-charcoal/80">Limited Transparency & Monitoring</span>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-red-400 shrink-0"></div>
                  <span className="font-semibold text-charcoal/80">A Complete Lack of Unified Infrastructure</span>
                </div>
              </div>
            </div>
            
            <div className="bg-advisure-blue p-10 rounded-3xl text-center shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">You need infrastructure to implement them at scale.</h3>
              <p className="text-white/80 mb-8">
                Advisors shouldn't have to piece together disparate tools, managers, and carriers.
              </p>
              <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-white/10 animate-bounce">
                <svg className="w-8 h-8 text-advisure-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: The Opportunity / Solution */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">
              Advisure is the <span className="text-gradient-blue">end-to-end</span> infrastructure platform.
            </h2>
            <p className="text-xl text-charcoal/70">
              We make Advisure's role obvious and necessary. We unify the entire lifecycle of private placement strategies into one seamless experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative p-8 rounded-3xl bg-off-white border border-gray-100 hover-lift text-center group">
              <div className="absolute top-0 right-8 -translate-y-1/2 w-10 h-10 bg-advisure-gold text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white">1</div>
              <h3 className="text-2xl font-bold text-advisure-blue mb-4">Education & ID</h3>
              <p className="text-charcoal/70 mb-6">We map capabilities, model scenario impacts with AI tools, and identify specific client opportunities.</p>
              <div className="h-32 bg-white rounded-xl border border-gray-200 flex items-center justify-center p-4">
                 <span className="text-xs text-gray-400 font-mono">Opportunity Modeling UI</span>
              </div>
            </div>

            <div className="relative p-8 rounded-3xl bg-off-white border border-gray-100 hover-lift text-center group">
              <div className="absolute top-0 right-8 -translate-y-1/2 w-10 h-10 bg-advisure-gold text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white">2</div>
              <h3 className="text-2xl font-bold text-advisure-blue mb-4">Design & Implement</h3>
              <p className="text-charcoal/70 mb-6">Seamlessly execute compliance, policy design, manager selection, and funding workflows.</p>
              <div className="h-32 bg-white rounded-xl border border-gray-200 flex items-center justify-center p-4">
                 <span className="text-xs text-gray-400 font-mono">Digital Onboarding Flow</span>
              </div>
            </div>

            <div className="relative p-8 rounded-3xl bg-off-white border border-gray-100 hover-lift text-center group">
              <div className="absolute top-0 right-8 -translate-y-1/2 w-10 h-10 bg-advisure-gold text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white">3</div>
              <h3 className="text-2xl font-bold text-advisure-blue mb-4">Ongoing Management</h3>
              <p className="text-charcoal/70 mb-6">Consolidated monitoring, reporting, and management tied directly into your existing RIA stack.</p>
              <div className="h-32 bg-white rounded-xl border border-gray-200 flex items-center justify-center p-4">
                 <span className="text-xs text-gray-400 font-mono">Unified Dashboard UI</span>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/platform" className="hover-lift inline-flex items-center justify-center px-8 py-4 bg-advisure-blue text-white text-lg font-bold rounded-full shadow-lg">
              Explore the Platform Details
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: Advisor Benefits */}
      <section className="py-24 bg-advisure-blue text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C9AE62 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Excel in the Private Placement Space</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
            Our platform simplifies complexity, making it easy and scalable to deliver institutional-grade value that truly differentiates your practice and wins high-net-worth wallet share.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="glass px-6 py-4 rounded-2xl">
              <span className="block text-2xl font-bold text-advisure-gold mb-1">Scale</span>
              <span className="text-sm text-white/70">Efficiency across all clients</span>
            </div>
            <div className="glass px-6 py-4 rounded-2xl">
              <span className="block text-2xl font-bold text-advisure-gold mb-1">Differentiate</span>
              <span className="text-sm text-white/70">Beyond traditional portfolios</span>
            </div>
            <div className="glass px-6 py-4 rounded-2xl">
              <span className="block text-2xl font-bold text-advisure-gold mb-1">Grow AUM</span>
              <span className="text-sm text-white/70">Capture held-away assets</span>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-off-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-charcoal mb-6">Ready to elevate your advisory practice?</h2>
          <p className="text-xl text-charcoal/70 mb-10">
            Join forward-thinking RIAs who use Advisure to protect client wealth and deliver unparalleled after-tax outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schedule-demo"
              className="hover-lift inline-flex items-center justify-center px-10 py-5 bg-advisure-gold text-white text-xl font-bold rounded-full shadow-xl"
            >
              Schedule a Demo
            </Link>
            <Link
              href="/contact"
              className="hover-lift inline-flex items-center justify-center px-10 py-5 bg-white border border-gray-200 text-advisure-blue text-xl font-bold rounded-full shadow-sm hover:bg-gray-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
