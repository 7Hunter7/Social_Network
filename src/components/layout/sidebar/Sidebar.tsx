import { Phone, User2, MessagesSquare, Cog } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Sidebar.module.scss';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Image src='/logo.svg' priority alt='logo' width={50} height={50} />
      <div>
        <Link href='/friends'>
          <User2 size={27}/>
        </Link>
        <Link href='/call'>
          <Phone size={27}/>
        </Link>
        <Link href='/chats'>
          <MessagesSquare size={27} />
        </Link>
        <Link href='/settings'>
          <Cog size={27}/>
        </Link>
      </div>
    </aside>
  );
}
