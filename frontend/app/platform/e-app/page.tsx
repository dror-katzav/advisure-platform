'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { usePlatform } from '@/context/PlatformContext';

function EAppContent() {
    const [step, setStep] = useState(1);
    const searchParams = useSearchParams();
    const router = useRouter();
    const { addCase } = usePlatform();

    // Form State
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        premium: ''
    });

    // Pre-fill from Query Params
    useEffect(() => {
        if (searchParams) {
            setFormData(prev => ({
                ...prev,
                firstName: searchParams.get('firstName') || '',
                lastName: searchParams.get('lastName') || '',
                premium: searchParams.get('premium') || ''
            }));
        }
    }, [searchParams]);

    const handleSubmit = () => {
        addCase({
            id: Date.now(),
            client: `${formData.firstName} ${formData.lastName}`,
            product: 'New E-App Application',
            premium: `$${parseInt(formData.premium || '0').toLocaleString()}`,
            status: 'Submitted',
            submitted: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit' }),
            requirements: [
                { name: 'Application Signed', status: 'Received', date: 'Today' },
                { name: 'Initial Premium', status: 'Pending', date: '-' }
            ]
        });
        router.push('/platform/pending-cases');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="max-w-3xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex justify-between mb-2">
                    {['Client Info', 'Suitability', 'Funding', 'Review'].map((label, idx) => (
                        <span key={label} className={`text-sm font-medium ${step > idx ? 'text-blue-900' : 'text-gray-400'}`}>
                            {label}
                        </span>
                    ))}
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                    <div
                        className="h-2 bg-blue-900 rounded-full transition-all duration-300"
                        style={{ width: `${(step / 4) * 100}%` }}
                    ></div>
                </div>
            </div>

            <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-8">
                {/* Step 1: Client Info */}
                {step === 1 && (
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-900">Client Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">First Name</label>
                                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-3" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-3" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-3" placeholder="client@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Phone</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-3" placeholder="(555) 123-4567" />
                            </div>
                        </div>
                        <div className="flex justify-end pt-6">
                            <button onClick={() => setStep(2)} className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800">
                                Next: Suitability
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 2: Suitability */}
                {step === 2 && (
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-900">Suitability & Accreditation</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="flex items-center space-x-3">
                                    <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" defaultChecked />
                                    <span className="text-gray-700">Client is an Accredited Investor ($1M+ NW excluding home)</span>
                                </label>
                            </div>
                            <div>
                                <label className="flex items-center space-x-3">
                                    <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" defaultChecked />
                                    <span className="text-gray-700">Client is a Qualified Purchaser ($5M+ Investments)</span>
                                </label>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Liquid Net Worth</label>
                                <select className="block w-full rounded-md border-gray-300 border p-2 shadow-sm focus:border-blue-500 sm:text-sm">
                                    <option>$5M - $10M</option>
                                    <option>$10M - $25M</option>
                                    <option>$25M+</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-between pt-6">
                            <button onClick={() => setStep(1)} className="text-gray-600 hover:text-gray-900">Back</button>
                            <button onClick={() => setStep(3)} className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800">
                                Next: Funding
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 3: Funding */}
                {step === 3 && (
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-900">Funding Source</h2>
                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Source of Funds</label>
                                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-3">
                                    <option>Cash / Check</option>
                                    <option>Wire Transfer</option>
                                    <option>1035 Exchange</option>
                                    <option>Sale of Assets</option>
                                    <option>Bonus / Compensation</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Amount ($)</label>
                                <input type="number" name="premium" value={formData.premium} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-3" placeholder="500000" />
                            </div>
                        </div>
                        <div className="flex justify-between pt-6">
                            <button onClick={() => setStep(2)} className="text-gray-600 hover:text-gray-900">Back</button>
                            <button onClick={() => setStep(4)} className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800">
                                Review Application
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 4: Review */}
                {step === 4 && (
                    <div className="space-y-6">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                            <h3 className="text-lg font-medium text-green-900">Review Application</h3>
                            <p className="mt-1 text-sm text-green-700">Assessment complete. Case appears suitable for PPLI.</p>
                            <div className="mt-4 text-sm text-gray-600">
                                <p><strong>Client:</strong> {formData.firstName} {formData.lastName}</p>
                                <p><strong>Premium:</strong> ${parseInt(formData.premium || '0').toLocaleString()}</p>
                            </div>
                        </div>
                        <div className="flex justify-between pt-6">
                            <button onClick={() => setStep(3)} className="text-gray-600 hover:text-gray-900">Back</button>
                            <button onClick={handleSubmit} className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
                                Submit & Open Pending Case
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function EAppPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <EAppContent />
        </Suspense>
    );
}
