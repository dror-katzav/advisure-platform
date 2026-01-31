export function Footer() {
    return (
        <footer className="bg-white border-t border-advisure-silver/30 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-charcoal/40 text-sm font-medium">
                        (c) 2026 Advisure.AI all Rights Reserved
                    </div>
                    <div className="flex gap-8">
                        <a href="/about" className="text-charcoal/60 hover:text-advisure-green text-sm transition-colors">About</a>
                        <a href="/contact" className="text-charcoal/60 hover:text-advisure-green text-sm transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
