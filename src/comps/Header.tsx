import './Header.css'
import logo from '../assets/pb1.png'
import {Link} from "react-router-dom"

export default function Header(){
    return (
        <header className="header">
            <div className="header-content">
                <img src={logo} alt='logo' className='Logo' />
                <nav>
                    <ul className = "links">
                        <li key="Portfolio"><Link to ={"/Portfolio"}>Portfolio</Link></li>
                        <li key="Overview"><Link to ={"/"}>Practicum</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}