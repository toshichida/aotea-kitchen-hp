import { Metadata } from 'next';
import VisitContent from './VisitContent';

export const metadata: Metadata = {
    title: 'Visit Us | Aotea Kitchen',
    description: 'Location, Opening Hours, and Contact Information. Visit us at 123 Ponsonby Road, Auckland.',
};

export default function VisitPage() {
    return <VisitContent />;
}
