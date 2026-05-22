export default function ScheduleDemo() {
    return (
        <div style={{ background: '#141412', color: '#FAFAF8', minHeight: '100vh' }}>

            {/* ── HEADER ────────────────────────────── */}
            <div className="grain-overlay relative overflow-hidden" style={{ paddingTop: '10rem', paddingBottom: '5rem', paddingLeft: '3rem', paddingRight: '3rem', borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,169,110,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
                    <span className="eyebrow" style={{ display: 'block', marginBottom: '1.5rem' }}>Get Started</span>
                    <h1 className="font-serif" style={{ fontSize: 'clamp(40px,6vw,72px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '1.5rem' }}>
                        Schedule a Conversation
                    </h1>
                    <p style={{ fontSize: 18, color: '#888780', maxWidth: 540, margin: '0 auto', lineHeight: 1.75 }}>
                        Let&apos;s talk about how private placement fits into your portfolio strategy — and how Advisure makes it operationally seamless.
                    </p>
                </div>
            </div>

            {/* ── BOOKING ────────────────────────────── */}
            <div style={{ maxWidth: 900, margin: '0 auto', padding: '5rem 3rem' }}>
                <div style={{ background: '#1E1E1B', border: '0.5px solid rgba(255,255,255,0.08)', padding: '3rem' }}>
                    <p style={{ textAlign: 'center', color: '#888780', fontSize: 15, marginBottom: '2.5rem' }}>
                        Personalized walkthrough of our platform and solutions.
                    </p>

                    <div style={{ width: '100%', overflow: 'hidden', background: '#fff' }}>
                        <iframe
                            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2aDAPLkykWNZZF5G5hXQv9L6xqI3p09jQYhPlN5PAHEwnSgpoOfmr3J58EP2WloVVhCz5_Byq9?gv=true"
                            style={{ border: 0, display: 'block' }}
                            width="100%"
                            height="700"
                            frameBorder="0"
                        />
                    </div>

                    <div style={{ marginTop: '3rem', paddingTop: '3rem', borderTop: '0.5px solid rgba(255,255,255,0.06)', display: 'flex', gap: '3rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: 40, height: 40, background: '#282825', border: '0.5px solid rgba(201,169,110,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <svg width="16" height="16" fill="none" stroke="#C9A96E" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <p style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5F5E5A', marginBottom: '0.2rem' }}>Call us</p>
                                <p style={{ fontSize: 15, color: '#C9A96E' }}>732-850-3079</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: 40, height: 40, background: '#282825', border: '0.5px solid rgba(201,169,110,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <svg width="16" height="16" fill="none" stroke="#C9A96E" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <p style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5F5E5A', marginBottom: '0.2rem' }}>Email us</p>
                                <p style={{ fontSize: 15, color: '#C9A96E' }}>info@advisure.ai</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
