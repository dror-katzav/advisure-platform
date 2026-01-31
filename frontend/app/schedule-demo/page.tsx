export default function ScheduleDemo() {
    return (
        <div className="bg-off-white min-h-screen">
            <div className="bg-advisure-green py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">Schedule a Demo</h1>
                    <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
                        See how Advisure can transform your RIA practice with institutional-quality PPLI infrastructure.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-advisure-silver/20">
                    <div className="mb-12 text-center">
                        <h2 className="text-2xl font-bold text-charcoal">Choose a time that works for you</h2>
                        <p className="text-charcoal/60 mt-2">Personalized walkthrough of our platform and solutions.</p>
                    </div>

                    {/* Google Calendar Booking Widget */}
                    <div className="w-full bg-white rounded-2xl overflow-hidden shadow-inner border border-advisure-silver/10">
                        <iframe
                            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2aDAPLkykWNZZF5G5hXQv9L6xqI3p09jQYhPlN5PAHEwnSgpoOfmr3J58EP2WloVVhCz5_Byq9?gv=true"
                            style={{ border: 0 }}
                            width="100%"
                            height="700"
                            frameBorder="0"
                        ></iframe>
                    </div>

                    <div className="mt-12 pt-12 border-t border-advisure-silver/20 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 bg-advisure-gold/10 rounded-full flex items-center justify-center text-advisure-gold">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-charcoal">Call us directly</p>
                                <p className="text-advisure-green font-medium">732-850-3079</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 bg-advisure-gold/10 rounded-full flex items-center justify-center text-advisure-gold">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-charcoal">Email us</p>
                                <p className="text-advisure-green font-medium">info@advisure.ai</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
