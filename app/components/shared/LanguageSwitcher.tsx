'use client';

import React from 'react';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { Button } from '../ui/Button';

export const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-1">
            <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 ${language === 'en' ? 'font-bold text-forest' : 'text-sumi/60'} hover:bg-transparent`}
            >
                EN
            </Button>
            <span className="text-sumi/40">|</span>
            <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage('ja')}
                className={`px-2 py-1 ${language === 'ja' ? 'font-bold text-forest' : 'text-sumi/60'} hover:bg-transparent`}
            >
                JP
            </Button>
        </div>
    );
};
