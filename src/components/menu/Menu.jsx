import './menu.scss'

export default function Menu( {menuOpen , setMenuOpen}) {
    return (
        <div className={" menu " + (menuOpen && " active ")}>
            {/* // <div className="menu"> */}

            <ul>
                <li onClick={() => setMenuOpen (false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() => setMenuOpen (false)}>
                    <a href="#Portofolio">Portofolio</a>
                </li>
                <li onClick={() => setMenuOpen (false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={() => setMenuOpen (false)}>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick={() => setMenuOpen (false)}>
                    <a href="#contact">contact</a>
                </li>
            </ul>
            
        </div>
    )
}
