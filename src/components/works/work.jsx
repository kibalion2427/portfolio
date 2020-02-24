import React, { useEffect, useRef, useState } from "react";
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

const Work = ({ data }) => {
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  const { work } = data;
  const tabs = useRef([]);

  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <StyledContainer id="works" ref={revealContainer}>
      <Heading>Where I've worked</Heading>
      <StyledTabContainer>
        <StyledTabList role="tablist" aria-label="Job List">
          {/* {workData.map(return <li> <StyledTabButton/></li>)} */}
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
        </StyledTabList>

        {/* <StledTabContent>
          <StyledJobTitle></StyledJobTitle>
          <StyledJobDate></StyledJobDate>
          <div dangerouslySetInnerHTML={{ __html: data }} />
        </StledTabContent> */}
      </StyledTabContainer>
    </StyledContainer>
  );
};

// Work.propTypes = {
//   data: PropTypes.array.isRequired
// };

export default Work;
