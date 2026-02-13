import { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
    title: 'Contact | Aotea Kitchen',
    description: 'Get in touch with us for reservations, private events, or general inquiries.',
};

export default function ContactPage() {
    return <ContactContent />;
}
