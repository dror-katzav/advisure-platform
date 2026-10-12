import Link from 'next/link';

export default function Partners() {
    return (
        <div style={{ background: '#FBFBFA', color: '#141412' }}>

            {/* ── HERO ──────────────────────────────── */}
            <section className="grain-overlay relative overflow-hidden" style={{ paddingTop: '10rem', paddingBottom: '6rem', paddingLeft: '3rem', paddingRight: '3rem' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(15,110,86,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
                    <div className="reveal">
                        <span className="eyebrow" style={{ display: 'block', marginBottom: '1.5rem' }}>Our Ecosystem</span>
                    </div>
                    <h1 className="reveal d1 font-serif" style={{ fontSize: 'clamp(48px,7vw,88px)', fontWeight: 300, lineHeight: 1.08, letterSpacing: '-0.01em', maxWidth: 700, marginBottom: '2rem', color: '#141412' }}>
                        Partner With Advisure
                    </h1>
                    <p className="reveal d2" style={{ fontSize: 18, color: '#5F5E5A', maxWidth: 540, lineHeight: 1.75 }}>
                        Helping bring private placement insurance into the modern RIA ecosystem.
                    </p>
                </div>
            </section>

            {/* ── BUILT FOR STRATEGIC COLLABORATION ─── */}
            <section style={{ borderTop: '1px solid rgba(0,0,0,0.08)', padding: '7rem 3rem', background: '#FFFFFF' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
                    <div className="reveal-l">
                        <span className="eyebrow" style={{ display: 'block', marginBottom: '1.25rem' }}>The Approach</span>
                        <h2 className="font-serif" style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 300, lineHeight: 1.2, marginBottom: '1.5rem', color: '#141412' }}>
                            Built for Strategic Collaboration
                        </h2>
                        <p style={{ color: '#5F5E5A', lineHeight: 1.75, marginBottom: '1rem', fontSize: 15 }}>
                            At Advisure, we don&apos;t just list logos. We integrate our partners&apos; capabilities directly into our technology platform so advisors can seamlessly deploy sophisticated solutions.
                        </p>
                        <p style={{ color: '#8B6F3E', fontSize: 15, marginBottom: '2.5rem', fontWeight: 500 }}>
                            Not a referral network. A fully integrated ecosystem.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {[
                                'Access tier-one carrier support without operational friction',
                                'Leverage institutional alternative asset strategies',
                                'Streamline funding and monitoring across custodians',
                                'Provide best-in-class integrated reporting to clients',
                            ].map((item) => (
                                <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.85rem 1rem', background: '#F8F8F6', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 4 }}>
                                    <span style={{ color: '#8B6F3E', flexShrink: 0, fontWeight: 600 }}>✓</span>
                                    <span style={{ fontSize: 13, color: '#5F5E5A' }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="reveal">
                        <span style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888780', display: 'block', marginBottom: '1.5rem', fontWeight: 600 }}>We work with</span>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {[
                                { label: 'RIAs', desc: 'Independent advisors delivering private placement strategies to HNW clients.' },
                                { label: 'Insurance Carriers', desc: 'PPLI and PPVA carriers integrated directly into our submission and onboarding workflows.' },
                                { label: 'Wealth Platforms', desc: 'Portfolio reporting and data platforms enabling seamless position visibility.' },
                                { label: 'Asset Managers', desc: 'Institutional managers accessible within the private placement structure.' },
                                { label: 'Strategic Distribution Partners', desc: 'Organizations helping bring this capability to the broader RIA ecosystem.' },
                            ].map(({ label, desc }) => (
                                <div key={label} style={{ background: '#F8F8F6', padding: '1.5rem 1.75rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start', borderRadius: 6, border: '1px solid rgba(0,0,0,0.06)' }}>
                                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#0F6E56', flexShrink: 0, marginTop: 6 }} />
                                    <div>
                                        <p style={{ fontSize: 15, fontWeight: 600, color: '#141412', marginBottom: '0.2rem' }}>{label}</p>
                                        <p style={{ fontSize: 13, color: '#5F5E5A', lineHeight: 1.6 }}>{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── INTEGRATION NETWORK ──────────────── */}
            <section style={{ background: '#F8F8F6', borderTop: '1px solid rgba(0,0,0,0.08)', padding: '7rem 3rem' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <div className="reveal" style={{ marginBottom: '4rem', textAlign: 'center' }}>
                        <span className="eyebrow" style={{ display: 'block', marginBottom: '1.25rem' }}>Our Integration Network</span>
                        <h2 className="font-serif" style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 300, lineHeight: 1.15, marginBottom: '1rem', color: '#141412' }}>
                            Connecting the Ecosystem
                        </h2>
                        <p style={{ color: '#5F5E5A', fontSize: 14 }}>Partnerships actively forming — logos coming soon.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '12px' }}>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div key={i} className="reveal" style={{ background: '#FFFFFF', height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 6, border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
                                <span style={{ fontSize: 11, color: '#888780', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>Coming soon</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── HOW WE WORK TOGETHER ─────────────── */}
            <section style={{ borderTop: '1px solid rgba(0,0,0,0.08)', padding: '7rem 3rem', background: '#FFFFFF' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
                    <div className="reveal-l">
                        <span className="eyebrow" style={{ display: 'block', marginBottom: '1.25rem' }}>The Partnership</span>
                        <h2 className="font-serif" style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 300, lineHeight: 1.2, marginBottom: '1.5rem', color: '#141412' }}>
                            A Flexible Partnership Approach
                        </h2>
                        <p style={{ color: '#5F5E5A', lineHeight: 1.75, marginBottom: '2rem', fontSize: 15 }}>Partnerships may include:</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {['Education and market development', 'Advisor engagement and onboarding', 'Integration and platform alignment', 'Ongoing collaboration and support'].map((item) => (
                                <div key={item} style={{ background: '#F8F8F6', padding: '1.25rem 1.5rem', display: 'flex', gap: '1rem', alignItems: 'center', borderRadius: 4, border: '1px solid rgba(0,0,0,0.05)' }}>
                                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#8B6F3E', flexShrink: 0 }} />
                                    <span style={{ fontSize: 14, color: '#141412', fontWeight: 450 }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="reveal" style={{ background: '#F8F8F6', border: '1px solid rgba(0,0,0,0.08)', borderTop: '3px solid #0F6E56', padding: '3rem', borderRadius: 8 }}>
                        <h2 className="font-serif" style={{ fontSize: 28, fontWeight: 300, color: '#141412', marginBottom: '1.25rem', lineHeight: 1.3 }}>
                            Expanding Access to a Better Structure
                        </h2>
                        <p style={{ color: '#5F5E5A', lineHeight: 1.75, marginBottom: '1.5rem', fontSize: 14 }}>
                            Private placement has historically been limited by access and complexity. Together, we can bring it into broader use — aligned with how RIAs actually operate.
                        </p>
                        <p style={{ color: '#8B6F3E', fontSize: 15, fontWeight: 500 }}>
                            We&apos;re building the infrastructure for the next phase of wealth management.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── CTA ─────────────────────────────── */}
            <section style={{ background: '#F4F4F0', borderTop: '1px solid rgba(0,0,0,0.08)', padding: '8rem 3rem', textAlign: 'center' }}>
                <div className="reveal" style={{ maxWidth: 560, margin: '0 auto' }}>
                    <h2 className="font-serif" style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 300, lineHeight: 1.2, marginBottom: '2rem', color: '#141412' }}>
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
