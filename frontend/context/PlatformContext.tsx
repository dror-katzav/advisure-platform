'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Case {
    id: number;
    client: string;
    product: string;
    premium: string;
    status: string;
    submitted: string;
    requirements: { name: string; status: string; date: string }[];
}

interface PlatformContextType {
    pendingCases: Case[];
    addCase: (newCase: Case) => void;
}

const PlatformContext = createContext<PlatformContextType | undefined>(undefined);

const INITIAL_CASES: Case[] = [
    {
        id: 1,
        client: 'Robert Jones',
        product: 'Prudential VUL',
        premium: '$500,000',
        status: 'Underwriting',
        submitted: 'Dec 01, 2024',
        requirements: [
            { name: 'APS - Dr. Smith', status: 'Received', date: 'Dec 05' },
            { name: 'Paramed Exam', status: 'Pending', date: 'Scheduled Dec 10' },
            { name: 'Financial Justification', status: 'Reviewing', date: 'Dec 06' }
        ]
    },
    {
        id: 2,
        client: 'Sarah Williams (Trust)',
        product: 'Pacific Life PIA',
        premium: '$2,000,000',
        status: 'Carrier Review',
        submitted: 'Nov 28, 2024',
        requirements: [
            { name: 'Trust Agreement', status: 'Received', date: 'Nov 28' },
            { name: 'Suitability Review', status: 'Approved', date: 'Dec 02' }
        ]
    }
];

export function PlatformProvider({ children }: { children: ReactNode }) {
    const [pendingCases, setPendingCases] = useState<Case[]>([]);
    const [mounted, setMounted] = useState(false);

    // Load from local storage
    useEffect(() => {
        const saved = localStorage.getItem('advisure_pending_cases');
        if (saved) {
            setPendingCases(JSON.parse(saved));
        } else {
            setPendingCases(INITIAL_CASES);
        }
        setMounted(true);
    }, []);

    // Save to local storage
    useEffect(() => {
        if (mounted) {
            localStorage.setItem('advisure_pending_cases', JSON.stringify(pendingCases));
        }
    }, [pendingCases, mounted]);

    const addCase = (newCase: Case) => {
        setPendingCases((prev) => [newCase, ...prev]);
    };

    return (
        <PlatformContext.Provider value={{ pendingCases, addCase }}>
            {children}
        </PlatformContext.Provider>
    );
}

export function usePlatform() {
    const context = useContext(PlatformContext);
    if (context === undefined) {
        throw new Error('usePlatform must be used within a PlatformProvider');
    }
    return context;
}
