import React, { useState } from "react";
import './Style.css'
import { Link } from "react-router-dom";
import PesquisaBar from "../PesquisaBar/PesquisaBar";
import { IoGameController } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar({ busca, setBusca }){
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <div className="boxNavbar">

            <div className="boxLog">
                <IoGameController size={25} />
                <h3 className="tileBox">GAME</h3>
            </div>

            <div className="boxPesquisa">
                <PesquisaBar
                    busca={busca} 
                    setBusca={setBusca}
                />
            </div>
            
            <div className="boxLinks">
                <div className={`linksContainer ${menuOpen ? "active" : ""}`}>
                    <Link to={"/"} onClick={() => setMenuOpen(false)}>Inicio</Link>
                    <Link>Login</Link>
                </div>
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <GiHamburgerMenu size={25} />
                </div>
            </div>
            
        </div>
    );
}

export default NavBar;
