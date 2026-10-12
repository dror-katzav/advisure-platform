export default function ScheduleDemo() {
    return (
        <div style={{ background: '#FBFBFA', color: '#141412', minHeight: '100vh' }}>

            {/* ── HEADER ────────────────────────────── */}
            <div className="relative overflow-hidden" style={{ paddingTop: '10rem', paddingBottom: '5rem', paddingLeft: '3rem', paddingRight: '3rem', borderBottom: '1px solid rgba(0, 0, 0, 0.06)', background: '#F4F4F0' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,111,62,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
                    <span className="eyebrow" style={{ display: 'block', marginBottom: '1.5rem' }}>Get Started</span>
                    <h1 className="font-serif text-[#141412]" style={{ fontSize: 'clamp(40px,6vw,72px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '1.5rem' }}>
                        Schedule a Conversation
                    </h1>
                    <p style={{ fontSize: 18, color: '#5F5E5A', maxWidth: 540, margin: '0 auto', lineHeight: 1.75 }}>
                        Let&apos;s talk about how private placement fits into your portfolio strategy — and how Advisure makes it operationally seamless.
                    </p>
                </div>
            </div>

            {/* ── BOOKING ────────────────────────────── */}
            <div style={{ maxWidth: 900, margin: '0 auto', padding: '5rem 3rem' }}>
                <div style={{ background: '#FFFFFF', border: '1px solid rgba(0, 0, 0, 0.08)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)', padding: '3.5rem' }}>
                    <p style={{ textAlign: 'center', color: '#5F5E5A', fontSize: 15, marginBottom: '2.5rem' }}>
                        Personalized walkthrough of our platform and solutions.
                    </p>

                    <div style={{ textAlign: 'center', padding: '3rem 2rem', background: '#F8F8F6', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 4 }}>
                        <p className="font-serif" style={{ fontSize: 26, fontWeight: 400, color: '#141412', marginBottom: '0.75rem' }}>
                            Choose a time that works for you
                        </p>
                        <p style={{ fontSize: 14, color: '#5F5E5A', marginBottom: '2.5rem' }}>
                            Opens Google Calendar — pick a slot and confirm your details.
                        </p>
                        <a
                            href="https://calendar.app.google/XQv12xk3h8DHtiNR6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.9rem 2rem' }}
                        >
                            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Book a Time
                        </a>
                    </div>

                    <div style={{ marginTop: '3rem', paddingTop: '3rem', borderTop: '1px solid rgba(0, 0, 0, 0.06)', display: 'flex', gap: '3rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: 44, height: 44, background: '#FBF7EE', border: '1px solid rgba(139,111,62,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>
                                <svg width="18" height="18" fill="none" stroke="#8B6F3E" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <p style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888780', marginBottom: '0.2rem', fontWeight: 600 }}>Call us</p>
                                <p style={{ fontSize: 15, color: '#8B6F3E', fontWeight: 500 }}>732-850-3079</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: 44, height: 44, background: '#FBF7EE', border: '1px solid rgba(139,111,62,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>
                                <svg width="18" height="18" fill="none" stroke="#8B6F3E" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <p style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888780', marginBottom: '0.2rem', fontWeight: 600 }}>Email us</p>
                                <p style={{ fontSize: 15, color: '#8B6F3E', fontWeight: 500 }}>info@advisure.ai</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
