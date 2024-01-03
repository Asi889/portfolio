import React, { useContext } from "react";
import GithubIcon from "../images/GithubIcon";
import InstagramIcon from "../images/InstagramIcon";
import LinkedinIcon from "../images/LinkedinIcon";
import { Context } from "../../pages/_app";

function ContactList() {
  const theme = useContext(Context);

  const text =
    "I’m interested in freelance opportunities – large to small projects. However, if you have other requests or questions, don’t hesitate to ask me.".split(
      " "
    );

  return (
    <div className="">
      <div className={`${theme.darkTheme ? "" : "font-extrabold"}`}>
        <div className="w-fit lg:h-14 h-8 flex  gap-x-2 items-center">
          <GithubIcon />
          <a
            className="contact-link lg:text-base text-xs"
            href="https://github.com/Asi889"
          >
            @Asi889
          </a>
        </div>
        <div className="w-fit lg:h-14 h-8 flex gap-x-2 items-center">
          <InstagramIcon />
          <a
            className="contact-link lg:text-base text-xs"
            href="https://www.instagram.com/p/ByvaP3zgatA/?utm_medium=copy_link"
          >
            @freestyle_tlv
          </a>
        </div>
        <div className="w-fit lg:h-14 items-center h-8 flex gap-x-2">
          {/* <div className="h-12 w-12"> */}
          <LinkedinIcon />
          {/* </div> */}
          <a
            className="contact-link lg:text-base text-xs"
            href="https://www.linkedin.com/in/asaf-marom-0581a8136/"
          >
            @Asaf_Marom
          </a>
        </div>
      </div>
      <div className="hidden lg:block w-fit pt-3">
        <p className="project-text contact-link">
          Or by mail: Asafmarom89@gmail.com
        </p>
      </div>
    </div>
  );
}

export default ContactList;
