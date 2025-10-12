import React from "react";
import ButtonComponent from "../Button/ButtonComponet";
import { FaPlaystation, FaXbox, FaWindows } from "react-icons/fa";
import "./Style.css";

function CardGame({ title, plataform = [], description, img, date, nota}) {
  function colorNote(){
      if(nota >= 70){
          return "#00ce7a" 
      }else if(nota < 70 && nota > 50){
        return "#ffbd3f"
      }

      return "#ff6874"
  }
  return (
    <div className="boxCard">
      <div className="imgBox">
        <img src={img} alt="game" />
      </div>
      <div className="boxTop">
        <div className="boxTopTitle">
          <div className="iconsBox">
            {plataform.includes("xbox") && (<FaXbox size={20} />)}
            {plataform.includes("playstation") && (<FaPlaystation size={24} />)}
            {plataform.includes("pc") && (<FaWindows size={20} />)}
          </div>
          <div className="boxText">
            <h3 className="titleBox">{title}</h3>
          </div>
        </div>
        <h3 className="boxNota" style={{backgroundColor: colorNote(nota)}}>{nota}</h3>
      </div>

      <div className="boxText">
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
