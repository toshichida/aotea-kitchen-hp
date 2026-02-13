'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const FeaturedMenu = () => {
    const { language } = useLanguage();
    const scrollRef = useRef<HTMLDivElement>(null);

    const dishes = [
        {
            name: language === 'en' ? 'Matcha Pancakes' : '抹茶パンケーキ',
            price: '$18.50',
            description: language === 'en' ? 'Fluffy Japanese-style pancakes infused with premium matcha.' : 'プレミアム抹茶を練り込んだふわふわのパンケーキ。',
            image: '/images/5. Menu - Matcha Pancakes.png',
            tags: ['Vegetarian']
        },
        {
            name: language === 'en' ? 'Miso Glazed Salmon' : '味噌サーモン',
            price: '$24.00',
            description: language === 'en' ? 'Fresh King Salmon glazed with house-made miso.' : '自家製味噌で仕上げた新鮮なキングサーモン。',
            image: '/images/6. Menu - Miso Glazed Salmon.png',
            tags: ['GF Available']
        },
        {
            name: language === 'en' ? 'Wagyu Katsu Sando' : '和牛カツサンド',
            price: '$22.00',
            description: language === 'en' ? 'Premium NZ Wagyu, panko-crusted in soft shokupan.' : '柔らかな食パンに挟んだプレミアムNZ和牛カツ。',
            image: '/images/7. Menu - Wagyu Katsu Sando.png',
            tags: []
        },
        {
            name: language === 'en' ? 'Fruit Daifuku' : 'フルーツ大福',
            price: '$8.50',
            description: language === 'en' ? 'Delicate mochi filled with seasonal NZ fruits.' : '季節のNZフルーツを包んだ繊細な大福。',
            image: '/images/8. Menu - Fruit Daifuku.png',
            tags: ['Vegan']
        }
    ];

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 mb-12 flex justify-between items-end">
                <div>
                    <span className="text-forest font-bold tracking-wider text-sm uppercase mb-2 block">
                        {language === 'en' ? 'Our Menu' : 'メニュー'}
                    </span>
                    <h2 className="font-serif text-4xl text-sumi">
                        {language === 'en' ? 'Featured Dishes' : 'おすすめ料理'}
                    </h2>
                </div>
                <Link href="/menu" className="hidden md:flex items-center text-forest hover:text-forest-dark transition-colors gap-2 font-medium">
                    {language === 'en' ? 'View Full Menu' : 'メニューを見る'} <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            <div
                ref={scrollRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-4 md:px-8 -mx-4 md:mx-0 scrollbar-hide"
            >
                {dishes.map((dish, index) => (
                    <motion.div
                        key={index}
                        className="snap-center min-w-[85vw] md:min-w-[350px] first:pl-4 md:first:pl-0 last:pr-4 md:last:pr-0"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full p-0 overflow-hidden group cursor-pointer border-none shadow-md hover:shadow-xl">
                            <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                                <div className="absolute inset-0 bg-forest/10 group-hover:bg-forest/0 transition-colors z-10" />
                                {/* Image Placeholder */}
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                    style={{ backgroundImage: `url("${dish.image}")` }} />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-serif text-xl font-bold text-sumi group-hover:text-forest transition-colors">
                                        {dish.name}
                                    </h3>
                                    <span className="font-serif font-bold text-lg text-timber">{dish.price}</span>
                                </div>
                                <p className="text-sumi/70 text-sm mb-4 line-clamp-2">
                                    {dish.description}
                                </p>
                                <div className="flex gap-2">
                                    {dish.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 bg-forest/5 text-forest rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="container mx-auto px-4 mt-8 md:hidden text-center">
                <Button variant="outline" fullWidth onClick={() => window.location.href = '/menu'}>
                    {language === 'en' ? 'View Full Menu' : 'メニューを見る'}
                </Button>
            </div>
        </section>
    );
};
