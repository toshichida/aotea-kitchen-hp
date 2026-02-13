'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { useLanguage } from '@/lib/contexts/LanguageContext';

export const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image Placeholder - Replace with actual image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: 'url("/images/1. Homepage Hero.png")',
                    backgroundColor: '#2C5F4F' // Fallback
                }}
            >
                <div className="absolute inset-0 bg-black/30" />
            </div>

            <div className="container mx-auto px-4 z-10 text-center text-cream">
                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                >
                    {t('hero.title')}
                </motion.h1>

                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl max-w-[64rem] mx-auto mb-10 font-light opacity-90"
                >
                    {t('hero.subtitle')}
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Button size="lg" className="bg-cream text-forest hover:bg-white hover:text-forest-dark border-none">
                        {t('hero.cta1')}
                    </Button>
                    <Button size="lg" variant="outline" className="text-cream border-cream hover:bg-cream hover:text-forest">
                        {t('hero.cta2')}
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};
