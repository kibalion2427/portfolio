import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../../images/azure.svg";
import { FaRegUser, FaProjectDiagram } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { MdContactPhone } from "react-icons/md";
import { GiDoctorFace } from "react-icons/gi";

class Navbar extends Component {
  state = {
    navBarOpen: false,
    toggleActive: false,
    css: "collapse navbar-collapse",
    sections: [
      { id: 1, name: "about", text: "about", icon: <GiDoctorFace /> },
      { id: 2, name: "works", text: "experience", icon: <IoIosRocket /> },
      { id: 3, name: "projects", text: "projects", icon: <FaProjectDiagram /> },
      { id: 4, name: "contact", text: "contact", icon: <MdContactPhone /> }
    ]
  };

  navBarHandler = () => {
    let isNavOpen = this.state.navBarOpen;
    let isToggleActive = this.state.toggleActive;
    let cssClosedToggle = "collapse navbar-collapse";
    let cssOpenedToggle = "collapse navbar-collapse show";
    // console.log(isOpen, this.state.css);
    // this.scrolltoTopHandler();
    isNavOpen
      ? this.setState({ navBarOpen: false, css: cssClosedToggle })
      : this.setState({ navBarOpen: true, css: cssOpenedToggle });
    // console.log(isOpen, this.state.css);
  };

  navItemHandler = () => {
    let isNavOpen = this.state.navBarOpen;
    let cssClosedToggle = "collapse navbar-collapse";
    if (isNavOpen) {
      this.setState({ navBarOpen: false, css: cssClosedToggle });
    }
  };

  // }
  //scrolltoTopHandler
  scrolltoTopHandler = () => scroll.scrollToTop();

  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-sm navbar-light bg-light">
        {/* logo */}
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            className="nav-logo"
            alt="logo"
            onClick={this.scrolltoTopHandler}
          ></img>
        </a>
        {/* toggler button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navBarHandler}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* items */}

        <div className={this.state.css}>
          <ul className="navbar-nav ml-auto">
            {this.state.sections.map(section => {
              return (
                <li key={section.text} className="nav-item">
                  <span>{section.icon}</span>
                  <Link
                    className="nav-link text-capitalize"
                    activeClass="active"
                    to={section.name}
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    onClick={this.navItemHandler}
                  >
                    {section.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
