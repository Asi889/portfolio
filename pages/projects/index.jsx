import Head from "../../components/Head";
<<<<<<< HEAD
import ProjectsList from "../../components/ProjectsList";
=======
import MyParallax from "../../components/MyParallax";
>>>>>>> origin/main
import ParticlesBackground from "../../components/ParticlesBackground";
import FramerText from "../../components/FramerText";
import { NextSeo } from "next-seo";
import { seoMerge } from "../../src/services/next-seo-config";

const Projects = () => {
<<<<<<< HEAD
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
                className={`text-primary pb-10 relative railway  pt-10  w-full  text-center z-40 lg:text-[40px] text-[30px]  font-bold motion-text`}
            >
                <FramerText animateText={animateText} />
            </div>
            <ProjectsList />
        </div>
    );
};

export default Projects;
=======
    const seo = seoMerge({
        title: "Asaf Marom",
        description: `Asaf Marom's Profile website - Project's page `,
    });
    const animateText = [
        { type: "paragraph", text: "My projects" },
    ];
    return (
        <div id="" className="relative overflow-y-auto h-full">
            <Head></Head>
            <NextSeo {...seo} />
            <ParticlesBackground />
            <div className={`text-[#47ebde] pb-10 relative railway  pt-10  w-full  text-center z-[999999999999] lg:text-[40px] text-[30px]  font-bold motion-text`}>
                <FramerText animateText={animateText} />
            </div>
            <MyParallax />
        </div>
    )
};

export default Projects;
>>>>>>> origin/main
