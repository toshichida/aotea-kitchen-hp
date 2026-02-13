'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { useLanguage } from '@/lib/contexts/LanguageContext';

export default function AboutContent() {
    const { language } = useLanguage();

    return (
        <>
            <Header />
            <main className="bg-cream min-h-screen pt-24 pb-16">
                <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mb-16">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/2. About Page Hero.png")', backgroundColor: '#2C5F4F' }}>
                        <div className="absolute inset-0 bg-black/40" />
                    </div>
                    <div className="container mx-auto px-4 relative z-10 text-center text-cream">
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="font-serif text-5xl md:text-7xl mb-4"
                        >
                            {language === 'en' ? 'Our Story' : '私たちの物語'}
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl max-w-[48rem] mx-auto font-light"
                        >
                            {language === 'en' ? 'Two cultures under one sky.' : '一つの空の下にある二つの文化。'}
                        </motion.p>
                    </div>
                </section>

                <section className="container mx-auto px-4 mb-24">
                    <div className="max-w-[64rem] mx-auto text-center space-y-8">
                        <h2 className="font-serif text-3xl md:text-4xl text-forest mb-6">Why Aotea?</h2>
                        <p className="text-lg leading-relaxed text-sumi/80">
                            {language === 'en'
                                ? 'The name "Aotea" comes from Te Reo Māori, meaning "white cloud" - a symbol of New Zealand\'s natural beauty and purity. For us, it represents the meeting point between Japan\'s refined culinary traditions and New Zealand\'s pristine ingredients.'
                                : '「Aotea(アオテア)」という名前は、マオリ語で「白い雲」を意味し、ニュージーランドの自然の美しさと純粋さの象徴です。私たちにとって、それは日本の洗練された料理の伝統とニュージーランドの純粋な食材が出会う場所を表しています。'}
                        </p>
                    </div>
                </section>

                <section className="container mx-auto px-4 mb-24 grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <div className="aspect-[4/5] bg-stone-200 rounded-lg overflow-hidden">
                            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("/images/15. Owner Portrait (Proxy).png")' }} />
                        </div>
                    </div>
                    <div className="order-1 md:order-2 space-y-6">
                        <h2 className="font-serif text-3xl md:text-4xl text-forest">Our Journey</h2>
                        <p className="leading-relaxed text-sumi/80">
                            {language === 'en'
                                ? "Growing up in Japan, I learned that food is more than sustenance—it's a form of respect, care, and connection. When I moved to Auckland, I fell in love with the quality of New Zealand's produce and the warm, welcoming spirit of Kiwi culture."
                                : "日本で育った私は、食べ物は単なる栄養以上のもの、それは敬意、ケア、そして繋がりの形だと学びました。オークランドに移住してから、ニュージーランドの食材の品質とキウイ文化の温かく歓迎的な精神に恋をしました。"}
                        </p>
                        <p className="leading-relaxed text-sumi/80">
                            {language === 'en'
                                ? "Aotea Kitchen was born from a desire to bridge these two worlds, creating a space where Japanese precision meets Kiwi authenticity."
                                : "Aotea Kitchenは、これら二つの世界を橋渡ししたいという願いから生まれました。日本の精密さとキウイの真正さが出会う空間を創り出すために。"}
                        </p>

                        <div className="pt-4 font-serif text-xl text-forest">
                            Yuki Tanaka <span className="text-sm text-sumi/60 block mt-1">Owner & Head Chef</span>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
