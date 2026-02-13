export const languages = {
    en: 'English',
    ja: '日本語',
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage: Language = 'en';

export const translations = {
    en: {
        nav: {
            menu: 'Menu',
            about: 'About',
            space: 'Space',
            visit: 'Visit',
            contact: 'Contact',
        },
        hero: {
            title: 'Where Japanese Craft Meets New Zealand Nature',
            subtitle: 'A serene space in Auckland where traditional Japanese hospitality meets the finest New Zealand ingredients.',
            cta1: 'View Menu',
            cta2: 'Reserve a Table',
        },
        common: {
            readMore: 'Read More',
            viewAll: 'View All',
            loading: 'Loading...',
        },
    },
    ja: {
        nav: {
            menu: 'メニュー',
            about: '私たちについて',
            space: '空間',
            visit: '来店情報',
            contact: 'お問い合わせ',
        },
        hero: {
            title: '日本の心とニュージーランドの恵みが出会う場所',
            subtitle: 'オークランドで、日本の伝統的なおもてなしとニュージーランドの最高の食材が融合する静かな空間。',
            cta1: 'メニューを見る',
            cta2: '予約する',
        },
        common: {
            readMore: '続きを読む',
            viewAll: 'すべて見る',
            loading: '読み込み中...',
        },
    },
};
