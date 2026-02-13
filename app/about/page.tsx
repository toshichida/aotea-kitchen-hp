import { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
    title: 'About Us | Aotea Kitchen',
    description: 'Where Japanese Craft Meets New Zealand Nature. Learn about our journey, our philosophy, and the fusion of cultures that defines us.',
};

export default function AboutPage() {
    return <AboutContent />;
}
