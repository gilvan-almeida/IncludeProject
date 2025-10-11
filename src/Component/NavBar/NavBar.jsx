import React from "react";
import './Style.css'
import { Link } from "react-router-dom";
import PesquisaBar from "../PesquisaBar/PesquisaBar";

function NavBar(){
    return(
        <div className="boxNavbar">
            <div className="boxLog">
                <h3 className="tileBox">
                    GAME
                </h3>
            </div>
            <div className="boxPesquisa">
                <PesquisaBar/>
            </div>
            <div className="boxLinks">
                <Link>Inicio</Link>
                <Link>Contatos</Link>
                <Link>Login</Link>
            </div>
        </div>
    );
}

export default NavBar;