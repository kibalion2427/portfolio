import React, { useState, useEffect } from "react";
import {
  Layout,
  Presentation,
  About,
  Projects,
  Contact,
  Jobs,
} from "@components";
import {workData} from "@data"
import styled from "styled-components";

import output from "../../json/data.json";

const filterData = (query) => {
  return output.data.filter(
    (item) => item.id.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
};

const aboutData = () => {
  return filterData("about");
};

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const App = () => {
  const [about, setAbout] = useState(aboutData());

  return (
    <Layout>
      <StyledMainContainer className="fillHeight">
        <Presentation />
        <About data={about} />
        <Jobs data={workData}/>
        <Projects />
        <Contact />
      </StyledMainContainer>
    </Layout>
  );
};

export default App;
