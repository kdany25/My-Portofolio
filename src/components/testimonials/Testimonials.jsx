import './testimonials.scss'

export default  function Testimonials (){
    const data = [
        {
           id : 1 ,
           Name : "kabalisa Dany",
           title: " CEO of Albi",
           img : "asset/man.PNG" ,
           icon: "asset/twitter.png" ,
           desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id distinctio beatae nesciunt saepe esse nemo quas vel numquam unde ullam." ,
        },
        {
            id : 2 ,
            Name : "karekezi Ibra",
            title: " CEO of bralirwa",
            img : "asset/man.PNG" ,
            icon: "asset/twitter.png" ,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id distinctio beatae nesciunt saepe esse nemo quas vel numquam unde ullam." ,
            featured : true
        },
         {
            id : 3 ,
            Name : "kayitesi Francine",
            title: " CEO of Inyange",
            img : "asset/man.PNG" ,
            icon: "asset/youtube.png" ,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id distinctio beatae nesciunt saepe esse nemo quas vel numquam unde ullam." ,
         }
    ];
    return (
        <div className="testimonials"  id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                { data.map((d)=>(

                
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src="asset/right-arrow.png" className="left" alt=""/>
                        <img src={d.img} className="user" alt=""/>
                        <img src={d.icon} className="right" alt=""/>

                    </div>
                    <div className="center">{d.desc} </div>
                    <div className="bottom">
                        <h3>{d.Name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
                ))}
            </div>


        </div>
    )
}