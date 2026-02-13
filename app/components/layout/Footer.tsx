'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Mail } from 'lucide-react';
import { useLanguage } from '@/lib/contexts/LanguageContext';

export const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-forest text-cream py-16">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="font-logo text-4xl">Aotea</h3>
                        <p className="text-cream/80 text-sm leading-relaxed">
                            Where Japanese Craft Meets<br />New Zealand Nature
                        </p>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        <h4 className="font-serif text-lg text-gold">{t('nav.menu')}</h4>
                        <ul className="space-y-2 text-sm text-cream/80">
                            <li><Link href="/menu" className="hover:text-cream transition-colors">Breakfast</Link></li>
                            <li><Link href="/menu" className="hover:text-cream transition-colors">Lunch</Link></li>
                            <li><Link href="/menu" className="hover:text-cream transition-colors">Sweets</Link></li>
                            <li><Link href="/menu" className="hover:text-cream transition-colors">Drinks</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="font-serif text-lg text-gold">{t('nav.contact')}</h4>
                        <ul className="space-y-2 text-sm text-cream/80">
                            <li>123 Ponsonby Road</li>
                            <li>Auckland, New Zealand</li>
                            <li>hello@aoteakitchen.nz</li>
                            <li>+64 9 XXX XXXX</li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="space-y-4">
                        <h4 className="font-serif text-lg text-gold">Follow Us</h4>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-gold transition-colors"><Instagram /></a>
                            <a href="#" className="hover:text-gold transition-colors"><Facebook /></a>
                            <a href="#" className="hover:text-gold transition-colors"><Mail /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-cream/10 mt-12 pt-8 text-center text-xs text-cream/40">
                    <p>© {new Date().getFullYear()} Aotea Kitchen. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
