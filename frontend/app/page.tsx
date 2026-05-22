import Link from 'next/link';

export default function Home() {
    return (
        <div style={{ background: '#141412', color: '#FAFAF8' }}>

            {/* ── HERO ──────────────────────────────── */}
            <section className="grain-overlay relative overflow-hidden" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '7rem' }}>
                <div style={{ position: 'absolute', top: '15%', right: '8%', width: 700, height: 700, background: 'radial-gradient(circle, rgba(201,169,110,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: '10%', left: '3%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(46,125,212,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

                <div style={{ maxWidth: 1200, margin: '0 auto', padding: '4rem 3rem', width: '100%' }}>

                    <div className="reveal">
                        <span className="eyebrow">Private Placement Infrastructure for RIAs</span>
                    </div>

                    <h1 className="reveal d1 font-serif" style={{ fontSize: 'clamp(48px,7vw,90px)', fontWeight: 300, lineHeight: 1.06, letterSpacing: '-0.01em', maxWidth: 880, margin: '1.75rem 0 2.5rem' }}>
                        Turn Private Placement into a{' '}
                        <em style={{ fontStyle: 'italic', color: '#C9A96E' }}>Core Portfolio Allocation</em>{' '}
                        for Your Clients
                    </h1>

                    <p className="reveal d2" style={{ fontSize: 18, color: '#888780', maxWidth: 580, lineHeight: 1.75, marginBottom: '3.5rem' }}>
                        Advisure eliminates operational complexity, reduces carrier friction, and integrates private placement seamlessly into your portfolio — without changing how you manage assets.
                    </p>

                    <div className="reveal d3" style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
                        <Link href="/schedule-demo" className="btn-outline btn-outline-lg">
                            Schedule a Conversation
                        </Link>
                        <Link href="/platform" className="link-muted" style={{ fontSize: 13 }}>
                            See How It Works →
                        </Link>
                    </div>

                    {/* Role pills */}
                    <div className="reveal d4" style={{ marginTop: '5rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                        {[
                            { label: 'RIA / Advisor', color: '#C9A96E' },
                            { label: 'Insurance Agent', color: '#2E7DD4' },
                            { label: 'Carrier', color: '#1D9E75' },
                        ].map(({ label, color }) => (
                            <div key={label} style={{ paddingLeft: '1rem', borderLeft: `3px solid ${color}` }}>
                                <span style={{ fontSize: 11, color: '#888780', letterSpacing: '0.06em' }}>{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHAT PRIVATE PLACEMENT PROVIDES ──── */}
            <section style={{ borderTop: '0.5px solid rgba(255,255,255,0.06)', padding: '7rem 3rem' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>

                    <div className="reveal" style={{ marginBottom: '4rem' }}>
                        <span className="eyebrow" style={{ display: 'block', marginBottom: '1.25rem' }}>The Structure</span>
                        <h2 className="font-serif" style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 300, lineHeight: 1.2, maxWidth: 640 }}>
                            A Better Way to Build Client Portfolios
                        </h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
                        {[
                            { title: 'Institutional Access', body: 'Premier alternative investments and asset managers, often at lower minimums than otherwise available.' },
                            { title: 'Tax Alpha', body: 'Shield high-tax, high-turnover strategies from ongoing drag — significantly improving long-term compounding.' },
                            { title: 'Diversification', body: 'Diversify beyond traditional asset classes with greater control over structure and planning.' },
                            { title: 'Estate & Legacy Control', body: 'Greater control over how assets are held, taxed, and transferred — for your clients and their heirs.' },
                        ].map(({ title, body }) => (
                            <div key={title} className="reveal" style={{ background: '#141412', padding: '2.5rem 2rem' }}>
                                <h3 style={{ fontSize: 15, fontWeight: 500, color: '#FAFAF8', marginBottom: '0.75rem' }}>{title}</h3>
                                <p style={{ fontSize: 13, color: '#888780', lineHeight: 1.7 }}>{body}</p>
                            </div>
                        ))}
                    </div>

                    <div className="reveal" style={{ marginTop: '3rem', textAlign: 'right' }}>
                        <Link href="/ppli" className="link-gold" style={{ fontSize: 12, letterSpacing: '0.06em' }}>
                            Learn About the Structure →
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── THE PROBLEM ──────────────────────── */}
            <section style={{ background: '#0E0E0C', borderTop: '0.5px solid rgba(255,255,255,0.06)', padding: '7rem 3rem' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>

                    <div className="reveal-l">
                        <span className="eyebrow" style={{ display: 'block', marginBottom: '1.25rem' }}>The Challenge</span>
                        <h2 className="font-serif" style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 300, lineHeight: 1.25, marginBottom: '1.5rem' }}>
                            Despite these advantages, private placement has remained difficult for RIAs to implement.
                        </h2>
                        <p style={{ color: '#888780', lineHeight: 1.75, fontSize: 15 }}>
                            These strategies have always offered powerful structural and tax advantages. But for RIAs, they&apos;ve remained underutilized for one reason:{' '}
                            <span style={{ color: '#FAFAF8' }}>they don&apos;t fit the way you run your business.</span>
                        </p>

                        <div style={{ marginTop: '3rem', padding: '2rem', background: '#1E1E1B', border: '0.5px solid rgba(255,255,255,0.08)' }}>
                            <p style={{ fontSize: 16, color: '#FAFAF8', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                                Advisure exists to close the gap.
                            </p>
                            <p style={{ fontSize: 13, color: '#888780', lineHeight: 1.7 }}>
                                We built the infrastructure that makes private placement usable inside the RIA model — integrated into your existing workflow, visible in your reporting, and scalable across your client base.
                            </p>
                        </div>
                    </div>

                    <div className="reveal">
                        <p style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#5F5E5A', marginBottom: '1.5rem' }}>
                            Traditional offerings suffer from
                        </p>
                        {[
                            'Manual carrier processes',
                            'Disconnect from reporting systems',
                            'Segregated workflows',
                            'Limited visibility and control',
                            'Treatment as "outside" the portfolio',
                        ].map((item) => (
                            <div key={item} className="pain-card">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#8B6F3E', flexShrink: 0 }} />
                                    <span style={{ fontSize: 14, color: '#888780' }}>{item}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── HOW IT WORKS ─────────────────────── */}
            <section style={{ borderTop: '0.5px solid rgba(255,255,255,0.06)', padding: '7rem 3rem' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>

                    <div className="reveal" style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
                        <div>
                            <span className="eyebrow" style={{ display: 'block', marginBottom: '1.25rem' }}>The Platform</span>
                            <h2 className="font-serif" style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 300, lineHeight: 1.15 }}>
                                Designed to Fit Your Existing Workflow
                            </h2>
                        </div>
                        <Link href="/platform" className="link-muted" style={{ fontSize: 12, letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>
                            Full Platform Overview →
                        </Link>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
                        {[
                            {
                                step: '01',
                                label: 'You do this',
                                color: '#C9A96E',
                                title: 'Allocate',
                                body: 'Incorporate private placement as part of your portfolio strategy — just like any other allocation. Align with client objectives without changing your process.',
                            },
                            {
                                step: '02',
                                label: 'Advisure handles this',
                                color: '#2E7DD4',
                                title: 'Structure & Integrate',
                                body: 'Advisure coordinates across carriers, managers, and legal structures. We eliminate manual workflows and handle the operational complexity behind the scenes.',
                            },
                            {
                                step: '03',
                                label: 'Back in your hands',
                                color: '#1D9E75',
                                title: 'Manage',
                                body: 'Ongoing management is fully aligned with how you already operate. Full visibility within your reporting ecosystem, alongside the rest of your portfolio.',
                            },
                        ].map(({ step, label, color, title, body }) => (
                            <div key={step} className="reveal" style={{ background: '#141412', padding: '2.5rem 2rem', borderTop: `3px solid ${color}` }}>
                                <span style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color, display: 'block', marginBottom: '1.5rem' }}>{label}</span>
                                <div style={{ fontSize: 11, color: '#5F5E5A', fontFamily: 'monospace', marginBottom: '0.5rem' }}>{step}</div>
                                <h3 className="font-serif" style={{ fontSize: 28, fontWeight: 300, color: '#FAFAF8', marginBottom: '1rem' }}>{title}</h3>
                                <p style={{ fontSize: 13, color: '#888780', lineHeight: 1.75 }}>{body}</p>
                            </div>
                        ))}
                    </div>

                    <p className="reveal" style={{ marginTop: '2rem', fontSize: 12, color: '#5F5E5A', textAlign: 'center', letterSpacing: '0.06em' }}>
                        No new systems. No parallel workflows. No disruption to how you manage assets.
                    </p>
                </div>
            </section>

            {/* ── ADVISOR ECONOMICS ────────────────── */}
            <section style={{ background: '#0E0E0C', borderTop: '0.5px solid rgba(255,255,255,0.06)', padding: '7rem 3rem' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>

                    <div className="reveal" style={{ marginBottom: '4rem' }}>
                        <span className="eyebrow" style={{ display: 'block', marginBottom: '1.25rem' }}>Advisor Economics</span>
                        <h2 className="font-serif" style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 300, lineHeight: 1.15, maxWidth: 640 }}>
                            With the right infrastructure, private placement becomes a core part of how you manage wealth.
                        </h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '4rem' }}>
                        {[
                            { label: 'AUM Visible', body: 'Assets stay within your reporting ecosystem — not held away.' },
                            { label: 'Fully Integrated', body: 'Allocations remain part of your managed portfolio.' },
                            { label: 'Advisor Economics', body: 'Advisors participate in ongoing economics on placed assets.' },
                            { label: 'After-Tax Alpha', body: 'Clients benefit from measurably improved after-tax outcomes.' },
                        ].map(({ label, body }) => (
                            <div key={label} className="reveal" style={{ background: '#141412', padding: '2rem' }}>
                                <p style={{ fontSize: 13, color: '#C9A96E', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>{label}</p>
                                <p style={{ fontSize: 13, color: '#888780', lineHeight: 1.6 }}>{body}</p>
                            </div>
                        ))}
                    </div>

                    <div className="reveal" style={{ borderTop: '0.5px solid rgba(255,255,255,0.06)', paddingTop: '4rem', textAlign: 'center' }}>
                        <p className="font-serif" style={{ fontSize: 'clamp(22px,3vw,36px)', fontWeight: 300, color: '#FAFAF8', lineHeight: 1.3, marginBottom: '0.75rem' }}>
                            Private placement insurance is no longer a segmented side strategy.
                        </p>
                        <p style={{ fontSize: 18, color: '#C9A96E', fontWeight: 400 }}>
                            It&apos;s an integrated core portfolio allocation.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ────────────────────────── */}
            <section style={{ borderTop: '0.5px solid rgba(255,255,255,0.06)', padding: '8rem 3rem', textAlign: 'center' }}>
                <div className="reveal" style={{ maxWidth: 640, margin: '0 auto' }}>
                    <h2 className="font-serif" style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 300, lineHeight: 1.15, marginBottom: '1.5rem' }}>
                        The Future of Wealth Management
                    </h2>
                    <p style={{ color: '#888780', lineHeight: 1.75, marginBottom: '3rem', fontSize: 16 }}>
                        Private Placement Insurance — fully integrated, transparent, and aligned with how you manage your portfolios today.
                    </p>
                    <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
                        <Link href="/schedule-demo" className="btn-outline btn-outline-lg">
                            Schedule a Conversation
                        </Link>
                        <Link href="/contact" className="link-muted" style={{ fontSize: 13 }}>
                            Contact Us →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
