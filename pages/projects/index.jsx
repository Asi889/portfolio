import ProjectPage from "../components/ProjectPage";
import Head from "../components/Head";
import { useState } from "react";
import { seoMerge } from "../../src/services/next-seo-config";
import { NextSeo } from "next-seo";

const Projects = () => {

    const seo = seoMerge({
        title: "Asaf Marom",
        description: `Asaf Marom's Profile website - Project's page `,
    });

    return (
        <div id="main_container">
            <Head></Head>
            <ProjectPage />
            <NextSeo {...seo} />
            {/* <h1>Test About Page</h1> */}
        </div>
    )
};

export default Projects;