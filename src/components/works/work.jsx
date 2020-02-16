import React, { useEffect, useRef } from "react";
import { srConfig } from "@config";
import sr from "@utils/sr";

const Work = () => {
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);
  return (
    <div className="work-section" id="works" ref={revealContainer}>
      <div>
        <ul>
          <li>About me</li>
          <li>About me</li>
          <li>About me</li>
          <li>About me</li>
          <li>About me</li>
        </ul>
      </div>
    </div>
  );
};

export default Work;
