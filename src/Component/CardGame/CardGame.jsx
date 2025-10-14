import React from "react";
import ButtonComponent from "../Button/ButtonComponet";
import BoxNota from "../BoxNota/BoxNota";
import { NavigateDades } from "../../utils/NavigateDades";
import { FaPlaystation, FaXbox, FaWindows } from "react-icons/fa";
import FormatDate from "../../utils/FormatDate";
import "./Style.css";


function CardGame({ key, title, plataform = [], generes, img, date, nota, jogo}) {


  const { openPageDades } = NavigateDades();
  const handleOpenDetails = () => {
  openPageDades("/GamePage", {id: jogo.id});
    };


  return (
    <div className="boxCard">
      <div className="imgBox">
        <img src={img} alt="game" />
      </div>
      <div className="boxTop">
        <div className="boxTopTitle">
          <div className="iconsBox">
            {plataform.includes("Xbox") && (<FaXbox size={20} />)}
            {plataform.includes("PlayStation") && (<FaPlaystation size={24} />)}
            {plataform.includes("PC") && (<FaWindows size={20} />)}
          </div>
          <div className="boxText">
            <h3 className="titleBox">{title}</h3>
          </div>
        </div>
        <BoxNota
          nota={nota}
        />
      </div>

      <div className="boxText">
        <p className="descBox">
          Gênero:<br/>
          {generes}
        </p>
      </div>
      <div className="extraInfo">
        <p>Lançamento: {FormatDate(date)}</p>
        <div className="boxButton">
          <ButtonComponent height={35} width={100} title={"Detalhes"} onClick={() => handleOpenDetails()}/>
        </div>
      </div>
    </div>
  );
}

export default CardGame;
