'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { cn } from '@/lib/utils';

export const Navigation = ({ className }: { className?: string }) => {
    const { t } = useLanguage();
    const pathname = usePathname();

    const links = [
        { href: '/menu', label: t('nav.menu') },
        { href: '/about', label: t('nav.about') },
        { href: '/space', label: t('nav.space') },
        { href: '/visit', label: t('nav.visit') },
        { href: '/contact', label: t('nav.contact') },
    ];

    return (
        <nav className={cn('hidden md:flex items-center gap-8', className)}>
            {links.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className="relative group text-sumi hover:text-forest transition-colors font-medium py-2"
                >
                    {link.label}
                    {pathname === link.href && (
                        <motion.div
                            layoutId="underline"
                            className="absolute left-0 right-0 bottom-0 h-0.5 bg-forest"
                        />
                    )}
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-forest scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
            ))}
        </nav>
    );
};
