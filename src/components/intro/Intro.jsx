import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef, { showCursor: false, strings: ["Designer!", "developer"] });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgcontainer">
          <img src="asset/capture.PNG" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2> hi I' am</h2>
          <h1>Kabalisa Dany</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portofolio">
          <img src="asset/arrow-down-sign-to-navigate.png" alt="" />
        </a>
      </div>
    </div>
  );
}
