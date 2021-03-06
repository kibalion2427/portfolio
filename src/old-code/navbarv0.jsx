import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaRegUser, FaProjectDiagram } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { MdContactPhone } from "react-icons/md";
import { GiDoctorFace } from "react-icons/gi";
import { Icon } from "@components/icons";
import styled from "styled-components";
import { theme, mixins, media } from "@styles";

const StyledLogo = styled.div`
  display: flex;
  padding-bottom: 10px;
  transition: var(--transition);
  a {
    width: 150px;
    height: 150px;
    @media (max-width: 768px) {
      width: 90px;
      height: 90px;
    }
  }
`;

const StyledIcon = styled.div`
  height: 20px;
  margin: 0 auto 10px;
  i {
    color: var(--green) !important;
  }
`;

const StyledList = styled.ul`
  transition: var(--transition);
  display: flex;
  padding-left: 0;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0px;

  li {
    /* width:70%; */
    font-size: 15px;
    text-align: center;
    list-style: none;
    display: block;
    border-right: 1px solid var(--green);
    margin-top: 10px;
    padding: 0 50px;
    @media (max-width: 1050px) {
      padding: 0 40px;
    }
    @media (max-width: 960px) {
      padding: 0 30px;
    }
    @media (max-width: 880px) {
      padding: 0 20px;
      overflow: visible;
    }
    .text-link {
      color: white;
      font-weight: 500;
    }
    .link-to {
      text-decoration: none;
      /* padding: 0px 30px; */
      display: block;
    }
    &:last-child {
      margin-top: 10px;
      border-right: none;
    }
  }
  .resume-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .resume-button {
    ${({ theme }) => theme.mixins.smallButton};
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`;
class Navbar extends Component {
  state = {
    navBarOpen: false,
    toggleActive: false,
    css: "collapse navbar-collapse",
    sections: [
      { id: 1, name: "about", text: "about", icon: <GiDoctorFace /> },
      { id: 2, name: "works", text: "experience", icon: <IoIosRocket /> },
      { id: 3, name: "projects", text: "projects", icon: <FaProjectDiagram /> },
      { id: 4, name: "contact", text: "contact", icon: <MdContactPhone /> },
    ],
    togglerIcon:
      "data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgb(204, 214, 249)' stroke-width='1' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E",
  };

  navBarHandler = () => {
    let isNavOpen = this.state.navBarOpen;
    let isToggleActive = this.state.toggleActive;
    let cssClosedToggle = "collapse navbar-collapse";
    let cssOpenedToggle = "collapse navbar-collapse show";
    isNavOpen
      ? this.setState({ navBarOpen: false, css: cssClosedToggle })
      : this.setState({ navBarOpen: true, css: cssOpenedToggle });
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
      <nav
        className="navbar navbar-expand-lg"
        style={{ verticalAlign: "middle" }}
      >
        {/* logo */}
        <StyledLogo tabindex="-1">
          {/* <a href="/" aria-label="home">
            <Icon name="Logo" onClick={this.scrolltoTopHandler} />
          </a> */}
          COVID
        </StyledLogo>
        {/* toggler button */}
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
          type="button"
          onClick={this.navBarHandler}
          style={{
            color: "white",
            borderColor: "transparent",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url("${this.state.togglerIcon}")`,
          }}
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* items */}
        <div className={this.state.css}>
          <StyledList>
            {/* Sections */}
            {this.state.sections.map((section) => {
              return (
                <li key={section.text} className="nav-item">
                  <div className="link-to">
                    <StyledIcon className="icon">
                      <i aria-hidden="true" className="fa">
                        {section.icon}
                      </i>
                    </StyledIcon>
                    <Link
                      className="nav-link text-link text-capitalize"
                      activeClass="active"
                      to={section.name}
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={1500}
                      onClick={this.navItemHandler}
                    >
                      {section.text}
                    </Link>
                  </div>
                </li>
              );
            })}
            {/* CV Button */}
            {
              <div className="resume-wrapper">
                <a href="/#" className="resume-button">
                  Curriculum
                </a>
              </div>
            }
          </StyledList>
        </div>
      </nav>
    );
  }
}

export default Navbar;
