import React, { useEffect, useState } from "react";
import NavBar from "../../Component/NavBar/NavBar";
import BoxNota from "../../Component/BoxNota/BoxNota";
import CardReview from "../../Component/CardReview/CardReview";
import ButtonComponent from "../../Component/Button/ButtonComponet";
import { useNavigate } from "react-router-dom";
import { FaPlaystation, FaXbox, FaWindows } from "react-icons/fa";
import Modal from "../../Component/Modal/Modal";
import { BsNintendoSwitch } from "react-icons/bs";
import AlertBox from "../../Component/AlertBox/AlertBox";
import { BsArrowLeft } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import FormatDate from "../../utils/FormatDate";
import { api } from "../../Service/conectApi";
import NotaSelect from "../../Component/NotaSelect/NotaSelect";
import './Style.css';

function GamePage() {

    const location = useLocation();
    const navigate = useNavigate();
    const { id } = location.state;
    const [jogo, setJogo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [notaUser, setNotaUser] = useState(null);
    const [reviewModal, setReviewModal] = useState(false);




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
                                        </div>
                                        <div className="dateGame">
                                            <p className="textLacamentoP">
                                                Lançamento:
                                            </p>
                                            <p className="textLacamento">
                                                {FormatDate(jogo.released)}
                                            </p>
                                        </div>
                                        <div className="NotaBoxSite">
                                            <div className="boxAling">
                                                <div className="textBoxNota">
                                                    <h2>
                                                        Nota do site:
                                                    </h2>
                                                    <p>
                                                        Quantidade de Avaliações: {jogo.ratings_count}
                                                    </p>
                                                </div>
                                                <BoxNota
                                                    nota={jogo.metacritic}
                                                />
                                            </div>
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
                                        {jogo.stores?.slice(0, 2).map((itemStore, index) => {

                                            let name = itemStore.store.name;

                                            return (
                                                <ButtonComponent
                                                    title={<>{name}</>}
                                                    color="#2d2d2d"
                                                    height="50px"
                                                    width="100%"
                                                    onClick={() => window.open(`https://${itemStore.store.domain}`, "_blank")}
                                                />
                                            )
                                        })}
                                    </div>
                                    <div className="fullWidthButton">
                                        <ButtonComponent
                                            title="Ver todas"
                                            color="#2d2d2d"
                                            height="50px"
                                            width="100%"
                                            onClick={() => setIsModalOpen(true)}
                                        />
                                    </div>
                                    <div className="NotaBoxUser">
                                        <div className="titleMinhaNota">
                                            <div>
                                                <h3>
                                                    Minha nota:
                                                </h3>
                                                <p>
                                                    Selecione um dos quadrados.
                                                </p>
                                            </div>
                                            <div className="userRatingCircle"
                                                style={{
                                                    backgroundColor: notaUser
                                                        ? notaUser < 4
                                                            ? "#ff4d4d"
                                                            : notaUser < 7
                                                                ? "#ffcc00"
                                                                : "#00ff9d"
                                                        : "transparent",
                                                    border: "1px solid #2d2d2d",
                                                    color: notaUser ? "#000" : "#2d2d2d",
                                                }}
                                            >
                                                {notaUser || "-"}
                                            </div>

                                        </div>
                                        <div className="boxMinhaNota">
                                            <div style={{ marginBottom: "15px" }}>
                                                <NotaSelect
                                                    value={notaUser}
                                                    onChange={(v) => setNotaUser(v)}
                                                />
                                            </div>

                                            <ButtonComponent
                                                title="Adicionar minha review"
                                                color="#2d2d2d"
                                                height="50px"
                                                width="100%"
                                                onClick={() => setReviewModal(true)}
                                            />
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
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2>Onde comprar</h2>
                {jogo?.stores?.length > 0 ? (
                    jogo.stores.map((itemStore, index) => (
                        <ButtonComponent
                            key={index}
                            title={itemStore.store.name}
                            color="#2d2d2d"
                            height="50px"
                            width="100%"
                            onClick={() =>
                                window.open(`https://${itemStore.store.domain}`, "_blank")
                            }
                        />
                    ))
                ) : (
                    <p>Nenhuma loja disponível.</p>
                )}
            </Modal>
            <Modal isOpen={reviewModal} onClose={() => setReviewModal(false)}>
                <h2>Adicionar Review</h2>
                <form className="formReview">
                    <label>
                        Título da Review:
                        <input type="text" placeholder="Digite o título" />
                    </label>
                    <label>
                        <div className="titleMinhaNota">
                            <div>
                                <h3>
                                    Minha nota:
                                </h3>
                                <p>
                                    Selecione um dos quadrados.
                                </p>
                            </div>
                            <div className="userRatingCircle"
                                style={{
                                    backgroundColor: notaUser
                                        ? notaUser < 4
                                            ? "#ff4d4d"
                                            : notaUser < 7
                                                ? "#ffcc00"
                                                : "#00ff9d"
                                        : "transparent",
                                    border: "1px solid #2d2d2d",
                                    color: notaUser ? "#000" : "#2d2d2d",
                                }}
                            >
                                {notaUser || "-"}
                            </div>
                        </div>
                        <NotaSelect
                            value={notaUser}
                            onChange={(v) => setNotaUser(v)}
                        />
                    </label>
                    <label>
                        Sua Review:
                        <textarea placeholder="Escreva o que achou do jogo..." rows={5} />
                    </label>
                    <ButtonComponent
                        title="Enviar Review"
                        color="#00ff9d"
                        height="45px"
                        width="100%"
                        onClick={(e) => {
                            e.preventDefault();
                            alert(`Review enviada! Nota: ${reviewModal}`);
                            setReviewModal(false);
                        }}
                    />
                </form>
            </Modal>

            <Footer />

        </div>
    )
}

export default GamePage;