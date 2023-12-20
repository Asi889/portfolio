
import ParticlesBackground from "../components/ParticlesBackground";
import { motion } from "framer-motion";
import FramerText from "../components/FramerText";
import Head from "../components/Head";
import navs from "../src/services/utils";
import ContentTyper from "../components/ContentTyper";
import { AsiGpt } from "../components/AsiGpt";
import { AsiGpttt } from "../components/AsiGpttt";
import { Context } from "./_app";
import { useContext } from "react";
import { NextSeo } from "next-seo";
import { seoMerge } from "../src/services/next-seo-config";
import Link from "next/link";

export default function Home() {
  const navLinks = navs()
  const theme = useContext(Context)
  const hiText = [
    { type: "paragraph", text: "Hi," },
  ];

  const animateText = [
    { type: "paragraph", text: "My name is Asaf Marom ( A.K.A Asi )" },
  ];
  const seo = seoMerge({
    title: "Home Page",
    description: `Asaf Marom's Profile website - home page `,
  });



  return (
    <>
      <Head></Head>
      <NextSeo {...seo} />

      <div className="relative h-full ">
        <ParticlesBackground />
        <main className="relative px-4 h-full flex flex-col">

          <header className="font-bold md:mb-10  mb-4 leading-tight text-xl md:text-4xl p-4">
            <FramerText animateText={animateText} hiText={hiText} />
          </header>

          <article className={`flex-grow h-full ${theme.darkTheme ? "text-white" : "text-black"}`}>
            <AsiGpttt />
            {/* <AsiGpt /> */}
          </article>
          <footer className=" railway text-[#d49090] flex justify-center gap-x-6 md:gap-x-10 mb-10">
            {navLinks.map((nav, index) => {
              return (
                <motion.span
                  key={nav.to}
                  className={`italic border-b-2  ${theme.darkTheme ? "text-primary" : "text-black"} hover:text-white transition-all border-white h-fit w-fit z-10 md:text-2xl text-lg`}
                  initial={{ y: '-200vh' }}
                  animate={{ y: 0 }}
                  transition={{ type: "spring", delay: 0.5 + Number(`0.${index}`), duration: 3.5 }}
                >
                  <Link href={nav.to}>
                    {nav.name}
                  </Link>
                </motion.span>
              )
            })}
          </footer>
        </main>
      </div>
    </>
  )
}
