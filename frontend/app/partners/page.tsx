import Link from 'next/link';

export default function Partners() {
    return (
        <div style={{ background: '#141412', color: '#FAFAF8' }}>

            {/* ── HERO ──────────────────────────────── */}
            <section className="grain-overlay relative overflow-hidden" style={{ paddingTop: '12rem', paddingBottom: '7rem', paddingLeft: '3rem', paddingRight: '3rem' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(29,158,117,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
                    <div className="reveal">
                        <span className="eyebrow" style={{ display: 'block', marginBottom: '1.5rem' }}>Our Ecosystem</span>
                    </div>
                    <h1 className="reveal d1 font-serif" style={{ fontSize: 'clamp(48px,7vw,88px)', fontWeight: 300, lineHeight: 1.08, letterSpacing: '-0.01em', maxWidth: 700, marginBottom: '2rem' }}>
                        Partner With Advisure
                    </h1>
                    <p className="reveal d2" style={{ fontSize: 18, color: '#888780', maxWidth: 540, lineHeight: 1.75 }}>
                        Helping bring private placement insurance into the modern RIA ecosystem.
                    </p>
                </div>
            </section>

            {/* ── BUILT FOR STRATEGIC COLLABORATION ─── */}
            <section style={{ borderTop: '0.5px solid rgba(255,255,255,0.06)', padding: '7rem 3rem' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
                    <div className="reveal-l">
                        <span className="eyebrow" style={{ display: 'block', marginBottom: '1.25rem' }}>The Approach</span>
                        <h2 className="font-serif" style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 300, lineHeight: 1.2, marginBottom: '1.5rem' }}>
                            Built for Strategic Collaboration
                        </h2>
                        <p style={{ color: '#888780', lineHeight: 1.75, marginBottom: '1rem', fontSize: 15 }}>
                            At Advisure, we don&apos;t just list logos. We integrate our partners&apos; capabilities directly into our technology platform so advisors can seamlessly deploy sophisticated solutions.
                        </p>
                        <p style={{ color: '#C9A96E', fontSize: 15, marginBottom: '2.5rem' }}>
                            Not a referral network. A fully integrated ecosystem.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {[
                                'Access tier-one carrier support without operational friction',
                                'Leverage institutional alternative asset strategies',
                                'Streamline funding and monitoring across custodians',
                                'Provide best-in-class integrated reporting to clients',
                            ].map((item) => (
                                <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.85rem 1rem', background: '#1E1E1B', border: '0.5px solid rgba(255,255,255,0.06)' }}>
                                    <span style={{ color: '#C9A96E', flexShrink: 0 }}>✓</span>
                                    <span style={{ fontSize: 13, color: '#888780' }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="reveal">
                        <span style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#5F5E5A', display: 'block', marginBottom: '1.5rem' }}>We work with</span>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
                            {[
                                { label: 'RIAs', desc: 'Independent advisors delivering private placement strategies to HNW clients.' },
                                { label: 'Insurance Carriers', desc: 'PPLI and PPVA carriers integrated directly into our submission and onboarding workflows.' },
                                { label: 'Wealth Platforms', desc: 'Portfolio reporting and data platforms enabling seamless position visibility.' },
                                { label: 'Asset Managers', desc: 'Institutional managers accessible within the private placement structure.' },
                                { label: 'Strategic Distribution Partners', desc: 'Organizations helping bring this capability to the broader RIA ecosystem.' },
                            ].map(({ label, desc }) => (
                                <div key={label} style={{ background: '#141412', padding: '1.5rem 1.75rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#1D9E75', flexShrink: 0, marginTop: 6 }} />
                                    <div>
                                        <p style={{ fontSize: 14, fontWeight: 500, color: '#FAFAF8', marginBottom: '0.2rem' }}>{label}</p>
                                        <p style={{ fontSize: 12, color: '#888780', lineHeight: 1.6 }}>{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── INTEGRATION NETWORK ──────────────── */}
            <section style={{ background: '#0E0E0C', borderTop: '0.5px solid rgba(255,255,255,0.06)', padding: '7rem 3rem' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <div className="reveal" style={{ marginBottom: '4rem', textAlign: 'center' }}>
                        <span className="eyebrow" style={{ display: 'block', marginBottom: '1.25rem' }}>Our Integration Network</span>
                        <h2 className="font-serif" style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 300, lineHeight: 1.15, marginBottom: '1rem' }}>
                            Connecting the Ecosystem
                        </h2>
                        <p style={{ color: '#5F5E5A', fontSize: 13 }}>Partnerships actively forming — logos coming soon.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div key={i} className="reveal" style={{ background: '#141412', height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.4 }}>
                                <span style={{ fontSize: 10, color: '#5F5E5A', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Coming soon</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── HOW WE WORK TOGETHER ─────────────── */}
            <section style={{ borderTop: '0.5px solid rgba(255,255,255,0.06)', padding: '7rem 3rem' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
                    <div className="reveal-l">
                        <span className="eyebrow" style={{ display: 'block', marginBottom: '1.25rem' }}>The Partnership</span>
                        <h2 className="font-serif" style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 300, lineHeight: 1.2, marginBottom: '1.5rem' }}>
                            A Flexible Partnership Approach
                        </h2>
                        <p style={{ color: '#888780', lineHeight: 1.75, marginBottom: '2rem', fontSize: 15 }}>Partnerships may include:</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
                            {['Education and market development', 'Advisor engagement and onboarding', 'Integration and platform alignment', 'Ongoing collaboration and support'].map((item) => (
                                <div key={item} style={{ background: '#141412', padding: '1.25rem 1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#C9A96E', flexShrink: 0 }} />
                                    <span style={{ fontSize: 14, color: '#888780' }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="reveal" style={{ background: '#1E1E1B', border: '0.5px solid rgba(255,255,255,0.08)', borderTop: '3px solid #1D9E75', padding: '3rem' }}>
                        <h2 className="font-serif" style={{ fontSize: 28, fontWeight: 300, color: '#FAFAF8', marginBottom: '1.25rem', lineHeight: 1.3 }}>
                            Expanding Access to a Better Structure
                        </h2>
                        <p style={{ color: '#888780', lineHeight: 1.75, marginBottom: '1.5rem', fontSize: 14 }}>
                            Private placement has historically been limited by access and complexity. Together, we can bring it into broader use — aligned with how RIAs actually operate.
                        </p>
                        <p style={{ color: '#C9A96E', fontSize: 15 }}>
                            We&apos;re building the infrastructure for the next phase of wealth management.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── CTA ─────────────────────────────── */}
            <section style={{ background: '#0E0E0C', borderTop: '0.5px solid rgba(255,255,255,0.06)', padding: '8rem 3rem', textAlign: 'center' }}>
                <div className="reveal" style={{ maxWidth: 560, margin: '0 auto' }}>
                    <h2 className="font-serif" style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 300, lineHeight: 1.2, marginBottom: '2rem' }}>
                        Interested in becoming a platform partner?
                    </h2>
                    <Link href="/contact" className="btn-outline btn-outline-lg">
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    );
}
