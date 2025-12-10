'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import {
    Users, FileText, DollarSign, ChevronRight, PieChart,
    TrendingUp, Download, MessageSquare, Send, ArrowLeft,
    Settings, Briefcase, RefreshCcw, X, ChevronDown
} from 'lucide-react';

// Mock Data
const CLIENTS = [
    {
        id: 1,
        name: 'Smith Family Trust',
        aum: 5240100,
        change: 7.2,
        issues: 'Policy Review Pending',
        policies: [
            { id: 'PPLI-88392', carrier: 'Prudential', type: 'VUL', cv: 5240100, db: 18500000, allocation: 'Growth Strategy' }
        ],
        chat: [
            { id: 1, from: 'advisor', text: 'Hi John, just wanted to check if you received the tax forms?', time: '09:45 AM', date: 'Today' },
            { id: 2, from: 'client', text: 'Yes, I got them. Quick question about the cost basis listed on page 3.', time: '10:30 AM', date: 'Today' }
        ]
    },
    {
        id: 2,
        name: 'John Doe',
        aum: 1150000,
        change: 4.5,
        issues: 'Birthday Coming Up (Dec 15)',
        policies: [
            { id: 'PPLI-11293', carrier: 'Pacific Life', type: 'PIA', cv: 1150000, db: 5000000, allocation: 'Balanced Fund' }
        ],
        chat: [
            { id: 1, from: 'advisor', text: 'Happy early birthday, John! We have your annual review coming up.', time: 'Yesterday', date: 'Yesterday' },
            { id: 2, from: 'client', text: 'Thanks! Looking forward to it. Can we discuss increasing the premium?', time: 'Yesterday', date: 'Yesterday' }
        ]
    },
    {
        id: 3,
        name: 'Tech Ventures LLC',
        aum: 8500000,
        change: -1.2,
        issues: null,
        policies: [
            { id: 'BOLI-99212', carrier: 'John Hancock', type: 'BOLI', cv: 8500000, db: 25000000, allocation: 'Fixed Account' }
        ],
        chat: [
            { id: 1, from: 'client', text: 'We need to update the beneficiary details for the Key Man policy.', time: 'Mon', date: 'Mon' },
            { id: 2, from: 'advisor', text: 'Certainly. I will send over the change forms securely.', time: 'Mon', date: 'Mon' }
        ]
    }
];

function PolicyManagementContent() {
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState<'clients' | 'inbox'>('clients');
    const [selectedClient, setSelectedClient] = useState<typeof CLIENTS[0] | null>(null);

    useEffect(() => {
        const tab = searchParams.get('tab');
        if (tab === 'inbox' || tab === 'clients') {
            setActiveTab(tab);
        }
    }, [searchParams]);

    // UI State
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [showAllocationModal, setShowAllocationModal] = useState(false);
    const [allocationValue, setAllocationValue] = useState(50);
    const [selectedChatId, setSelectedChatId] = useState<number>(CLIENTS[0].id);

    const selectedChatClient = CLIENTS.find(c => c.id === selectedChatId) || CLIENTS[0];

    // Stats
    const totalClients = CLIENTS.length;
    const totalPolicies = CLIENTS.reduce((acc, c) => acc + c.policies.length, 0);
    const totalAUM = CLIENTS.reduce((acc, c) => acc + c.aum, 0);

    const toggleDropdown = (id: string) => {
        setActiveDropdown(activeDropdown === id ? null : id);
    };

    return (
        <div className="space-y-6 relative">
            {/* Header Stats */}
            {!selectedClient && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center space-x-4">
                        <div className="bg-blue-100 p-3 rounded-full text-blue-900"><Users size={24} /></div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Total Clients</p>
                            <p className="text-2xl font-bold text-gray-900">{totalClients}</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center space-x-4">
                        <div className="bg-green-100 p-3 rounded-full text-green-900"><FileText size={24} /></div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Total Policies</p>
                            <p className="text-2xl font-bold text-gray-900">{totalPolicies}</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center space-x-4">
                        <div className="bg-purple-100 p-3 rounded-full text-purple-900"><DollarSign size={24} /></div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Total AUM</p>
                            <p className="text-2xl font-bold text-gray-900">${(totalAUM / 1000000).toFixed(1)}M</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Navigation / Back Button */}
            {selectedClient && (
                <button
                    onClick={() => setSelectedClient(null)}
                    className="flex items-center text-gray-600 hover:text-blue-900 mb-4"
                >
                    <ArrowLeft size={20} className="mr-2" /> Back to Client List
                </button>
            )}

            {/* Tabs (Only visible at top level) */}
            {!selectedClient && (
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8">
                        {['Clients', 'Inbox'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab.toLowerCase() as 'clients' | 'inbox')}
                                className={`${activeTab === tab.toLowerCase()
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                            >
                                {tab}
                            </button>
                        ))}
                    </nav>
                </div>
            )}

            {/* Clients Tab Content */}
            {activeTab === 'clients' && !selectedClient && (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client Name</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Total AUM</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">YTD Change</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Opportunities / Issues</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {CLIENTS.map((client) => (
                                <tr key={client.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedClient(client)}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {client.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                                        ${client.aum.toLocaleString()}
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap text-sm text-right font-medium ${client.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                        {client.change > 0 ? '+' : ''}{client.change}%
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {client.issues ? (
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                {client.issues}
                                            </span>
                                        ) : <span className="text-gray-300">-</span>}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <ChevronRight className="text-gray-400 ml-auto" size={20} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Client Detail View */}
            {selectedClient && (
                <div className="space-y-6">
                    <div className="flex justify-between items-center relative">
                        <h1 className="text-2xl font-bold text-gray-900">{selectedClient.name}</h1>
                        <div className="space-x-3 flex">
                            {/* Produce Documents Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => toggleDropdown('docs')}
                                    className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 text-sm font-medium inline-flex items-center"
                                >
                                    <Download size={16} className="mr-2" /> Produce Documents <ChevronDown size={14} className="ml-2" />
                                </button>
                                {activeDropdown === 'docs' && (
                                    <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
                                        <div className="py-1" role="menu">
                                            {['Annual Statement', 'Tax Form 1099-R', 'Policy Illustration', 'Performance Report'].map((item) => (
                                                <button key={item} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                    {item}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Take Action Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => toggleDropdown('action')}
                                    className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 text-sm font-medium inline-flex items-center"
                                >
                                    <Briefcase size={16} className="mr-2" /> Take Action <ChevronDown size={14} className="ml-2" />
                                </button>
                                {activeDropdown === 'action' && (
                                    <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
                                        <div className="py-1" role="menu">
                                            {['Change Beneficiary', 'Invest Premium', 'Withdraw Cash', 'Take Loan'].map((item) => (
                                                <button key={item} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                    {item}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Portfolio Composition */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                                <PieChart size={20} className="mr-2 text-gray-500" /> Portfolio Composition
                            </h3>
                            <div className="space-y-3">
                                {['US Equities (40%)', 'Global Bonds (30%)', 'Private Credit (20%)', 'Cash (10%)'].map((item, i) => (
                                    <div key={i} className="flex justify-between text-sm">
                                        <span className="text-gray-600">{item}</span>
                                        <div className="w-24 bg-gray-100 rounded-full h-2 mt-1.5">
                                            <div className="bg-blue-900 h-2 rounded-full" style={{ width: `${40 - i * 10}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Performance Trend */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 md:col-span-2">
                            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                                <TrendingUp size={20} className="mr-2 text-gray-500" /> Performance Trend
                            </h3>
                            <div className="h-40 bg-gray-50 flex items-center justify-center text-gray-400 border border-dashed border-gray-300 rounded">
                                [Performance Chart Placeholder - Needs Backend Data]
                            </div>
                        </div>
                    </div>

                    {/* Policies List with Allocation Actions */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                        <div className="p-4 border-b border-gray-200 bg-gray-50">
                            <h3 className="text-lg font-medium text-gray-900">Policies</h3>
                        </div>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Policy ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Carrier & Type</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Cash Value</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider pl-8">Current Allocation</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Manage</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {selectedClient.policies.map((p) => (
                                    <tr key={p.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{p.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{p.carrier} {p.type}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">${p.cv.toLocaleString()}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 pl-8">{p.allocation}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button
                                                onClick={() => setShowAllocationModal(true)}
                                                className="text-blue-600 hover:text-blue-900 flex items-center ml-auto"
                                            >
                                                <RefreshCcw size={16} className="mr-1" /> Change Allocation
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Inbox Tab Content */}
            {activeTab === 'inbox' && !selectedClient && (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-[600px] flex">
                    {/* Sidebar List */}
                    <div className="w-1/3 border-r border-gray-200 flex flex-col">
                        <div className="p-4 border-b border-gray-200 bg-gray-50">
                            <h3 className="text-sm font-medium text-gray-900">Conversations</h3>
                        </div>
                        <div className="overflow-y-auto flex-1">
                            {CLIENTS.map((c, i) => (
                                <div
                                    key={c.id}
                                    onClick={() => setSelectedChatId(c.id)}
                                    className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${selectedChatId === c.id ? 'bg-blue-50 border-l-4 border-l-blue-900' : ''}`}
                                >
                                    <div className="flex justify-between mb-1">
                                        <span className={`font-medium truncate ${selectedChatId === c.id ? 'text-blue-900' : 'text-gray-900'}`}>{c.name}</span>
                                        <span className="text-xs text-gray-500">{c.chat[c.chat.length - 1]?.date}</span>
                                    </div>
                                    <p className="text-xs text-gray-500 truncate">{c.chat[c.chat.length - 1]?.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-1 flex flex-col">
                        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                            <h3 className="text-lg font-bold text-gray-900">{selectedChatClient.name}</h3>
                            <span className="text-xs text-green-600 flex items-center">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span> Online
                            </span>
                        </div>
                        <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50">
                            {selectedChatClient.chat.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.from === 'advisor' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`rounded-lg py-2 px-4 max-w-md shadow-sm border ${msg.from === 'advisor'
                                        ? 'bg-blue-900 text-white border-blue-900'
                                        : 'bg-white text-gray-900 border-gray-200'
                                        }`}>
                                        <p className="text-sm">{msg.text}</p>
                                        <p className={`text-xs mt-1 ${msg.from === 'advisor' ? 'text-blue-200 text-right' : 'text-gray-500'}`}>
                                            {msg.time}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 border-t border-gray-200 bg-white">
                            <div className="flex space-x-2">
                                <input
                                    type="text"
                                    placeholder="Type a message..."
                                    className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
                                />
                                <button className="bg-blue-900 text-white p-2 rounded-md hover:bg-blue-800">
                                    <Send size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Change Allocation Modal */}
            {showAllocationModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6 space-y-6">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-gray-900">Change Allocation</h3>
                            <button onClick={() => setShowAllocationModal(false)} className="text-gray-400 hover:text-gray-600">
                                <X size={24} />
                            </button>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium text-gray-700">Equity Exposure</span>
                                <span className="text-sm font-bold text-blue-900">{allocationValue}%</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={allocationValue}
                                onChange={(e) => setAllocationValue(parseInt(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-900"
                            />
                            <div className="flex justify-between mt-2 text-xs text-gray-500">
                                <span>Conservative (0%)</span>
                                <span>Aggressive (100%)</span>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
                            <p className="text-sm text-blue-800">
                                Adjustment will rebalance the portfolio effectively T+1. Please confirm the shift from <strong>Growth Strategy</strong> to <strong>Custom Allocation ({allocationValue}/{100 - allocationValue})</strong>.
                            </p>
                        </div>

                        <div className="flex justify-end space-x-3 pt-2">
                            <button
                                onClick={() => setShowAllocationModal(false)}
                                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    alert('Allocation Change Request Submitted!');
                                    setShowAllocationModal(false);
                                }}
                                className="px-4 py-2 bg-blue-900 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-800"
                            >
                                Submit Request
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function PolicyManagementPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PolicyManagementContent />
        </Suspense>
    );
}
