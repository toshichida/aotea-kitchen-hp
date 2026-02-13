import { Metadata } from 'next';
import MenuContent from './MenuContent';

export const metadata: Metadata = {
    title: 'Menu | Aotea Kitchen',
    description: 'Explore our fusion menu featuring Japanese Breakfast, Wagyu Katsu, Matcha Sweets, and more. Crafted with premium local ingredients.',
};

export default function MenuPage() {
    return <MenuContent />;
}
