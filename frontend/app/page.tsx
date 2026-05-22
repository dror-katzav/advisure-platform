import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-off-white font-sans text-charcoal">
      {/* SECTION 1: Hero */}
      <section className="relative bg-advisure-blue py-24 lg:py-36 overflow-hidden rounded-b-[3rem] lg:rounded-b-[5rem]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%22 height=%22100%22 filter=%22url(%23n)%22 opacity=%220.15%22/%3E%3C/svg%3E')] mix-blend-soft-light opacity-50 pointer-events-none"></div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-advisure-gold/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-xs text-white/90 shadow-soft mb-8">
                <span className="h-2 w-2 rounded-full bg-advisure-gold animate-pulse" />
                Built for RIAs
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-[1.1] tracking-tight">
                Turn Private Placement Insurance into a <span className="text-gradient">Core Portfolio Allocation</span> for Your Clients
              </h1>
              <div className="mt-8 text-xl text-white/80 leading-relaxed font-medium space-y-4">
                <p>
                  Advisure eliminates operational complexity, reduces carrier friction, and seamlessly integrates into your portfolio without changing how you manage assets.
                </p>
                <p className="text-base text-white/60 leading-relaxed">
                  Powered by AI-driven workflows and deep integration, our technology streamlines the private placement life cycle — from education and opportunity identification to implementation and ongoing management.
                </p>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/schedule-demo"
                  className="hover-lift inline-flex items-center justify-center px-8 py-4 bg-advisure-gold text-white text-lg font-bold rounded-full shadow-xl"
                >
                  Schedule a Conversation
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

      {/* SECTION 2: A Better Way to Build Client Portfolios */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-6 leading-tight">
                A Better Way to <span className="text-gradient-blue">Build Client Portfolios</span>
              </h2>
              <p className="text-lg text-charcoal/70 leading-relaxed">
                Private placement insurance goes beyond traditional portfolio construction by improving how assets are held, taxed, and transferred over time.
              </p>
            </div>
            <div>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-6">These structures provide your clients with:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-off-white p-5 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-charcoal mb-1">Institutional Investment Access</h3>
                  <p className="text-sm text-charcoal/60 leading-relaxed">Premier alternative investments and asset managers, often at lower minimums.</p>
                </div>
                <div className="bg-off-white p-5 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-charcoal mb-1">Tax Alpha</h3>
                  <p className="text-sm text-charcoal/60 leading-relaxed">Shield high-tax, high-turnover strategies from ongoing drag to improve long-term compounding.</p>
                </div>
                <div className="bg-off-white p-5 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-charcoal mb-1">Diversification</h3>
                  <p className="text-sm text-charcoal/60 leading-relaxed">Diversify beyond traditional asset classes with greater control over structure and planning.</p>
                </div>
                <div className="bg-off-white p-5 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-charcoal mb-1">Estate & Legacy Control</h3>
                  <p className="text-sm text-charcoal/60 leading-relaxed">Enhance legacy planning with greater control over how assets are held, taxed, and transferred.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/ppli" className="inline-flex items-center gap-2 text-advisure-blue font-bold hover:text-advisure-gold transition-colors">
              Learn More About Private Placement
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2.1: The Problem */}
      <section className="py-20 bg-off-white relative overflow-hidden border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                Despite these advantages, private placement has remained difficult for RIAs to implement effectively.
              </h2>
              <p className="text-charcoal/70 mb-8 leading-relaxed">
                These strategies have always offered powerful structural and tax advantages. But for RIAs, they have remained underutilized for one reason: <strong className="text-charcoal">they don&apos;t fit the way you run your business.</strong>
              </p>
              <p className="text-sm font-semibold text-charcoal/50 uppercase tracking-widest mb-4">Traditional private placement offerings suffer from:</p>
              <div className="space-y-3">
                {[
                  'Manual carrier processes',
                  'Disconnect from reporting systems',
                  'Segregated workflows',
                  'Limited visibility + control',
                  'Treatment as "outside" the portfolio',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-red-400 shrink-0"></div>
                    <span className="font-semibold text-charcoal/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-advisure-blue p-10 rounded-3xl text-center shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Advisure exists to close the gap.</h3>
              <p className="text-white/80 leading-relaxed">
                We didn&apos;t build a new product. We built the infrastructure that makes private placement usable inside the RIA model — integrated into your existing workflow, visible in your reporting, and scalable across your client base.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">
              Designed to Fit Your <span className="text-gradient-blue">Existing Workflow</span>
            </h2>
            <p className="text-xl text-charcoal/70">
              Advisure integrates private placement into your existing investment process — without adding operational complexity or separate workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative p-8 rounded-3xl bg-off-white border border-gray-100 hover-lift text-center group">
              <div className="absolute top-0 right-8 -translate-y-1/2 w-10 h-10 bg-advisure-gold text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white">1</div>
              <h3 className="text-2xl font-bold text-advisure-blue mb-4">Allocate</h3>
              <p className="text-charcoal/70">Incorporate private placement as part of your portfolio strategy — just like any other allocation.</p>
            </div>

            <div className="relative p-8 rounded-3xl bg-off-white border border-gray-100 hover-lift text-center group">
              <div className="absolute top-0 right-8 -translate-y-1/2 w-10 h-10 bg-advisure-gold text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white">2</div>
              <h3 className="text-2xl font-bold text-advisure-blue mb-4">Integrate</h3>
              <p className="text-charcoal/70">Advisure handles the coordination across carriers, managers, and structures — removing manual processes and operational friction.</p>
            </div>

            <div className="relative p-8 rounded-3xl bg-off-white border border-gray-100 hover-lift text-center group">
              <div className="absolute top-0 right-8 -translate-y-1/2 w-10 h-10 bg-advisure-gold text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white">3</div>
              <h3 className="text-2xl font-bold text-advisure-blue mb-4">Manage</h3>
              <p className="text-charcoal/70">View and manage positions within your existing reporting environment, alongside the rest of your portfolio.</p>
            </div>
          </div>

          <p className="mt-10 text-center text-charcoal/50 font-medium">No new systems. No parallel workflows. No disruption to how you manage assets.</p>

          <div className="mt-16 text-center">
            <Link href="/platform" className="hover-lift inline-flex items-center justify-center px-8 py-4 bg-advisure-blue text-white text-lg font-bold rounded-full shadow-lg">
              Explore the Platform
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: Advisor Economics */}
      <section className="py-24 bg-advisure-blue text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C9AE62 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Advisor Economics</h2>
            <p className="text-white/70 text-lg leading-relaxed">With the right infrastructure in place, private placement stops being a side conversation and becomes a core part of how you manage wealth.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {[
              { stat: 'AUM Visible', desc: 'Assets stay within your reporting ecosystem — not held away' },
              { stat: 'Fully Integrated', desc: 'Allocations remain part of your managed portfolio' },
              { stat: 'Advisor Economics', desc: 'Advisors participate in ongoing economics on placed assets' },
              { stat: 'After-Tax Alpha', desc: 'Clients benefit from measurably improved after-tax outcomes' },
            ].map(({ stat, desc }) => (
              <div key={stat} className="bg-white/10 rounded-2xl p-6 text-center border border-white/10">
                <p className="text-advisure-gold font-bold text-lg mb-2">{stat}</p>
                <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto border-t border-white/10 pt-12 text-center">
            <p className="text-2xl md:text-3xl font-bold text-white leading-snug">
              Private placement insurance is no longer a segmented side strategy.
            </p>
            <p className="text-advisure-gold font-semibold text-xl mt-3">It&apos;s an integrated core portfolio allocation.</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-off-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Future of Wealth Management</h2>
          <p className="text-xl text-charcoal/70 mb-10">
            Private Placement Insurance — fully integrated, transparent, and aligned with how you manage your portfolios today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schedule-demo"
              className="hover-lift inline-flex items-center justify-center px-10 py-5 bg-advisure-gold text-white text-xl font-bold rounded-full shadow-xl"
            >
              Schedule a Conversation
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
