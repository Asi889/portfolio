import React, { useEffect, useRef, useState } from "react";
import NewGptBottom from "./NewGptBottom";
import Typer from "./Typer";

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

function NewGpt() {
  const [firstFlag, setFirstFlag] = useState(false);
  const [secondFlag, setSecondFlag] = useState(false);
  const [thirdFlag, setThirdFlag] = useState(false);
  const [forthFlag, setForthFlag] = useState(false);
  const first = "I found you a great developer currently located in Israel.";
  const second = "His name is";
  const third = "Asaf Marom.";
  const forth =
    "Asaf is a skilled full stack web developer with expertise in: JavaScript, PHP, React, Next.js, Nest.js, Vue, Node.js, MongoDB, SQL, and more. You can check out his work and contact him for your project needs. How can I assist you further?";

  const [qAndA, setQAndA] = useState([
    {
      q: ["Chat GPT, please find me a web developer?"],
      a: ["Great news!"],
    },
    {
      q: ["Do you have any more information about him?"],
      a: [
        'He worked for a little more then a year at a company named "Dice Marketing" As a Full-Stack developer. He worked there on a variety of different projects. building from scratch dash-boards and internal CMS systems, websites and more for different clients. After Dice Marketing he continued is career and found himself a position as a Full-Stack developer at "Garage Web (io)" where as well he works on different projects for different clients.',
      ],
    },
    {
      q: ["What is his super power?"],
      a: [
        "His Super Power is Freestyle frisbee. When he has free time you can usually find him at the beach Jamming with his friends or just with the wind..",
      ],
    },
  ]);

  const [displayedQIndex, setDisplayedQIndex] = useState(-1); // Track current index
  const [questionIndex, setQuestionIndex] = useState(0);
  const scrollTo = useRef(null);

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
      setDisplayedQIndex(0);
    }, 2500);
  }, []);

  const handleType = () => {
    scrollTo.current?.scrollIntoView();
  };

  return (
    <div className="max-w-lg mx-auto bg-slate-800 p-3 md:p-6 rounded-md w-full relative text-sm md:text-base">
      <div className="max-h-[300px] py-2 md:max-h-[350px] overflow-y-auto ">
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
                  <div className="grid">
                    <Typer
                      first={setFirstFlag}
                      text={qa.a[0]}
                      handleType={""}
                    />
                    {firstFlag ? (
                      <Typer
                        first={setSecondFlag}
                        text={first}
                        handleType={""}
                      />
                    ) : (
                      ""
                    )}
                    <div className="flex gap-x-2">
                      {secondFlag ? (
                        <Typer
                          first={setThirdFlag}
                          text={second}
                          handleType={""}
                        />
                      ) : (
                        ""
                      )}
                      <span className="font-bold">
                        {thirdFlag ? (
                          <Typer
                            first={setForthFlag}
                            text={third}
                            handleType={""}
                          />
                        ) : (
                          ""
                        )}
                      </span>
                    </div>
                    {forthFlag ? (
                      <Typer first={""} text={forth} handleType={""} />
                    ) : (
                      ""
                    )}
                  </div>
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
                  <Typer first={""} text={qa.a[0]} handleType={handleType} />
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
