'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // For demo, just redirect to platform
        router.push('/platform');
    };

    const handleGuestLogin = () => {
        router.push('/platform');
    };

    return (
        <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8" style={{ background: '#FBFBFA' }}>
            <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
                <Link href="/">
                    <span className="font-serif tracking-widest text-3xl font-light text-[#141412]">ADVISURE</span>
                </Link>
                <h2 className="mt-6 text-2xl font-normal text-[#141412]">
                    Advisor Portal
                </h2>
                <p className="mt-2 text-sm text-[#5F5E5A]">
                    Access your PPLI pipeline, illustrations, and client cases
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 sm:px-10 border border-black/[0.08] shadow-sm rounded-sm">
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#5F5E5A]">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2.5 border border-gray-200 text-[#141412] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#8B6F3E] focus:border-[#8B6F3E] text-sm"
                                    placeholder="advisor@firm.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-xs font-semibold uppercase tracking-wider text-[#5F5E5A]">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2.5 border border-gray-200 text-[#141412] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#8B6F3E] focus:border-[#8B6F3E] text-sm"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full btn-primary py-2.5"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase tracking-wider">
                                <span className="px-3 bg-white text-[#888780]">
                                    Instant Exploration
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 space-y-3">
                            <button
                                onClick={handleGuestLogin}
                                className="w-full flex justify-center py-2.5 px-4 border border-gray-200 text-sm font-medium text-[#141412] bg-[#F8F8F6] hover:bg-gray-100 transition-colors"
                            >
                                Enter as Guest Advisor
                            </button>
                            <Link
                                href="/lead-registration"
                                className="w-full flex justify-center py-2.5 px-4 border border-[#8B6F3E]/30 text-sm font-medium text-[#8B6F3E] bg-[#FBF7EE] hover:bg-[#F7EED9] transition-colors"
                            >
                                Go directly to Lead Registration
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
