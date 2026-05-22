import Link from 'next/link';

export default function PPLI() {
    return (
        <div style={{ background: '#141412', color: '#FAFAF8' }}>

            {/* ── HERO ──────────────────────────────── */}
            <section className="grain-overlay relative overflow-hidden" style={{ paddingTop: '12rem', paddingBottom: '7rem', paddingLeft: '3rem', paddingRight: '3rem' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,169,110,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
                    <div className="reveal">
                        <span className="eyebrow" style={{ display: 'block', marginBottom: '1.5rem' }}>Education &amp; Strategy</span>
                    </div>
                    <h1 className="reveal d1 font-serif" style={{ fontSize: 'clamp(48px,7vw,88px)', fontWeight: 300, lineHeight: 1.08, letterSpacing: '-0.01em', maxWidth: 800, marginBottom: '2rem' }}>
                        Understanding Private Placement
                    </h1>
                    <p className="reveal d2" style={{ fontSize: 18, color: '#888780', maxWidth: 520, lineHeight: 1.75 }}>
                        A clearer view of a misunderstood structure.
                    </p>
                </div>
            </section>

            {/* ── A STRUCTURE, NOT A PRODUCT ────────── */}
            <section style={{ borderTop: '0.5px solid rgba(255,255,255,0.06)', padding: '7rem 3rem' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <div className="reveal-l" style={{ marginBottom: '4rem', maxWidth: 720 }}>
                        <span className="eyebrow" style={{ display: 'block', marginBottom: '1.25rem' }}>What It Is</span>
                        <h2 className="font-serif" style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 300, lineHeight: 1.2, marginBottom: '1.5rem' }}>
                            A Structure — Not a Product
                        </h2>
                        <p style={{ color: '#888780', lineHeight: 1.75, marginBottom: '1rem', fontSize: 15 }}>
                            Private Placement Life Insurance (PPLI) and Private Placement Variable Annuities (PPVA) are institutional, tax-advantaged structures that allow investments to grow more efficiently within a defined framework.
                        </p>
                        <p style={{ color: '#888780', lineHeight: 1.75, fontSize: 15 }}>
                            It is not a standalone product — but a way to hold and manage assets. Designed for high net worth and ultra-high net worth clients, these structures provide powerful advantages:
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
                        {[
                            { title: 'Institutional Investment Access', body: 'Access premier alternative investments and asset managers, often at lower minimums than otherwise available.' },
                            { title: 'Tax Alpha', body: 'Shield high-tax, high-turnover strategies from ongoing drag — significantly improving long-term compounding.' },
                            { title: 'Diversification & Flexibility', body: 'Diversify beyond traditional asset classes with greater control over structure and planning.' },
                            { title: 'Estate & Legacy Control', body: 'Enhance legacy planning with greater control over how your assets are held, taxed, and transferred.' },
                        ].map(({ title, body }) => (
                            <div key={title} className="reveal" style={{ background: '#141412', padding: '2.5rem 2rem' }}>
                                <h3 style={{ fontSize: 15, fontWeight: 500, color: '#FAFAF8', marginBottom: '0.75rem' }}>{title}</h3>
                                <p style={{ fontSize: 13, color: '#888780', lineHeight: 1.7 }}>{body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── THE GAP HAS BEEN INFRASTRUCTURE ──── */}
            <section style={{ background: '#0E0E0C', borderTop: '0.5px solid rgba(255,255,255,0.06)', padding: '7rem 3rem' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
                    <div className="reveal-l">
                        <span className="eyebrow" style={{ display: 'block', marginBottom: '1.25rem' }}>Why It&apos;s Been Underutilized</span>
                        <h2 className="font-serif" style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 300, lineHeight: 1.2, marginBottom: '1.5rem' }}>
                            The Gap Has Been Infrastructure
                        </h2>
                        <p style={{ color: '#888780', lineHeight: 1.75, fontSize: 15 }}>
                            Despite its benefits, adoption has been limited. Not because the strategy doesn&apos;t work — but because the systems to deliver it haven&apos;t existed.
                        </p>
                    </div>
                    <div className="reveal">
                        {[
                            { label: 'Operational complexity', detail: 'Fragmented carrier processes, manual paperwork, and disconnected workflows have made implementation impractical at scale.' },
                            { label: 'Lack of integration', detail: 'Private placement has historically lived outside the systems RIAs rely on — no reporting integration, no visibility into positions.' },
                            { label: 'Limited accessibility for RIAs', detail: "Without dedicated infrastructure, independent advisors couldn't offer these strategies efficiently to their clients." },
                        ].map(({ label, detail }) => (
                            <div key={label} className="pain-card">
                                <p style={{ fontSize: 14, fontWeight: 500, color: '#FAFAF8', marginBottom: '0.35rem' }}>{label}</p>
                                <p style={{ fontSize: 13, color: '#888780', lineHeight: 1.6 }}>{detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── REFRAMING THE CATEGORY ────────────── */}
            <section style={{ borderTop: '0.5px solid rgba(255,255,255,0.06)', padding: '7rem 3rem' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>

                    <div className="reveal" style={{ marginBottom: '4rem', maxWidth: 680 }}>
                        <span className="eyebrow" style={{ display: 'block', marginBottom: '1.25rem' }}>Common Misconceptions</span>
                        <h2 className="font-serif" style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 300, lineHeight: 1.15, marginBottom: '1.25rem' }}>
                            Reframing the Category
                        </h2>
                        <p style={{ color: '#888780', lineHeight: 1.75, fontSize: 15 }}>
                            Common misconceptions have kept private placement from its full potential. Here&apos;s a clearer picture:
                        </p>
                    </div>

                    {/* Column headers */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', marginBottom: '1rem' }}>
                        <p style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#5F5E5A', paddingLeft: '1.5rem' }}>Common belief</p>
                        <p style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#5F5E5A', paddingLeft: '1.5rem' }}>The reality</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
                        {[
                            { myth: '"It\'s just insurance"', reality: 'It\'s a portfolio structure — a tax-advantaged wrapper for holding institutional investments.' },
                            { myth: '"It\'s too complex"', reality: 'Complexity has historically been operational, not structural. With the right infrastructure, it\'s no more complex than any other allocation.' },
                            { myth: '"It doesn\'t fit my model"', reality: 'It hasn\'t — until now. Advisure is built to make private placement fit seamlessly into the RIA model.' },
                        ].map(({ myth, reality }) => (
                            <div key={myth} className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
                                <div style={{ background: 'rgba(180,40,40,0.05)', padding: '1.75rem 1.5rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start', borderLeft: '3px solid rgba(180,40,40,0.3)' }}>
                                    <span style={{ color: 'rgba(220,80,80,0.5)', fontWeight: 600, flexShrink: 0, marginTop: 2 }}>✕</span>
                                    <span style={{ color: '#888780', fontStyle: 'italic', fontSize: 14, lineHeight: 1.6, textDecoration: 'line-through', textDecorationColor: 'rgba(180,40,40,0.3)' }}>{myth}</span>
                                </div>
                                <div style={{ background: 'rgba(46,125,212,0.04)', padding: '1.75rem 1.5rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start', borderLeft: '3px solid rgba(46,125,212,0.3)' }}>
                                    <span style={{ color: '#2E7DD4', fontWeight: 600, flexShrink: 0, marginTop: 2 }}>✓</span>
                                    <span style={{ color: '#FAFAF8', fontSize: 14, lineHeight: 1.6 }}>{reality}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="reveal" style={{ marginTop: '2rem', padding: '1.75rem 2rem', background: '#1E1E1B', border: '0.5px solid rgba(255,255,255,0.08)', borderLeft: '3px solid #2E7DD4' }}>
                        <p style={{ color: '#888780', fontStyle: 'italic', fontSize: 15, lineHeight: 1.7 }}>
                            With the right infrastructure, private placement becomes practical — not theoretical.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── BRIDGE TO PLATFORM ───────────────── */}
            <section style={{ background: '#0E0E0C', borderTop: '0.5px solid rgba(255,255,255,0.06)', padding: '8rem 3rem', textAlign: 'center' }}>
                <div className="reveal" style={{ maxWidth: 600, margin: '0 auto' }}>
                    <h2 className="font-serif" style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 300, lineHeight: 1.2, marginBottom: '1.25rem' }}>
                        Understanding the strategy is just step one.
                    </h2>
                    <p style={{ color: '#888780', lineHeight: 1.75, marginBottom: '3rem', fontSize: 15 }}>
                        Advisure provides the platform to model, implement, and monitor these strategies at scale — without disrupting how you already manage assets.
                    </p>
                    <Link href="/platform" className="btn-outline btn-outline-lg">
                        Explore the Platform
                    </Link>
                </div>
            </section>
        </div>
    );
}
