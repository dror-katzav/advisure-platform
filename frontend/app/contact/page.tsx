export default function Contact() {
    return (
        <div className="bg-off-white font-sans text-charcoal pb-24 min-h-screen">
            <div className="bg-advisure-blue py-24 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden rounded-b-[3rem] lg:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%22 height=%22100%22 filter=%22url(%23n)%22 opacity=%220.15%22/%3E%3C/svg%3E')] mix-blend-soft-light opacity-50 pointer-events-none"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4">Contact <span className="text-gradient">Us</span></h1>
                    <p className="text-xl text-white/90 font-medium leading-relaxed">
                        Have questions? Our team is here to help you navigate the future of PPLI.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    
                    {/* Info Side */}
                    <div className="bg-white p-10 lg:p-12 rounded-3xl shadow-sm border border-gray-100 h-full flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-charcoal mb-6">Get in touch</h2>
                        <p className="text-lg text-charcoal/70 mb-10 leading-relaxed">
                            Whether you are an RIA evaluating private placement for your clients or representing an institution interested in infrastructure collaboration, we look forward to connecting.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 p-4 rounded-xl hover:bg-off-white transition-colors group">
                                <div className="h-14 w-14 bg-advisure-blue/5 rounded-full flex items-center justify-center text-advisure-blue shrink-0 group-hover:bg-advisure-blue group-hover:text-white transition-all">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-charcoal text-lg mb-1">Headquarters</h3>
                                    <p className="text-charcoal/60">Palo Alto, CA</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-6 p-4 rounded-xl hover:bg-off-white transition-colors group">
                                <div className="h-14 w-14 bg-advisure-gold/10 rounded-full flex items-center justify-center text-advisure-gold shrink-0 group-hover:bg-advisure-gold group-hover:text-white transition-all">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-charcoal text-lg mb-1">Phone</h3>
                                    <p className="text-charcoal/60">732-850-3079</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 p-4 rounded-xl hover:bg-off-white transition-colors group">
                                <div className="h-14 w-14 bg-advisure-blue/5 rounded-full flex items-center justify-center text-advisure-blue shrink-0 group-hover:bg-advisure-blue group-hover:text-white transition-all">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-charcoal text-lg mb-1">Email</h3>
                                    <a href="mailto:info@advisure.ai" className="text-advisure-blue font-medium hover:underline">info@advisure.ai</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-white p-10 lg:p-12 rounded-3xl shadow-xl border border-gray-100">
                        <form action="https://formspree.io/f/mojwbebe" method="POST" className="grid grid-cols-1 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-charcoal mb-2">Full Name</label>
                                <input type="text" name="name" id="name" required placeholder="Jane Doe" className="w-full rounded-xl bg-off-white border-transparent focus:bg-white focus:border-advisure-blue focus:ring-2 focus:ring-advisure-blue/20 px-4 py-4 outline-none transition-all placeholder:text-gray-400" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-charcoal mb-2">Work Email Address</label>
                                <input type="email" name="email" id="email" required placeholder="jane@ria-firm.com" className="w-full rounded-xl bg-off-white border-transparent focus:bg-white focus:border-advisure-blue focus:ring-2 focus:ring-advisure-blue/20 px-4 py-4 outline-none transition-all placeholder:text-gray-400" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-charcoal mb-2">How can we help?</label>
                                <textarea name="message" id="message" rows={5} required placeholder="I'm interested in modeling PPLI for a client..." className="w-full rounded-xl bg-off-white border-transparent focus:bg-white focus:border-advisure-blue focus:ring-2 focus:ring-advisure-blue/20 px-4 py-4 outline-none transition-all placeholder:text-gray-400 resize-none"></textarea>
                            </div>
                            <div className="pt-2">
                                <button type="submit" className="w-full py-4 px-6 bg-advisure-blue text-white font-bold rounded-xl hover:bg-advisure-blue/90 transition-all shadow-lg hover:shadow-xl hover-lift">
                                    Send Message
                                </button>
                            </div>
                            <p className="text-xs text-charcoal/40 text-center mt-2">
                                By submitting this form, you agree to our privacy policy and terms of service.
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
