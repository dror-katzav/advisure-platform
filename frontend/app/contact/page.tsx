export default function Contact() {
    return (
        <div style={{ background: '#141412', color: '#FAFAF8', minHeight: '100vh' }}>

            {/* ── HEADER ────────────────────────────── */}
            <div className="grain-overlay relative overflow-hidden" style={{ paddingTop: '10rem', paddingBottom: '5rem', paddingLeft: '3rem', paddingRight: '3rem', borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,169,110,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
                    <span className="eyebrow" style={{ display: 'block', marginBottom: '1.5rem' }}>Reach Out</span>
                    <h1 className="font-serif" style={{ fontSize: 'clamp(40px,6vw,72px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '1.5rem' }}>
                        Contact Us
                    </h1>
                    <p style={{ fontSize: 18, color: '#888780', maxWidth: 520, lineHeight: 1.75 }}>
                        Have questions? Our team is here to help you navigate the future of private placement insurance.
                    </p>
                </div>
            </div>

            {/* ── CONTENT ────────────────────────────── */}
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '5rem 3rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>

                    {/* Info Side */}
                    <div style={{ background: '#1E1E1B', border: '0.5px solid rgba(255,255,255,0.08)', padding: '3rem' }}>
                        <h2 className="font-serif" style={{ fontSize: 28, fontWeight: 300, color: '#FAFAF8', marginBottom: '1.25rem' }}>Get in touch</h2>
                        <p style={{ color: '#888780', lineHeight: 1.75, marginBottom: '3rem', fontSize: 15 }}>
                            Whether you are an RIA evaluating private placement for your clients or representing an institution interested in infrastructure collaboration, we look forward to connecting.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
                            <div style={{ background: '#141412', padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                                <div style={{ width: 36, height: 36, flexShrink: 0, background: '#1E1E1B', border: '0.5px solid rgba(46,125,212,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2E7DD4' }}>
                                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <p style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5F5E5A', marginBottom: '0.2rem' }}>Headquarters</p>
                                    <p style={{ fontSize: 15, color: '#2E7DD4' }}>Palo Alto, CA</p>
                                </div>
                            </div>
                            <div style={{ background: '#141412', padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                                <div style={{ width: 36, height: 36, flexShrink: 0, background: '#1E1E1B', border: '0.5px solid rgba(201,169,110,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C9A96E' }}>
                                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div>
                                    <p style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5F5E5A', marginBottom: '0.2rem' }}>Phone</p>
                                    <p style={{ fontSize: 15, color: '#C9A96E' }}>732-850-3079</p>
                                </div>
                            </div>
                            <div style={{ background: '#141412', padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                                <div style={{ width: 36, height: 36, flexShrink: 0, background: '#1E1E1B', border: '0.5px solid rgba(46,125,212,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2E7DD4' }}>
                                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <p style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5F5E5A', marginBottom: '0.2rem' }}>Email</p>
                                    <a href="mailto:info@advisure.ai" style={{ fontSize: 15, color: '#2E7DD4', textDecoration: 'none' }}>info@advisure.ai</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div style={{ background: '#1E1E1B', border: '0.5px solid rgba(255,255,255,0.08)', padding: '3rem' }}>
                        <form action="https://formspree.io/f/mojwbebe" method="POST">
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <label htmlFor="name" style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5F5E5A', display: 'block', marginBottom: '0.5rem' }}>Full Name</label>
                                    <input type="text" name="name" id="name" required placeholder="Jane Doe" style={{ width: '100%', background: '#282825', border: '0.5px solid rgba(255,255,255,0.1)', color: '#FAFAF8', padding: '0.85rem 1rem', fontSize: 14, outline: 'none', boxSizing: 'border-box' }} />
                                </div>
                                <div>
                                    <label htmlFor="email" style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5F5E5A', display: 'block', marginBottom: '0.5rem' }}>Work Email</label>
                                    <input type="email" name="email" id="email" required placeholder="jane@ria-firm.com" style={{ width: '100%', background: '#282825', border: '0.5px solid rgba(255,255,255,0.1)', color: '#FAFAF8', padding: '0.85rem 1rem', fontSize: 14, outline: 'none', boxSizing: 'border-box' }} />
                                </div>
                                <div>
                                    <label htmlFor="message" style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5F5E5A', display: 'block', marginBottom: '0.5rem' }}>How can we help?</label>
                                    <textarea name="message" id="message" rows={5} required placeholder="I'm interested in modeling PPLI for a client..." style={{ width: '100%', background: '#282825', border: '0.5px solid rgba(255,255,255,0.1)', color: '#FAFAF8', padding: '0.85rem 1rem', fontSize: 14, outline: 'none', boxSizing: 'border-box', resize: 'none', fontFamily: 'inherit' }} />
                                </div>
                                <button type="submit" className="btn-outline" style={{ width: '100%', padding: '0.9rem' }}>
                                    Send Message
                                </button>
                                <p style={{ fontSize: 11, color: '#5F5E5A', textAlign: 'center' }}>
                                    By submitting, you agree to our privacy policy and terms of service.
                                </p>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
