'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Re-initialises the IntersectionObserver for .reveal / .reveal-l elements
 * on every client-side route change so scroll animations work without a full
 * page reload.
 */
export function RevealObserver() {
    const pathname = usePathname();

    useEffect(() => {
        let io: IntersectionObserver;

        // requestAnimationFrame ensures the new page's DOM has been painted
        const frame = requestAnimationFrame(() => {
            io = new IntersectionObserver(
                (entries) => {
                    entries.forEach((e) => {
                        if (e.isIntersecting) {
                            e.target.classList.add('visible');
                            io.unobserve(e.target);
                        }
                    });
                },
                { threshold: 0.07 },
            );

            // Only observe elements that haven't been revealed yet
            document
                .querySelectorAll('.reveal:not(.visible), .reveal-l:not(.visible)')
                .forEach((el) => io.observe(el));
        });

        return () => {
            cancelAnimationFrame(frame);
            if (io) io.disconnect();
        };
    }, [pathname]);

    return null;
}
