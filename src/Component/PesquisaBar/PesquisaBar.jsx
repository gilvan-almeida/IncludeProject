import React from "react";
import { FaSearch } from "react-icons/fa";
import './Style.css';

function PesquisaBar(){
    return(
        <div className="boxPesquisa">
            <input
                type="text"
                placeholder="Digite Aqui"
                className="inputPesquisa"
            />
            <FaSearch size={20} className="iconPesquisa" />
        </div>
    )
}
export default PesquisaBar;