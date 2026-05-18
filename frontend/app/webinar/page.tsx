import Link from 'next/link';

export const metadata = {
  title: 'Webinar: Bridging the Gap Between Investment and Insurance | Advisure',
  description: 'Join our live discussion on integrating insurance and asset management to create more efficient, tax-aware client portfolios.',
};

export default function WebinarPage() {
  const registerLink = "https://webinar.zoho.com/meeting/register?sessionId=1066174356";

  const speakers = [
    {
      name: "Zayda Marrie",
      role: "Speaker",
      linkedin: "https://www.linkedin.com/in/zaydamarrie",
    },
    {
      name: "Don Plotsky",
      role: "Speaker",
      linkedin: "https://www.linkedin.com/in/don-plotsky-2882b282/",
    },
    {
      name: "Dror Katzav",
      role: "Speaker",
      linkedin: "https://www.linkedin.com/in/dror-katzav/",
    },
    {
      name: "Corey Rickman",
      role: "Moderator",
      linkedin: "https://www.linkedin.com/in/corey-rickman-971286138/",
    }
  ];

  return (
    <div className="bg-off-white font-sans text-charcoal min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-advisure-blue py-20 lg:py-32 overflow-hidden rounded-b-[3rem] lg:rounded-b-[5rem]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%22 height=%22100%22 filter=%22url(%23n)%22 opacity=%220.15%22/%3E%3C/svg%3E')] mix-blend-soft-light opacity-40 pointer-events-none"></div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-advisure-gold/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-advisure-gold/30 bg-advisure-gold/10 backdrop-blur-sm px-4 py-1.5 text-sm text-advisure-gold shadow-soft mb-8 font-semibold uppercase tracking-wider">
            <span className="h-2.5 w-2.5 rounded-full bg-advisure-gold animate-pulse" />
            Live Webinar Discussion
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Bridging the Gap Between <br className="hidden md:block" />
            <span className="text-gradient">Investment and Insurance</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 font-medium mb-10 max-w-2xl mx-auto">
            Investment + Insurance, Reimagined. Discover how to create more efficient, tax-aware client portfolios.
          </p>
          
          <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-6 md:p-8 inline-flex flex-col md:flex-row items-center gap-6 md:gap-12 shadow-2xl mb-12">
            <div className="text-left">
              <p className="text-advisure-gold font-bold text-lg uppercase tracking-wide mb-1">Date & Time</p>
              <p className="text-white text-xl md:text-2xl font-semibold">Tuesday, June 16th</p>
              <p className="text-white/80 text-lg">3:00 PM (EDT)</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/20"></div>
            <div>
              <a
                href={registerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift inline-flex items-center justify-center px-8 py-4 bg-advisure-gold text-white text-lg font-bold rounded-full shadow-xl transition-transform hover:scale-105"
              >
                Reserve Your Spot
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS SECTION */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6">
                Why It <span className="text-gradient-blue">Matters</span>
              </h2>
              <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                Insurance has long been used for protection and planning. But in modern portfolios, it can serve a much broader role as both an <strong>asset allocation tool</strong> (what you invest in) and an <strong>asset location strategy</strong> (where you hold it).
              </p>
              
              <h3 className="text-xl font-bold text-charcoal mb-4 mt-8">It creates the opportunity to:</h3>
              <ul className="space-y-4">
                {[
                  "Improve after-tax outcomes",
                  "Enhance portfolio efficiency",
                  "Access institutional-quality investments",
                  "Better align long-term client objectives"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-advisure-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-lg text-charcoal/80 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-off-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-lg relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-advisure-gold/10 rounded-full blur-2xl"></div>
              <h3 className="text-2xl font-bold text-advisure-blue mb-4">The Hidden Cost of Tax Drag</h3>
              <p className="text-lg text-charcoal/80 mb-6">
                Tax inefficiency can silently erode <strong className="text-red-500">200-400 bps annually</strong> from high-net-worth portfolios. Over time, even modest tax drag translates into a meaningful reduction in long-term client outcomes.
              </p>
              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <h4 className="font-bold text-charcoal mb-3">Where Tax Drag Appears the Most:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-charcoal/70"><div className="w-1.5 h-1.5 rounded-full bg-advisure-gold"></div> High-turnover strategies</li>
                  <li className="flex items-center gap-2 text-charcoal/70"><div className="w-1.5 h-1.5 rounded-full bg-advisure-gold"></div> Income-generating assets</li>
                  <li className="flex items-center gap-2 text-charcoal/70"><div className="w-1.5 h-1.5 rounded-full bg-advisure-gold"></div> Alternative investments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPEAKERS SECTION */}
      <section className="py-20 bg-off-white border-y border-gray-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Meet the Speakers
            </h2>
            <p className="text-lg text-charcoal/70">
              Hear directly from industry leaders redefining portfolio construction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-24 h-24 mx-auto rounded-full bg-advisure-blue/5 flex items-center justify-center mb-6 border-2 border-advisure-gold/20 group-hover:border-advisure-gold transition-colors">
                  <span className="text-3xl text-advisure-blue font-bold">
                    {speaker.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-1">{speaker.name}</h3>
                <p className="text-advisure-blue font-semibold text-sm uppercase tracking-wider mb-4">{speaker.role}</p>
                <a 
                  href={speaker.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0077b5]/10 text-[#0077b5] hover:bg-[#0077b5] hover:text-white transition-colors"
                  aria-label={`${speaker.name}'s LinkedIn`}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 bg-advisure-blue text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%22 height=%22100%22 filter=%22url(%23n)%22 opacity=%220.15%22/%3E%3C/svg%3E')] mix-blend-soft-light opacity-30 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            The opportunity isn't incremental. <br/> <span className="text-advisure-gold">It's compounding!</span>
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Enable a more integrated approach to portfolio construction. Bring insurance and asset management together.
          </p>
          <a
            href={registerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-lift inline-flex items-center justify-center px-10 py-5 bg-advisure-gold text-white text-xl font-bold rounded-full shadow-xl transition-all hover:scale-105"
          >
            Register for the Webinar
          </a>
        </div>
      </section>
    </div>
  );
}
