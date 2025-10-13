import React from "react";
import NavBar from "../../Component/NavBar/NavBar";
import BoxNota from "../../Component/BoxNota/BoxNota";
import CardReview from "../../Component/CardReview/CardReview";
import { FaPlaystation, FaXbox, FaWindows } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import './Style.css';

function GamePage() {

    const location = useLocation();
    const games = location.state;

    console.log(games);
    // const location = useActionData();
    // const game = location.state;

    // console.log(game)
    return (
        <div className="MainPage">
            <NavBar />
            <div className="contetPage">

                <div className="boxContainerMain">
                    <div className="boxGame">
                        <div className="boxVideosSumary">
                            <div className="boxVideo">
                                {/* <video
                                    src="https://media.rawg.io/media/stories/b3b/b3b872ae7c4e95cfd6d999b2bda384e8.mp4"
                                    autoPlay
                                    muted
                                /> */}
                                  <img
                                        src={games.img}
                                        alt={games.title}
                                        className="previewImage"
                                    />
                            </div>
                        </div>

                        <div className="boxTitleGame">
                            <div className="dadosTitleGame">
                                <div className="boxTitleGameInfo">
                                    <p className="titleGameReview">
                                        {games.title}
                                    </p>
                                    <div className="boxPlataforms">
                                        {games.plataform.includes("xbox") && (<FaXbox size={25} />)}
                                        {games.plataform.includes("playstation") && (<FaPlaystation size={30} />)}
                                        {games.plataform.includes("pc") && (<FaWindows size={25} />)}  
                                        {/* <BsNintendoSwitch size={25} /> */}
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
                                <div>
                                    <div className="linha1">
                                        <div className="boxPlata">
                                            <p>
                                                Plataformas:
                                            </p>
                                            <p>
                                                {games.plataform.includes("xbox") && ("Xbox, ")}
                                                {games.plataform.includes("playstation") && ("Playstation, ")}
                                                {games.plataform.includes("pc") && ("Pc, ")}
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                                Desenvolvedor:
                                            </p>
                                            <p>
                                                Laboratórios Hardsuit
                                            </p>
                                        </div>
                                    </div>
                                    <div className="linha2">
                                        <div>
                                            <p>
                                                Gênero:
                                            </p>
                                            <p>
                                                Ação , RPG
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                                Classificação etária:
                                            </p>
                                            <p>
                                                Não classificado
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="boxContainerMain">
                    <div className="reviewSection">
                        <p className="titleReviews">Reviews</p>
                        <div className="cardsRow">
                            <CardReview />
                            <CardReview />
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </div>
    )
}

export default GamePage;