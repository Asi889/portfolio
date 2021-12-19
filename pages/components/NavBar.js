import { useState } from "react";
import Hamburger from "./Hamburger";
import OpenNav from "./OpenNav";
import Link from 'next/link'

const NavBar = function () {
  const [isOpen, setIsOpen] = useState(false);
  const [div, setDiv] = useState(false);
  
  const handleHamburger = () => {

    setIsOpen(!isOpen);

  }

  return (
    <div data-spy="scroll" data-target=".navbar" data-offset="50">
      <div className="sunny">

      </div>
      <OpenNav isOpen={isOpen} handleHamburger={handleHamburger} />
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <a href="/" className="mario" >
            <img src="https://res.cloudinary.com/dvdzjj8jo/image/upload/v1639907803/Asaf_up6v4r.png"></img>
            {/* <img src="https://res.cloudinary.com/dvdzjj8jo/image/upload/v1616273564/Retro-Mario-2-icon_jvhhym.png"></img> */}
          </a>
          <div id="nav-icon1" className={`ex ${isOpen ? 'open' : ""}`} onClick={handleHamburger}>
            <span></span>
            <span className="middle-span"></span>
            <span className="last-span"></span>
          </div>
          <Link href="/assets/asafmaromcv.pdf" >
          
          <a className="navbar-brand"  download target="_blank" rel="noopener">Asaf Marom</a>
        </Link>
          {/* <a className="navbar-brand" href="https://www.dropbox.com/s/de2lfficpqegcd2/asafmaromCV-p.pdf?dl=0" download="asafmaromCV.pdf" target="_blank">Asaf Marom</a> */}
        </div>
      </nav>
    </div>
  )
};
export default NavBar