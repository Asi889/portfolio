import { useEffect, useState } from "react";

interface ChatContainerProps {
  chatHistory: string[];
  onTypingComplete: () => void;
}

const WAIT_AFTER_TYPING = 3000;
const TYPING_SPEED = 20;
export default function ChatContainer({
  chatHistory,
  onTypingComplete,
}: ChatContainerProps) {
  const [displayResponse, setDisplayResponse] = useState("");
  const [completedTyping, setCompletedTyping] = useState(false);

  useEffect(() => {
    if (!chatHistory?.length) {
      return;
    }

    setCompletedTyping(false);

    let i = 0;
    const stringResponse = chatHistory[chatHistory.length - 1];

    const intervalId = setInterval(() => {
      setDisplayResponse(stringResponse.slice(0, i));

      i++;

      if (i > stringResponse.length) {
        clearInterval(intervalId);
        setCompletedTyping(true);
        setTimeout(() => {
          onTypingComplete();
        }, WAIT_AFTER_TYPING);
      }
    }, TYPING_SPEED);

    return () => clearInterval(intervalId);
  }, [chatHistory, onTypingComplete]);

  return <div>{displayResponse}</div>;
}
