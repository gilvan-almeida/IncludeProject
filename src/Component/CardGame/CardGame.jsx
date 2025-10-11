import React from "react";
import ButtonComponent from "../Button/ButtonComponet";
import { FaPlaystation, FaXbox, FaWindows } from "react-icons/fa";
import "./Style.css";

function CardGame({title, plataform = [], description, img, date}) {
  return (
    <div className="boxCard">
      <div className="imgBox">
        <img src={img} alt="game" />
      </div>
      <div className="iconsBox">
        {plataform.includes("xbox") && (<FaXbox size={20} />)}
        {plataform.includes("playstation") && (<FaPlaystation size={24} />)}
        {plataform.includes("pc") && (<FaWindows size={20} />)}
      </div>

      <div className="boxText">
        <h3 className="titleBox">{title}</h3>
        <p className="descBox">
          {description}
        </p>
      </div>
      <div className="extraInfo">
        <p>Lançamento: {date}</p>
        <div className="boxButton">
          <ButtonComponent height={35} width={100} title={"Detalhes"} />
        </div>
      </div>
    </div>
  );
}

export default CardGame;
