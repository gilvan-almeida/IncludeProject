import React from "react";
import lupa from '../../assets/lupa.png';   
import './Style.css';

function PesquisaBar(){
    return(
        <div className="boxPesquisa">
            <input
                type="text"
                placeholder="Digite Aqui"
                className="inputPesquisa"
            />
            <img src={lupa} alt="Lupa" className="iconPesquisa" />
        </div>
    )
}
export default PesquisaBar;