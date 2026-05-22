'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FileText, PenTool, PieChart, Clock } from 'lucide-react';
import { PlatformProvider } from '@/context/PlatformContext';

const navItems = [
    { href: '/platform',                label: 'Dashboard',         Icon: LayoutDashboard },
    { href: '/platform/pending-cases',  label: 'Pending Cases',     Icon: Clock },
    { href: '/platform/illustration',   label: 'New Illustration',  Icon: PieChart },
    { href: '/platform/e-app',          label: 'Start E-App',       Icon: PenTool },
    { href: '/platform/policy',         label: 'Policy Management', Icon: FileText },
];

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <PlatformProvider>
            <div style={{ display: 'flex', height: 'calc(100vh - 72px)', marginTop: 72, background: '#0E0E0C' }}>

                {/* Sidebar */}
                <div style={{ width: 240, flexShrink: 0, background: '#141412', borderRight: '0.5px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ padding: '1.25rem 1.5rem', borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}>
                        <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#5F5E5A' }}>Advisor Tools</p>
                    </div>
                    <nav style={{ padding: '0.75rem', flex: 1 }}>
                        {navItems.map(({ href, label, Icon }) => {
                            const active = pathname === href;
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '0.75rem',
                                        padding: '0.65rem 0.85rem',
                                        marginBottom: '2px',
                                        color: active ? '#FAFAF8' : '#888780',
                                        background: active ? 'rgba(255,255,255,0.06)' : 'transparent',
                                        borderLeft: active ? '2px solid #C9A96E' : '2px solid transparent',
                                        textDecoration: 'none',
                                        fontSize: 13,
                                        fontWeight: active ? 500 : 400,
                                        transition: 'all 0.15s',
                                    }}
                                >
                                    <Icon size={16} />
                                    <span>{label}</span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Main Content */}
                <div style={{ flex: 1, overflow: 'auto', padding: '2.5rem', background: '#0E0E0C' }}>
                    {children}
                </div>
            </div>
        </PlatformProvider>
    );
}
