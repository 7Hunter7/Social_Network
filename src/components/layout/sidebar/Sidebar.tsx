'use client'
import Image from 'next/image';
import Link from 'next/link';
import styles from './Sidebar.module.scss';
import { MENU } from './sidebar.data';
import cn from 'clsx';
import { usePathname } from 'next/navigation';


export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <Image className={styles.logo} src='/logo.svg' priority alt='logo' width={50} height={50} />
      <div className={styles.menu}> 
        {MENU.map((item) => (
        <Link href={item.url} key={item.url} className={cn({[styles.active]: pathname === item.url},
          styles.link
        )}>
          <item.icon size={27} />
        </Link>
      ))}
      </div>
    </aside>
  );
}
