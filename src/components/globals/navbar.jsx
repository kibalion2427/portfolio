import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../../images/logo.svg";

class Navbar extends Component {
  state = {
    navBarOpen: false,
    css: "collapse navbar-collapse show",
    sections: [
      { id: 1, name: "about", text: "about" },
      { id: 2, name: "works", text: "experience" },
      { id: 3, name: "projects", text: "projects" },
      { id: 4, name: "contact", text: "contact" }
    ]
  };

  navBarHandler = () => {
    let isOpen = this.state.navBarOpen;
    let cssClosedToggle = "collapse navbar-collapse";
    let cssOpenedToggle = "collapse navbar-collapse show";
    isOpen
      ? this.setState({ navBarOpen: false, css: cssOpenedToggle })
      : this.setState({ navBarOpen: true, css: cssClosedToggle });
  };

  // }
  //scrolltoTopHandler
  scrolltoTopHandler = () => scroll.scrollToTop();

  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
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
                  <Link
                    className="nav-link text-capitalize"
                    activeClass="active"
                    to={section.name}
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={500}
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
