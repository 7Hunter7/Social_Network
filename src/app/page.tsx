import CurrentUser from '@/components/(chats)/CurrentUser';
import ChatsList from '@/components/(chats)/ChatsList';
import Chat from '@/components/(chats)/Chat';

export default function ChatsPage() {
  return (
    <div >
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
