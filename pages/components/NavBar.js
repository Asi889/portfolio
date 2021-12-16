import { useState } from "react";
import Hamburger from "./Hamburger";
import OpenNav from "./OpenNav";
// import resume from '../assets/asafmaromCV.pdf';
// import Link from 'next/link'

const NavBar = function () {
  const [isOpen, setIsOpen] = useState(false);
  const [div, setDiv] = useState(false);

  const handleHamburger = () => {
    console.log('sabaka');
    // if (!div) {

    //   const dd1= document.querySelector('#main_container').className.add("displayNone") ;
    //   setDiv(!div)
    // }
    // if (div) {
    //    const dd2= document.querySelector('#main_container').className.add("block");
    //   setDiv(!div)
    // }
    setIsOpen(!isOpen);
    // setDiv(!div)
    // console.log("shack11");
  }

  return (
    <div data-spy="scroll" data-target=".navbar" data-offset="50">
      <div className="sunny">

      </div>
      <OpenNav isOpen={isOpen} handleHamburger={handleHamburger}/>
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <a href="/" className="mario" >
          <img  src="https://res.cloudinary.com/dvdzjj8jo/image/upload/v1616273564/Retro-Mario-2-icon_jvhhym.png"></img>
          </a>
          <div id="nav-icon1" className={`ex ${isOpen ? 'open' : ""}`} onClick={handleHamburger}>
            <span></span>
            <span className="middle-span"></span>
            <span className="last-span"></span>
          </div>
          {/* </div> */}
          {/* <Link href={resume}>
          <a>About Us</a>
          <a className="navbar-brand"  download="asafmaromCV.pdf" target="_blank">Asaf Marom</a>
        </Link> */}
          <a className="navbar-brand" href="https://www.dropbox.com/s/de2lfficpqegcd2/asafmaromCV-p.pdf?dl=0" download="asafmaromCV.pdf" target="_blank">Asaf Marom</a>
          {/* <a className="navbar-brand" href="https://github.com/Asi889/gigMeApp/raw/main/asafmaromCV1-update.pdf" download="asafmaromCV1-update.pdf" target="_blank">Asaf Marom</a> */}
          {/* <img className="mario" src="https://res.cloudinary.com/dvdzjj8jo/image/upload/v1616273564/Retro-Mario-2-icon_jvhhym.png"></img> */}
        </div>
      </nav>
    </div>
  )
};
export default NavBar