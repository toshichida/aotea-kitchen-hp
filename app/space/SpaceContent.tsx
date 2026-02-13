'use client';

import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { useLanguage } from '@/lib/contexts/LanguageContext';

export default function SpacePage() {
    const { language } = useLanguage();

    const galleryImages = [
        '/images/9. Space - Main Hall.png',
        '/images/10. Space - Quiet Corner.png',
        '/images/11. Space - Window Seat.png',
        '/images/12. Space - Counter.png',
        '/images/13. Space - Detail 1 (Texture:Decor).png',
        '/images/14. Space - Detail 2 (Plant:Nature).png',
    ];

    return (
        <>
            <Header />
            <main className="bg-cream min-h-screen pt-32 pb-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 max-w-[64rem] mx-auto">
                        <h1 className="font-serif text-5xl mb-6 text-sumi">
                            {language === 'en' ? 'Our Space' : '空間'}
                        </h1>
                        <p className="text-lg text-sumi/80 leading-relaxed">
                            {language === 'en'
                                ? 'Step into Aotea Kitchen and leave the bustle of the city behind. Our space is designed as a sanctuary.'
                                : 'Aotea Kitchenに足を踏み入れ、都会の喧騒を後にしてください。私たちの空間は聖域としてデザインされています。'}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                        {galleryImages.map((src, i) => (
                            <div key={i} className="aspect-square bg-stone-200 rounded-lg overflow-hidden group relative cursor-pointer">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                    style={{ backgroundImage: `url("${src}")`, backgroundColor: '#d6d3d1' }} />
                            </div>
                        ))}
                    </div>

                    <div className="bg-white rounded-lg p-12 shadow-sm text-center max-w-[48rem] mx-auto border border-timber/10">
                        <h2 className="font-serif text-3xl mb-4 text-forest">
                            {language === 'en' ? 'Private Events' : 'プライベートイベント'}
                        </h2>
                        <p className="text-sumi/80 mb-8 leading-relaxed">
                            {language === 'en'
                                ? 'Aotea Kitchen is available for private events, special occasions, and intimate gatherings. Our space can accommodate up to 30 guests.'
                                : 'Aotea Kitchenは、プライベートイベント、特別な機会、そして親密な集まりにご利用いただけます。最大30名まで収容可能です。'}
                        </p>
                        <p className="text-forest font-medium">
                            Inquiries: hello@aoteakitchen.nz
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
