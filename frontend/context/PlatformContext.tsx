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

export interface OpportunityFile {
    id: string;
    name: string;
    size: string;
    type: string;
    uploadedAt: string;
    url?: string;
}

export interface OpportunityNote {
    id: string;
    text: string;
    author: string;
    createdAt: string;
}

export type OpportunityStatus =
    | 'New Opportunity'
    | 'Initial Review'
    | 'Carrier Structuring'
    | 'Illustration Prepared'
    | 'In Underwriting'
    | 'Closed Won';

export interface Opportunity {
    id: string;
    firstName: string;
    lastName: string;
    email?: string;
    phone?: string;
    address: {
        street: string;
        city: string;
        state: string;
        zip: string;
    };
    age: number | string;
    gender: 'Male' | 'Female' | 'Other';
    smokerStatus: 'Non-Smoker' | 'Smoker';
    generalHealth: string; // e.g. "Preferred Best", "Preferred", "Standard Plus", "Standard", "Rated"
    healthDetails?: string;
    totalInvestment: string; // e.g. "$10,000,000"
    investmentYears: string; // e.g. "4 Years ($2.5M/yr)"
    netWorth: string; // e.g. "$45,000,000"
    annualIncome: string; // e.g. "$3,200,000"
    existingInsurance: string; // e.g. "$5M Term Policy with Lincoln"
    runThroughTrust: boolean;
    trustState?: string; // State if different than contact address
    trustName?: string;
    status: OpportunityStatus;
    submittedDate: string;
    notes: OpportunityNote[];
    files: OpportunityFile[];
}

interface PlatformContextType {
    pendingCases: Case[];
    addCase: (newCase: Case) => void;
    opportunities: Opportunity[];
    addOpportunity: (opp: Omit<Opportunity, 'id' | 'submittedDate'>) => Opportunity;
    updateOpportunity: (id: string, updates: Partial<Opportunity>) => void;
    updateOpportunityStatus: (id: string, status: OpportunityStatus) => void;
    addOpportunityNote: (opportunityId: string, noteText: string, author?: string) => void;
    deleteOpportunityNote: (opportunityId: string, noteId: string) => void;
    addOpportunityFile: (opportunityId: string, file: OpportunityFile) => void;
    deleteOpportunityFile: (opportunityId: string, fileId: string) => void;
    deleteOpportunity: (opportunityId: string) => void;
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

const INITIAL_OPPORTUNITIES: Opportunity[] = [
    {
        id: 'opp-101',
        firstName: 'Charles',
        lastName: 'Vance',
        email: 'cvance@vanceholdings.com',
        phone: '(561) 555-0142',
        address: {
            street: '450 Ocean Drive',
            city: 'Palm Beach',
            state: 'FL',
            zip: '33480'
        },
        age: 58,
        gender: 'Male',
        smokerStatus: 'Non-Smoker',
        generalHealth: 'Preferred Best',
        healthDetails: 'Excellent cardiovascular health, annual comprehensive executive physical spotless, runs 15 miles/week, no daily prescriptions.',
        totalInvestment: '$10,000,000',
        investmentYears: '4 Years ($2.5M/yr)',
        netWorth: '$45,000,000',
        annualIncome: '$3,200,000',
        existingInsurance: '$5M 20-Year Term Policy with Lincoln Financial (expiring 2027)',
        runThroughTrust: true,
        trustState: 'South Dakota',
        trustName: 'The Vance Family Dynasty Trust',
        status: 'Carrier Structuring',
        submittedDate: 'Oct 02, 2026',
        notes: [
            {
                id: 'note-1',
                text: 'Met with Charles and his family office counsel. Primary objective is transferring liquid capital into PPLI to eliminate state/federal tax drag on private credit yields.',
                author: 'Advisor',
                createdAt: 'Oct 02, 2026 • 10:15 AM'
            },
            {
                id: 'note-2',
                text: 'Carrier preliminary review received from Prudential & Pacific Life. Requested customized illustration reflecting 4-year funding schedule.',
                author: 'Advisor',
                createdAt: 'Oct 05, 2026 • 02:40 PM'
            }
        ],
        files: [
            {
                id: 'file-1',
                name: 'Vance_Family_Office_Balance_Sheet.pdf',
                size: '2.4 MB',
                type: 'application/pdf',
                uploadedAt: 'Oct 02, 2026'
            },
            {
                id: 'file-2',
                name: 'Lincoln_Term_Dec_Page.pdf',
                size: '1.1 MB',
                type: 'application/pdf',
                uploadedAt: 'Oct 02, 2026'
            },
            {
                id: 'file-3',
                name: 'SD_Dynasty_Trust_Draft.pdf',
                size: '3.7 MB',
                type: 'application/pdf',
                uploadedAt: 'Oct 04, 2026'
            }
        ]
    },
    {
        id: 'opp-102',
        firstName: 'Dr. Samantha',
        lastName: 'Reed',
        email: 'sreed@biotechpartners.org',
        phone: '(312) 555-0819',
        address: {
            street: '1200 Lake Shore Drive, Apt 28B',
            city: 'Chicago',
            state: 'IL',
            zip: '60611'
        },
        age: 52,
        gender: 'Female',
        smokerStatus: 'Non-Smoker',
        generalHealth: 'Preferred',
        healthDetails: 'Mild history of exercise-induced asthma in college, no current medications, normal cholesterol and BP.',
        totalInvestment: '$4,000,000',
        investmentYears: '5 Years ($800,000/yr)',
        netWorth: '$19,500,000',
        annualIncome: '$1,450,000',
        existingInsurance: 'None currently in place',
        runThroughTrust: true,
        trustState: 'Delaware',
        trustName: 'The Reed 2025 Asset Protection Trust',
        status: 'New Opportunity',
        submittedDate: 'Oct 06, 2026',
        notes: [
            {
                id: 'note-3',
                text: 'Liquidity event following sale of specialized diagnostic clinic. Client CPA recommended evaluating private placement life insurance before year-end.',
                author: 'Advisor',
                createdAt: 'Oct 06, 2026 • 11:30 AM'
            }
        ],
        files: [
            {
                id: 'file-4',
                name: 'Reed_Liquidity_Event_Summary.pdf',
                size: '1.8 MB',
                type: 'application/pdf',
                uploadedAt: 'Oct 06, 2026'
            }
        ]
    },
    {
        id: 'opp-103',
        firstName: 'David',
        lastName: 'Kensington',
        email: 'dkensington@kensingtongrp.com',
        phone: '(415) 555-9321',
        address: {
            street: '88 Montgomery St, Suite 1400',
            city: 'San Francisco',
            state: 'CA',
            zip: '94104'
        },
        age: 64,
        gender: 'Male',
        smokerStatus: 'Non-Smoker',
        generalHealth: 'Standard Plus',
        healthDetails: 'Mild hypertension well-managed with 10mg Lisinopril for 6 years. No other cardiac or metabolic concerns.',
        totalInvestment: '$15,000,000',
        investmentYears: '3 Years ($5,000,000/yr)',
        netWorth: '$62,000,000',
        annualIncome: '$4,100,000',
        existingInsurance: '$3M Northwestern Mutual Whole Life policy (cash surrender value $1.2M)',
        runThroughTrust: true,
        trustState: 'Nevada',
        trustName: 'Kensington Dynasty Asset Trust',
        status: 'Illustration Prepared',
        submittedDate: 'Oct 08, 2026',
        notes: [
            {
                id: 'note-4',
                text: 'Preliminary illustration generated for Pacific Life PPVUL. Proposed 1035 exchange of existing Northwestern Mutual policy cash surrender value into initial premium deposit.',
                author: 'Advisor',
                createdAt: 'Oct 08, 2026 • 09:00 AM'
            },
            {
                id: 'note-5',
                text: 'Trust attorney confirmed Nevada trust situs provides 365-year perpetuity period and superior asset protection.',
                author: 'Advisor',
                createdAt: 'Oct 08, 2026 • 04:15 PM'
            }
        ],
        files: [
            {
                id: 'file-5',
                name: 'PacLife_PPVUL_Illustration_Run.pdf',
                size: '5.2 MB',
                type: 'application/pdf',
                uploadedAt: 'Oct 08, 2026'
            },
            {
                id: 'file-6',
                name: 'NW_Mutual_Inforce_Ledger.pdf',
                size: '920 KB',
                type: 'application/pdf',
                uploadedAt: 'Oct 08, 2026'
            }
        ]
    }
];

export function PlatformProvider({ children }: { children: ReactNode }) {
    const [pendingCases, setPendingCases] = useState<Case[]>(INITIAL_CASES);
    const [opportunities, setOpportunities] = useState<Opportunity[]>(INITIAL_OPPORTUNITIES);
    const [mounted, setMounted] = useState(false);

    // Load from local storage asynchronously to avoid synchronous effect renders
    useEffect(() => {
        const timer = setTimeout(() => {
            try {
                const savedCases = localStorage.getItem('advisure_pending_cases');
                if (savedCases) {
                    const parsedCases = JSON.parse(savedCases);
                    if (Array.isArray(parsedCases) && parsedCases.length > 0) {
                        setPendingCases(parsedCases);
                    }
                }

                const savedOpps = localStorage.getItem('advisure_opportunities');
                if (savedOpps) {
                    const parsedOpps = JSON.parse(savedOpps);
                    if (Array.isArray(parsedOpps) && parsedOpps.length > 0) {
                        setOpportunities(parsedOpps);
                    }
                }
            } catch (e) {
                console.error('Error loading stored advisure data:', e);
            }
            setMounted(true);
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    // Save cases to local storage
    useEffect(() => {
        if (mounted) {
            try {
                localStorage.setItem('advisure_pending_cases', JSON.stringify(pendingCases));
            } catch (e) {
                console.error('Error saving cases:', e);
            }
        }
    }, [pendingCases, mounted]);

    // Save opportunities to local storage
    useEffect(() => {
        if (mounted) {
            try {
                localStorage.setItem('advisure_opportunities', JSON.stringify(opportunities));
            } catch (e) {
                console.error('Error saving opportunities:', e);
            }
        }
    }, [opportunities, mounted]);

    const addCase = (newCase: Case) => {
        setPendingCases((prev) => [newCase, ...prev]);
    };

    const addOpportunity = (data: Omit<Opportunity, 'id' | 'submittedDate'>): Opportunity => {
        const todayStr = new Date().toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric'
        });
        const newOpp: Opportunity = {
            ...data,
            id: `opp-${Date.now()}`,
            submittedDate: todayStr
        };
        setOpportunities((prev) => [newOpp, ...prev]);
        return newOpp;
    };

    const updateOpportunity = (id: string, updates: Partial<Opportunity>) => {
        setOpportunities((prev) =>
            prev.map((opp) => (opp.id === id ? { ...opp, ...updates } : opp))
        );
    };

    const updateOpportunityStatus = (id: string, status: OpportunityStatus) => {
        setOpportunities((prev) =>
            prev.map((opp) => (opp.id === id ? { ...opp, status } : opp))
        );
    };

    const addOpportunityNote = (opportunityId: string, noteText: string, author: string = 'Advisor') => {
        const now = new Date();
        const dateStr = now.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
        const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        const newNote: OpportunityNote = {
            id: `note-${Date.now()}`,
            text: noteText,
            author,
            createdAt: `${dateStr} • ${timeStr}`
        };

        setOpportunities((prev) =>
            prev.map((opp) => {
                if (opp.id === opportunityId) {
                    return {
                        ...opp,
                        notes: [newNote, ...(opp.notes || [])]
                    };
                }
                return opp;
            })
        );
    };

    const deleteOpportunityNote = (opportunityId: string, noteId: string) => {
        setOpportunities((prev) =>
            prev.map((opp) => {
                if (opp.id === opportunityId) {
                    return {
                        ...opp,
                        notes: (opp.notes || []).filter((n) => n.id !== noteId)
                    };
                }
                return opp;
            })
        );
    };

    const addOpportunityFile = (opportunityId: string, file: OpportunityFile) => {
        setOpportunities((prev) =>
            prev.map((opp) => {
                if (opp.id === opportunityId) {
                    return {
                        ...opp,
                        files: [...(opp.files || []), file]
                    };
                }
                return opp;
            })
        );
    };

    const deleteOpportunityFile = (opportunityId: string, fileId: string) => {
        setOpportunities((prev) =>
            prev.map((opp) => {
                if (opp.id === opportunityId) {
                    return {
                        ...opp,
                        files: (opp.files || []).filter((f) => f.id !== fileId)
                    };
                }
                return opp;
            })
        );
    };

    const deleteOpportunity = (opportunityId: string) => {
        setOpportunities((prev) => prev.filter((opp) => opp.id !== opportunityId));
    };

    return (
        <PlatformContext.Provider
            value={{
                pendingCases,
                addCase,
                opportunities,
                addOpportunity,
                updateOpportunity,
                updateOpportunityStatus,
                addOpportunityNote,
                deleteOpportunityNote,
                addOpportunityFile,
                deleteOpportunityFile,
                deleteOpportunity
            }}
        >
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
