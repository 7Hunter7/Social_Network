import { Phone, User2, MessagesSquare, Cog } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Sidebar.module.scss';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Image src='/liner-icon.svg' alt='logo' width={50} height={50} />
      <div>
        <Link href='/friends'>
          <User2 />
        </Link>
        <Link href='/call'>
          <Phone />
        </Link>
        <Link href='/chats'>
          <MessagesSquare />
        </Link>
        <Link href='/settings'>
          <Cog />
        </Link>
      </div>
    </div>
  );
}
