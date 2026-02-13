'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { Button } from '../components/ui/Button';

export default function MenuPage() {
    const { language } = useLanguage();
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', label: language === 'en' ? 'All' : 'すべて' },
        { id: 'breakfast', label: language === 'en' ? 'Breakfast' : '朝食' },
        { id: 'lunch', label: language === 'en' ? 'Lunch' : 'ランチ' },
        { id: 'sweets', label: language === 'en' ? 'Sweets' : 'スイーツ' },
        { id: 'drinks', label: language === 'en' ? 'Drinks' : 'ドリンク' },
    ];

    const menuItems = [
        {
            id: 1,
            category: 'breakfast',
            name: language === 'en' ? 'Japanese Breakfast Set' : '和朝食セット',
            description: language === 'en' ? 'Grilled fish, miso soup, rice, pickles, tamagoyaki' : '焼き魚、味噌汁、ご飯、お漬物、玉子焼き',
            price: '$22.00',
            dietary: []
        },
        {
            id: 2,
            category: 'breakfast',
            name: language === 'en' ? 'Matcha Granola Bowl' : '抹茶グラノーラボウル',
            description: language === 'en' ? 'House-made matcha granola, Greek yogurt, seasonal fruits' : '自家製抹茶グラノーラ、ギリシャヨーグルト、季節のフルーツ',
            price: '$16.00',
            dietary: ['Vegetarian', 'GF Available']
        },
        {
            id: 3,
            category: 'lunch',
            name: language === 'en' ? 'Wagyu Katsu Curry' : '和牛カツカレー',
            description: language === 'en' ? 'Premium NZ Wagyu cutlet, Japanese curry, rice' : 'プレミアムNZ和牛カツ、日本カレー、ご飯',
            price: '$26.00',
            dietary: []
        },
        {
            id: 4,
            category: 'lunch',
            name: language === 'en' ? 'Salmon Ochazuke' : 'サーモン茶漬け',
            description: language === 'en' ? 'Grilled NZ Salmon, rice, dashi broth, Japanese condiments' : 'グリルNZサーモン、ご飯、出汁、和薬味',
            price: '$19.50',
            dietary: ['GF Available']
        },
        {
            id: 5,
            category: 'sweets',
            name: language === 'en' ? 'Matcha Tiramisu' : '抹茶ティラミス',
            description: language === 'en' ? 'Japanese matcha meets Italian classic' : '日本の抹茶とイタリアのクラシックの出会い',
            price: '$9.50',
            dietary: []
        },
        {
            id: 6,
            category: 'drinks',
            name: 'Flat White',
            description: language === 'en' ? 'Using beans from local Auckland roasters' : 'オークランドのロースターの豆を使用',
            price: '$4.50',
            dietary: []
        }
    ];

    const filteredItems = activeCategory === 'all'
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    return (
        <>
            <Header />
            <main className="bg-cream min-h-screen pt-32 pb-16">
                <div className="container mx-auto px-4">
                    <h1 className="font-serif text-5xl text-center mb-12 text-sumi">
                        {language === 'en' ? 'Menu' : 'メニュー'}
                    </h1>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {categories.map((cat) => (
                            <Button
                                key={cat.id}
                                variant={activeCategory === cat.id ? 'primary' : 'outline'}
                                onClick={() => setActiveCategory(cat.id)}
                                className="min-w-[100px]"
                            >
                                {cat.label}
                            </Button>
                        ))}
                    </div>

                    {/* Menu Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
                        <AnimatePresence mode='popLayout'>
                            {filteredItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex flex-col border-b border-timber/10 pb-6"
                                >
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="font-serif text-xl font-bold text-sumi">{item.name}</h3>
                                        <span className="font-serif text-lg font-bold text-forest">{item.price}</span>
                                    </div>
                                    <p className="text-sumi/70 mb-3">{item.description}</p>
                                    <div className="flex gap-2">
                                        {item.dietary.map(tag => (
                                            <span key={tag} className="text-xs px-2 py-0.5 border border-forest/20 text-forest/80 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <div className="text-center mt-16 text-sumi/50 text-sm">
                        {language === 'en' ? '*Prices in NZD. 15% surcharge on public holidays.' : '*価格はNZドルです。祝日は15%のサーチャージがかかります。'}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
