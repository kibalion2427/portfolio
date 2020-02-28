import React, { Component } from "react";
import styled from "styled-components";
import { theme, Section, Heading } from "@styles";
const { colors } = theme;

const StyledContainer = styled(Section)`
  /* background-color: ${colors.blue}; */
  /* width: 100%; */
  position:relative;
`;

const Project = () => {
  return (
    <StyledContainer>
      <Heading>Some things I&apos;ve build</Heading>
    </StyledContainer>
  );
};

export default Project;
