import type { Metadata } from 'next';
import AnimatedGriefChatContent from '@/components/AnimatedGriefChatContent';

export const metadata: Metadata = {
  title:
    'Free Grief Chat Support | Carlisle & Cumbria | Final Journey Funerals',
  description:
    'Free bereavement support through GriefChat in Carlisle and Cumbria. Speak directly to trained bereavement counsellors who can help you through this difficult time. Available online.',
  keywords: [
    'grief chat',
    'bereavement support Carlisle',
    'free grief counselling',
    'bereavement chat Cumbria',
    'grief support online',
  ],
};

export default function GriefChatPage() {
  return <AnimatedGriefChatContent />;
}
