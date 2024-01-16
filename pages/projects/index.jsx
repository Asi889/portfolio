import Head from "../../components/Head";
import ProjectsList from "../../components/ProjectsList";
import ParticlesBackground from "../../components/ParticlesBackground";
import FramerText from "../../components/FramerText";
import { NextSeo } from "next-seo";
import { seoMerge } from "../../src/services/next-seo-config";

const Projects = () => {
  const seo = seoMerge({
    title: "Asaf Marom",
    description: `Asaf Marom's Profile website - Project's page `,
  });
  const animateText = [{ type: "paragraph", text: "My Websites Masterpieces" }];
  return (
    <div id="" className="relative overflow-y-auto h-full">
      <Head></Head>
      <NextSeo {...seo} />
      <ParticlesBackground />
      <div
        className={`text-primary pb-10 relative railway  pt-10  w-full  text-center z-40 lg:text-[40px] text-[30px] flex justify-center lg:justify-start font-bold motion-text`}
      >
        <FramerText animateText={animateText} />
      </div>
      <ProjectsList />
    </div>
  );
};

export default Projects;
