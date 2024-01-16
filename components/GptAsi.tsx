import Image from "next/image";
import {
  ReactNode,
  use,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import ChatContainer from "./ChatContainer";
import { useTime } from "framer-motion";
import { memo } from "react";

// import { setTimeout } from "timers/promises";

const qAndA = [
  {
    q: "Chat GPT, please find me a web developer.",
    a: `Great news!\nI found you a great developer currently located in Israel. His name is Asaf Marom.\nAsaf is a skilled full stack web developer with expertise in:\nJavaScript, PHP, React, Next.js, Nest.js, Vue, Node.js, MongoDB, SQL, and more.\nYou can check out his work and contact him for your project needs.\nHow can I assist you further?`,
  },
  ,
] as const;
const ChatInput = memo(
  ({
    value,
    onTypingComplete,
    startOver,
  }: {
    value: string;
    onTypingComplete?: () => void;
    startOver?: () => void;
  }) => {
    return (
      <div className="flex w-full py-3 md:pl-4 relative border  border-gray-900/50 text-white bg-gray-700 rounded-xl shadow-xs ">
        {/* <input
                value={value}
                disabled
                placeholder="Send a message"
                className="m-0 w-full flex-grow resize-none border-0  p-0 pr-10 focus:ring-0 focus-visible:ring-0 bg-transparent md:pr-12 pl-3 md:pl-0"
            ></input> */}
        <Question
          text={value}
          avatar={UserAvatar}
          onTypingComplete={onTypingComplete}
        />
        <button
          onClick={startOver}
          className="rounded-md hover:bg-gray-900 p-2 text-primary transition-colors mr-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="none"
            className="h-4 w-4 m-1 md:m-0"
            stroke-width="2"
          >
            <path
              d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>
    );
  }
);

ChatInput.displayName = "ChatInput"; // Add display name to the component

const Avatar = () => (
  <div className="avatar flex-0 rounded flex-shrink w-8 h-8 grid place-content-center bg-primary  font-bold">
    <Image
      width={28}
      height={28}
      src="https://res.cloudinary.com/dvdzjj8jo/image/upload/v1639907803/Asaf_up6v4r.png"
      alt="Asaf Marom"
      className="w-7 h-7 object-cover"
    />
  </div>
);
const Robot = () => (
  <div className="avatar flex-0 rounded flex-shrink w-8 h-8 grid place-content-center bg-primary  font-bold">
    🤖
  </div>
);
const UserAvatar = () => (
  <div className="avatar rounded flex-0 w-8 h-8 grid place-content-center bg-purple-500 font-bold">
    U
  </div>
);
const Question = ({
  text,
  avatar,
  onTypingComplete,
}: {
  text: string;
  avatar: () => JSX.Element;
  onTypingComplete?: () => void;
}) => {
  return (
    <li className="flex gap-x-5 min-h-[30px]">
      {avatar()}
      <div className="text-slate-100 min-h-[20px] flex flex-1 flex-col items-start gap-3 overflow-x-auto whitespace-pre-wrap break-words">
        {onTypingComplete ? (
          <ChatContainer
            chatHistory={[text]}
            onTypingComplete={onTypingComplete}
          />
        ) : (
          <div>{text}</div>
        )}
      </div>
    </li>
  );
};

export const GptAsi = () => {
  const [index, setIndex] = useState(false);
  const [indexChecker, setIndexChecker] = useState(false);
  const [indexCheckerTwo, setIndexCheckerTwo] = useState(false);

  const onTypingComplete = useCallback(() => {
    // setIndex((prev) => {
    //   console.log(prev);
    //   if (prev === undefined) return 0;
    //   if (prev === qAndA.length - 1) return 0;
    //   return prev + 1;
    // });
  }, []);

  const startOver = useCallback(() => {
    setIndexChecker(false);
    setIndexCheckerTwo(false);
    // setIndex(!index);
    setIndex((prev) => !prev);
  }, []);

  useEffect(() => {
    console.log("useEffect innnnn");
    const timeoutId = setTimeout(() => {
      setIndexChecker(true);
    }, 2000);
    const timeoutIdTwo = setTimeout(() => {
      setIndexCheckerTwo(true);
    }, 4000);
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutIdTwo);
    };
  }, [index]);

  return (
    <section
      className={`max-w-lg mx-auto bg-slate-800 p-6 rounded-md w-full relative overflow-hidden transition-opacity duration-1000 ease-in-out transform translate-y-[-100%] opacity-0 animate-slideDown`}
    >
      {/* <section className="max-w-lg mx-auto bg-slate-800 p-6 rounded-md w-full relative"> */}
      <h1 className="text-4xl font-semibold text-center text-gray-700 flex gap-2 items-center justify-center flex-grow ">
        <span className="absolute top-2 lg:top-1 right-auto left-auto">
          AsiGPT
        </span>
      </h1>
      {indexChecker ? (
        <div>
          {" "}
          {indexCheckerTwo ? (
            <ul className="space-y-4 mb-6 relative">
              <Question text={qAndA[0].q} avatar={UserAvatar} />
              <div className="relative">
                <Question
                  text={qAndA[0].a}
                  avatar={Robot}
                  onTypingComplete={onTypingComplete}
                />
              </div>
            </ul>
          ) : (
            ""
          )}
          <ChatInput
            value={qAndA[0].q}
            startOver={startOver}
            onTypingComplete={onTypingComplete}
          />
        </div>
      ) : (
        ""
      )}
    </section>
  );
};
