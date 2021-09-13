
import "./portofolioList.scss"

export default function PortofolioList({id,title ,active ,setSelected}) {
    return (
        <li className={active ? "portofolio active" : "portofolioList"} onClick= {()=>setSelected(id)}>
           {title}

        </li>
    )
}
