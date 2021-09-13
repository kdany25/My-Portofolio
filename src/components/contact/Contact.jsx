import{useState} from "react"
import './contact.scss'

export default function Contact (){
const [message , setMessage] = useState(false)

    const handlesubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className='contact' id="contact">
            <div className="left">
             <img src="asset/handshaking.PNG" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handlesubmit}>
                     <input type="text" placeholder="Email"/>
                     <textarea placeholder="Message"></textarea> 
                     <button type="submit">Send</button>

                     {message && <span> Thanks , I ll reply Asap</span>} 

                </form>

            </div>

        </div>
    )
}