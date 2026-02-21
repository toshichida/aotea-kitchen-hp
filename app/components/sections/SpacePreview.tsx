'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import Link from 'next/link';
import { imgPath } from '@/lib/utils';

export const SpacePreview = () => {
    const { language } = useLanguage();

    const spaces = [
        { title: 'The Main Hall', image: imgPath('/images/9. Space - Main Hall.png'), colSpan: 'md:col-span-2' },
        { title: 'Quiet Corner', image: imgPath('/images/10. Space - Quiet Corner.png'), colSpan: 'md:col-span-1' },
        { title: 'Window Seat', image: imgPath('/images/11. Space - Window Seat.png'), colSpan: 'md:col-span-1' },
        { title: 'Counter', image: imgPath('/images/12. Space - Counter.png'), colSpan: 'md:col-span-2' },
    ];

    return (
        <section className="py-24 bg-cream">
            <div className="container mx-auto px-4 text-center mb-16">
                <h2 className="font-serif text-4xl text-sumi mb-6">
                    {language === 'en' ? 'Our Space' : '私たちの空間'}
                </h2>
                <p className="max-w-[48rem] mx-auto text-sumi/70">
                    {language === 'en'
                        ? 'A sanctuary in the heart of Ponsonby. Designed for quiet conversations and peaceful moments.'
                        : 'Ponsonbyの中心にある聖域。静かな会話と穏やかなひとときのためにデザインされました。'}
                </p>
            </div>

            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                {spaces.map((space, index) => (
                    <motion.div
                        key={index}
                        className={`relative rounded-lg overflow-hidden group cursor-pointer ${space.colSpan}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110`} style={{ backgroundImage: `url("${space.image}")`, backgroundColor: '#e5e5e5' }} />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                        <div className="absolute bottom-6 left-6 text-white font-serif text-xl font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            {space.title}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-12">
                <Link href="/space">
                    <Button variant="outline">
                        {language === 'en' ? 'Explore Our Space' : '空間を見る'}
                    </Button>
                </Link>
            </div>
        </section>
    );
};
