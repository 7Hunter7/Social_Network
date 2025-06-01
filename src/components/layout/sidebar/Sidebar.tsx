'use client'
import Image from 'next/image';
import Link from 'next/link';
import styles from './Sidebar.module.scss';
import { MENU } from './sidebar.data';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Image src='/logo.svg' priority alt='logo' width={50} height={50} />
      {MENU.map((item) => (
        <Link href={item.url} key={item.url}>
          <item.icon size={27} />
        </Link>
      ))}
    </aside>
  );
}
