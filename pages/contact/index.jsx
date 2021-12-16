// import AboutPage from "../components/AboutPage";
import Head from "../components/Head";
import LinkedinIcon from "../components/images/LinkedinIcon";
import GithubIcon from "../components/images/GithubIcon";
import InstagramIcon from "../components/images/InstagramIcon";
// import sdf from "../../public/images/instagramicon.svg";
import Image from 'next/image';
import ContactList from "../components/ContactList";
const Contact = () => {
    ////////////////////////////////////////////////////////////////
    return (
        <div id="main_container" className="contact-page">
            <Head></Head>
            <br />
            <br />
            <h1 className="project-title">Contact Me</h1>
            
            <div className="contact-list">
                <p className="project-text">You can find me on socail media:</p>
            
                {/* <div className="contact-link-github contact-links">
                <GithubIcon />
                <a className="contact-link" href="https://github.com/Asi889">@Asi889</a>
                </div>
                <div className="contact-link-instagram contact-links">
                <InstagramIcon />
                <a className="contact-link" href="https://www.instagram.com/p/ByvaP3zgatA/?utm_medium=copy_link">@freestyle_tlv</a>
                </div>
                <div className="contact-link-linkedin contact-links">
                <LinkedinIcon />
                <a className="contact-link" href="https://www.linkedin.com/in/asaf-marom-0581a8136/">@Asaf_Marom</a>
                </div> */}
                <ContactList />

            <p className="project-text">
                Or by mail: Asafmarom89@gmail.com</p>
            </div>

        </div>
    )
};

export default Contact;