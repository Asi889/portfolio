import Head from "../components/Head";
import ContactList from "../components/ContactList";
import { NextSeo } from "next-seo";
import { seoMerge } from "../../src/services/next-seo-config";


const Contact = () => {
    const seo = seoMerge({
        title: "Asaf Marom",
        description: `Asaf Marom's Profile website - Contact page `,
    });
    return (
        <div id="main_container" className="contact-page">
            <Head></Head>
            < NextSeo {...seo} />
            <br />
            <br />
            <h1 className="project-title">Contact Me</h1>

            <div className="contact-list">
                <p className="project-text">You can find me on socail media:</p>


                <ContactList />

                <p className="project-text">
                    Or by mail: Asafmarom89@gmail.com</p>
            </div>

        </div>
    )
};

export default Contact;