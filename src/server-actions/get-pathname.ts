'use server';
import { headers } from 'next/headers';

export const getServerPathName = (path: string): string => {
  const headerList = headers();
  const headerUrl = headerList.get('referer');
  const currentPathName = '/' + headerUrl?.split('/').slice(3).join('/');
  return currentPathName;
};