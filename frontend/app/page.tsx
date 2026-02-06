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
              At Advisure, we believe the most powerful wealth strategies emerge when <span className="text-advisure-blue">investment and insurance work together</span>—not in silos.
            </h1>
            <p className="mt-8 text-xl text-charcoal/80 leading-relaxed font-medium">
              For too long, sophisticated, tax-advantaged solutions have been complex, opaque, and out of reach.
            </p>

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
          src="/hero-v4.png"
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
              End to End Private Placement Infrastructure for RIAs
            </h2>
            <div className="space-y-6 text-xl text-charcoal/80 leading-relaxed">
              <p>
                By uniting insurance expertise with institutional-quality investment strategies, we empower modern RIAs to deliver smarter advice and superior outcomes.
              </p>
              <p>
                Our technology simplifies complexity, removes friction, and brings clarity to decision-making — so accredited investors can confidently pursue better risk-adjusted, after-tax results.
              </p>
              <p className="text-advisure-blue font-bold text-3xl pt-4">
                This is the future of wealth management:
              </p>
              <p className="text-charcoal/60 font-medium text-xl">
                integrated, transparent, and built for advisors who lead.
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
