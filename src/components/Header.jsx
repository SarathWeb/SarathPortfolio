import "../components/Header.css";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRef } from "react";

function Header() {

  const ref = useRef(null);

  console.log(ref);

  function navBarOpen () {
    ref.current.classList.toggle('slide__active')
    
  }

  return (
    <div>
      <header className="desktop-header">
        <div className="nav__section row__flex">
          <div className="row__flex logo__container">
            <span className="rect__blue"></span>
            <h1>Sarath</h1>
            <p>
              <span className="slash__bar">/</span> Frontend Developer
            </p>
          </div>
          <nav>
            <ul className="nav__bar">
              <li>
                <NavLink
                  to="/about" 
                  className={({ isActive }) => (isActive ? "link__active" : "")}
                >
                  About me
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/resume"
                  className={({ isActive }) => (isActive ? "link__active" : "")}
                >
                  resume
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/project"
                  className={({ isActive }) => (isActive ? "link__active" : "")}
                >
                  projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "link__active" : "")}
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* mobile header */}
 
      <div className="mobile__hide">
        <header className="mobile__container">
          <div className="mobile__header">
            <div className="row__flex logo__container">
              <div className="logo__flex">
                <span className="rect__blue"></span>
                <h1>Sarath</h1>
              </div>
              <p> Frontend Developer</p>
            </div>
            <div>
              <Icon icon="icon-park:hamburger-button" className="menu__hamber" onClick={navBarOpen} />
            </div>
          </div>
        </header>
        <div className="nav__bar_slide" ref={ref}>
    <nav>
          <ul className="nav__bar">
            <li>
              <NavLink to="/about" onClick={navBarOpen} className={({isActive}) => isActive ? 'link__active' : ""}>About me</NavLink>
            </li>
            <li>
              <NavLink to="/resume" onClick={navBarOpen} className={({isActive}) => isActive ? 'link__active' : ""}>resume</NavLink>
            </li>
            <li>
              <NavLink to="/project" onClick={navBarOpen} className={({isActive}) => isActive ? 'link__active' : ""}>projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={navBarOpen} className={({isActive}) => isActive ? 'link__active' : ""}>contact</NavLink>
            </li>
          </ul>
          <div className="close__menu" onClick={navBarOpen}><Icon icon="akar-icons:cross" /></div>
        </nav>
    </div>
    </div>
    </div>
  );
}
export default Header;
