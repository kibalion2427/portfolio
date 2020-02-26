import React, { Component, useEffect, useRef, useState } from "react";
import Title from "../globals/title/title";
import "../about/about.css";
import { srConfig, autor } from "@config";
import sr from "@utils/sr";
import styled from "styled-components";
import { theme, mixins, media, Section, Heading, Square } from "@styles";
const { colors, fontSizes, fonts } = theme;
import me from "../../data/me.jpg";
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

const StyledTest = styled.div`
  width: 40%;
  min-height: 200px;
  background-color: red;
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
  /* position: relative; */
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1);
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  /* height: 300px; */
  /* width: 100%; */
  /* padding-bottom: 100%; */
  /* background-position: center center; */
  /* background-repeat: no-repeat; */
  background-image: url(${me});
  /* background-size: cover; */
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
  const { about } = data;
  const { skills, textAbout, avatar, github } = about;
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);
  // console.log("about", about);

  return (
    <StyledContainer id="about" ref={revealContainer}>
      <Heading>About me</Heading>
      <StyledFlexContainer>
        <StyledContent>
          <div
            dangerouslySetInnerHTML={{ __html: "<p>" + textAbout + "</p>" }}
          />

          <StyledSkillsContainer>
            {skills &&
              skills.map((skill, index) => (
                <StyledSkill key={index}>{skill}</StyledSkill>
              ))}
          </StyledSkillsContainer>
        </StyledContent>
        {/* <StyledTest /> */}
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
