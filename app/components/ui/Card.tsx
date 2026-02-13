import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverEffect = true, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'bg-white rounded-lg p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-300',
                    hoverEffect && 'hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-1',
                    className
                )}
                {...props}
            />
        );
    }
);

Card.displayName = 'Card';
