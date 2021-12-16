import GithubIcon from "./images/GithubIcon";
import InstagramIcon from "./images/InstagramIcon";
import LinkedinIcon from "./images/LinkedinIcon";

const ContactList = () => {
    return (
        <>
            <div className="contact-link-github contact-links">
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
            </div>
        </>
    )
};
export default ContactList;