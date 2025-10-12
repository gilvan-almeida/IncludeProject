import React from "react";
import NavBar from "../../Component/NavBar/NavBar";
import BoxNota from "../../Component/BoxNota/BoxNota";
import CardReview from "../../Component/CardReview/CardReview";
import { FaPlaystation, FaXbox, FaWindows } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import './Style.css';

function GamePage() {
    return (
        <div>
            <NavBar />

            <div className="boxContainerMain">
                <div className="boxGame">
                    <div className="boxVideosSumary">
                        <div className="boxVideo">
                            <video
                                src="https://media.rawg.io/media/stories/b3b/b3b872ae7c4e95cfd6d999b2bda384e8.mp4"
                                autoPlay
                                muted
                            />
                        </div>
                        {/*                         
                        <div className="SumaryNotes">
                            <div>
                                <p>
                                    Criticas e Reviews
                                </p>
                                <div>

                                </div>
                            </div>
                        </div> */}
                    </div>

                    <div className="boxTitleGame">
                        <div className="dadosTitleGame">
                            <div className="boxTitleGame">
                                <p className="titleGameReview">
                                    MAFIA
                                </p>
                                <div className="boxPlataforms">
                                    <FaPlaystation size={30} />
                                    <FaWindows size={25} />
                                    <FaXbox size={25} />
                                    <BsNintendoSwitch size={25} />
                                </div>
                                <div className="dateGame">
                                    <p className="textLacamentoP">
                                        Lançamento:
                                    </p>
                                    <p className="textLacamento">
                                        27 DE OUTUBRO
                                    </p>
                                </div>
                            </div>
                            <div className="boxNotaGame">
                                <div className="dadosNota">
                                    <p className="titleNotaSite">
                                        NOTA MEDIA DO SITE
                                    </p>
                                    <p className="notaMist">
                                        Notas Misturadas
                                    </p>
                                </div>
                                <BoxNota />
                            </div>
                            <div className="boxNotaGame">
                                <div className="dadosNota">
                                    <p className="titleNotaSite">
                                        NOTA DOS USUARIOS
                                    </p>
                                    <p className="notaMist">
                                        Notas Misturadas
                                    </p>
                                </div>
                                <BoxNota />
                            </div>
                        </div>

                    </div>





                </div>
            </div>

        </div>
    )
}

export default GamePage;