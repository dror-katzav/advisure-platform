import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export function Input({ label, className, ...props }: InputProps) {
    return (
        <div className="flex flex-col gap-1.5">
            <label style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#5F5E5A' }}>
                {label}
            </label>
            <input
                className={cn(
                    "flex h-10 w-full px-3 py-2 text-sm outline-none transition-colors disabled:cursor-not-allowed disabled:opacity-50",
                    className,
                )}
                style={{
                    background: '#282825',
                    border: '0.5px solid rgba(255,255,255,0.1)',
                    color: '#FAFAF8',
                }}
                {...props}
            />
        </div>
    );
}
