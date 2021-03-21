

const NavBar = function () {
  return (
    <body data-spy="scroll" data-target=".navbar" data-offset="50">
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="https://github.com/Asi889/gigMeApp/raw/47db7a8d85caa01ab30758b7fc5d7276f39d75bb/AsafMaromCV-_wqt2sk.pdf" download="AsafMaromCV.pdf">Asaf Marom</a>
            <img className="mario" src="https://res.cloudinary.com/dvdzjj8jo/image/upload/v1616273564/Retro-Mario-2-icon_jvhhym.png"></img>
          </div>
          <div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li><a href="#sec1">Welcome</a></li>
                <li><a href="#sec2">About</a></li>
                <li><a href="#sec3">projects</a></li>
                <li><a href="#sec4">end</a></li>
                
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </body>

  )
};
export default NavBar