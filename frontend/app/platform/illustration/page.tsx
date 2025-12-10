'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { FileText, Save, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePlatform } from '@/context/PlatformContext';

export default function IllustrationPage() {
    const [showResults, setShowResults] = useState(false);
    const router = useRouter();
    const { addCase } = usePlatform();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        ownership: 'Individual',
        gender: 'Male',
        dob: '',
        state: '',
        uwClass: 'Preferred Best Non-Tobacco',
        carrier: 'Prudential',
        premium: '',
        dbo: 'Level',
        rate: '7.0'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRunIllustration = (e: React.FormEvent) => {
        e.preventDefault();
        setShowResults(true);
    };

    const handleSaveCase = () => {
        addCase({
            id: Date.now(),
            client: `${formData.firstName} ${formData.lastName} (${formData.ownership})`,
            product: `${formData.carrier} PPLI`,
            premium: `$${parseInt(formData.premium || '0').toLocaleString()}`,
            status: 'Illustration Saved',
            submitted: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit' }),
            requirements: []
        });
        alert('Illustration saved to Pending Cases!');
    };

    const startEAppParams = new URLSearchParams({
        firstName: formData.firstName,
        lastName: formData.lastName,
        premium: formData.premium
    }).toString();

    return (
        <div className="max-w-5xl mx-auto space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">New Illustration</h1>
            </div>

            <div className="bg-white shadow-sm rounded-lg border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                    <h2 className="text-lg font-medium text-gray-900">Client & Policy Details</h2>
                </div>

                <form onSubmit={handleRunIllustration} className="p-6 space-y-8">
                    {/* Client Info */}
                    <div>
                        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Client Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Input label="First Name" name="firstName" placeholder="John" value={formData.firstName} onChange={handleChange} />
                            <Input label="Last Name" name="lastName" placeholder="Doe" value={formData.lastName} onChange={handleChange} />

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Ownership</label>
                                <select name="ownership" value={formData.ownership} onChange={handleChange} className="block w-full rounded-md border-gray-300 border p-2 shadow-sm focus:border-blue-500 sm:text-sm">
                                    <option>Individual</option>
                                    <option>Revocable Trust</option>
                                    <option>Irrevocable Trust (ILIT)</option>
                                    <option>LLC / Partnership</option>
                                    <option>Corporation</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                                <div className="flex space-x-4 mt-2">
                                    <label className="flex items-center">
                                        <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} className="text-blue-600 focus:ring-blue-500" />
                                        <span className="ml-2 text-sm text-gray-700">Male</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} className="text-blue-600 focus:ring-blue-500" />
                                        <span className="ml-2 text-sm text-gray-700">Female</span>
                                    </label>
                                </div>
                            </div>

                            <Input label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleChange} />

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                                <select name="state" value={formData.state} onChange={handleChange} className="block w-full rounded-md border-gray-300 border p-2 shadow-sm focus:border-blue-500 sm:text-sm">
                                    <option value="">Select State...</option>
                                    <option>California</option>
                                    <option>New York</option>
                                    <option>Texas</option>
                                    <option>Florida</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Underwriting Class</label>
                                <select name="uwClass" value={formData.uwClass} onChange={handleChange} className="block w-full rounded-md border-gray-300 border p-2 shadow-sm focus:border-blue-500 sm:text-sm">
                                    <option>Preferred Best Non-Tobacco</option>
                                    <option>Preferred Non-Tobacco</option>
                                    <option>Standard Non-Tobacco</option>
                                    <option>Preferred Tobacco</option>
                                    <option>Standard Tobacco</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-200"></div>

                    {/* Policy Info */}
                    <div>
                        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Policy Design</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Carrier</label>
                                <select name="carrier" value={formData.carrier} onChange={handleChange} className="block w-full rounded-md border-gray-300 border p-2 shadow-sm focus:border-blue-500 sm:text-sm">
                                    <option>Prudential</option>
                                    <option>Pacific Life</option>
                                    <option>John Hancock</option>
                                </select>
                            </div>

                            <Input label="Initial Premium ($)" name="premium" type="number" placeholder="1000000" value={formData.premium} onChange={handleChange} />

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Death Benefit Option</label>
                                <div className="flex space-x-4 mt-2">
                                    <label className="flex items-center">
                                        <input type="radio" name="dbo" value="Level" checked={formData.dbo === 'Level'} onChange={handleChange} className="text-blue-600 focus:ring-blue-500" />
                                        <span className="ml-2 text-sm text-gray-700">Level</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="dbo" value="Increasing" checked={formData.dbo === 'Increasing'} onChange={handleChange} className="text-blue-600 focus:ring-blue-500" />
                                        <span className="ml-2 text-sm text-gray-700">Increasing</span>
                                    </label>
                                </div>
                            </div>

                            <Input label="Assumed Net Rate (%)" name="rate" type="number" step="0.1" value={formData.rate} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="flex justify-end pt-4">
                        <button type="submit" className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 flex items-center">
                            <FileText size={18} className="mr-2" />
                            Show Illustration
                        </button>
                    </div>
                </form>
            </div>

            {/* Results Table */}
            {showResults && (
                <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
                    <div className="p-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                        <h3 className="text-lg font-medium text-gray-900">Illustration Results</h3>
                        <div className="space-x-3">
                            <button onClick={handleSaveCase} className="text-gray-700 bg-white border border-gray-300 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-gray-50 flex items-center inline-flex">
                                <Save size={16} className="mr-2" /> Save Case
                            </button>
                            <Link href={`/platform/e-app?${startEAppParams}`} className="bg-green-600 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-green-700 flex items-center inline-flex">
                                <PlayCircle size={16} className="mr-2" /> Start E-App
                            </Link>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Policy Year</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Premium Outlay</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Cash Value</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Death Benefit</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {[...Array(10)].map((_, i) => {
                                    const year = i + 1;
                                    const initialPrem = parseInt(formData.premium || '0');
                                    const premium = i === 0 ? initialPrem : 0;
                                    // Simple compound growth mock
                                    const cv = Math.floor(initialPrem * Math.pow(1.06, year));
                                    const db = Math.floor(cv * 2.5);

                                    return (
                                        <tr key={year}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{year}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{45 + year}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">${premium.toLocaleString()}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900 text-right">${cv.toLocaleString()}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">${db.toLocaleString()}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
