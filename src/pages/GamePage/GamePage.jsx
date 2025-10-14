import React, { useEffect, useState } from "react";
import NavBar from "../../Component/NavBar/NavBar";
import BoxNota from "../../Component/BoxNota/BoxNota";
import CardReview from "../../Component/CardReview/CardReview";
import ButtonComponent from "../../Component/Button/ButtonComponet";
import { useNavigate } from "react-router-dom";
import { FaPlaystation, FaXbox, FaWindows } from "react-icons/fa";

import { BsNintendoSwitch } from "react-icons/bs";
import AlertBox from "../../Component/AlertBox/AlertBox";
import { BsArrowLeft } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import FormatDate from "../../utils/FormatDate";
import { api } from "../../Service/conectApi";
import './Style.css';

function GamePage() {

    const location = useLocation();
    const navigate = useNavigate();
    const { id } = location.state;
    const [jogo, setJogo] = useState(null);
    const [loading, setLoading] = useState(true);

    // PROBLEMA QUE SEMPRE Q A PAGINA ATUALIZA OU SAI E VOLTA ELE FAZ A REQUISIÇÃO DENOVO AI DEMORA , PROVAVELMENTE DEVE TER UM JEITO MAIS FACIL DE FAZER , MAS JA É 00:30
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
            <div className="boxVoltar">
                <button className="btnVoltar" onClick={() => navigate(-1)}>
                    <BsArrowLeft size={20} />
                    Voltar
                </button>
            </div>
            {loading && (<AlertBox message="Carregando jogo" />)}
            {!loading && (
                <div className="contetPage">
                    <div className="boxContainerMain">
                        <div className="boxGame">
                            <div className="boxVideosSumary">
                                <div className="boxVideo">
                                    {/* AQUI A INTEÇÃO ERA COLOCAR O VIDEO DA API MAS, ERA OUTRA REQUISIÇÃO PARA PEGAR MAIS DETALHES DO JOGO ENTAO FICOU A IMAGEM MESMO */}
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
                                    <div className="BoxSobre">
                                        <p className="titleSobre">
                                            Sobre:
                                        </p>
                                        <p className="textSobre">
                                            {jogo.description_raw}
                                        </p>
                                    </div>
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
                                <div className="boxButtonsGameContainer">
                                    <p className="textLacamentoP">Onde comprar:</p>
                                    <div className="boxButtonsGame">
                                        {jogo.stores?.map((itemStore, index)=>{
                                            let icon;
                                            let name = itemStore.store.name;
                                            switch (itemStore.store.slug) {
                                                case "steam":
                                                    icon = <FaWindows />;
                                                    break;
                                                case "playstation-store":
                                                    icon = <FaPlaystation />;
                                                    break;
                                                case "xbox-store":
                                                case "microsoft-store":
                                                    icon = <FaXbox />;
                                                    break;
                                                case "epic-games":
                                                   
                                                    break;
                                                case "xbox360":
                                                    icon = <BsNintendoSwitch />;
                                                    break;
                                                case "nintendo-eshop":
                                                    icon = <BsNintendoSwitch />;
                                                    break;
                                                default:
                                                    icon = null;
                                            }
                                            return(
                                                <ButtonComponent
                                                    title={<>{icon} {name}</>}
                                                    color="#2d2d2d"
                                                    height="50px"
                                                    width="100%"
                                                    onClick={() => window.open(`https://${itemStore.store.domain}`, "_blank")}
                                                />
                                            )
                                        })}
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