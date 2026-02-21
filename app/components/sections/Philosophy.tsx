'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { imgPath } from '@/lib/utils';

export const Philosophy = () => {
    const { language } = useLanguage();
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

    return (
        <section ref={ref} className="py-32 bg-forest text-cream relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div style={{ y: y1 }} className="space-y-8">
                        <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                            {language === 'en' ? (
                                <>Where Two Cultures<br /><span className="text-gold italic">Meet</span></>
                            ) : (
                                <>二つの文化が<br /><span className="text-gold italic">出会う場所</span></>
                            )}
                        </h2>
                        <div className="space-y-6 text-cream/90 font-light text-lg leading-relaxed">
                            <p>
                                {language === 'en'
                                    ? "Premium ingredients carefully selected from Japan's finest producers meet the freshest local New Zealand produce."
                                    : "日本の最高の生産者から厳選された食材と、ニュージーランドの新鮮な地元の食材が出会います。"}
                            </p>
                            <p>
                                {language === 'en'
                                    ? "When East meets South Pacific, something beautiful happens. Our dishes honor both traditions while creating entirely new flavor experiences."
                                    : "東洋と南太平洋が出会うとき、美しいものが生まれます。私たちの料理は両方の伝統を尊重しながら、まったく新しい味の体験を創り出します。"}
                            </p>
                        </div>
                        <div className="flex gap-4 pt-4">
                            <div className="text-center">
                                <span className="block text-2xl mb-1">🇯🇵</span>
                                <span className="text-xs uppercase tracking-widest opacity-70">Japan</span>
                            </div>
                            <div className="border-l border-cream/20 mx-2" />
                            <div className="text-center">
                                <span className="block text-2xl mb-1">🇳🇿</span>
                                <span className="text-xs uppercase tracking-widest opacity-70">New Zealand</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="relative h-[500px] w-full hidden md:block">
                        {/* Parallax Images */}
                        <motion.div
                            style={{ y: y2 }}
                            className="absolute top-0 right-0 w-3/4 h-3/4 bg-stone-300 rounded-lg shadow-2xl z-0 overflow-hidden"
                        >
                            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url("${imgPath('/images/3. Philosophy Section - Japan.png')}")` }}>
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 text-white font-serif">JP Ingredients</div>
                            </div>
                        </motion.div>
                        <motion.div
                            style={{ y: y1 }}
                            className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-stone-200 rounded-lg shadow-2xl z-10 overflow-hidden border-4 border-forest"
                        >
                            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url("${imgPath('/images/4. Philosophy Section - New Zealand.png')}")` }}>
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 text-white font-serif">NZ Ingredients</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
