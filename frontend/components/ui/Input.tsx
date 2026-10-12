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
            <label style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#5F5E5A', fontWeight: 500 }}>
                {label}
            </label>
            <input
                className={cn(
                    "flex h-10 w-full px-3 py-2 text-sm outline-none transition-colors disabled:cursor-not-allowed disabled:opacity-50 rounded",
                    className,
                )}
                style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(0, 0, 0, 0.15)',
                    color: '#141412',
                }}
                {...props}
            />
        </div>
    );
}
