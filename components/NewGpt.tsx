import React, { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import NewGptBottom from "./NewGptBottom";

const UserAvatar = () => (
  <div className="avatar rounded flex-0 w-8 h-8 grid place-content-center bg-purple-500 font-bold">
    U
  </div>
);

const Robot = () => (
  <div className="avatar flex-0 rounded flex-0 w-8 h-8 grid place-content-center bg-primary  font-bold">
    🤖
  </div>
);

function NewGpt(props) {
  const [inputflag, setInputFlag] = useState(false);
  const second = "His name is Asaf Marom.";
  const third =
    "Asaf is a skilled full stack web developer with expertise in: JavaScript, PHP, React, Next.js, Nest.js, Vue, Node.js, MongoDB, SQL, and more. You can check out his work and contact him for your project needs. How can I assist you further?";

  const [qAndA, setQAndA] = useState([
    {
      q: ["Chat GPT, please find me a web developer?"],
      a: [
        "Great news!" +
          "\n" +
          "I found you a great developer currently located in Israel.\n His name is Asaf Marom.\n Asaf is a skilled full stack web developer with expertise in: JavaScript, PHP, React, Next.js, Nest.js, Vue, Node.js, MongoDB, SQL, and more. You can check out his work and contact him for your project needs.\n How can I assist you further?",
      ],
    },
    {
      q: ["what else you ask?"],
      a: [
        "he can billed you websites, colablrate with with different team players, and more.",
      ],
    },
    {
      q: ["what is his super power?"],
      a: [
        "FREE STYLE FRISBEE PRO n billed you websites, colablrate with with different team players, and more n billed you websites, colablrate with with different team players, and more",
      ],
    },
  ]);

  const [displayedQIndex, setDisplayedQIndex] = useState(-1); // Track current index
  const [questionIndex, setQuestionIndex] = useState(0);
  const scrollTo = useRef(null);
  const typerRef = useRef(null);

  const handleNextClick = () => {
    if (questionIndex === qAndA.length - 1) {
      return;
    }
    setQuestionIndex((prevIndex) => prevIndex + 1);
    setTimeout(() => {
      setDisplayedQIndex((prevIndex) => prevIndex + 1);
    }, 1500);
  };

  useEffect(() => {
    setTimeout(() => {
      setInputFlag(true);
      setDisplayedQIndex(0);
    }, 2500);
  }, []);

  const handleType = (count) => {
    scrollTo.current?.scrollIntoView();
    // if (count === qAndA[questionIndex]["q"].length - 1) {
    // }
  };

  return (
    <div className="max-w-lg mx-auto bg-slate-800 p-3 md:p-6 rounded-md w-full relative text-sm md:text-base">
      <div className="max-h-[300px] py-2 md:max-h-[450px] overflow-y-auto ">
        {qAndA.slice(0, displayedQIndex + 1).map((qa, index) => {
          return index === 0 ? (
            <div
              className={`flex ${index === 0 ? "pt-0" : " pt-10"}`}
              key={index}
            >
              <div className="max-w-lg grid gap-y-5">
                <div className="flex gap-x-2 pt-3">
                  <UserAvatar />
                  <h4>{qa.q}</h4>
                </div>
                <div className="flex gap-x-2 shrink-[0] pt-0">
                  <div className="w-8">
                    <Robot />
                  </div>
                  <Typewriter
                    words={qa.a}
                    cursor
                    cursorStyle=""
                    typeSpeed={10}
                    delaySpeed={0}
                  />
                  {/* <div>image</div> */}
                </div>
              </div>
            </div>
          ) : (
            <div
              className={`grid gap-y-3 ${index === 0 ? "pt-0" : " pt-5"} `}
              key={index}
            >
              <div className="flex gap-x-2 pt-3">
                <UserAvatar />
                <h4>{qa.q}</h4>
              </div>
              <div className="flex gap-x-2 shrink-[0] pt-0">
                <div className="w-8">
                  <Robot />
                </div>
                <div>
                  <Typewriter
                    words={qa.a}
                    cursor
                    cursorStyle=""
                    typeSpeed={10}
                    delaySpeed={0}
                    onType={handleType}
                  />
                  <div ref={scrollTo} className="scrollTO"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <NewGptBottom
        questionIndex={questionIndex}
        qAndA={qAndA}
        handleNextClick={handleNextClick}
      />
    </div>
  );
}

export default NewGpt;
