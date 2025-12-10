'use client';

import Link from 'next/link';
import { ArrowUpRight, ArrowDownRight, DollarSign, Activity, Clock } from 'lucide-react';

export default function PlatformDashboard() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Advisor Dashboard</h1>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Market Open</span>
                </div>
            </div>

            {/* Quick Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-xs font-medium text-gray-500 uppercase">Total AUM (PPLI)</p>
                            <p className="text-2xl font-bold text-gray-900 mt-1">$142.5M</p>
                        </div>
                        <div className="p-2 bg-blue-50 rounded-md text-blue-600">
                            <DollarSign size={20} />
                        </div>
                    </div>
                    <div className="mt-2 flex items-center text-xs text-green-600">
                        <ArrowUpRight size={14} className="mr-1" />
                        <span>+2.4% this month</span>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-xs font-medium text-gray-500 uppercase">Active Policies</p>
                            <p className="text-2xl font-bold text-gray-900 mt-1">28</p>
                        </div>
                        <div className="p-2 bg-purple-50 rounded-md text-purple-600">
                            <Activity size={20} />
                        </div>
                    </div>
                    <div className="mt-2 flex items-center text-xs text-gray-500">
                        <span>3 pending underwriting</span>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-xs font-medium text-gray-500 uppercase">Pending Apps</p>
                            <p className="text-2xl font-bold text-gray-900 mt-1">4</p>
                        </div>
                        <div className="p-2 bg-orange-50 rounded-md text-orange-600">
                            <Clock size={20} />
                        </div>
                    </div>
                    <div className="mt-2 flex items-center text-xs text-gray-500">
                        <span>Avg time to issue: 14 days</span>
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Pending Messages Inbox */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-fit">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium text-gray-900">Inbox</h3>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">3 New</span>
                    </div>
                    <div className="space-y-4">
                        {[
                            { from: 'Smith Family Trust', subject: 'Re: Tax Form Inquiry', time: '10:30 AM', preview: 'Thanks for the update. When can we expect...' },
                            { from: 'John Doe', subject: 'Policy #11293 Question', time: 'Yesterday', preview: 'I noticed a discrepancy in the cash value...' },
                            { from: 'Underwriting Dept', subject: 'Requirement Needed: Jones', time: 'Yesterday', preview: 'Please upload the latest blood work results...' },
                        ].map((msg, idx) => (
                            <Link href="/platform/policy?tab=inbox" key={idx} className="block text-inherit no-underline">
                                <div className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-md cursor-pointer border-b border-gray-50 last:border-0 transition-colors">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between">
                                            <p className="text-sm font-medium text-gray-900 truncate">{msg.from}</p>
                                            <p className="text-xs text-gray-500">{msg.time}</p>
                                        </div>
                                        <p className="text-sm text-gray-900 truncate">{msg.subject}</p>
                                        <p className="text-xs text-gray-500 truncate">{msg.preview}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                        <Link href="/platform/policy?tab=inbox" className="block w-full text-center text-sm text-blue-600 hover:text-blue-800 font-medium py-2">
                            View All Messages
                        </Link>
                    </div>
                </div>

                {/* Recent Activity Table */}
                <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
                    </div>
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {[
                                { client: 'Smith Family Trust', action: 'Premium Deposit', amount: '$500,000', status: 'Completed', date: 'Today, 10:23 AM' },
                                { client: 'John Doe', action: 'New Application', amount: '-', status: 'Underwriting', date: 'Yesterday' },
                                { client: 'Jane Roe', action: 'Rebalance', amount: '$2.1M', status: 'Processing', date: 'Dec 12, 2025' },
                                { client: 'Acme Corp Key Man', action: 'Illustration', amount: '-', status: 'Draft', date: 'Dec 10, 2025' },
                            ].map((item, idx) => (
                                <tr key={idx}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.client}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.action}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.amount}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                            item.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                                                item.status === 'Underwriting' ? 'bg-purple-100 text-purple-800' :
                                                    'bg-gray-100 text-gray-800'
                                            }`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
