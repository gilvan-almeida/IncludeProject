import React from "react";
import { FaSearch } from "react-icons/fa";
import './Style.css';

function PesquisaBar({busca, setBusca}){
    return(
        <div className="boxPesquisa">
            <input
                type="text"
                placeholder="Digite Aqui"
                className="inputPesquisa"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
            />
            <FaSearch size={20} className="iconPesquisa" />
        </div>
    )
}
export default PesquisaBar;