import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { srConfig, email } from "@config";
import { theme, Section, Heading } from "@styles";
import sr from "@utils/sr";

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
    padding-top: 15px;
    padding-right: 20px;
    color: var(--lightest-slate);
    font-weight: 600;
    line-height: 1.25;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <Heading>Contact me</Heading>

      <h2 className="title">Get In Touch</h2>

      <p>
        Wheter you have any question about my work, I'll try my best to get back
        to you!
      </p>

      <a className="email-link" href={`mailto:${email}`}>
        Send a Email!
      </a>
    </StyledContactSection>
  );
};

export default Contact;
