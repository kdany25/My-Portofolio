import "./portofolio.scss";
import { useState , useEffect } from "react";

import PortofolioList from "../PortofolioList/PortofolioList";

import {featuredPortofolio ,webPortofolio , mobilePortofolio , designPortofolio} from "../../data"


export default function Portofolio() {
  const [selected, setSelected] = useState("featured");
  const [data , setData] =useState([])
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
   
  ];

  useEffect(() =>{
    switch(selected){
      case "featured" : 
      setData (featuredPortofolio)
      break;
      case "Web" : 
      setData (webPortofolio)
      break;
      case "mobile" : 
      setData (mobilePortofolio)
      break;
      case "design" : 
      setData (designPortofolio)
      break;
      default:
        setData (featuredPortofolio)


    }

  },[selected])
  return (
    <div className="portofolio" id="Portofolio">
      <h1>Portofolio</h1>
      <ul>
        {list.map((item) => (
          <PortofolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id = {item.id}
          />
        ))}
      </ul>
      <div className="container">
   {data.map(d=>
        <div className="item">
          <img src={d.img} alt="" />
          <h3>{d.title}</h3>
        </div>
        )}
        
        
      </div>
    </div>
  );
}
