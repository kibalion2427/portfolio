import React, { Component, useEffect, useRef, useState } from "react";
import me from "../../data/foto4.png";
import { srConfig, autor, github } from "@config";
import sr from "@utils/sr";
import styled from "styled-components";
import { theme, mixins, media, Section, Heading, Square } from "@styles";
const { colors, fontSizes, fonts } = theme;

// CSS STYLES
const StyledContainer = styled(Section)`
  position: relative;
  background-color: #0a192f;
`;

const StyledFlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  ${media.tablet`display: block;`};
`;
const StyledContent = styled.div`
  width: 60%;
  max-width: 480px;
  /* white-space: pre-line; */
  text-align: justify;
  margin: 0px 0px;
  ${media.tablet`width:100%;`};
  a {
    ${mixins.inlineLink}
  }
`;

const StyledSkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;
`;

const StyledSkill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smish};
  color: ${colors.slate};
  &:before {
    content: "▹";
    position: absolute;
    left: 0;
    color: ${colors.green};
    font-size: ${fontSizes.sm};
    line-height: 12px;
  }
`;

const StyledPic = styled.div`
  /* display: flex; */
  position: relative;
  width: 40%;
  margin-left: 60px;

  max-width: 300px;
  ${media.tablet`margin:60px auto 0;`};
  ${media.phablet`width:70%;`};
  a {
    &:focus {
      outline: 0;
    }
  }
`;

const StyledAvatar = styled(Square)`
  background-size: 100% 100% !important;
  mix-blend-mode: multiply;
  height: 100%;
  filter: grayscale(100%) contrast(1);
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  background-image: url(${me});
`;
const StyledAvatarLink = styled.a`
  ${mixins.boxShadow};
  width: 100%;
  position: relative;
  border-radius: ${theme.borderRadius};
  background-color: ${colors.green};
  margin-left: -20px;
  &:hover,
  &:focus {
    background: transparent;
    &:after {
      top: 15px;
      left: 15px;
    }
    ${StyledAvatar} {
      filter: none;
      mix-blend-mode: normal;
    }
  }
  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${theme.borderRadius};
    transition: ${theme.transition};
  }
  &:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.navy};
    mix-blend-mode: screen;
  }
  &:after {
    border: 2px solid ${colors.green};
    top: 20px;
    left: 20px;
    z-index: -1;
  }
`;

//CSS STYLES

const About = ({ data }) => {
  const { title, contents } = data[0];

  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);
  const skills = [
    "JavaScript (ES6+)",
    "HTML & (S)CSS",
    "React",
    "Python",
    "Node.js",
    "AWS",
  ];
  return (
    <StyledContainer id="about" ref={revealContainer}>
      <Heading>About Me</Heading>
      <StyledFlexContainer>
        <StyledContent>
          <p>Hello! I'm Roger, a computer engineer based in Ecuador.</p>

          <p>
            I enjoy designing architectures about websites, applications and
            implementing them using modern frontend and backend frameworks. I
            always like to work with with UI/UX and SOLID best practices, to
            provide performant experiences.
          </p>

          <p>
            Before graduating from{" "}
            <a href="https://www.espe.edu.ec">Espe University</a>, I joined the
            engineering team at <a href="https://www.easysoft.com">Easysoft</a>{" "}
            where I work on a wide variety of interesting and meaningful
            projects about banking solutions.
          </p>

          <p>Here are a few technologies I've been working with recently:</p>
          {/* <div dangerouslySetInnerHTML={{ __html: contents }} /> */}
          <StyledSkillsContainer>
            {skills &&
              skills.map((skill, index) => (
                <StyledSkill key={index}>{skill}</StyledSkill>
              ))}
          </StyledSkillsContainer>
        </StyledContent>
        <StyledPic>
          <StyledAvatarLink href={github}>
            <StyledAvatar alt="Avatar" />
          </StyledAvatarLink>
        </StyledPic>
      </StyledFlexContainer>
    </StyledContainer>
  );
};

export default About;
