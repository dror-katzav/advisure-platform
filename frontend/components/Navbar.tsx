'use client';

import Link from 'next/link';

export function Navbar() {
    return (
        <nav style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '1rem 3rem',
            background: 'rgba(20,20,18,0.94)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderBottom: '0.5px solid rgba(255,255,255,0.05)',
        }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'baseline', gap: 3, textDecoration: 'none' }}>
                <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 28, color: '#C9A96E', fontWeight: 600, lineHeight: 1 }}>A</span>
                <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 28, color: '#FAFAF8', fontWeight: 300, lineHeight: 1 }}>dvisure</span>
                <span style={{ fontSize: 13, color: '#8B6F3E', opacity: 0.7, fontWeight: 400, marginLeft: 1 }}>.ai</span>
            </Link>

            <ul style={{ listStyle: 'none', display: 'flex', gap: '2.5rem', margin: 0, padding: 0 }}>
                {[
                    { href: '/platform',       label: 'Platform' },
                    { href: '/ria-experience', label: 'Financial Model' },
                    { href: '/ppli',           label: 'Education' },
                    { href: '/partners',       label: 'Partners' },
                    { href: '/about',          label: 'About' },
                ].map(({ href, label }) => (
                    <li key={href}>
                        <Link href={href} style={{
                            fontSize: 13, color: '#888780', textDecoration: 'none',
                            letterSpacing: '0.03em', transition: 'color 0.2s',
                        }}
                            onMouseEnter={e => (e.currentTarget.style.color = '#FAFAF8')}
                            onMouseLeave={e => (e.currentTarget.style.color = '#888780')}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <Link href="/login" style={{ fontSize: 13, color: '#888780', textDecoration: 'none', letterSpacing: '0.03em' }}>
                    Login
                </Link>
                <Link href="/schedule-demo" style={{
                    fontSize: 12, fontWeight: 500, letterSpacing: '0.09em', textTransform: 'uppercase',
                    padding: '9px 22px',
                    border: '0.5px solid rgba(255,255,255,0.25)',
                    color: '#FAFAF8',
                    background: 'transparent',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#FAFAF8'; e.currentTarget.style.color = '#141412'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#FAFAF8'; }}
                >
                    Request Access
                </Link>
            </div>
        </nav>
    );
}
