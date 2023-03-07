import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <nav
          style={{ backgroundColor: "black" }}
          className="navbar nav1"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a className="navbar-item" href="#home">
              <img src="Images/logox.png" className="logo" />
            </a>
            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <a className="navbar-end"></a>
            <nav>
              <a className="navbar-end"></a>
              <ul id="sidemenu">
                <a className="navbar-end"></a>
                <li>
                  <a className="navbar-end"></a>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
              {/* <i class="fa-solid fa-bars"onClick="openmenu()"></i> */}
            </nav>
          </div>
        </nav>
      </div>
      <div className="header-text">
        <h4 className="title is-4 hero-text1">
          UI/UX Designer | Web/App Developer
        </h4>
        <h3 className="title is-3" style={{ fontSize: "45px" }}>
          Hi, I'm
          <span>Ravindu Nanayakkara</span>
          <br />
          from Sri Lanka
        </h3>
      </div>
    </div>
  );
}

export default Header;
