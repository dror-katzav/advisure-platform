import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Webinar: Bridging the Gap Between Investment and Insurance | Advisure',
    description: 'Join our live discussion on integrating insurance and asset management to create more efficient, tax-aware client portfolios.',
};

const registerLink = 'https://webinar.zoho.com/meeting/register?sessionId=1066174356';

const speakers = [
    { name: 'Zayda Marrie', role: 'Speaker', color: '#C9A96E', linkedin: 'https://www.linkedin.com/in/zaydamarrie' },
    { name: 'Don Plotsky', role: 'Speaker', color: '#2E7DD4', linkedin: 'https://www.linkedin.com/in/don-plotsky-2882b282/' },
    { name: 'Dror Katzav', role: 'Speaker', color: '#1D9E75', linkedin: 'https://www.linkedin.com/in/dror-katzav/' },
    { name: 'Corey Rickman', role: 'Moderator', color: '#C9A96E', linkedin: 'https://www.linkedin.com/in/corey-rickman-971286138/' },
];

export default function WebinarPage() {
    return (
        <div style={{ background: '#141412', color: '#FAFAF8' }}>

            {/* ── HERO ──────────────────────────────── */}
            <section className="grain-overlay relative overflow-hidden" style={{ paddingTop: '11rem', paddingBottom: '7rem', paddingLeft: '3rem', paddingRight: '3rem' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,169,110,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

                <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>

                    {/* Live badge */}
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '5px 14px', border: '0.5px solid rgba(201,169,110,0.3)', marginBottom: '2rem' }}>
                        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#C9A96E', display: 'inline-block', animation: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite' }} />
                        <span style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A96E' }}>Live Webinar Discussion</span>
                    </div>

                    <h1 className="font-serif" style={{ fontSize: 'clamp(40px,6vw,80px)', fontWeight: 300, lineHeight: 1.08, letterSpacing: '-0.01em', maxWidth: 820, marginBottom: '2rem' }}>
                        Bridging the Gap Between{' '}
                        <em style={{ fontStyle: 'italic', color: '#C9A96E' }}>Investment and Insurance</em>
                    </h1>

                    <p style={{ fontSize: 18, color: '#888780', maxWidth: 580, lineHeight: 1.75, marginBottom: '3.5rem' }}>
                        Investment + Insurance, Reimagined. Discover how to create more efficient, tax-aware client portfolios.
                    </p>

                    {/* Date + CTA card */}
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '3rem', background: '#1E1E1B', border: '0.5px solid rgba(255,255,255,0.08)', padding: '2rem 2.5rem', flexWrap: 'wrap' }}>
                        <div>
                            <p style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '0.4rem' }}>Date &amp; Time</p>
                            <p style={{ fontSize: 22, fontWeight: 500, color: '#FAFAF8' }}>Tuesday, June 16th</p>
                            <p style={{ fontSize: 15, color: '#888780', marginTop: '0.2rem' }}>3:00 PM EDT</p>
                        </div>
                        <div style={{ width: '0.5px', height: 48, background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />
                        <a href={registerLink} target="_blank" rel="noopener noreferrer" className="btn-outline btn-outline-lg">
                            Reserve Your Spot
                        </a>
                    </div>
                </div>
            </section>

            {/* ── WHY IT MATTERS ───────────────────── */}
            <section style={{ background: '#0E0E0C', borderTop: '0.5px solid rgba(255,255,255,0.06)', padding: '7rem 3rem' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>

                    <div className="reveal-l">
                        <span className="eyebrow" style={{ display: 'block', marginBottom: '1.25rem' }}>Why It Matters</span>
                        <h2 className="font-serif" style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 300, lineHeight: 1.2, marginBottom: '1.5rem' }}>
                            Insurance as Both Allocation and Location
                        </h2>
                        <p style={{ color: '#888780', lineHeight: 1.75, marginBottom: '2rem', fontSize: 15 }}>
                            Insurance has long been used for protection and planning. But in modern portfolios, it can serve a much broader role — as both an{' '}
                            <span style={{ color: '#FAFAF8' }}>asset allocation tool</span>{' '}
                            and an{' '}
                            <span style={{ color: '#FAFAF8' }}>asset location strategy</span>.
                        </p>

                        <p style={{ fontSize: 13, color: '#5F5E5A', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>It creates the opportunity to:</p>
                        {[
                            'Improve after-tax outcomes',
                            'Enhance portfolio efficiency',
                            'Access institutional-quality investments',
                            'Better align long-term client objectives',
                        ].map((item) => (
                            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.85rem 0', borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}>
                                <span style={{ color: '#C9A96E', flexShrink: 0 }}>✓</span>
                                <span style={{ fontSize: 14, color: '#888780' }}>{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="reveal" style={{ background: '#141412', border: '0.5px solid rgba(255,255,255,0.08)', padding: '2.5rem', borderTop: '3px solid #C9A96E' }}>
                        <h3 className="font-serif" style={{ fontSize: 22, fontWeight: 300, color: '#FAFAF8', marginBottom: '1rem', lineHeight: 1.3 }}>
                            The Hidden Cost of Tax Drag
                        </h3>
                        <p style={{ color: '#888780', lineHeight: 1.75, marginBottom: '2rem', fontSize: 14 }}>
                            Tax inefficiency can silently erode{' '}
                            <span style={{ color: '#C9A96E', fontWeight: 500 }}>200–400 bps annually</span>{' '}
                            from high-net-worth portfolios. Over time, even modest tax drag translates into a meaningful reduction in long-term client outcomes.
                        </p>
                        <div style={{ background: '#1E1E1B', border: '0.5px solid rgba(255,255,255,0.06)', padding: '1.5rem' }}>
                            <p style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5F5E5A', marginBottom: '1rem' }}>Where tax drag appears most:</p>
                            {['High-turnover strategies', 'Income-generating assets', 'Alternative investments'].map((item) => (
                                <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', padding: '0.4rem 0' }}>
                                    <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#C9A96E', flexShrink: 0 }} />
                                    <span style={{ fontSize: 13, color: '#888780' }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SPEAKERS ─────────────────────────── */}
            <section style={{ borderTop: '0.5px solid rgba(255,255,255,0.06)', padding: '7rem 3rem' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>

                    <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <span className="eyebrow" style={{ display: 'block', marginBottom: '1.25rem' }}>Meet the Speakers</span>
                        <h2 className="font-serif" style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 300, lineHeight: 1.15 }}>
                            Industry leaders redefining portfolio construction.
                        </h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
                        {speakers.map(({ name, role, color, linkedin }) => (
                            <div key={name} className="reveal" style={{ background: '#141412', padding: '2.5rem 2rem', textAlign: 'center', borderTop: `3px solid ${color}` }}>
                                <div style={{ width: 56, height: 56, margin: '0 auto 1.25rem', background: '#1E1E1B', border: `0.5px solid ${color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 500, color }}>
                                    {name.charAt(0)}
                                </div>
                                <p style={{ fontSize: 16, fontWeight: 500, color: '#FAFAF8', marginBottom: '0.3rem' }}>{name}</p>
                                <p style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color, marginBottom: '1.25rem' }}>{role}</p>
                                <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${name} LinkedIn`} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, background: '#1E1E1B', border: '0.5px solid rgba(255,255,255,0.08)', color: '#0077b5', textDecoration: 'none' }}>
                                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ────────────────────────── */}
            <section style={{ background: '#0E0E0C', borderTop: '0.5px solid rgba(255,255,255,0.06)', padding: '8rem 3rem', textAlign: 'center' }}>
                <div className="reveal" style={{ maxWidth: 640, margin: '0 auto' }}>
                    <h2 className="font-serif" style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 300, lineHeight: 1.15, marginBottom: '1.25rem' }}>
                        The opportunity isn&apos;t incremental.
                    </h2>
                    <p style={{ fontSize: 22, color: '#C9A96E', marginBottom: '1.5rem' }}>
                        It&apos;s compounding.
                    </p>
                    <p style={{ color: '#888780', lineHeight: 1.75, marginBottom: '3rem', fontSize: 16 }}>
                        Enable a more integrated approach to portfolio construction. Bring insurance and asset management together.
                    </p>
                    <a href={registerLink} target="_blank" rel="noopener noreferrer" className="btn-outline btn-outline-lg">
                        Register for the Webinar
                    </a>
                </div>
            </section>
        </div>
    );
}
