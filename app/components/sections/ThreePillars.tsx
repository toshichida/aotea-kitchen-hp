'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Sparkles, Utensils, Leaf } from 'lucide-react';
import { useLanguage } from '@/lib/contexts/LanguageContext';

export const ThreePillars = () => {
    const { language } = useLanguage();

    const pillars = [
        {
            icon: <Sparkles className="w-8 h-8 text-gold" />,
            title: language === 'en' ? 'Japanese Hospitality' : '日本式おもてなし',
            description: language === 'en'
                ? 'We bring the essence of Japanese omotenashi to Auckland. Every detail from service to atmosphere reflects our mindfulness.'
                : 'オークランドに日本のおもてなしの心をお届けします。サービスから雰囲気まで、細部にこだわり、心を込めたおもてなしを体現しています。'
        },
        {
            icon: <Utensils className="w-8 h-8 text-gold" />,
            title: language === 'en' ? 'Fusion Cuisine' : '和洋折衷の料理',
            description: language === 'en'
                ? 'Premium Japanese ingredients meet fresh New Zealand produce. A unique culinary experience honoring both traditions.'
                : '日本の厳選食材とニュージーランドの新鮮な食材が出会い、伝統を尊重しながら革新を取り入れた独自の食体験を提供します。'
        },
        {
            icon: <Leaf className="w-8 h-8 text-gold" />,
            title: language === 'en' ? 'Serene Space' : '静かで落ち着ける空間',
            description: language === 'en'
                ? 'Designed for tranquility. Natural light, timber finishes, and thoughtful design create a perfect escape from the city.'
                : '静けさのためにデザインされた空間。自然光、木材の仕上げ、そして思慮深いデザインが、都会の喧騒からの完璧な逃避場所を作り出します。'
        }
    ];

    return (
        <section className="py-24 bg-cream relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full flex flex-col items-center text-center p-8 border border-timber/10 hover:border-timber/30">
                                <div className="mb-6 p-4 bg-forest/5 rounded-full">
                                    {pillar.icon}
                                </div>
                                <h3 className="font-serif text-xl font-bold mb-4 text-forest">{pillar.title}</h3>
                                <p className="text-sumi/80 leading-relaxed font-light">
                                    {pillar.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
