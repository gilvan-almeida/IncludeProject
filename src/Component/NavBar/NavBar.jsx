import React from "react";
import './Style.css'
import { Link } from "react-router-dom";
import PesquisaBar from "../PesquisaBar/PesquisaBar";
import AppRoutes from "../../routes/AppRoute";
import { IoGameController } from "react-icons/io5";

function NavBar(){
    return(
        <div className="boxNavbar">

            <div className="boxLog">
                <IoGameController size={25} />
                <h3 className="tileBox">
                    GAME
                </h3>
            </div>

            <div className="boxPesquisa">
                <PesquisaBar/>
            </div>
            
            <div className="boxLinks">
                <Link to={"/GamePage"}>Inicio</Link>
                <Link>Contatos</Link>
                <Link>Login</Link>
            </div>
            
        </div>
    );
}

export default NavBar;