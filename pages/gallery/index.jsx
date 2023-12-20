/* eslint-disable @next/next/no-img-element */
import { NextSeo } from "next-seo";
import { seoMerge } from "../../src/services/next-seo-config";
import FramerText from "../../components/FramerText";
import ParticlesBackground from "../../components/ParticlesBackground";
import React, { useContext } from "react";
import { Context } from "../_app";
import Head from "next/head";
import gallaryData from "../../src/services/gallaryData";

const Gallery = () => {
  const seo = seoMerge({
    title: "Asaf Marom",
    description: `Asaf Marom's Profile website - Gallery page `,
  });
  const theme = useContext(Context);

  const animateText = [{ type: "paragraph", text: "Gallery" }];
  const gallery = gallaryData();

  return (
    <div
      id="main_container "
      className=" h-auto relative  railway lg:pl-[100px] pl-0 lg:mt-0  overflow-hidden pb-10"
    >
      <Head></Head>
      <NextSeo {...seo} />
      <ParticlesBackground />
      <div className="grid relative  max-w-[1550px] px-6 mx-auto z-50 ">
        <div className="grid mt-10 z-50 max-w-[1200px] justify-self-center text-[#f3efef]">
          <h1 className="lg:text-[40px] text-[30px]  text-primary motion-text font-bold">
            <FramerText animateText={animateText} />
          </h1>
          <h1
            className={`lg:text-[22px] text-[20px] font-medium  mt-4 ${
              theme.darkTheme ? "text-[#e0d9d9]" : "text-black"
            }`}
          >{` A fun fact about me is that I'm a self-taught freestyle frisbee pro. On the weekend, you'll find me playing on the beach.`}</h1>
          <p
            className={`gallery-sub-text lg:text-[22px] text-[20px] pt-4 ${
              theme.darkTheme ? "text-[#e0d9d9]" : "text-black"
            }`}
          >
            {`See more of my photos and videos on`}{" "}
            <a
              className="text-[#47ebde] lg:text-[24px] text-[22px] font-bold"
              href="https://www.instagram.com/p/ByvaP3zgatA/?utm_medium=copy_link"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>{" "}
            or{" "}
            <a
              className="text-[#47ebde] lg:text-[24px] text-[22px] font-bold"
              href="https://vm.tiktok.com/ZSefoN5AC/"
              target="_blank"
              rel="noreferrer"
            >
              TikTok
            </a>
          </p>
        </div>
        <div className="img-wrapper flex flex-wrap gap-x-6 gap-y-6 mt-10 z-50 justify-center">
          {gallery.map((item, index) => {
            if (item.type === "img")
              return (
                <img
                  key={index}
                  className="video-img md:w-[400px] w-[200px] md:h-[400px] h-[200px] object-cover"
                  src={item.source}
                  alt=""
                />
              );
            if (item.type === "video")
              return (
                <video
                  key={index}
                  className="video-img md:w-[400px] w-[200px] md:h-[400px] h-[200px] object-cover"
                  controls
                >
                  <source
                    className="w-[450px] h-[450px] object-cover"
                    src={item.source}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              );
          })}
        </div>
      </div>
    </div>
  );
};
export default Gallery;
