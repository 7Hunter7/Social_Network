'use client'
import Image from 'next/image';
import Link from 'next/link';
import styles from './Sidebar.module.scss';
import { MENU } from './sidebar.data';
import { getServerPathName } from '@/server-actions/get-path-name';
import { cn } from 'clsx';


export default function Sidebar() {
  const pathname = getServerPathName();

  return (
    <aside className={styles.sidebar}>
      <Image src='/logo.svg' priority alt='logo' width={50} height={50} />
      {MENU.map((item) => (
        <Link href={item.url} key={item.url} className={cn({[styles.active]: pathname === item.url})}>
          <item.icon size={27} />
        </Link>
      ))}
    </aside>
  );
}
