import { Suspense } from "react";
import { useParams } from "react-router-dom";

// Lazy load
// const ChatPage = lazy(() => import("./ChatPage"));

type ChatPageWrapperProps = {
  readonly accountId: string;
};

const ChatPageWrapper = ({ accountId }: ChatPageWrapperProps) => {
  const { chatId } = useParams();

  return (
    <Suspense fallback={<div />}>
      {/*<ChatPage accountId={accountId} chatId={chatId!} />*/}
    </Suspense>
  );
};

export default ChatPageWrapper;
