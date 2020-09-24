import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { srConfig } from "@config";
import sr from "@utils/sr";
import styled from "styled-components";
import { Section, Heading, media, mixins, theme } from "@styles";
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  position: relative;
  background-color: #0a192f;
  max-width: 700px;
`;
const StyledTabContainer = styled.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  ${media.thone`
  display:block;
  `};
`;
const StyledTabList = styled.ul`
  display: block;
  position: relative;
  width: max-content;
  z-index: 3;
  padding: 0;
  margin: 0;
  list-style: none;
  ${media.thone`
  display:flex;
  overflow-x: scroll;
  margin-left: -50px;
  margin-bottom: 30px;
  width: calc(100% + 100px);
  `};
  ${media.phablet`
    width: calc(100% + 50px);
    margin-left: -25px;
  `};
  li {
    &:first-of-type {
      ${media.thone`
        margin-left: 50px;
      `};
      ${media.phablet`
        margin-left: 25px;
      `};
    }
    &:last-of-type {
      ${media.thone`
        padding-right: 50px;
      `};
      ${media.phablet`
        padding-right: 25px;
      `};
    }
  }
`;

const StyledTabButton = styled.button`
  ${mixins.links}
  display:flex;
  align-items: center;
  width: 100%;
  background-color: transparent;
  height: ${theme.tabHeight}px;
  padding: 0 20px 2px;
  transition: ${theme.transition};
  border-left: 2px solid ${colors.darkGrey};
  text-align: left;
  white-space: nowrap;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smish};
  color: ${props => (props.isActive ? colors.green : colors.lightGrey)};
  ${media.tablet`padding: 0 15px 2px;`};
  ${media.thone`
    ${mixins.flexCenter};
    padding: 0 15px;
    text-align: center;
    border-left: 0;
    border-bottom: 2px solid ${colors.darkGrey};
    min-width: 120px;
  `};
  &:hover,
  &:focus {
    background-color: ${colors.lightNavy};
  }
`;

const StyledHighLight = styled.span`
  display: block;
  background: ${colors.green};
  height: ${theme.tabHeight}px;
  border-radius: ${theme.borderRadius};
  width: 2px;
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(
    ${props =>
      props.activeTabId > 0 ? props.activeTabId * theme.tabHeight : 0}px
  );
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;
  ${media.thone`
  width:100%;
  max-width: ${theme.tabWidth}px;
  height:2px;
  margin-left:50px;
  top:auto;
  bottom:0;
  transform: translateX(
      ${props =>
        props.activeTabId > 0 ? props.activeTabId * theme.tabWidth : 0}px
    );
  `};
  ${media.phablet`
    margin-left: 25px;
  `};
`;

const StyledTabContent = styled.div`
  width: 100%;
  height: auto;
  padding-top: 12px;
  padding-left: 30px;
  align-items: justify;
  ${media.tablet`padding-left: 20px;`};
  ${media.thone`padding-left: 0;`};
  ul {
    ${mixins.fancyList};
  }
  a {
    ${mixins.inlineLink};
  }
`;

const StyledJobTitle = styled.div`
  color: ${colors.lightestSlate};
  font-size: ${fontSizes.xxl};
  font-weight: 500;
  margin-bottom: 5px;
`;

const StyledCompany = styled.span`
  color: ${colors.green};
`;

const StyledJobRange = styled.h5`
  color: ${colors.lightestSlate};
  font-weight: normal;
  font-size: ${fontSizes.smish};
  font-family: ${fontSizes.SFMono};
  letter-spacing: 0.05em;
  margin-bottom: 30px;
`;
const StyledJobDetails = styled.ul``;
const Work = ({ data }) => {
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  const { work } = data;
  const tabs = useRef([]);

  const [activeTabId, setActiveTabId] = useState(0);

  const getActivitiesFromHtml = (html, character) => {
    return html.toString().split(character);
  };
  return (
    <StyledContainer id="works" ref={revealContainer}>
      <Heading>Where I&apos;ve worked</Heading>
      <StyledTabContainer>
        <StyledTabList role="tablist" aria-label="Job List">
          {work &&
            work.map((item, index) => {
              const { company } = item.details;
              // console.log("company", company);
              // console.log("company", company, "index", index);
              return (
                <li key={index}>
                  <StyledTabButton
                    id={index}
                    role="tab"
                    ref={el => (tabs.current[index] = el)}
                    isActive={activeTabId === index}
                    tabIndex={activeTabId === index ? "0" : "-1"}
                    aria-selected={activeTabId === index ? true : false}
                    aria-controls={`panel-${index}`}
                    onClick={() => setActiveTabId(index)}
                  >
                    <span>{company}</span>
                  </StyledTabButton>
                </li>
              );
            })}
          <StyledHighLight activeTabId={activeTabId} />
        </StyledTabList>

        {work &&
          work.map((item, index) => {
            const { company, title, range, url, html } = item.details;
            const activities = getActivitiesFromHtml(html, "+");
            return (
              <StyledTabContent
                key={index}
                isActive={activeTabId === index}
                id={`panel-${index}`}
                role="tabpanel"
                aria-labelledby={`tab-${index}`}
                tabIndex={activeTabId === index ? "0" : "-1"}
                hidden={activeTabId !== index}
              >
                <StyledJobTitle>
                  <span>{title}</span>
                  <StyledCompany>
                    <span>&nbsp;@&nbsp;</span>
                    <a
                      href={url}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      {company}
                    </a>
                  </StyledCompany>
                </StyledJobTitle>
                <StyledJobRange>
                  <span>{range}</span>
                </StyledJobRange>

                <StyledJobDetails>
                  {activities.map((activity, index) => {
                    return (
                      <li key={index}>
                        <div dangerouslySetInnerHTML={{ __html: activity }} />
                      </li>
                    );
                  })}
                </StyledJobDetails>
              </StyledTabContent>
            );
          })}
      </StyledTabContainer>
    </StyledContainer>
  );
};

Work.propTypes = {
  data: PropTypes.object.isRequired
};

export default Work;
