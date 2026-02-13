'use client';

import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Button } from '../components/ui/Button';
import { useLanguage } from '@/lib/contexts/LanguageContext';

export default function ContactPage() {
    const { language } = useLanguage();

    return (
        <>
            <Header />
            <main className="bg-cream min-h-screen pt-32 pb-16">
                <div className="container mx-auto px-4 w-full max-w-5xl">
                    <h1 className="font-serif text-5xl text-center mb-8 text-sumi">
                        {language === 'en' ? 'Contact Us' : 'お問い合わせ'}
                    </h1>
                    <p className="text-center text-sumi/70 mb-12">
                        {language === 'en'
                            ? 'Have a question or want to make a reservation? Send us a message.'
                            : 'ご質問やご予約についてなど、お気軽にお問い合わせください。'}
                    </p>

                    <form className="bg-white p-8 md:p-12 rounded-lg shadow-sm space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-sumi/80">{language === 'en' ? 'Name' : 'お名前'}</label>
                                <input type="text" className="w-full px-4 py-2 border border-timber/20 rounded focus:border-forest focus:ring-1 focus:ring-forest outline-none transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-sumi/80">{language === 'en' ? 'Email' : 'メールアドレス'}</label>
                                <input type="email" className="w-full px-4 py-2 border border-timber/20 rounded focus:border-forest focus:ring-1 focus:ring-forest outline-none transition-colors" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-sumi/80">{language === 'en' ? 'Subject' : '件名'}</label>
                            <input type="text" className="w-full px-4 py-2 border border-timber/20 rounded focus:border-forest focus:ring-1 focus:ring-forest outline-none transition-colors" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-sumi/80">{language === 'en' ? 'Message' : 'メッセージ'}</label>
                            <textarea rows={6} className="w-full px-4 py-2 border border-timber/20 rounded focus:border-forest focus:ring-1 focus:ring-forest outline-none transition-colors resize-none" />
                        </div>

                        <Button fullWidth size="lg">
                            {language === 'en' ? 'Send Message' : '送信する'}
                        </Button>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
}
