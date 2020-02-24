import React, { useEffect, useRef, useState } from "react";
import { srConfig } from "@config";
import sr from "@utils/sr";
import axios from "axios";
import { useFetch } from "../../utils/use-http";

const Work = () => {
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  // const [data, isLoading, isError] = useFetch(
  //   // "https://testapi.io/api/roger/portfolio?token=d397f227f573acb0d038c285bd74ba9bb73f69e4"
  //   "http://hn.algolia.com/api/v1/search?query=react"
  // );

  // const [h, setH] = useState({ about: { skills: [] } });
  // useEffect(() => {
  //   let ignore = false;

  //   async function fetchData() {
  //     const result = await axios(
  //       "https://testapi.io/api/roger/portfolio?token=d397f227f573acb0d038c285bd74ba9bb73f69e4"
  //     );
  //     if (!ignore) setH(result.data);
  //   }

  //   fetchData();
  //   return () => {
  //     ignore = true;
  //   };
  // }, []);

  return (
    <div className="work-section" id="works" ref={revealContainer}>
      <div>
        <ul>
          {console.log("h", h)}
          {console.log("numbers", numbers)}
          {h.about.skills.map((item, index) => (
            <li key={index}>
              {item}
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
("use strict");
export default Work;
