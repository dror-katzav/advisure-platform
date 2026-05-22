import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-white border-t border-advisure-silver/30 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
                    <div>
                        <Link href="/" className="text-advisure-blue font-bold text-lg tracking-tight">Advisure</Link>
                        <p className="mt-2 text-sm text-charcoal/50 max-w-xs leading-relaxed">
                            The private placement insurance platform built for RIAs.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-12">
                        <div>
                            <p className="text-xs font-bold text-charcoal/40 uppercase tracking-widest mb-3">Platform</p>
                            <div className="flex flex-col gap-2">
                                <Link href="/platform" className="text-charcoal/60 hover:text-advisure-blue text-sm transition-colors">How It Works</Link>
                                <Link href="/ria-experience" className="text-charcoal/60 hover:text-advisure-blue text-sm transition-colors">Financial Model</Link>
                                <Link href="/schedule-demo" className="text-charcoal/60 hover:text-advisure-blue text-sm transition-colors">Schedule a Conversation</Link>
                            </div>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-charcoal/40 uppercase tracking-widest mb-3">Learn</p>
                            <div className="flex flex-col gap-2">
                                <Link href="/ppli" className="text-charcoal/60 hover:text-advisure-blue text-sm transition-colors">Education</Link>
                                <Link href="/partners" className="text-charcoal/60 hover:text-advisure-blue text-sm transition-colors">Partners</Link>
                            </div>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-charcoal/40 uppercase tracking-widest mb-3">Company</p>
                            <div className="flex flex-col gap-2">
                                <Link href="/about" className="text-charcoal/60 hover:text-advisure-blue text-sm transition-colors">About</Link>
                                <Link href="/contact" className="text-charcoal/60 hover:text-advisure-blue text-sm transition-colors">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-advisure-silver/20 pt-6">
                    <p className="text-charcoal/40 text-sm text-center">&copy; 2026 Advisure.AI — All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}
