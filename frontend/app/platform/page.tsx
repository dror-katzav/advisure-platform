import Link from 'next/link';

export default function Platform() {
    return (
        <div style={{ background: '#141412', color: '#FAFAF8' }}>

            {/* ── HERO ──────────────────────────────── */}
            <section className="grain-overlay relative overflow-hidden" style={{ paddingTop: '12rem', paddingBottom: '7rem', paddingLeft: '3rem', paddingRight: '3rem' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(46,125,212,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
                    <div className="reveal">
                        <span className="eyebrow" style={{ display: 'block', marginBottom: '1.5rem' }}>The Platform</span>
                    </div>
                    <h1 className="reveal d1 font-serif" style={{ fontSize: 'clamp(48px,7vw,88px)', fontWeight: 300, lineHeight: 1.08, letterSpacing: '-0.01em', maxWidth: 780, marginBottom: '2rem' }}>
                        How Advisure Works
                    </h1>
                    <p className="reveal d2" style={{ fontSize: 18, color: '#888780', maxWidth: 560, lineHeight: 1.75 }}>
                        Private placement insurance — integrated into your strategies, without the operational friction and complexity.
                    </p>
                </div>
            </section>

            {/* ── OVERVIEW ─────────────────────────── */}
            <section style={{ borderTop: '0.5px solid rgba(255,255,255,0.06)', padding: '5rem 3rem' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
                    <div className="reveal-l">
                        <h2 className="font-serif" style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 300, lineHeight: 1.2, marginBottom: '1.5rem' }}>
                            A Simpler Way to Implement Private Placement
                        </h2>
                        <p style={{ color: '#888780', lineHeight: 1.75, marginBottom: '1.25rem', fontSize: 15 }}>
                            Advisure brings together RIAs, carriers, and asset managers into a single, integrated workflow — removing the friction that has historically limited adoption.
                        </p>
                        <p style={{ color: '#888780', lineHeight: 1.75, fontSize: 15 }}>
                            You maintain your investment process. We handle the complexity behind the scenes.
                        </p>
                    </div>
                    <div className="reveal" style={{ background: '#1E1E1B', border: '0.5px solid rgba(255,255,255,0.08)', padding: '2.5rem' }}>
                        {[
                            'Fully integrated into your portfolio workflows',
                            'Visible within your reporting ecosystem',
                            'Operationally seamless across carriers and managers',
                            'Scalable across your entire client base',
                        ].map((item) => (
                            <div key={item} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '0.85rem 0', borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}>
                                <span style={{ color: '#C9A96E', flexShrink: 0, fontWeight: 500 }}>✓</span>
                                <span style={{ fontSize: 14, color: '#888780' }}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── THREE STEPS ──────────────────────── */}
            <section style={{ background: '#0E0E0C', borderTop: '0.5px solid rgba(255,255,255,0.06)', padding: '7rem 3rem' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>

                    <div className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <span className="eyebrow" style={{ display: 'block', marginBottom: '1.25rem' }}>The Process</span>
                        <h2 className="font-serif" style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 300, lineHeight: 1.15 }}>
                            From Allocation to Ongoing Management
                        </h2>
                        <p style={{ color: '#888780', marginTop: '1rem', fontSize: 15 }}>Three steps. One integrated workflow.</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>

                        {/* Step 1 — Allocate */}
                        <div className="reveal" style={{ background: '#141412', padding: '3rem', display: 'grid', gridTemplateColumns: '80px 1fr 1fr', gap: '3rem', alignItems: 'start', borderLeft: '3px solid #C9A96E' }}>
                            <span style={{ fontSize: 11, fontFamily: 'monospace', color: '#5F5E5A' }}>01</span>
                            <div>
                                <span style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A96E', display: 'block', marginBottom: '1rem' }}>You do this</span>
                                <h3 className="font-serif" style={{ fontSize: 32, fontWeight: 300, color: '#FAFAF8', marginBottom: '0.75rem' }}>Allocate</h3>
                                <p style={{ fontSize: 14, color: '#888780', lineHeight: 1.75 }}>
                                    Incorporate private placement as part of your portfolio strategy — just like any other allocation.
                                </p>
                            </div>
                            <div style={{ background: 'rgba(201,169,110,0.04)', border: '0.5px solid rgba(201,169,110,0.15)', padding: '1.5rem' }}>
                                {['Align with client objectives', 'Allocate alongside traditional and alternative assets', 'No change to your portfolio construction approach'].map((item) => (
                                    <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.5rem 0' }}>
                                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#C9A96E', flexShrink: 0, marginTop: 6 }} />
                                        <span style={{ fontSize: 13, color: '#888780' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Step 2 — Structure & Integrate */}
                        <div className="reveal" style={{ background: '#141412', padding: '3rem', display: 'grid', gridTemplateColumns: '80px 1fr 1fr', gap: '3rem', alignItems: 'start', borderLeft: '3px solid #2E7DD4' }}>
                            <span style={{ fontSize: 11, fontFamily: 'monospace', color: '#5F5E5A' }}>02</span>
                            <div>
                                <span style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#2E7DD4', display: 'block', marginBottom: '1rem' }}>Advisure handles this</span>
                                <h3 className="font-serif" style={{ fontSize: 32, fontWeight: 300, color: '#FAFAF8', marginBottom: '0.75rem' }}>Structure &amp; Integrate</h3>
                                <p style={{ fontSize: 14, color: '#888780', lineHeight: 1.75 }}>
                                    Advisure coordinates across carriers, managers, and legal structures to implement the allocation.
                                </p>
                            </div>
                            <div style={{ background: 'rgba(46,125,212,0.04)', border: '0.5px solid rgba(46,125,212,0.15)', padding: '1.5rem' }}>
                                {['Carrier selection and structuring', 'Integration with underlying investments', 'Elimination of manual workflows', 'Fully managed operational process'].map((item) => (
                                    <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.5rem 0' }}>
                                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#2E7DD4', flexShrink: 0, marginTop: 6 }} />
                                        <span style={{ fontSize: 13, color: '#888780' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Step 3 — Manage */}
                        <div className="reveal" style={{ background: '#141412', padding: '3rem', display: 'grid', gridTemplateColumns: '80px 1fr 1fr', gap: '3rem', alignItems: 'start', borderLeft: '3px solid #1D9E75' }}>
                            <span style={{ fontSize: 11, fontFamily: 'monospace', color: '#5F5E5A' }}>03</span>
                            <div>
                                <span style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#1D9E75', display: 'block', marginBottom: '1rem' }}>Back in your hands</span>
                                <h3 className="font-serif" style={{ fontSize: 32, fontWeight: 300, color: '#FAFAF8', marginBottom: '0.75rem' }}>Manage</h3>
                                <p style={{ fontSize: 14, color: '#888780', lineHeight: 1.75 }}>
                                    Ongoing management is fully aligned with how you already operate.
                                </p>
                            </div>
                            <div style={{ background: 'rgba(29,158,117,0.04)', border: '0.5px solid rgba(29,158,117,0.15)', padding: '1.5rem' }}>
                                {['Visibility within your reporting ecosystem', 'Ongoing monitoring and servicing', 'Seamless experience for advisor and client'].map((item) => (
                                    <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.5rem 0' }}>
                                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#1D9E75', flexShrink: 0, marginTop: 6 }} />
                                        <span style={{ fontSize: 13, color: '#888780' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WE HANDLE THE COMPLEXITY ─────────── */}
            <section style={{ borderTop: '0.5px solid rgba(255,255,255,0.06)', padding: '7rem 3rem' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
                    <div className="reveal-l">
                        <span className="eyebrow" style={{ display: 'block', marginBottom: '1.25rem' }}>Behind the Scenes</span>
                        <h2 className="font-serif" style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 300, lineHeight: 1.2, marginBottom: '1.5rem' }}>
                            We Handle the Complexity — So You Don&apos;t Have To
                        </h2>
                        <p style={{ color: '#888780', lineHeight: 1.75, marginBottom: '2rem', fontSize: 15 }}>
                            Private placement has historically required navigating fragmented processes across multiple parties. Advisure centralizes that complexity into a single platform — coordinating:
                        </p>
                        {['Insurance carriers', 'Investment managers', 'Legal and administrative workflows'].map((item) => (
                            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 0', borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}>
                                <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#2E7DD4', flexShrink: 0 }} />
                                <span style={{ fontSize: 14, color: '#888780' }}>{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="reveal" style={{ background: '#1E1E1B', border: '0.5px solid rgba(255,255,255,0.08)', padding: '3.5rem 3rem' }}>
                        <p className="font-serif" style={{ fontSize: 28, fontWeight: 300, color: '#FAFAF8', lineHeight: 1.35, marginBottom: '1.5rem' }}>
                            What was once manual and disconnected
                        </p>
                        <p style={{ fontSize: 18, color: '#C9A96E', fontWeight: 400 }}>
                            now becomes streamlined and scalable.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── CTA ─────────────────────────────── */}
            <section style={{ background: '#0E0E0C', borderTop: '0.5px solid rgba(255,255,255,0.06)', padding: '8rem 3rem', textAlign: 'center' }}>
                <div className="reveal" style={{ maxWidth: 600, margin: '0 auto' }}>
                    <h2 className="font-serif" style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 300, lineHeight: 1.15, marginBottom: '1.5rem' }}>
                        Ready to see it in action?
                    </h2>
                    <p style={{ color: '#888780', lineHeight: 1.75, marginBottom: '3rem', fontSize: 16 }}>
                        Book a conversation to see how Advisure strips away the complexity of private placement so you can scale institutional solutions for your clients.
                    </p>
                    <Link href="/schedule-demo" className="btn-outline btn-outline-lg">
                        Schedule a Conversation
                    </Link>
                </div>
            </section>
        </div>
    );
}
