import { Metadata } from 'next';
import SpaceContent from './SpaceContent';

export const metadata: Metadata = {
    title: 'Our Space | Aotea Kitchen',
    description: 'A sanctuary in Ponsonby. Experience our serene atmosphere designed for quiet moments and intimate gatherings.',
};

export default function SpacePage() {
    return <SpaceContent />;
}
