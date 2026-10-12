'use client';

import React, { useState, useId, useEffect } from 'react';
import Link from 'next/link';
import {
    usePlatform,
    Opportunity,
    OpportunityStatus,
    OpportunityFile
} from '@/context/PlatformContext';
import {
    UserPlus,
    FileText,
    Upload,
    Paperclip,
    Trash2,
    Search,
    Clock,
    Shield,
    DollarSign,
    Calendar,
    MapPin,
    Activity,
    Download,
    Copy,
    Check,
    ChevronDown,
    ChevronUp,
    X,
    MessageSquare,
    ExternalLink,
    Building,
    FileCheck,
    Send
} from 'lucide-react';

const US_STATES = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];

const POPULAR_TRUST_STATES = [
    'South Dakota', 'Delaware', 'Nevada', 'Wyoming', 'Alaska',
    'Florida', 'New Hampshire', 'Tennessee', 'Texas'
];

const HEALTH_CLASSES = [
    'Preferred Best / Super Preferred',
    'Preferred',
    'Standard Plus',
    'Standard',
    'Substandard / Rated'
];

const STATUS_OPTIONS: OpportunityStatus[] = [
    'New Opportunity',
    'Initial Review',
    'Carrier Structuring',
    'Illustration Prepared',
    'In Underwriting',
    'Closed Won'
];

export default function LeadRegistrationPage() {
    const {
        opportunities,
        addOpportunity,
        updateOpportunityStatus,
        addOpportunityNote,
        deleteOpportunityNote,
        addOpportunityFile,
        deleteOpportunityFile,
        deleteOpportunity
    } = usePlatform();

    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState<string>('All');
    const [copiedLink, setCopiedLink] = useState(false);
    const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
    const [newNoteInputs, setNewNoteInputs] = useState<Record<string, string>>({});
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    // Initial check for query param ?action=new
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            if (params.get('action') === 'new') {
                setIsRegisterModalOpen(true);
            }
        }
    }, []);

    const toggleCardExpand = (id: string) => {
        setExpandedCards((prev) => ({
            ...prev,
            [id]: prev[id] === undefined ? false : !prev[id]
        }));
    };

    const isCardExpanded = (id: string) => {
        return expandedCards[id] !== false; // Default expanded for great readability
    };

    const handleCopyDedicatedLink = () => {
        if (typeof window !== 'undefined') {
            const url = `${window.location.origin}/platform/lead-registration`;
            navigator.clipboard.writeText(url).then(() => {
                setCopiedLink(true);
                setTimeout(() => setCopiedLink(false), 2500);
            });
        }
    };

    const handleAddNote = (opportunityId: string) => {
        const text = newNoteInputs[opportunityId]?.trim();
        if (!text) return;
        addOpportunityNote(opportunityId, text, 'Advisor');
        setNewNoteInputs((prev) => ({ ...prev, [opportunityId]: '' }));
    };

    const handleFileUpload = (opportunityId: string, event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files || files.length === 0) return;

        const file = files[0];
        const sizeFormatted = file.size > 1024 * 1024
            ? `${(file.size / (1024 * 1024)).toFixed(1)} MB`
            : `${Math.round(file.size / 1024)} KB`;

        const newFile: OpportunityFile = {
            id: `file-${Date.now()}`,
            name: file.name,
            size: sizeFormatted,
            type: file.type || 'application/octet-stream',
            uploadedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
        };

        addOpportunityFile(opportunityId, newFile);
        event.target.value = '';
    };

    // Filter opportunities
    const filteredOpportunities = opportunities.filter((opp) => {
        const fullName = `${opp.firstName} ${opp.lastName}`.toLowerCase();
        const addressStr = `${opp.address?.city || ''} ${opp.address?.state || ''}`.toLowerCase();
        const notesStr = (opp.notes || []).map((n) => n.text).join(' ').toLowerCase();
        const matchesSearch =
            fullName.includes(searchTerm.toLowerCase()) ||
            addressStr.includes(searchTerm.toLowerCase()) ||
            (opp.trustName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
            notesStr.includes(searchTerm.toLowerCase());

        const matchesStatus = statusFilter === 'All' || opp.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    // Summary statistics
    const totalPipelinePremium = opportunities.reduce((acc, curr) => {
        const numeric = parseInt((curr.totalInvestment || '').replace(/[^0-9]/g, '') || '0', 10);
        return acc + numeric;
    }, 0);

    const activeStructuringCount = opportunities.filter(
        (o) => o.status === 'Carrier Structuring' || o.status === 'In Underwriting' || o.status === 'Illustration Prepared'
    ).length;

    const getStatusBadgeStyle = (status: OpportunityStatus) => {
        switch (status) {
            case 'New Opportunity':
                return { bg: 'rgba(24,95,165,0.08)', border: 'rgba(24,95,165,0.25)', text: '#185FA5' };
            case 'Initial Review':
                return { bg: 'rgba(147,51,234,0.08)', border: 'rgba(147,51,234,0.25)', text: '#7E22CE' };
            case 'Carrier Structuring':
                return { bg: 'rgba(139,111,62,0.1)', border: 'rgba(139,111,62,0.3)', text: '#8B6F3E' };
            case 'Illustration Prepared':
                return { bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.25)', text: '#059669' };
            case 'In Underwriting':
                return { bg: 'rgba(217,119,6,0.1)', border: 'rgba(217,119,6,0.3)', text: '#B45309' };
            case 'Closed Won':
                return { bg: 'rgba(34,197,94,0.1)', border: 'rgba(34,197,94,0.3)', text: '#15803D' };
            default:
                return { bg: 'rgba(0,0,0,0.04)', border: 'rgba(0,0,0,0.1)', text: '#5F5E5A' };
        }
    };

    return (
        <div style={{ color: '#141412', maxWidth: 1240, margin: '0 auto' }} className="space-y-8">

            {/* Success toast */}
            {successMessage && (
                <div style={{
                    position: 'fixed', top: 90, right: 32, zIndex: 9999,
                    background: '#FFFFFF', border: '1px solid #8B6F3E',
                    padding: '1rem 1.5rem', borderRadius: 6, display: 'flex', alignItems: 'center', gap: '0.75rem',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.12)'
                }}>
                    <Check size={18} style={{ color: '#8B6F3E' }} />
                    <span style={{ fontSize: 13, color: '#141412', fontWeight: 500 }}>{successMessage}</span>
                    <button onClick={() => setSuccessMessage(null)} style={{ background: 'none', border: 'none', color: '#888780', cursor: 'pointer', marginLeft: 8 }}>
                        <X size={14} />
                    </button>
                </div>
            )}

            {/* Header & Dedicated Link Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-black/10">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="eyebrow" style={{ color: '#8B6F3E' }}>Institutional Advisor Portal</span>
                        <span style={{ color: '#888780' }}>•</span>
                        <span className="eyebrow">Pipeline &amp; Structuring</span>
                    </div>
                    <h1 className="text-3xl font-light text-[#141412] tracking-tight font-serif">
                        Lead &amp; Opportunity Registration
                    </h1>
                    <p className="text-sm text-[#5F5E5A] mt-1">
                        Register prospective client opportunities, track carrier underwriting status, manage trust documents, and log advisory notes.
                    </p>
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                    <button
                        onClick={handleCopyDedicatedLink}
                        className="flex items-center gap-2 px-3.5 py-2.5 rounded text-xs font-medium transition-all"
                        style={{
                            background: copiedLink ? 'rgba(139,111,62,0.1)' : '#FFFFFF',
                            border: copiedLink ? '1px solid #8B6F3E' : '1px solid rgba(0,0,0,0.15)',
                            color: copiedLink ? '#8B6F3E' : '#141412',
                            boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
                        }}
                        title="Copy dedicated link for advisor lead registration"
                    >
                        {copiedLink ? <Check size={14} className="text-[#8B6F3E]" /> : <Copy size={14} />}
                        <span>{copiedLink ? 'Link Copied to Clipboard!' : 'Copy Dedicated Link'}</span>
                    </button>

                    <button
                        onClick={() => setIsRegisterModalOpen(true)}
                        className="flex items-center gap-2 px-4 py-2.5 rounded text-xs font-semibold tracking-wider uppercase transition-all shadow-md"
                        style={{
                            background: '#141412',
                            color: '#FFFFFF',
                        }}
                    >
                        <UserPlus size={15} />
                        <span>+ Register Opportunity</span>
                    </button>
                </div>
            </div>

            {/* Dedicated Link Banner */}
            <div
                style={{
                    background: 'linear-gradient(90deg, rgba(139,111,62,0.08) 0%, #FFFFFF 100%)',
                    border: '1px solid rgba(139,111,62,0.25)',
                    padding: '1.25rem 1.5rem',
                    borderRadius: 6,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
                }}
            >
                <div className="flex items-center gap-3.5">
                    <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(139,111,62,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8B6F3E' }}>
                        <Building size={20} />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <span style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8B6F3E', fontWeight: 600 }}>Dedicated Advisor Access Link</span>
                            <span style={{ fontSize: 10, background: 'rgba(0,0,0,0.05)', padding: '2px 6px', borderRadius: 3, color: '#5F5E5A', fontWeight: 500 }}>Permanent URL</span>
                        </div>
                        <p style={{ fontSize: 13, color: '#141412', margin: '3px 0 0 0' }}>
                            Direct link to register opportunities: <code style={{ color: '#8B6F3E', background: 'rgba(139,111,62,0.08)', padding: '2px 8px', borderRadius: 4, fontSize: 12, fontWeight: 600 }}>/platform/lead-registration</code> or <code style={{ color: '#8B6F3E', background: 'rgba(139,111,62,0.08)', padding: '2px 8px', borderRadius: 4, fontSize: 12, fontWeight: 600 }}>/lead-registration</code>
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <Link
                        href="/lead-registration"
                        className="text-xs text-[#8B6F3E] hover:underline flex items-center gap-1 font-medium"
                        target="_blank"
                    >
                        <span>Open Direct URL</span>
                        <ExternalLink size={12} />
                    </Link>
                </div>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div style={{ background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)', padding: '1.25rem 1.5rem', borderRadius: 6, boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
                    <span className="eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>Total Opportunities</span>
                    <div className="flex items-baseline gap-2">
                        <span style={{ fontSize: 28, fontWeight: 300, color: '#141412', fontFamily: 'serif' }}>{opportunities.length}</span>
                        <span style={{ fontSize: 12, color: '#5F5E5A' }}>registered</span>
                    </div>
                </div>

                <div style={{ background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)', padding: '1.25rem 1.5rem', borderRadius: 6, boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
                    <span className="eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>Total Investment Pipeline</span>
                    <div className="flex items-baseline gap-2">
                        <span style={{ fontSize: 28, fontWeight: 300, color: '#8B6F3E', fontFamily: 'serif' }}>
                            ${(totalPipelinePremium / 1000000).toFixed(1)}M
                        </span>
                        <span style={{ fontSize: 12, color: '#5F5E5A' }}>capital</span>
                    </div>
                </div>

                <div style={{ background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)', padding: '1.25rem 1.5rem', borderRadius: 6, boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
                    <span className="eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>In Carrier Structuring</span>
                    <div className="flex items-baseline gap-2">
                        <span style={{ fontSize: 28, fontWeight: 300, color: '#141412', fontFamily: 'serif' }}>{activeStructuringCount}</span>
                        <span style={{ fontSize: 12, color: '#5F5E5A' }}>active cases</span>
                    </div>
                </div>

                <div style={{ background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)', padding: '1.25rem 1.5rem', borderRadius: 6, boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
                    <span className="eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>Trust Allocation</span>
                    <div className="flex items-baseline gap-2">
                        <span style={{ fontSize: 28, fontWeight: 300, color: '#0F6E56', fontFamily: 'serif' }}>
                            {Math.round((opportunities.filter((o) => o.runThroughTrust).length / (opportunities.length || 1)) * 100)}%
                        </span>
                        <span style={{ fontSize: 12, color: '#5F5E5A' }}>trust situs</span>
                    </div>
                </div>
            </div>

            {/* Filter and Search Bar */}
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                <div className="relative flex-1 max-w-md">
                    <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888780]" />
                    <input
                        type="text"
                        placeholder="Search by client name, state, trust, or notes..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 text-xs rounded bg-[#FFFFFF] border border-black/10 text-[#141412] placeholder-[#888780] focus:outline-none focus:border-[#8B6F3E] shadow-sm"
                    />
                </div>

                <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
                    <span style={{ fontSize: 11, color: '#5F5E5A', textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap', fontWeight: 600 }}>Status:</span>
                    {['All', ...STATUS_OPTIONS].map((status) => {
                        const active = statusFilter === status;
                        return (
                            <button
                                key={status}
                                onClick={() => setStatusFilter(status)}
                                className="px-3 py-1.5 rounded text-xs whitespace-nowrap transition-all"
                                style={{
                                    background: active ? '#141412' : '#FFFFFF',
                                    color: active ? '#FFFFFF' : '#5F5E5A',
                                    border: active ? '1px solid #141412' : '1px solid rgba(0,0,0,0.08)',
                                    fontWeight: active ? 600 : 400,
                                    boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
                                }}
                            >
                                {status}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Opportunities List Layout */}
            <div className="space-y-6">
                {filteredOpportunities.length === 0 ? (
                    <div style={{
                        background: '#FFFFFF',
                        border: '1px solid rgba(0,0,0,0.08)',
                        padding: '4rem 2rem',
                        textAlign: 'center',
                        borderRadius: 8,
                        boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
                    }}>
                        <UserPlus size={40} style={{ color: '#888780', margin: '0 auto 1.5rem auto' }} />
                        <h3 className="text-lg font-medium text-[#141412] mb-2">No Registered Opportunities Found</h3>
                        <p className="text-xs text-[#5F5E5A] max-w-md mx-auto mb-6">
                            {searchTerm || statusFilter !== 'All'
                                ? 'No opportunities match your search filter criteria. Try resetting filters or search query.'
                                : 'Start building your Private Placement pipeline by registering your first prospective client opportunity.'}
                        </p>
                        <button
                            onClick={() => {
                                setSearchTerm('');
                                setStatusFilter('All');
                                setIsRegisterModalOpen(true);
                            }}
                            className="px-4 py-2 rounded text-xs font-semibold bg-[#141412] text-[#FFFFFF] uppercase tracking-wider"
                        >
                            + Register New Opportunity
                        </button>
                    </div>
                ) : (
                    filteredOpportunities.map((opp) => {
                        const statusStyle = getStatusBadgeStyle(opp.status);
                        const isExpanded = isCardExpanded(opp.id);
                        const stateIsDifferent = opp.runThroughTrust && opp.trustState && opp.trustState.toLowerCase() !== (opp.address?.state || '').toLowerCase();

                        return (
                            <div
                                key={opp.id}
                                style={{
                                    background: '#FFFFFF',
                                    border: '1px solid rgba(0,0,0,0.08)',
                                    borderRadius: 8,
                                    overflow: 'hidden',
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                                    transition: 'border-color 0.2s',
                                }}
                                className="hover:border-black/20"
                            >
                                {/* Opportunity Card Header */}
                                <div style={{
                                    padding: '1.25rem 1.75rem',
                                    borderBottom: '1px solid rgba(0,0,0,0.06)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    flexWrap: 'wrap',
                                    gap: '1rem',
                                    background: '#FDFDFD'
                                }}>
                                    <div className="flex items-center gap-3.5">
                                        <div style={{
                                            width: 44, height: 44, borderRadius: '50%',
                                            background: 'rgba(139,111,62,0.1)',
                                            border: '1px solid rgba(139,111,62,0.25)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontFamily: 'serif', fontSize: 18, color: '#8B6F3E', fontWeight: 600
                                        }}>
                                            {opp.firstName[0]}{opp.lastName[0]}
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-2.5 flex-wrap">
                                                <h2 className="text-xl font-medium text-[#141412] tracking-wide">
                                                    {opp.firstName} {opp.lastName}
                                                </h2>

                                                {opp.runThroughTrust && (
                                                    <span style={{
                                                        background: 'rgba(24,95,165,0.08)',
                                                        border: '1px solid rgba(24,95,165,0.25)',
                                                        color: '#185FA5',
                                                        fontSize: 11,
                                                        fontWeight: 500,
                                                        padding: '2px 8px',
                                                        borderRadius: 4,
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: 4
                                                    }}>
                                                        <Shield size={11} />
                                                        <span>Trust: {opp.trustName || 'Trust Structure'}</span>
                                                    </span>
                                                )}
                                            </div>

                                            <p style={{ fontSize: 12, color: '#5F5E5A', margin: '2px 0 0 0' }}>
                                                Registered on {opp.submittedDate} • Contact: {opp.email || 'Email on file'} {opp.phone ? `• ${opp.phone}` : ''}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Status selector & Actions */}
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <div className="flex items-center gap-1.5">
                                            <span style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888780', fontWeight: 600 }}>Status:</span>
                                            <select
                                                value={opp.status}
                                                onChange={(e) => updateOpportunityStatus(opp.id, e.target.value as OpportunityStatus)}
                                                style={{
                                                    background: statusStyle.bg,
                                                    border: `1px solid ${statusStyle.border}`,
                                                    color: statusStyle.text,
                                                    fontSize: 11,
                                                    fontWeight: 600,
                                                    padding: '4px 8px',
                                                    borderRadius: 4,
                                                    cursor: 'pointer',
                                                    outline: 'none'
                                                }}
                                            >
                                                {STATUS_OPTIONS.map((st) => (
                                                    <option key={st} value={st} style={{ background: '#FFFFFF', color: '#141412' }}>
                                                        {st}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <Link
                                            href={`/platform/illustration?firstName=${encodeURIComponent(opp.firstName)}&lastName=${encodeURIComponent(opp.lastName)}&premium=${encodeURIComponent(opp.totalInvestment.replace(/[^0-9]/g, ''))}&state=${encodeURIComponent(opp.address?.state || '')}`}
                                            className="flex items-center gap-1 px-3 py-1.5 rounded text-xs transition-colors font-medium"
                                            style={{
                                                background: 'rgba(139,111,62,0.08)',
                                                border: '1px solid rgba(139,111,62,0.25)',
                                                color: '#8B6F3E'
                                            }}
                                            title="Generate carrier illustration for this client"
                                        >
                                            <span>Run Illustration</span>
                                            <ExternalLink size={12} />
                                        </Link>

                                        <button
                                            onClick={() => toggleCardExpand(opp.id)}
                                            style={{
                                                background: '#FFFFFF',
                                                border: '1px solid rgba(0,0,0,0.1)',
                                                color: '#5F5E5A',
                                                padding: '5px 8px',
                                                borderRadius: 4,
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 4,
                                                fontSize: 11,
                                                fontWeight: 500
                                            }}
                                        >
                                            <span>{isExpanded ? 'Collapse' : 'Expand'}</span>
                                            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                                        </button>

                                        <button
                                            onClick={() => {
                                                if (confirm(`Are you sure you want to delete the opportunity for ${opp.firstName} ${opp.lastName}?`)) {
                                                    deleteOpportunity(opp.id);
                                                }
                                            }}
                                            style={{
                                                background: 'transparent',
                                                border: 'none',
                                                color: '#888780',
                                                cursor: 'pointer',
                                                padding: 4
                                            }}
                                            title="Delete opportunity"
                                            className="hover:text-red-500"
                                        >
                                            <Trash2 size={14} />
                                        </button>
                                    </div>
                                </div>

                                {/* Summary Grid of all Fields */}
                                <div style={{
                                    padding: '1.5rem 1.75rem',
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                                    gap: '1.25rem',
                                    borderBottom: isExpanded ? '1px solid rgba(0,0,0,0.06)' : 'none',
                                    background: '#FFFFFF'
                                }}>
                                    {/* 1. Total amount of investment & years */}
                                    <div style={{ background: '#F8F8F6', padding: '1rem', borderRadius: 6, border: '1px solid rgba(0,0,0,0.05)' }}>
                                        <span className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 4 }}>
                                            <DollarSign size={11} style={{ color: '#8B6F3E' }} />
                                            Investment &amp; Years
                                        </span>
                                        <p style={{ fontSize: 17, fontWeight: 600, color: '#8B6F3E', margin: '2px 0 0 0' }}>
                                            {opp.totalInvestment}
                                        </p>
                                        <p style={{ fontSize: 12, color: '#5F5E5A', margin: '2px 0 0 0' }}>
                                            Over {opp.investmentYears || 'Single premium'}
                                        </p>
                                    </div>

                                    {/* 2. Apx. net worth, income, etc. */}
                                    <div style={{ background: '#F8F8F6', padding: '1rem', borderRadius: 6, border: '1px solid rgba(0,0,0,0.05)' }}>
                                        <span className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 4 }}>
                                            <Activity size={11} style={{ color: '#185FA5' }} />
                                            Net Worth &amp; Income
                                        </span>
                                        <p style={{ fontSize: 16, fontWeight: 600, color: '#141412', margin: '2px 0 0 0' }}>
                                            {opp.netWorth} NW
                                        </p>
                                        <p style={{ fontSize: 12, color: '#5F5E5A', margin: '2px 0 0 0' }}>
                                            Income: {opp.annualIncome}/yr
                                        </p>
                                    </div>

                                    {/* 3. Age, Gender & Health */}
                                    <div style={{ background: '#F8F8F6', padding: '1rem', borderRadius: 6, border: '1px solid rgba(0,0,0,0.05)' }}>
                                        <span className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 4 }}>
                                            <Calendar size={11} style={{ color: '#0F6E56' }} />
                                            Demographics &amp; Health
                                        </span>
                                        <p style={{ fontSize: 14, fontWeight: 600, color: '#141412', margin: '2px 0 0 0' }}>
                                            Age {opp.age} • {opp.gender}
                                        </p>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
                                            <span style={{
                                                fontSize: 10,
                                                fontWeight: 600,
                                                padding: '1px 6px',
                                                borderRadius: 3,
                                                background: opp.smokerStatus === 'Smoker' ? 'rgba(239,68,68,0.1)' : 'rgba(34,197,94,0.1)',
                                                color: opp.smokerStatus === 'Smoker' ? '#DC2626' : '#15803D'
                                            }}>
                                                {opp.smokerStatus}
                                            </span>
                                            <span style={{ fontSize: 11, color: '#5F5E5A', fontWeight: 500 }}>
                                                {opp.generalHealth}
                                            </span>
                                        </div>
                                    </div>

                                    {/* 4. Address & Trust State */}
                                    <div style={{ background: '#F8F8F6', padding: '1rem', borderRadius: 6, border: '1px solid rgba(0,0,0,0.05)' }}>
                                        <span className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 4 }}>
                                            <MapPin size={11} style={{ color: '#8B6F3E' }} />
                                            Address &amp; Trust Situs
                                        </span>
                                        <p style={{ fontSize: 13, color: '#141412', margin: '2px 0 0 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontWeight: 500 }}>
                                            {opp.address?.street}, {opp.address?.city}, {opp.address?.state} {opp.address?.zip}
                                        </p>
                                        <div style={{ marginTop: 4 }}>
                                            {opp.runThroughTrust ? (
                                                <span style={{
                                                    fontSize: 11,
                                                    color: stateIsDifferent ? '#B45309' : '#5F5E5A',
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: 4
                                                }}>
                                                    <span>Trust Situs: <strong>{opp.trustState || opp.address?.state}</strong></span>
                                                    {stateIsDifferent && (
                                                        <span style={{ fontSize: 9, background: 'rgba(217,119,6,0.12)', color: '#B45309', padding: '1px 4px', borderRadius: 2, fontWeight: 600 }}>
                                                            State Differs
                                                        </span>
                                                    )}
                                                </span>
                                            ) : (
                                                <span style={{ fontSize: 11, color: '#888780' }}>Individual Ownership (No Trust)</span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Expanded Sections: Health Details, Existing Insurance, Attached Files, Notes */}
                                {isExpanded && (
                                    <div style={{ padding: '1.75rem', background: '#FBFBFA', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>

                                        {/* Underwriting & Insurance Detail Row */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {/* Health & Medical Background */}
                                            <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: 6, border: '1px solid rgba(0,0,0,0.06)' }}>
                                                <h4 className="text-xs font-semibold text-[#8B6F3E] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                                    <Activity size={13} />
                                                    Health &amp; Medical Underwriting Context
                                                </h4>
                                                <p style={{ fontSize: 13, color: '#33322E', lineHeight: 1.6 }}>
                                                    {opp.healthDetails || 'No specific medical conditions or prescription drugs disclosed. Standard health rating applies.'}
                                                </p>
                                            </div>

                                            {/* Existing Insurance */}
                                            <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: 6, border: '1px solid rgba(0,0,0,0.06)' }}>
                                                <h4 className="text-xs font-semibold text-[#185FA5] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                                    <FileCheck size={13} />
                                                    Existing Life Insurance &amp; 1035 Suitability
                                                </h4>
                                                <p style={{ fontSize: 13, color: '#33322E', lineHeight: 1.6 }}>
                                                    {opp.existingInsurance || 'No existing in-force policies reported.'}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Attached Files Section */}
                                        <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: 6, border: '1px solid rgba(0,0,0,0.06)' }}>
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="flex items-center gap-2">
                                                    <Paperclip size={14} className="text-[#8B6F3E]" />
                                                    <h4 className="text-xs font-semibold text-[#141412] uppercase tracking-wider">
                                                        Attached Files &amp; Verification Documents
                                                    </h4>
                                                    <span style={{ fontSize: 11, background: 'rgba(0,0,0,0.05)', padding: '1px 6px', borderRadius: 10, color: '#5F5E5A', fontWeight: 600 }}>
                                                        {(opp.files || []).length}
                                                    </span>
                                                </div>

                                                <label style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: 6,
                                                    fontSize: 11,
                                                    fontWeight: 500,
                                                    padding: '4px 10px',
                                                    borderRadius: 4,
                                                    background: '#F8F8F6',
                                                    border: '1px solid rgba(0,0,0,0.12)',
                                                    color: '#141412',
                                                    cursor: 'pointer'
                                                }}
                                                    className="hover:bg-black/5"
                                                >
                                                    <Upload size={12} />
                                                    <span>Upload File</span>
                                                    <input
                                                        type="file"
                                                        style={{ display: 'none' }}
                                                        onChange={(e) => handleFileUpload(opp.id, e)}
                                                    />
                                                </label>
                                            </div>

                                            {(opp.files || []).length === 0 ? (
                                                <div style={{ padding: '1.25rem', textAlign: 'center', border: '1px dashed rgba(0,0,0,0.15)', borderRadius: 4 }}>
                                                    <p style={{ fontSize: 12, color: '#888780', margin: 0 }}>
                                                        No documents attached yet. Click &quot;Upload File&quot; to attach tax returns, balance sheets, existing policy ledgers, or trust agreements.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                                    {opp.files.map((file) => (
                                                        <div
                                                            key={file.id}
                                                            style={{
                                                                background: '#F8F8F6',
                                                                border: '1px solid rgba(0,0,0,0.06)',
                                                                padding: '0.75rem 1rem',
                                                                borderRadius: 5,
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'space-between',
                                                                gap: '0.5rem'
                                                            }}
                                                        >
                                                            <div className="flex items-center gap-2.5 min-w-0">
                                                                <FileText size={16} className="text-[#8B6F3E] flex-shrink-0" />
                                                                <div className="min-w-0">
                                                                    <p style={{ fontSize: 12, fontWeight: 500, color: '#141412', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                                        {file.name}
                                                                    </p>
                                                                    <p style={{ fontSize: 10, color: '#888780', margin: '2px 0 0 0' }}>
                                                                        {file.size} • {file.uploadedAt}
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            <div className="flex items-center gap-1 flex-shrink-0">
                                                                <button
                                                                    onClick={() => alert(`Downloading file: ${file.name}`)}
                                                                    style={{ background: 'none', border: 'none', color: '#5F5E5A', cursor: 'pointer', padding: 4 }}
                                                                    className="hover:text-black"
                                                                    title="Download file"
                                                                >
                                                                    <Download size={13} />
                                                                </button>
                                                                <button
                                                                    onClick={() => deleteOpportunityFile(opp.id, file.id)}
                                                                    style={{ background: 'none', border: 'none', color: '#888780', cursor: 'pointer', padding: 4 }}
                                                                    className="hover:text-red-500"
                                                                    title="Remove file"
                                                                >
                                                                    <X size={13} />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Room to Add Notes & Past Notes Section */}
                                        <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: 6, border: '1px solid rgba(0,0,0,0.06)' }}>
                                            <div className="flex items-center gap-2 mb-3">
                                                <MessageSquare size={14} className="text-[#8B6F3E]" />
                                                <h4 className="text-xs font-semibold text-[#141412] uppercase tracking-wider">
                                                    Advisory Notes &amp; Activity Log
                                                </h4>
                                                <span style={{ fontSize: 11, background: 'rgba(0,0,0,0.05)', padding: '1px 6px', borderRadius: 10, color: '#5F5E5A', fontWeight: 600 }}>
                                                    {(opp.notes || []).length} past notes
                                                </span>
                                            </div>

                                            {/* Composer: Room to Add Notes */}
                                            <div className="mb-4">
                                                <div style={{
                                                    background: '#F8F8F6',
                                                    border: '1px solid rgba(0,0,0,0.1)',
                                                    borderRadius: 6,
                                                    padding: '0.75rem',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '0.5rem'
                                                }}>
                                                    <textarea
                                                        rows={2}
                                                        placeholder="Add an advisory note, underwriting observation, client call summary, or tax counsel update..."
                                                        value={newNoteInputs[opp.id] || ''}
                                                        onChange={(e) =>
                                                            setNewNoteInputs((prev) => ({
                                                                ...prev,
                                                                [opp.id]: e.target.value
                                                            }))
                                                        }
                                                        style={{
                                                            background: 'transparent',
                                                            border: 'none',
                                                            outline: 'none',
                                                            color: '#141412',
                                                            fontSize: 13,
                                                            resize: 'vertical',
                                                            width: '100%',
                                                            fontFamily: 'inherit'
                                                        }}
                                                    />

                                                    <div className="flex items-center justify-between pt-2 border-t border-black/5">
                                                        <span style={{ fontSize: 11, color: '#888780' }}>
                                                            Posting as: <span style={{ color: '#8B6F3E', fontWeight: 600 }}>Advisor</span>
                                                        </span>

                                                        <button
                                                            onClick={() => handleAddNote(opp.id)}
                                                            disabled={!newNoteInputs[opp.id]?.trim()}
                                                            style={{
                                                                background: newNoteInputs[opp.id]?.trim() ? '#141412' : 'rgba(0,0,0,0.1)',
                                                                color: newNoteInputs[opp.id]?.trim() ? '#FFFFFF' : '#888780',
                                                                border: 'none',
                                                                padding: '6px 14px',
                                                                borderRadius: 4,
                                                                fontSize: 11,
                                                                fontWeight: 600,
                                                                cursor: newNoteInputs[opp.id]?.trim() ? 'pointer' : 'not-allowed',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: 4
                                                            }}
                                                        >
                                                            <span>Add Note</span>
                                                            <Send size={11} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Past Notes List */}
                                            {(opp.notes || []).length === 0 ? (
                                                <p style={{ fontSize: 12, color: '#888780', margin: 0, fontStyle: 'italic' }}>
                                                    No past notes logged yet for this opportunity. Add your first note above.
                                                </p>
                                            ) : (
                                                <div className="space-y-2.5">
                                                    {opp.notes.map((note) => (
                                                        <div
                                                            key={note.id}
                                                            style={{
                                                                background: '#F8F8F6',
                                                                border: '1px solid rgba(0,0,0,0.06)',
                                                                padding: '0.85rem 1rem',
                                                                borderRadius: 5
                                                            }}
                                                        >
                                                            <div className="flex items-center justify-between mb-1.5">
                                                                <div className="flex items-center gap-2">
                                                                    <span style={{
                                                                        fontSize: 10,
                                                                        letterSpacing: '0.08em',
                                                                        textTransform: 'uppercase',
                                                                        background: 'rgba(139,111,62,0.1)',
                                                                        color: '#8B6F3E',
                                                                        padding: '1px 6px',
                                                                        borderRadius: 3,
                                                                        fontWeight: 600
                                                                    }}>
                                                                        {note.author}
                                                                    </span>
                                                                    <span style={{ fontSize: 11, color: '#888780', display: 'flex', alignItems: 'center', gap: 3 }}>
                                                                        <Clock size={11} />
                                                                        {note.createdAt}
                                                                    </span>
                                                                </div>

                                                                <button
                                                                    onClick={() => deleteOpportunityNote(opp.id, note.id)}
                                                                    style={{ background: 'none', border: 'none', color: '#888780', cursor: 'pointer', padding: 2 }}
                                                                    className="hover:text-red-500"
                                                                    title="Delete note"
                                                                >
                                                                    <X size={12} />
                                                                </button>
                                                            </div>
                                                            <p style={{ fontSize: 13, color: '#2C2B28', lineHeight: 1.5, margin: 0 }}>
                                                                {note.text}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })
                )}
            </div>

            {/* Modal: Register New Opportunity */}
            {isRegisterModalOpen && (
                <RegisterOpportunityModal
                    onClose={() => setIsRegisterModalOpen(false)}
                    onSubmit={(newOppData) => {
                        const created = addOpportunity(newOppData);
                        setIsRegisterModalOpen(false);
                        setSuccessMessage(`Opportunity for ${created.firstName} ${created.lastName} successfully registered!`);
                        setTimeout(() => setSuccessMessage(null), 5000);
                    }}
                />
            )}
        </div>
    );
}

// ─────────────────────────────────────────────────────────────
// REGISTRATION MODAL COMPONENT WITH ALL REQUIRED FIELDS
// ─────────────────────────────────────────────────────────────

interface RegisterOpportunityModalProps {
    onClose: () => void;
    onSubmit: (data: Omit<Opportunity, 'id' | 'submittedDate'>) => void;
}

function RegisterOpportunityModal({ onClose, onSubmit }: RegisterOpportunityModalProps) {
    const fileInputId = useId();

    const [formData, setFormData] = useState({
        // 1. First name, Last name
        firstName: '',
        lastName: '',
        email: '',
        phone: '',

        // 2. Address
        street: '',
        city: '',
        state: 'FL',
        zip: '',

        // 3. Age, Gender
        age: '55',
        gender: 'Male' as 'Male' | 'Female' | 'Other',

        // 4. Health (smoker/non smoker, general health)
        smokerStatus: 'Non-Smoker' as 'Non-Smoker' | 'Smoker',
        generalHealth: 'Preferred Best / Super Preferred',
        healthDetails: '',

        // 5. Total amount of investment and over how many years
        totalInvestment: '$5,000,000',
        investmentYears: '5 Years ($1.0M/yr)',

        // 6. Apx. net worth, income, etc.
        netWorth: '$25,000,000',
        annualIncome: '$1,500,000',

        // 7. Existing insurance
        existingInsurance: '',

        // 8. Run through trust? State (if different than contact address)
        runThroughTrust: true,
        trustState: 'South Dakota',
        trustName: '',

        // 9. Notes
        notes: '',

        // Status default
        status: 'New Opportunity' as OpportunityStatus
    });

    const [attachedFiles, setAttachedFiles] = useState<OpportunityFile[]>([]);
    const [fileInputRef, setFileInputRef] = useState<HTMLInputElement | null>(null);

    const handleFileAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        const newFilesList: OpportunityFile[] = [];
        for (let i = 0; i < files.length; i++) {
            const f = files[i];
            const sizeFormatted = f.size > 1024 * 1024
                ? `${(f.size / (1024 * 1024)).toFixed(1)} MB`
                : `${Math.round(f.size / 1024)} KB`;

            newFilesList.push({
                id: `file-${Date.now()}-${i}`,
                name: f.name,
                size: sizeFormatted,
                type: f.type || 'application/octet-stream',
                uploadedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
            });
        }

        setAttachedFiles((prev) => [...prev, ...newFilesList]);
        e.target.value = '';
    };

    const handleRemoveInitialFile = (id: string) => {
        setAttachedFiles((prev) => prev.filter((f) => f.id !== id));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.firstName.trim() || !formData.lastName.trim()) {
            alert('Please provide both First Name and Last Name.');
            return;
        }

        const now = new Date();
        const initialNotes = formData.notes.trim()
            ? [
                {
                    id: `note-${Date.now()}`,
                    text: formData.notes.trim(),
                    author: 'Advisor',
                    createdAt: `${now.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })} • ${now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`
                }
            ]
            : [];

        const payload: Omit<Opportunity, 'id' | 'submittedDate'> = {
            firstName: formData.firstName.trim(),
            lastName: formData.lastName.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            address: {
                street: formData.street.trim() || 'Address on file',
                city: formData.city.trim() || 'City',
                state: formData.state,
                zip: formData.zip.trim() || '00000'
            },
            age: parseInt(formData.age, 10) || 50,
            gender: formData.gender,
            smokerStatus: formData.smokerStatus,
            generalHealth: formData.generalHealth,
            healthDetails: formData.healthDetails.trim(),
            totalInvestment: formData.totalInvestment.trim() || '$1,000,000',
            investmentYears: formData.investmentYears.trim() || '5 Years',
            netWorth: formData.netWorth.trim() || '$10,000,000',
            annualIncome: formData.annualIncome.trim() || '$500,000',
            existingInsurance: formData.existingInsurance.trim() || 'None',
            runThroughTrust: formData.runThroughTrust,
            trustState: formData.runThroughTrust ? formData.trustState : undefined,
            trustName: formData.runThroughTrust ? formData.trustName.trim() || `${formData.lastName} Family Trust` : undefined,
            status: formData.status,
            notes: initialNotes,
            files: attachedFiles
        };

        onSubmit(payload);
    };

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(0, 0, 0, 0.45)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            overflowY: 'auto'
        }}>
            <div style={{
                background: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.12)',
                borderRadius: 8,
                width: '100%',
                maxWidth: 860,
                maxHeight: '92vh',
                overflowY: 'auto',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.2)',
                color: '#141412',
            }}>
                {/* Modal Header */}
                <div style={{
                    padding: '1.5rem 2rem',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'sticky',
                    top: 0,
                    background: '#FFFFFF',
                    zIndex: 10
                }}>
                    <div>
                        <span className="eyebrow" style={{ color: '#8B6F3E' }}>Opportunity Intake Form</span>
                        <h2 className="text-xl font-medium text-[#141412] font-serif mt-0.5">
                            Register Prospective Client Opportunity
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        style={{ background: 'none', border: 'none', color: '#888780', cursor: 'pointer', padding: 6 }}
                        className="hover:text-black"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSubmit} style={{ padding: '2rem' }} className="space-y-6">

                    {/* Section 1: Client Personal Details */}
                    <div>
                        <div className="flex items-center gap-2 mb-3 pb-1 border-b border-black/5">
                            <span style={{ fontSize: 11, fontFamily: 'monospace', color: '#8B6F3E', fontWeight: 600 }}>01</span>
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#141412]">
                                Client Identification &amp; Contact
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label style={{ display: 'block', fontSize: 11, color: '#5F5E5A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6, fontWeight: 600 }}>
                                    First Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Eleanor"
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    className="w-full px-3 py-2 text-sm bg-[#FFFFFF] border border-black/15 rounded text-[#141412] focus:outline-none focus:border-[#8B6F3E]"
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: 11, color: '#5F5E5A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6, fontWeight: 600 }}>
                                    Last Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Vance"
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    className="w-full px-3 py-2 text-sm bg-[#FFFFFF] border border-black/15 rounded text-[#141412] focus:outline-none focus:border-[#8B6F3E]"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label style={{ display: 'block', fontSize: 11, color: '#5F5E5A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6, fontWeight: 600 }}>
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="client@familyoffice.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-3 py-2 text-sm bg-[#FFFFFF] border border-black/15 rounded text-[#141412] focus:outline-none focus:border-[#8B6F3E]"
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: 11, color: '#5F5E5A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6, fontWeight: 600 }}>
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    placeholder="(555) 000-0000"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-3 py-2 text-sm bg-[#FFFFFF] border border-black/15 rounded text-[#141412] focus:outline-none focus:border-[#8B6F3E]"
                                />
                            </div>
                        </div>

                        {/* Address */}
                        <div className="space-y-3">
                            <div>
                                <label style={{ display: 'block', fontSize: 11, color: '#5F5E5A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6, fontWeight: 600 }}>
                                    Contact Street Address *
                                </label>
                                <input
                                    type="text"
                                    placeholder="450 Ocean Drive, Suite 1200"
                                    value={formData.street}
                                    onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                                    className="w-full px-3 py-2 text-sm bg-[#FFFFFF] border border-black/15 rounded text-[#141412] focus:outline-none focus:border-[#8B6F3E]"
                                />
                            </div>

                            <div className="grid grid-cols-3 gap-3">
                                <div>
                                    <label style={{ display: 'block', fontSize: 11, color: '#5F5E5A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6, fontWeight: 600 }}>
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Palm Beach"
                                        value={formData.city}
                                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                        className="w-full px-3 py-2 text-sm bg-[#FFFFFF] border border-black/15 rounded text-[#141412] focus:outline-none focus:border-[#8B6F3E]"
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: 11, color: '#5F5E5A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6, fontWeight: 600 }}>
                                        State
                                    </label>
                                    <select
                                        value={formData.state}
                                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                                        className="w-full px-3 py-2 text-sm bg-[#FFFFFF] border border-black/15 rounded text-[#141412] focus:outline-none focus:border-[#8B6F3E]"
                                    >
                                        {US_STATES.map((st) => (
                                            <option key={st} value={st}>{st}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: 11, color: '#5F5E5A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6, fontWeight: 600 }}>
                                        ZIP Code
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="33480"
                                        value={formData.zip}
                                        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                                        className="w-full px-3 py-2 text-sm bg-[#FFFFFF] border border-black/15 rounded text-[#141412] focus:outline-none focus:border-[#8B6F3E]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Demographics & Health */}
                    <div>
                        <div className="flex items-center gap-2 mb-3 pb-1 border-b border-black/5">
                            <span style={{ fontSize: 11, fontFamily: 'monospace', color: '#8B6F3E', fontWeight: 600 }}>02</span>
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#141412]">
                                Demographics &amp; Health Underwriting
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label style={{ display: 'block', fontSize: 11, color: '#5F5E5A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6, fontWeight: 600 }}>
                                    Age *
                                </label>
                                <input
                                    type="number"
                                    min="18"
                                    max="85"
                                    required
                                    value={formData.age}
                                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                    className="w-full px-3 py-2 text-sm bg-[#FFFFFF] border border-black/15 rounded text-[#141412] focus:outline-none focus:border-[#8B6F3E]"
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: 11, color: '#5F5E5A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6, fontWeight: 600 }}>
                                    Gender *
                                </label>
                                <select
                                    value={formData.gender}
                                    onChange={(e) => setFormData({ ...formData, gender: e.target.value as 'Male' | 'Female' | 'Other' })}
                                    className="w-full px-3 py-2 text-sm bg-[#FFFFFF] border border-black/15 rounded text-[#141412] focus:outline-none focus:border-[#8B6F3E]"
                                >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        {/* Health (smoker/non smoker, general health) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label style={{ display: 'block', fontSize: 11, color: '#5F5E5A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6, fontWeight: 600 }}>
                                    Tobacco / Smoker Status *
                                </label>
                                <div className="grid grid-cols-2 gap-2">
                                    {(['Non-Smoker', 'Smoker'] as const).map((status) => (
                                        <button
                                            type="button"
                                            key={status}
                                            onClick={() => setFormData({ ...formData, smokerStatus: status })}
                                            style={{
                                                padding: '8px 12px',
                                                borderRadius: 4,
                                                fontSize: 12,
                                                border: formData.smokerStatus === status ? '2px solid #8B6F3E' : '1px solid rgba(0,0,0,0.15)',
                                                background: formData.smokerStatus === status ? 'rgba(139,111,62,0.08)' : '#FFFFFF',
                                                color: formData.smokerStatus === status ? '#8B6F3E' : '#5F5E5A',
                                                cursor: 'pointer',
                                                fontWeight: formData.smokerStatus === status ? 600 : 400
                                            }}
                                        >
                                            {status}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: 11, color: '#5F5E5A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6, fontWeight: 600 }}>
                                    General Health Rating *
                                </label>
                                <select
                                    value={formData.generalHealth}
                                    onChange={(e) => setFormData({ ...formData, generalHealth: e.target.value })}
                                    className="w-full px-3 py-2 text-sm bg-[#FFFFFF] border border-black/15 rounded text-[#141412] focus:outline-none focus:border-[#8B6F3E]"
                                >
                                    {HEALTH_CLASSES.map((cls) => (
                                        <option key={cls} value={cls}>{cls}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: 11, color: '#5F5E5A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6, fontWeight: 600 }}>
                                Health &amp; Medical Details (Medications, history, lifestyle)
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. Excellent physical condition, marathon runner, no daily prescriptions, clean family history"
                                value={formData.healthDetails}
                                onChange={(e) => setFormData({ ...formData, healthDetails: e.target.value })}
                                className="w-full px-3 py-2 text-sm bg-[#FFFFFF] border border-black/15 rounded text-[#141412] focus:outline-none focus:border-[#8B6F3E]"
                            />
                        </div>
                    </div>

                    {/* Section 3: Financials & Investment Allocation */}
                    <div>
                        <div className="flex items-center gap-2 mb-3 pb-1 border-b border-black/5">
                            <span style={{ fontSize: 11, fontFamily: 'monospace', color: '#8B6F3E', fontWeight: 600 }}>03</span>
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#141412]">
                                Investment Allocation &amp; Financial Profile
                            </h3>
                        </div>

                        {/* Total amount of investment and over how many years */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label style={{ display: 'block', fontSize: 11, color: '#5F5E5A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6, fontWeight: 600 }}>
                                    Total Amount of Investment *
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. $5,000,000"
                                    value={formData.totalInvestment}
                                    onChange={(e) => setFormData({ ...formData, totalInvestment: e.target.value })}
                                    className="w-full px-3 py-2 text-sm bg-[#FFFFFF] border border-black/15 rounded text-[#141412] focus:outline-none focus:border-[#8B6F3E]"
                                />
                                <div className="flex gap-2 mt-1.5 flex-wrap">
                                    {['$2,500,000', '$5,000,000', '$10,000,000', '$20,000,000'].map((amt) => (
                                        <button
                                            type="button"
                                            key={amt}
                                            onClick={() => setFormData({ ...formData, totalInvestment: amt })}
                                            style={{
                                                fontSize: 10,
                                                background: '#F8F8F6',
                                                border: '1px solid rgba(0,0,0,0.1)',
                                                color: '#5F5E5A',
                                                padding: '2px 6px',
                                                borderRadius: 3,
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {amt}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: 11, color: '#5F5E5A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6, fontWeight: 600 }}>
                                    Over How Many Years *
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. 5 Years ($1.0M/yr) or Single Premium"
                                    value={formData.investmentYears}
                                    onChange={(e) => setFormData({ ...formData, investmentYears: e.target.value })}
                                    className="w-full px-3 py-2 text-sm bg-[#FFFFFF] border border-black/15 rounded text-[#141412] focus:outline-none focus:border-[#8B6F3E]"
                                />
                                <div className="flex gap-2 mt-1.5 flex-wrap">
                                    {['Single Premium', '3 Years', '5 Years', '7 Years', '10 Years'].map((yr) => (
                                        <button
                                            type="button"
                                            key={yr}
                                            onClick={() => setFormData({ ...formData, investmentYears: yr })}
                                            style={{
                                                fontSize: 10,
                                                background: '#F8F8F6',
                                                border: '1px solid rgba(0,0,0,0.1)',
                                                color: '#5F5E5A',
                                                padding: '2px 6px',
                                                borderRadius: 3,
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {yr}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Apx. net worth, income, etc. */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label style={{ display: 'block', fontSize: 11, color: '#5F5E5A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6, fontWeight: 600 }}>
                                    Approx. Net Worth *
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. $35,000,000"
                                    value={formData.netWorth}
                                    onChange={(e) => setFormData({ ...formData, netWorth: e.target.value })}
                                    className="w-full px-3 py-2 text-sm bg-[#FFFFFF] border border-black/15 rounded text-[#141412] focus:outline-none focus:border-[#8B6F3E]"
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: 11, color: '#5F5E5A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6, fontWeight: 600 }}>
                                    Approx. Annual Income *
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. $2,000,000"
                                    value={formData.annualIncome}
                                    onChange={(e) => setFormData({ ...formData, annualIncome: e.target.value })}
                                    className="w-full px-3 py-2 text-sm bg-[#FFFFFF] border border-black/15 rounded text-[#141412] focus:outline-none focus:border-[#8B6F3E]"
                                />
                            </div>
                        </div>

                        {/* Existing insurance */}
                        <div>
                            <label style={{ display: 'block', fontSize: 11, color: '#5F5E5A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6, fontWeight: 600 }}>
                                Existing Insurance Coverage &amp; Policies
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. $5M Term with Lincoln Financial, $2M Whole Life with NW Mutual (CSV: $800k)"
                                value={formData.existingInsurance}
                                onChange={(e) => setFormData({ ...formData, existingInsurance: e.target.value })}
                                className="w-full px-3 py-2 text-sm bg-[#FFFFFF] border border-black/15 rounded text-[#141412] focus:outline-none focus:border-[#8B6F3E]"
                            />
                        </div>
                    </div>

                    {/* Section 4: Run Through Trust? State (if different) */}
                    <div>
                        <div className="flex items-center gap-2 mb-3 pb-1 border-b border-black/5">
                            <span style={{ fontSize: 11, fontFamily: 'monospace', color: '#8B6F3E', fontWeight: 600 }}>04</span>
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#141412]">
                                Ownership Structure &amp; Trust Situs
                            </h3>
                        </div>

                        <div className="p-4 rounded bg-[#F8F8F6] border border-black/5 space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-[#141412]">Run Through Trust?</p>
                                    <p className="text-xs text-[#5F5E5A]">
                                        Will policy ownership or premium funding flow through an Irrevocable or Dynasty Trust?
                                    </p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, runThroughTrust: true })}
                                        style={{
                                            padding: '6px 14px',
                                            borderRadius: 4,
                                            fontSize: 12,
                                            border: formData.runThroughTrust ? '2px solid #8B6F3E' : '1px solid rgba(0,0,0,0.15)',
                                            background: formData.runThroughTrust ? 'rgba(139,111,62,0.1)' : '#FFFFFF',
                                            color: formData.runThroughTrust ? '#8B6F3E' : '#5F5E5A',
                                            fontWeight: formData.runThroughTrust ? 600 : 400,
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Yes (Trust)
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, runThroughTrust: false })}
                                        style={{
                                            padding: '6px 14px',
                                            borderRadius: 4,
                                            fontSize: 12,
                                            border: !formData.runThroughTrust ? '2px solid #8B6F3E' : '1px solid rgba(0,0,0,0.15)',
                                            background: !formData.runThroughTrust ? 'rgba(139,111,62,0.1)' : '#FFFFFF',
                                            color: !formData.runThroughTrust ? '#8B6F3E' : '#5F5E5A',
                                            fontWeight: !formData.runThroughTrust ? 600 : 400,
                                            cursor: 'pointer'
                                        }}
                                    >
                                        No (Individual)
                                    </button>
                                </div>
                            </div>

                            {formData.runThroughTrust && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-black/5">
                                    <div>
                                        <label style={{ display: 'block', fontSize: 11, color: '#8B6F3E', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6, fontWeight: 600 }}>
                                            Trust State (if different than contact address) *
                                        </label>
                                        <select
                                            value={formData.trustState}
                                            onChange={(e) => setFormData({ ...formData, trustState: e.target.value })}
                                            className="w-full px-3 py-2 text-sm bg-[#FFFFFF] border border-[#8B6F3E]/40 rounded text-[#141412] focus:outline-none"
                                        >
                                            {POPULAR_TRUST_STATES.map((stateName) => (
                                                <option key={stateName} value={stateName}>
                                                    {stateName} (Popular Situs)
                                                </option>
                                            ))}
                                            {US_STATES.map((st) => (
                                                <option key={st} value={st}>{st}</option>
                                            ))}
                                        </select>
                                        <p style={{ fontSize: 10, color: '#888780', marginTop: 4 }}>
                                            Contact Address State is {formData.state}. Select situs state for favorable trust tax laws.
                                        </p>
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', fontSize: 11, color: '#5F5E5A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6, fontWeight: 600 }}>
                                            Trust Entity Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="e.g. The Vance 2026 Dynasty Trust"
                                            value={formData.trustName}
                                            onChange={(e) => setFormData({ ...formData, trustName: e.target.value })}
                                            className="w-full px-3 py-2 text-sm bg-[#FFFFFF] border border-black/15 rounded text-[#141412] focus:outline-none focus:border-[#8B6F3E]"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Section 5: Notes */}
                    <div>
                        <div className="flex items-center gap-2 mb-3 pb-1 border-b border-black/5">
                            <span style={{ fontSize: 11, fontFamily: 'monospace', color: '#8B6F3E', fontWeight: 600 }}>05</span>
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#141412]">
                                Advisory Notes &amp; Objectives
                            </h3>
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: 11, color: '#5F5E5A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6, fontWeight: 600 }}>
                                Initial Notes
                            </label>
                            <textarea
                                rows={3}
                                placeholder="Record notes from your client discovery conversation: asset manager preferences, tax objectives, timeline, CPA contact details..."
                                value={formData.notes}
                                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                className="w-full px-3 py-2 text-sm bg-[#FFFFFF] border border-black/15 rounded text-[#141412] focus:outline-none focus:border-[#8B6F3E]"
                            />
                        </div>
                    </div>

                    {/* Section 6: Initial Attached Files */}
                    <div>
                        <div className="flex items-center gap-2 mb-3 pb-1 border-b border-black/5">
                            <span style={{ fontSize: 11, fontFamily: 'monospace', color: '#8B6F3E', fontWeight: 600 }}>06</span>
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#141412]">
                                Attach Files (Financial Statements, Policies, Trusts)
                            </h3>
                        </div>

                        <div style={{
                            border: '1px dashed rgba(0,0,0,0.2)',
                            padding: '1.25rem',
                            borderRadius: 6,
                            textAlign: 'center',
                            background: '#F8F8F6'
                        }}>
                            <Upload size={24} style={{ color: '#8B6F3E', margin: '0 auto 8px auto' }} />
                            <p style={{ fontSize: 12, color: '#141412', margin: 0, fontWeight: 500 }}>
                                Select files from your computer to attach to this opportunity
                            </p>
                            <p style={{ fontSize: 11, color: '#5F5E5A', margin: '2px 0 10px 0' }}>
                                Supports PDF, Word, Excel, Images (Tax returns, KYC, existing policy ledgers)
                            </p>

                            <input
                                id={fileInputId}
                                type="file"
                                multiple
                                style={{ display: 'none' }}
                                ref={(el) => setFileInputRef(el)}
                                onChange={handleFileAdd}
                            />

                            <button
                                type="button"
                                onClick={() => fileInputRef?.click()}
                                style={{
                                    fontSize: 11,
                                    fontWeight: 500,
                                    padding: '6px 16px',
                                    borderRadius: 4,
                                    background: '#FFFFFF',
                                    border: '1px solid rgba(0,0,0,0.15)',
                                    color: '#141412',
                                    cursor: 'pointer',
                                    boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
                                }}
                            >
                                Browse Documents
                            </button>

                            {attachedFiles.length > 0 && (
                                <div className="mt-4 pt-3 border-t border-black/10 text-left space-y-2">
                                    <span style={{ fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8B6F3E', fontWeight: 600 }}>
                                        {attachedFiles.length} File(s) Selected:
                                    </span>
                                    {attachedFiles.map((f) => (
                                        <div key={f.id} className="flex items-center justify-between text-xs bg-[#FFFFFF] border border-black/5 px-3 py-1.5 rounded">
                                            <div className="flex items-center gap-2">
                                                <FileText size={13} className="text-[#8B6F3E]" />
                                                <span className="text-[#141412] font-medium">{f.name}</span>
                                                <span className="text-[#888780]">({f.size})</span>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveInitialFile(f.id)}
                                                className="text-[#888780] hover:text-red-500"
                                            >
                                                <X size={13} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Modal Footer */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        gap: '1rem',
                        paddingTop: '1.5rem',
                        borderTop: '1px solid rgba(0,0,0,0.08)'
                    }}>
                        <button
                            type="button"
                            onClick={onClose}
                            style={{
                                background: 'transparent',
                                border: '1px solid rgba(0,0,0,0.2)',
                                color: '#141412',
                                padding: '10px 20px',
                                borderRadius: 4,
                                fontSize: 12,
                                cursor: 'pointer',
                                fontWeight: 500
                            }}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            style={{
                                background: '#141412',
                                color: '#FFFFFF',
                                border: 'none',
                                padding: '10px 24px',
                                borderRadius: 4,
                                fontSize: 12,
                                fontWeight: 600,
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                cursor: 'pointer'
                            }}
                        >
                            Register Opportunity
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
