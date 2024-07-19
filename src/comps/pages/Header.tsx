import React, { useState } from 'react';
import '../style/Header.css';
import logo from '../assets/images/pb1.png';
import {Link} from "react-router-dom";

export default function Header(){
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="header-content">
                <img src={logo} alt='logo' className='Logo' />
                <div className="hamburger" onClick={toggleMenu}>
                    ☰
                </div>
                <nav>
                    <ul className = "links">
                        <li key="Overview"><Link to ={"/Overview"}>Practicum</Link></li>
                        <li key="Output"><Link to ={"/Output"}>Output</Link></li>
                        <li key="Synthesis"><Link to ={"/Synthesis"}>Synthesis</Link></li>
                        <li key="Documents"><Link to ={"/Documents"}>Documents</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}