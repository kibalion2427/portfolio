import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { navHeight, email, cv,sections } from "@config";
import { throttle } from "@utils";
import { Icon } from "@components/icons";
import { theme, mixins, media } from "@styles";
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled.div`
  ${mixins.flexBetween}
  position:fixed;
  top: 0;
  padding: 0px 50px;
  background-color: transparent;
  z-index: 11;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  width: 100%;
  transition: var(--transition);
  color: ${colors.navy};
  height: ${(props) =>
    props.scrollDirection === "none" ? theme.navHeight : theme.navScrollHeight};
  transform: translateY(
    ${(props) =>
      props.scrollDirection === "down" ? `-${theme.navScrollHeight}` : "0"}
  );
  ${media.desktop`padding:0 40px;`}
  ${media.tablet`padding: 0 25px;`}
`;

const StyledNav = styled.div`
  ${mixins.flexBetween}
  position: relative;
  width: 100%;
  color: ${colors.lightestSlate};
  font-family: ${fonts.SFMono};
  counter-reset: item 0;
  z-index: 12;
`;

const StyledLogo = styled.div`
  /* ${mixins.flexCenter} */
  color: ${colors.green};
  margin-left: -35px !important;
  a {
    font-weight: bold;
    display: block;
    color: ${colors.dark};
    width: 100px;
    height: 100px;
  }
`;

const StyledLink = styled.div`
  display: flex;
  align-items: center;
  ${media.tablet`display: none;`};
  .resume-button {
    ${({ theme }) => theme.mixins.smallButton};
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`;

const StyledList = styled.ol`
  ${mixins.flexBetween};
  padding: 0;
  margin: 0;
  list-style: none;
`;

const StyledListItem = styled.li`
  position: relative;
  font-size: ${fontSizes.smish};
  counter-increment: item 1;
  transition: ${theme.transition};
  padding: 0px 20px;

  a {
    display: inline-block;
    padding: 0px 20px;
    font-size: 13px;
    color: var(--lightest-slate);
    font-family: ${fonts.HK};
    text-transform: uppercase;
  }
  a:hover {
    color: ${colors.celeste};
  }
  .active {
    color: ${colors.celeste};
  }
`;

const StyledHamburguer = styled.div`
  display: none;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.flexCenter};
    position: relative;
    z-index: 10;
    margin-right: -15px;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
  }
`;

const StyledhaburguerBox = styled.div`
  position: relative;
  display: inline-block;
  width: ${theme.hamburgerWidth}px;
  height: 24px;
`;

const StyledHamburguerInner = styled.div`
  background-color: ${colors.green};
  position: absolute;
  width: ${theme.hamburgerWidth}px;
  height: 2px;
  border-radius: ${theme.borderRadius};
  top: 50%;
  left: 0;
  right: 0;
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${(props) => (props.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${(props) => (props.menuOpen ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${(props) =>
      props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`}
  );
  &:before,
  &:after {
    content: "";
    display: block;
    background-color: ${colors.green};
    position: absolute;
    left: auto;
    right: 0;
    width: ${theme.hamburgerWidth}px;
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
  }
  &:before {
    width: ${(props) => (props.menuOpen ? `100%` : `120%`)};
    top: ${(props) => (props.menuOpen ? `0` : `-10px`)};
    opacity: ${(props) => (props.menuOpen ? 0 : 1)};
    transition: ${(props) =>
      props.menuOpen ? theme.hamBeforeActive : theme.hamBefore};
  }
  &:after {
    width: ${(props) => (props.menuOpen ? `100%` : `80%`)};
    bottom: ${(props) => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${(props) => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${(props) =>
      props.menuOpen ? theme.hamAfterActive : theme.hamAfter};
  }
`;

const StyledSideBar = styled.aside`
  display: none;
  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.flexCenter};
    visibility: ${(props) => (props.menuOpen ? "visible" : "hidden")};
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0;
    z-index: 9;
    box-shadow: -10px 0px 30px -15px var(--navy-shadow);
    background-color: var(--light-navy);
    transform: translateX(${(props) => (props.menuOpen ? 0 : 100)}vw);
    transition: var(--transition);
  }

  nav {
    ${({ theme }) => theme.mixins.flexBetween}
    width:100%;
    flex-direction: column;
    color: var(--lightest-slate);
    font-family: var(--font-mono);
    text-align: center;
  }
  ul {
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      position: relative;
      margin: 0 auto 50px;
      counter-increment: item 1;
      font-size: clamp(var(--fz-sm), 4vw, var(--fz-lg));
      text-transform: uppercase;
      ${media.thone`margin: 0 auto 30px;`}
    }
    a {
      ${({ theme }) => theme.mixins.link};
      width: 100%;
      padding: 3px 20px 20px;
    }
  }
  .resume-link {
    ${({ theme }) => theme.mixins.bigButton};
    padding: 18px 50px;
    margin: 10% auto 0;
    width: max-content;
  }
`;

const DELTA = 5;

class Navbar extends Component {
  state = {
    menuOpen: false,
    scrollDirection: "none",
    isHome: this.isHome(window.location.pathname),
    isMounted: !this.isHome,

    sections: [
      { id: 1, name: "about", text: "about" },
      { id: 2, name: "works", text: "experience" },
      { id: 3, name: "projects", text: "projects" },
      { id: 4, name: "contact", text: "contact" },
    ],
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState(
        { isMounted: true },
        () => {
          window.addEventListener("scroll", () =>
            throttle(this.handleScroll())
          );
          window.addEventListener("resize", () =>
            throttle(this.handleResize())
          );
        },
        100
      );
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", () => this.handleScroll());
    window.removeEventListener("resize", () => this.handleResize());
  }

  isHome(url) {
    return url === "/" ? true : false;
  }
  toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen });

  handleResize = () => {
    if (window.innerWidth > 1000 && this.state.menuOpen) {
      this.toggleMenu();
    }
  };

  handleScroll = () => {
    const { isMounted, menuOpen, scrollDirection, lastScrollTop } = this.state;
    const fromTop = window.scrollY;

    // Make sure they scroll more than DELTA
    if (!isMounted || Math.abs(lastScrollTop - fromTop) <= DELTA || menuOpen) {
      return;
    }

    if (fromTop < DELTA) {
      this.setState({ scrollDirection: "none" });
    } else if (fromTop > lastScrollTop && fromTop > navHeight) {
      if (scrollDirection !== "down") {
        this.setState({ scrollDirection: "down" });
      }
    } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
      if (scrollDirection !== "up") {
        this.setState({ scrollDirection: "up" });
      }
    }

    this.setState({ lastScrollTop: fromTop });
  };

  render() {
    const { isMounted, menuOpen, scrollDirection } = this.state;

    return (
      <StyledContainer scrollDirection={scrollDirection}>
        <Helmet>
          <body className={menuOpen ? "blur" : ""} />
        </Helmet>
        <StyledNav>
          {/* LOGO */}
          <StyledLogo tabindex="-1">
            <a href="/" aria-label="home">
              <Icon name="Logo" onClick={this.scrolltoTopHandler} />
            </a>
            {/* covid */}
          </StyledLogo>

          {/* TOGGLE BUTTON */}

          <StyledHamburguer onClick={this.toggleMenu}>
            <StyledhaburguerBox>
              <StyledHamburguerInner menuOpen={menuOpen} />
            </StyledhaburguerBox>
          </StyledHamburguer>
          {/* SIDE-MENU */}
          <StyledSideBar menuOpen={this.state.menuOpen} aria-hidden={!menuOpen}>
            <nav>
              {sections && (
                <ul>
                  {sections.map(({ url, name }, index) => (
                    <li key={index}>
                      <Link
                        activeClass="active"
                        to={url}
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={1500}
                        onClick={this.toggleMenu}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-link"
              >
                Curriculum
              </a>
            </nav>
          </StyledSideBar>

          {/* LINKS */}

          <StyledLink>
            <StyledList>
              {sections.map(({ url, name }, index) => {
                const isHome = this.isHome(url);
                return (
                  <StyledListItem key={index}>
                    <Link
                      activeClass="active"
                      to={name}
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={1500}
                    >
                      {name}
                    </Link>
                  </StyledListItem>
                );
              })}
            </StyledList>

            <div className="resume-wrapper">
              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-button"
              >
                Curriculum
              </a>
            </div>
          </StyledLink>
        </StyledNav>
      </StyledContainer>
    );
  }
}

export default Navbar;
