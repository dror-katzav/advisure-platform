export default function About() {
    return (
        <div style={{ background: '#141412', color: '#FAFAF8' }}>

            {/* ── HERO ──────────────────────────────── */}
            <section className="grain-overlay relative overflow-hidden" style={{ paddingTop: '12rem', paddingBottom: '7rem', paddingLeft: '3rem', paddingRight: '3rem' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,169,110,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
                    <div className="reveal">
                        <span className="eyebrow" style={{ display: 'block', marginBottom: '1.5rem' }}>Our Story</span>
                    </div>
                    <h1 className="reveal d1 font-serif" style={{ fontSize: 'clamp(48px,7vw,88px)', fontWeight: 300, lineHeight: 1.08, letterSpacing: '-0.01em', maxWidth: 700, marginBottom: '2rem' }}>
                        About Advisure
                    </h1>
                    <p className="reveal d2" style={{ fontSize: 18, color: '#888780', maxWidth: 560, lineHeight: 1.75 }}>
                        Building the infrastructure that makes private placement a core part of how RIAs manage wealth.
                    </p>
                </div>
            </section>

            {/* ── MISSION & VISION ─────────────────── */}
            <section style={{ borderTop: '0.5px solid rgba(255,255,255,0.06)', padding: '7rem 3rem' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
                    <div className="reveal-l" style={{ background: '#141412', padding: '3.5rem 3rem', borderTop: '3px solid #C9A96E' }}>
                        <span className="eyebrow" style={{ color: '#C9A96E', display: 'block', marginBottom: '1.5rem' }}>Our Mission</span>
                        <p className="font-serif" style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 300, lineHeight: 1.3, color: '#FAFAF8', marginBottom: '1.5rem' }}>
                            We make private placement a seamless, integrated part of the RIA portfolio — not a side conversation.
                        </p>
                        <p style={{ color: '#888780', lineHeight: 1.75, fontSize: 15 }}>
                            Advisure eliminates the operational complexity that has kept private placement underutilized. We built the infrastructure so advisors can allocate, implement, and manage these strategies without changing how they run their business.
                        </p>
                    </div>

                    <div className="reveal" style={{ background: '#141412', padding: '3.5rem 3rem', borderTop: '3px solid #2E7DD4' }}>
                        <span className="eyebrow" style={{ color: '#2E7DD4', display: 'block', marginBottom: '1.5rem' }}>Our Vision</span>
                        <p className="font-serif" style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 300, lineHeight: 1.3, color: '#FAFAF8', marginBottom: '1.5rem' }}>
                            A future where every RIA can deliver institutional-quality tax efficiency at scale.
                        </p>
                        <p style={{ color: '#888780', lineHeight: 1.75, fontSize: 15 }}>
                            We believe private placement insurance should be as accessible and operationally straightforward as any other portfolio allocation — visible in your reporting, aligned with your economics, and beneficial to your clients.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── CORE PHILOSOPHY ──────────────────── */}
            <section style={{ background: '#0E0E0C', borderTop: '0.5px solid rgba(255,255,255,0.06)', padding: '7rem 3rem' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <div className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <span className="eyebrow" style={{ display: 'block', marginBottom: '1.25rem' }}>Core Philosophy</span>
                        <h2 className="font-serif" style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 300, lineHeight: 1.15 }}>
                            We believe structure rivals strategy.
                        </h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
                        {[
                            {
                                num: '01',
                                title: 'Integration, Not Addition',
                                body: 'Private placement should fit inside the RIA model — not require a separate workflow, separate reporting, or separate conversation with the client.',
                            },
                            {
                                num: '02',
                                title: 'Infrastructure Drives Adoption',
                                body: 'The reason private placement has been underutilized isn\'t a lack of demand — it\'s a lack of infrastructure. We\'re here to fix that.',
                            },
                            {
                                num: '03',
                                title: 'Long-Term Compounding',
                                body: 'Tax drag compounds just as powerfully as returns. Eliminating it over a 20-year horizon creates measurable, meaningful wealth for clients.',
                            },
                            {
                                num: '04',
                                title: 'Evaluated, Not Sold',
                                body: 'Private placement should be objectively modeled and evaluated as a structural tool for the portfolio, not pushed as a commission product.',
                            },
                        ].map(({ num, title, body }) => (
                            <div key={num} className="reveal" style={{ background: '#141412', padding: '3rem 2.5rem', display: 'flex', gap: '2rem' }}>
                                <span style={{ fontSize: 11, fontFamily: 'monospace', color: '#5F5E5A', flexShrink: 0, marginTop: 4 }}>{num}</span>
                                <div>
                                    <h3 className="font-serif" style={{ fontSize: 22, fontWeight: 300, color: '#FAFAF8', marginBottom: '0.75rem' }}>{title}</h3>
                                    <p style={{ fontSize: 14, color: '#888780', lineHeight: 1.75 }}>{body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TEAM ─────────────────────────────── */}
            <section style={{ borderTop: '0.5px solid rgba(255,255,255,0.06)', padding: '7rem 3rem' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>

                    <div className="reveal" style={{ marginBottom: '4rem' }}>
                        <span className="eyebrow" style={{ display: 'block', marginBottom: '1.25rem' }}>The Team</span>
                        <h2 className="font-serif" style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 300, lineHeight: 1.15, maxWidth: 560 }}>
                            Leadership
                        </h2>
                        <p style={{ color: '#888780', marginTop: '1rem', fontSize: 15, maxWidth: 540 }}>
                            Decades of expertise across institutional investments, carrier distribution, and advanced technology.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
                        {[
                            {
                                initials: 'ZM',
                                name: 'Zayda Marrie',
                                role: 'Former Executive, AIG & MetLife',
                                color: '#C9A96E',
                                bio: 'A seasoned leader in the insurance industry, Zayda has over two decades of experience driving product innovation, distribution strategy, and enterprise growth. She successfully led initiatives generating over $5 billion in economic value.',
                            },
                            {
                                initials: 'DP',
                                name: 'Don Plotsky',
                                role: 'Co-Founder, Uinta Investment Partners',
                                color: '#2E7DD4',
                                bio: 'Don has over 40 years of investment management experience as a leader, innovator, and portfolio manager, previously serving as head of product at Western Asset Management and senior executive at CDC Investment Management Corp.',
                            },
                            {
                                initials: 'CR',
                                name: 'Corey Rickman',
                                role: 'Portfolio Analyst, Uinta Investment Partners',
                                color: '#1D9E75',
                                bio: 'Corey brings institutional accounting and portfolio analysis experience from Stone Coast Fund Services and SEI Family Office Services, with a focus on income-based solutions in private markets.',
                            },
                            {
                                initials: 'DK',
                                name: 'Dror Katzav',
                                role: 'Founder & CEO, Atidot',
                                color: '#C9A96E',
                                bio: 'Founder and CEO of Atidot, an AI-driven platform for life insurers. Prior to founding Atidot, Dror spent 11 years as a technology leader in elite IDF Intelligence units. He is a recognized visionary on applying AI to life insurance.',
                            },
                        ].map(({ initials, name, role, color, bio }) => (
                            <div key={name} className="reveal" style={{ background: '#141412', padding: '2.5rem 3rem', display: 'flex', gap: '2.5rem', alignItems: 'flex-start' }}>
                                <div style={{ width: 56, height: 56, flexShrink: 0, background: '#1E1E1B', border: `0.5px solid ${color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 500, color, letterSpacing: '0.05em' }}>
                                    {initials}
                                </div>
                                <div>
                                    <p style={{ fontSize: 17, fontWeight: 500, color: '#FAFAF8', marginBottom: '0.2rem' }}>{name}</p>
                                    <p style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color, marginBottom: '0.85rem', fontWeight: 400 }}>{role}</p>
                                    <p style={{ fontSize: 14, color: '#888780', lineHeight: 1.75, maxWidth: 680 }}>{bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
