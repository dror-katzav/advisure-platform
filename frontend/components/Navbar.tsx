import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
    return (
        <nav className="bg-white border-b border-advisure-silver/30 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/advisure-logo.svg"
                                alt="Advisure Logo"
                                width={320}
                                height={80}
                                priority
                                className="h-16 md:h-20 w-auto"
                            />
                        </Link>
                    </div>

                    <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-8">
                        <Link href="/" className="text-charcoal hover:text-advisure-blue px-1 pt-1 text-sm font-medium transition-colors">
                            Home
                        </Link>
                        <Link href="/ria-experience" className="text-charcoal hover:text-advisure-blue px-1 pt-1 text-sm font-medium transition-colors">
                            RIA experience
                        </Link>
                        <Link href="/partners" className="text-charcoal hover:text-advisure-blue px-1 pt-1 text-sm font-medium transition-colors">
                            Partners
                        </Link>
                        <Link href="/about" className="text-charcoal hover:text-advisure-blue px-1 pt-1 text-sm font-medium transition-colors">
                            About
                        </Link>
                        <Link href="/contact" className="text-charcoal hover:text-advisure-blue px-1 pt-1 text-sm font-medium transition-colors">
                            Contact Us
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link href="/login" className="text-charcoal hover:text-advisure-blue text-sm font-medium transition-colors">
                            Login
                        </Link>
                        <Link href="/schedule-demo" className="bg-advisure-blue text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-advisure-blue/90 transition-all shadow-sm hover:shadow-md">
                            Schedule a demo
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
