'use client';

import Link from 'next/link';
import { LayoutDashboard, FileText, PenTool, PieChart, Clock } from 'lucide-react';
import { PlatformProvider } from '@/context/PlatformContext';

export default function PlatformLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <PlatformProvider>
            <div className="flex h-[calc(100vh-64px)] bg-gray-100">
                {/* Sidebar */}
                <div className="w-64 bg-white shadow-md">
                    <div className="p-4 border-b border-gray-200">
                        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Advisor Tools</h2>
                    </div>
                    <nav className="p-4 space-y-2">
                        <Link href="/platform" className="flex items-center space-x-3 px-3 py-2 text-gray-700 rounded-md hover:bg-blue-50 hover:text-blue-900">
                            <LayoutDashboard size={20} />
                            <span className="font-medium">Dashboard</span>
                        </Link>
                        <Link href="/platform/pending-cases" className="flex items-center space-x-3 px-3 py-2 text-gray-700 rounded-md hover:bg-blue-50 hover:text-blue-900">
                            <Clock size={20} />
                            <span className="font-medium">Pending Cases</span>
                        </Link>
                        <Link href="/platform/illustration" className="flex items-center space-x-3 px-3 py-2 text-gray-700 rounded-md hover:bg-blue-50 hover:text-blue-900">
                            <PieChart size={20} />
                            <span className="font-medium">New Illustration</span>
                        </Link>
                        <Link href="/platform/e-app" className="flex items-center space-x-3 px-3 py-2 text-gray-700 rounded-md hover:bg-blue-50 hover:text-blue-900">
                            <PenTool size={20} />
                            <span className="font-medium">Start E-App</span>
                        </Link>
                        <Link href="/platform/policy" className="flex items-center space-x-3 px-3 py-2 text-gray-700 rounded-md hover:bg-blue-50 hover:text-blue-900">
                            <FileText size={20} />
                            <span className="font-medium">Policy Management</span>
                        </Link>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1 overflow-auto p-8">
                    {children}
                </div>
            </div>
        </PlatformProvider>
    );
}
