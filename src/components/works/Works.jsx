import "./work.scss";
import { useState } from "react";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      icon: "asset/smartphone.png",
      Title: "Web",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam laudantium amet, eos nulla neque ratione cum quia repellat omnis placeat.",
      img: "./asset/11.PNG",
    },
    {
      id: 2,
      icon: "asset/earth.png",
      Title: "mobile",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam laudantium amet, eos nulla neque ratione cum quia repellat omnis placeat.",
      img: "./asset/11.PNG",
    },
    {
      id: 3,
      icon: "asset/contract.png",
      Title: "Webb",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam laudantium amet, eos nulla neque ratione cum quia repellat omnis placeat.",
      img: "./asset/11.PNG",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translatex(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.Title}</h2>
                  <p>{d.desc}</p>
                  <span> Project </span>
                </div>
              </div>
              <div className="right">
                <img src="asset/11.PNG" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="asset/arrow-down-sign-to-navigate.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("right")}
      />
      <img
        src="asset/arrow-down-sign-to-navigate.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
