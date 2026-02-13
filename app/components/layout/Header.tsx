'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Navigation } from './Navigation';
import { LanguageSwitcher } from '../shared/LanguageSwitcher';
import { Button } from '../ui/Button';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.header
            className={cn(
                'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
                isScrolled ? 'bg-cream/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
                <Link href="/" className="font-logo text-3xl font-bold text-sumi tracking-wider">
                    Aotea
                </Link>

                <Navigation />

                <div className="hidden md:flex items-center gap-6">
                    <LanguageSwitcher />
                </div>

                <button
                    className="md:hidden text-sumi"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 bg-cream border-t border-timber/10 p-4 md:hidden flex flex-col gap-4 shadow-lg"
                >
                    <Navigation className="flex-col !flex items-start gap-4" />
                    <div className="pt-4 border-t border-timber/10 mt-2">
                        <LanguageSwitcher />
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
};
