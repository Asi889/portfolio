import { NextSeo } from "next-seo";
import { seoMerge } from "../../src/services/next-seo-config";
import AboutPage from "../components/AboutPage";
import Head from "../components/Head";

const About = () => {
    const seo = seoMerge({
        title: "Asaf Marom",
        description: `Asaf Marom's Profile website - About page `,
    });
    return (
        <div id="main_container">
            <Head></Head>
            <NextSeo {...seo} />

            <AboutPage />
            {/* <h1>Test About Page</h1> */}
        </div>
    )
};

export default About;