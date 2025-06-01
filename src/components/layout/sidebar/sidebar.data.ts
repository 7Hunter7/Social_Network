import { url } from 'inspector'
import { LucideIcon } from 'lucide-react';
import { Phone, User2, MessagesSquare, Cog } from 'lucide-react';

export const MENU = [
  {
    url: '/friends',
    icon: User2 as LucideIcon,
  },
  {
    url: '/call',
    icon: Phone as LucideIcon,
  },
  {
    url: '/chats',
    icon: MessagesSquare as LucideIcon,
  },
  {
    url: '/settings',
    icon: Cog as LucideIcon,
  },
];
