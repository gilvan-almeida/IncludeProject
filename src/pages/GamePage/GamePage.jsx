import React, { useEffect, useState } from "react";
import NavBar from "../../Component/NavBar/NavBar";
import BoxNota from "../../Component/BoxNota/BoxNota";
import CardReview from "../../Component/CardReview/CardReview";
import { FaPlaystation, FaXbox, FaWindows } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import AlertBox from "../../Component/AlertBox/AlertBox";
import { useLocation } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import FormatDate from "../../utils/FormatDate";
import { api } from "../../Service/conectApi";
import './Style.css';

function GamePage() {

    const location = useLocation();
    const { id } = location.state;
    const [jogo, setJogo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getDadesDetailsGame = async () => {
            try {
                const response = await api.get(`/games/${id}`);
                setJogo(response.data);
                console.log(response.data)
            } catch (error) {
                console.error("erro buscar jogo:", error);
            } finally {
                setLoading(false);
            }
        };

        getDadesDetailsGame();

    }, [id]);


    const plataformas = jogo?.parent_platforms?.map(p => p.platform.name.toLowerCase()) || [];
    const desenvedores = jogo?.developers?.map(p => p.name).join(", ") || "Desconhecido";
    console.log(jogo);

    return (
        <div className="MainPage">
            <NavBar />
            {loading && (<AlertBox message="Carregando jogo" />)}
            {!loading && (
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
                                        src={jogo.background_image}
                                        alt={jogo.name}
                                        className="previewImage"
                                    />
                                </div>
                            </div>

                            <div className="boxTitleGame">
                                <div className="dadosTitleGame">
                                    <div className="boxTitleGameInfo">
                                        <p className="titleGameReview">
                                            {jogo.name}
                                        </p>
                                        <div className="boxPlataforms">
                                            {plataformas.includes("xbox") && (<FaXbox size={25} />)}
                                            {plataformas.includes("playstation") && (<FaPlaystation size={30} />)}
                                            {plataformas.includes("pc") && (<FaWindows size={25} />)}
                                            {/* <BsNintendoSwitch size={25} /> */}
                                        </div>
                                        <div className="dateGame">
                                            <p className="textLacamentoP">
                                                Lançamento:
                                            </p>
                                            <p className="textLacamento">
                                                {FormatDate(jogo.released)}
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
                                                    {plataformas.includes("xbox") && ("Xbox, ")}
                                                    {plataformas.includes("playstation") && ("Playstation, ")}
                                                    {plataformas.includes("pc") && ("Pc, ")}
                                                </p>
                                            </div>
                                            <div>
                                                <p>
                                                    Desenvolvedor:
                                                </p>
                                                <p>
                                                    {desenvedores}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="linha2">
                                            <div>
                                                <p>
                                                    Gênero:
                                                </p>
                                                <p>
                                                    {jogo.genres?.map(g => g.name).join(", ") || "Sem gênero"}
                                                </p>
                                            </div>
                                            <div>
                                                <p>
                                                    Classificação etária:
                                                </p>
                                                <p>
                                                    {jogo.esrb_rating.name}
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
            )}
            <Footer />
        </div>
    )
}

export default GamePage;