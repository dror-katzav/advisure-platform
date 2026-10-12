import Link from 'next/link';

export function Footer() {
    return (
        <footer style={{
            borderTop: '1px solid rgba(0, 0, 0, 0.08)',
            padding: '2.5rem 3rem',
            background: '#F4F4F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
        }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
                <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 18, color: '#8B6F3E', fontWeight: 600 }}>A</span>
                <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 18, color: '#141412', fontWeight: 400 }}>dvisure</span>
                <span style={{ fontSize: 11, color: '#8B6F3E', opacity: 0.85, fontWeight: 500 }}>.ai</span>
            </div>

            <p style={{ fontSize: 12, color: '#5F5E5A', letterSpacing: '0.03em' }}>
                The Private Placement Insurance platform built for RIAs.
            </p>

            <nav>
                <ul style={{ listStyle: 'none', display: 'flex', gap: '2rem', margin: 0, padding: 0 }}>
                    {[
                        { href: '/platform',                   label: 'Platform' },
                        { href: '/platform/lead-registration', label: 'Lead Registration' },
                        { href: '/ppli',                       label: 'Education' },
                        { href: '/partners',                   label: 'Partners' },
                        { href: '/about',                      label: 'About' },
                        { href: '/contact',                    label: 'Contact' },
                    ].map(({ href, label }) => (
                        <li key={href}>
                            <Link href={href} style={{ fontSize: 12, color: '#5F5E5A', textDecoration: 'none', transition: 'color 0.2s' }}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <p style={{ width: '100%', textAlign: 'center', fontSize: 11, color: '#888780', borderTop: '1px solid rgba(0, 0, 0, 0.06)', paddingTop: '1.5rem', marginTop: '0.5rem' }}>
                &copy; 2026 Advisure.AI — All Rights Reserved
            </p>
        </footer>
    );
}
