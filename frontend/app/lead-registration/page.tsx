'use client';

import React from 'react';
import Link from 'next/link';
import { PlatformProvider } from '@/context/PlatformContext';
import LeadRegistrationPage from '../platform/lead-registration/page';
import { LayoutDashboard, ArrowLeft } from 'lucide-react';

export default function DedicatedLeadRegistrationRoute() {
    return (
        <PlatformProvider>
            <div style={{ minHeight: '100vh', background: '#F8F8F6', paddingTop: 84, paddingBottom: 60 }}>
                {/* Advisor Top Navigation Bar */}
                <div style={{
                    maxWidth: 1240,
                    margin: '0 auto 1.5rem auto',
                    padding: '0.75rem 1.5rem',
                    background: '#FFFFFF',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    borderRadius: 6,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
                }}>
                    <div className="flex items-center gap-3">
                        <Link
                            href="/platform"
                            className="flex items-center gap-1.5 text-xs text-[#5F5E5A] hover:text-[#141412] transition-colors font-medium"
                        >
                            <ArrowLeft size={14} />
                            <span>Return to Platform Dashboard</span>
                        </Link>
                        <span style={{ color: '#D4D4D0' }}>|</span>
                        <span style={{ fontSize: 11, color: '#8B6F3E', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                            Dedicated Opportunity Intake URL
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            href="/platform/pending-cases"
                            className="text-xs text-[#5F5E5A] hover:text-[#141412] transition-colors"
                        >
                            Pending Cases
                        </Link>
                        <Link
                            href="/platform/illustration"
                            className="text-xs text-[#5F5E5A] hover:text-[#141412] transition-colors"
                        >
                            Illustration
                        </Link>
                        <Link
                            href="/platform"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs text-[#141412] bg-black/5 hover:bg-black/10 border border-black/10 transition-colors font-medium"
                        >
                            <LayoutDashboard size={13} />
                            <span>Advisor Tools</span>
                        </Link>
                    </div>
                </div>

                <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 1rem' }}>
                    <LeadRegistrationPage />
                </div>
            </div>
        </PlatformProvider>
    );
}
