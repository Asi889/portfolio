/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import { Context } from "../pages/_app";
import { Project } from "../src/services/projectData";
import { Buttons } from "./Buttons";

const computerImg =
  "https://res.cloudinary.com/dvdzjj8jo/image/upload/v1639300873/computer-70206b16dbda0c66d36cddd149fe703e_vqxyre.png";

const Stacks = ({ stacks }: { stacks: string[] }) => (
  <div className="tech-wrapper flex flex-wrap gap-x-4 gap-y-2 justify-center">
    {stacks.map((stack, index) => (
      <h3
        key={index}
        className="pl-2 text-2xl font-semibold border-b-2 border-red-400 text-center"
      >
        {stack}
        {index != stacks.length - 1 ? ", " : ""}
      </h3>
    ))}
  </div>
);

const ProjectImg = ({
  imgSrc,
  darkTheme,
}: {
  imgSrc: string;
  darkTheme: boolean;
}) => (
  <div className="projec-img-wrapper   items-center max-h-[300px] md:max-h-[400px]  self-center z-50 relative flex   mx-auto">
    <img
      className="items-center  relative  w-full max-h-[300px] md:max-h-[400px] z-50"
      alt=""
      src={computerImg}
    ></img>
    <img
      className="project-img absolute z-40 top-[12px] w-full  object-cover  md:max-h-[300px] xs:max-h-[200px] max-h-[140px] rounded-lg"
      alt=""
      src={imgSrc}
    ></img>
    <div
      className={`h-[110%] md:top-auto bottom-auto  w-[110%]  -left-[5%]  z-10 bg-gray-400 opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl ${
        darkTheme ? "absolute" : "hidden"
      }`}
    ></div>
  </div>
);

export const SingleProject = ({ project }: { project: Project }) => {
  const theme = useContext(Context);

  return (
    <li className={`h-full w-full  z-50 lg:flex grid even:flex-row-reverse`}>
      <div className=" grid h-full relative flex-1">
        <ProjectImg imgSrc={project.imgSrc} darkTheme={theme.darkTheme} />
      </div>

      <div
        className={`w-full justify-center z-50 mt-10 flex-1 ${
          theme.darkTheme ? "text-[#e0d9d9]" : "text-black"
        }`}
      >
        <div className="flex flex-col gap-y-4 justify-center w-full px-5 text-center z-50">
          <h1 className="project-title font-bold  md:text-5xl text-4xl md:pb-10 pb-0">
            {project.title}
          </h1>
          <p className="project-text self-center lg:text-2xl text-xl text-center max-w-[620px]">
            {project.body}
          </p>
          <Stacks stacks={project.stacks} />
          <div className="w-full px-10 mx-auto  ">
            <Buttons project={project} />
          </div>
        </div>
      </div>
    </li>
  );
};
