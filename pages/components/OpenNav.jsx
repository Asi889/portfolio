import Link from 'next/link'
import ContactList from './ContactList';
import GithubIcon from './images/GithubIcon';
import InstagramIcon from './images/InstagramIcon';
import LinkedinIcon from './images/LinkedinIcon';
import WhtieLinkedin from './images/WhtieLinkedin';

const OpenNav = (props) => {
    const { isOpen, handleHamburger } = props;
    const navs = [
        { to: "/projects/", name: "Projects" },
        { to: "/about/", name: "About" },
        { to: "/contact/", name: "Contact" },
        { to: "/gallery/", name: "Gallery" },
    ]
    const handleOpen = () => {

    }
    return (
        <div className={`open-nav ${isOpen ? 'open-nav11' : ""}`}>
            <div className="nav-links-wrapper">
                {navs.map((nav) => {
                    return (
                        <Link href={nav.to} key={nav.to} >
                            <a className="nav-link" onClick={handleHamburger}>{nav.name}</a>
                        </Link>
                    )
                })}
            </div>
            {}
            <div className={`open-nav-link-wrapper ${isOpen ? "" : "hide"}`}>
                <div className="contact-links">
                    <GithubIcon />
                    <a id="open-small-links" className="contact-link" href="https://github.com/Asi889">@Asi889</a>
                </div>
                <div className="contact-links">
                    <InstagramIcon />
                    <a id="open-small-links" className="contact-link" href="https://www.instagram.com/p/ByvaP3zgatA/?utm_medium=copy_link">@freestyle_tlv</a>
                </div>
                <div className="contact-links">
                    <WhtieLinkedin />
                    <a id="open-small-links" className="contact-link" href="https://www.linkedin.com/in/asaf-marom-0581a8136/">@Asaf_Marom</a>
                </div>
            </div>
        </div>

    )
};

export default OpenNav;