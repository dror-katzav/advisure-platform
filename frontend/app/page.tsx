import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-off-white">
      {/* Hero Section */}
      <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
              At Advisure, we believe the most powerful wealth strategies emerge when <span className="text-advisure-blue">investment and insurance work together</span>
            </h1>
            <div className="mt-8 text-xl text-charcoal/80 leading-relaxed font-medium space-y-4">
              <p>
                We seek to enable RIA&apos;s to offer improved portfolio outcomes for their high-net-worth investors by enhancing:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li>Diversification</li>
                <li>After-tax returns</li>
                <li>Risk adjusted returns</li>
              </ul>
              <p>
                Utilizing Private Placement Insurance (PPLI) and Private Placement Annuities (PPA) as tools within the portfolio to gain access to premier alternative asset managers through an AI empowered platform that speeds implementation and reduces the complexity of adding alternatives and incorporating tax-efficient structures into the asset allocation process
              </p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link
                href="/schedule-demo"
                className="inline-flex items-center justify-center px-8 py-4 bg-advisure-blue text-white text-lg font-bold rounded-full hover:bg-advisure-blue/90 transition-all shadow-lg hover:shadow-xl"
              >
                Schedule a demo
              </Link>
            </div>
          </div>
        </div>

        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-advisure-blue/5 -skew-x-12 transform translate-x-1/4" />
      </section>

      {/* "We exist to change that" Section */}
      <section className="py-24 bg-advisure-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            We exist to change that.
          </h2>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="relative h-[500px] md:h-[700px]">
        <Image
          src="/hero-v5.png"
          alt="Modern Financial Advisors"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-charcoal/20" />
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
                By incorporating institutional quality insurance structures and strategies into the portfolio construction process, we empower RIA&apos;s to deliver better advise and superior outcomes.
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
