'use client';

import { FileText, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import Link from 'next/link';
import { usePlatform } from '@/context/PlatformContext';

export default function PendingCasesPage() {
    const { pendingCases } = usePlatform();

    const totalPremium = pendingCases.reduce((acc, curr) => {
        const amount = parseInt(curr.premium.replace(/[^0-9]/g, '') || '0');
        return acc + amount;
    }, 0);

    const uwCases = pendingCases.filter(c => c.status === 'Underwriting' || c.status === 'Carrier Review').length;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Pending Cases</h1>
                <Link href="/platform/e-app">
                    <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800">
                        + New Application
                    </button>
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Cases List */}
                <div className="lg:col-span-2 space-y-4">
                    {pendingCases.map((c) => (
                        <div key={c.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">{c.client}</h3>
                                    <p className="text-sm text-gray-500">{c.product} • Premium: {c.premium}</p>
                                </div>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                    {c.status}
                                </span>
                            </div>

                            <div className="border-t border-gray-100 pt-4">
                                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Underwriting Requirements</h4>
                                <div className="space-y-3">
                                    {c.requirements.map((req, idx) => (
                                        <div key={idx} className="flex items-center justify-between text-sm">
                                            <div className="flex items-center space-x-2">
                                                {req.status === 'Received' || req.status === 'Approved' ? (
                                                    <CheckCircle size={16} className="text-green-500" />
                                                ) : req.status === 'Reviewing' ? (
                                                    <Clock size={16} className="text-blue-500" />
                                                ) : (
                                                    <AlertCircle size={16} className="text-orange-500" />
                                                )}
                                                <span className="text-gray-700">{req.name}</span>
                                            </div>
                                            <span className="text-gray-500 text-xs">{req.date}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats / Summary Panel */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Pipeline Summary</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Total Pending Premium</span>
                                <span className="font-bold text-gray-900">${totalPremium.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Avg. Cycle Time</span>
                                <span className="font-bold text-gray-900">45 Days</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Cases in Underwriting</span>
                                <span className="font-bold text-gray-900">{uwCases}</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                        <h4 className="flex items-center text-blue-900 font-medium mb-2">
                            <AlertCircle size={18} className="mr-2" />
                            Action Required
                        </h4>
                        <p className="text-sm text-blue-800 mb-3">
                            Paramed exam for Robert Jones needs to be scheduled by Dec 12 to avoid delays.
                        </p>
                        <button className="text-sm text-blue-700 hover:text-blue-900 font-medium underline">
                            Send Reminder to Client
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
