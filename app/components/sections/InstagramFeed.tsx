'use client';

import React from 'react';
import { Instagram } from 'lucide-react';
import { useLanguage } from '@/lib/contexts/LanguageContext';

export const InstagramFeed = () => {
    const { language } = useLanguage();
    // Mock feed
    const posts = Array(6).fill(null);

    return (
        <section className="py-24 bg-white border-t border-timber/10">
            <div className="container mx-auto px-4 text-center mb-12">
                <div className="flex items-center justify-center gap-2 mb-4 text-forest">
                    <Instagram className="w-6 h-6" />
                    <span className="font-bold tracking-widest text-sm">@aoteakitchen</span>
                </div>
                <h2 className="font-serif text-3xl text-sumi">
                    {language === 'en' ? 'Follow Our Journey' : '私たちの旅をフォロー'}
                </h2>
            </div>

            <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-6 gap-4">
                {posts.map((_, i) => (
                    <div key={i} className="aspect-square bg-stone-100 relative group overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 flex items-center justify-center text-stone-300">
                            Post {i + 1}
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <Instagram className="text-white w-8 h-8 drop-shadow-lg" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
