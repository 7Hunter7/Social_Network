import CurrentUser from '@/components/(chats)/CurrentUser';
import ChatsList from '@/components/(chats)/ChatsList';
import Chat from '@/components/(chats)/Chat';
import styles from './page.module.scss';

export default function ChatsPage() {
  return (
    <div className={styles.chats}>
      <div>
        <CurrentUser />
        <ChatsList />
      </div>
      <div>
        <Chat/>
      </div>
    </div>
  );
}
