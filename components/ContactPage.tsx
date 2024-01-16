import React, { useContext } from "react";
// import ContactMap from "./ContactMap";
import Map from "./Map";
import ContactList from "./contact/ContactList";
import UseAnimatedText from "./UseAnimatedText";
import ParticlesBackground from "./ParticlesBackground";
import FramerText from "./FramerText";
import { Context } from "../pages/_app";
function ContactPage(props) {
  const theme = useContext(Context);

  const animateText = [{ type: "paragraph", text: "Contact" }];
  const bodyText = `I’d love to help you with your next project, website, or landing page - whatever you're looking for. I'd be happy to work with you on a full-time or freelance basis. Get in touch!`;
  return (
    <div
      className={`grid lg:flex ccc h-auto lg:h-full  bg-[#333232] railway relative z-50 ${
        theme.darkTheme ? "text-white" : "text-black"
      }`}
    >
      <ParticlesBackground />
      <div className="grid z-50 pl-6">
        <div className="md:text-[40px] text-[30px] motion-text font-bold">
          <FramerText animateText={animateText} />
        </div>
        <div
          className={`mt-2 lg:mt-6 max-w-[620px] ${
            theme.darkTheme ? "" : "font-extrabold"
          } `}
        >
          <UseAnimatedText text={bodyText} />
        </div>
        <div className="md:pt-8 pt-4 grid">
          <div className="shrink  grid content-evenly">
            <ContactList />
          </div>
          <div className="text-white h-full z-50 pt-6 lg:hidden block">
            <p className="project-text  ">Or by mail: Asafmarom89@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="w-full  222 flex flex-1  items-center justify-center z-50 h-full shrink pt-6 md:pt-10 px-6 pb-10">
        <Map />
      </div>
    </div>
  );
}

export default ContactPage;
