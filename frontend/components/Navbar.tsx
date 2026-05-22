'use client';

import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
    return (
        <nav style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '1.1rem 3rem',
            background: 'rgba(20,20,18,0.94)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderBottom: '0.5px solid rgba(255,255,255,0.05)',
        }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'baseline', gap: 2, textDecoration: 'none' }}>
                <Image
                    src="/advisure-logo.svg"
                    alt="Advisure"
                    width={140}
                    height={36}
                    priority
                    style={{ height: 32, width: 'auto', filter: 'brightness(0) invert(1)' }}
                />
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
