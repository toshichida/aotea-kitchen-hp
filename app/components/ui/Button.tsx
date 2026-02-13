import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', fullWidth = false, ...props }, ref) => {
        const variants = {
            primary: 'bg-forest text-cream hover:bg-forest-dark hover:-translate-y-0.5 shadow-sm hover:shadow-md',
            secondary: 'bg-timber text-white hover:bg-opacity-90 hover:-translate-y-0.5 shadow-sm hover:shadow-md',
            outline: 'bg-transparent border-2 border-forest text-forest hover:bg-forest hover:text-cream',
            ghost: 'bg-transparent text-forest hover:bg-forest/10',
        };

        const sizes = {
            sm: 'px-4 py-2 text-sm',
            md: 'px-8 py-3.5 text-base',
            lg: 'px-10 py-4 text-lg',
        };

        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded transition-all duration-300 font-medium tracking-wide',
                    variants[variant],
                    sizes[size],
                    fullWidth ? 'w-full' : '',
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';
