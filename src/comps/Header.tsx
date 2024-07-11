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
                        <li key="Output"><Link to ={"/Output"}>Practicum</Link></li>
                        <li key="Output"><Link to ={"/Output"}>Output</Link></li>
                        <li key="Synthesis"><Link to ={"/Synthesis"}>Synthesis</Link></li>
                        <li key="Documents"><Link to ={"/Documents"}>Documents</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}