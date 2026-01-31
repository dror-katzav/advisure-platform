export default function Contact() {
    return (
        <div className="bg-off-white min-h-screen">
            <div className="bg-advisure-green py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
                    <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto font-medium">
                        Have questions? Our team is here to help you navigate the future of PPLI.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-3xl font-bold text-charcoal mb-6">Get in touch</h2>
                    <p className="text-lg text-charcoal/70 mb-10 leading-relaxed">
                        Whether you are an RIA looking to expand your services or a partner interested in collaboration, we would love to hear from you.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="h-12 w-12 bg-advisure-gold/10 rounded-full flex items-center justify-center text-advisure-gold shrink-0">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-charcoal">Address</h3>
                                <p className="text-charcoal/70">Palo Alto, CA</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="h-12 w-12 bg-advisure-gold/10 rounded-full flex items-center justify-center text-advisure-gold shrink-0">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-charcoal">Phone</h3>
                                <p className="text-charcoal/70">732-850-3079</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="h-12 w-12 bg-advisure-gold/10 rounded-full flex items-center justify-center text-advisure-gold shrink-0">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-charcoal">Email</h3>
                                <p className="text-charcoal/70">info@advisure.ai</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-advisure-silver/20">
                    <form action="https://formspree.io/f/mojwbebe" method="POST" className="grid grid-cols-1 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-bold text-charcoal mb-2">Full Name</label>
                            <input type="text" name="name" id="name" required className="w-full rounded-xl border-advisure-silver/30 shadow-sm focus:border-advisure-green focus:ring-advisure-green px-4 py-3 outline-none border transition-all" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-charcoal mb-2">Email Address</label>
                            <input type="email" name="email" id="email" required className="w-full rounded-xl border-advisure-silver/30 shadow-sm focus:border-advisure-green focus:ring-advisure-green px-4 py-3 outline-none border transition-all" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-bold text-charcoal mb-2">Your Message</label>
                            <textarea name="message" id="message" rows={4} required className="w-full rounded-xl border-advisure-silver/30 shadow-sm focus:border-advisure-green focus:ring-advisure-green px-4 py-3 outline-none border transition-all"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full py-4 px-6 bg-advisure-green text-white font-bold rounded-xl hover:bg-advisure-green/90 transition-all shadow-lg hover:shadow-xl">
                                Send Message
                            </button>
                        </div>
                        <p className="text-xs text-charcoal/40 text-center">
                            By submitting this form, you agree to our privacy policy.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
