import React from "react";
import gtaimg from "../../assets/gtaImg.jpg";
import ButtonComponent from "../Button/ButtonComponet";
import { FaPlaystation, FaXbox, FaWindows } from "react-icons/fa";
import "./Style.css";

function CardGame() {
  return (
    <div className="boxCard">
      <div className="imgBox">
        <img src={gtaimg} alt="game" />
      </div>

      <div className="iconsBox">
        <FaPlaystation size={24} />
        <FaXbox size={20} />
        <FaWindows size={20} />
      </div>

      <div className="boxText">
        <h3 className="titleBox">GTA VI</h3>
        <p className="descBox">
          Essa é uma descrição curta do game. Essa é uma descrição curta do game.
          Essa é uma descrição curta do game. Essa é uma descrição curta do game.
          Essa é uma descrição curta do game. Essa é uma descrição curta do game.

        </p>
      </div>
      <div className="extraInfo">
        <p>Lançamento: 2025</p>
        <div className="boxButton">
          <ButtonComponent height={35} width={100} title={"Detalhes"} />
        </div>
      </div>
    </div>
  );
}

export default CardGame;
