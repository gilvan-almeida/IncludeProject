import React from "react";
import { useEffect, useState } from "react";
import { getGames } from "../../Service/getGames";
import CardGame from "../../Component/CardGame/CardGame";
import imgGame from "../../assets/gtaImg.jpg"
import "./Style.css";
import AlertBox from "../../Component/AlertBox/AlertBox";
import Footer from "../../Component/Footer/Footer";
import NavBar from "../../Component/NavBar/NavBar";


function Home() {

    const [jogos, setJogos] = useState([]);
    
    const [busca, setBusca] = useState("");

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const getDadosGames = async () => {
            try {
                const dados = await getGames();
                if (dados) setJogos(dados);
                console.log(dados[1]);
            } catch (error) {
                console.error("Error: ", error);
            } finally {
                setLoading(false);
            }
        };
        getDadosGames();
    }, []);

    const jogosFiltrados = jogos.filter(jogo =>
        jogo.name.toLowerCase().includes(busca.toLowerCase())
    );

    return (
        <div className="containerHome">
            <NavBar
                busca={busca}
                setBusca={setBusca}
            />
            <div className="aligBoxMain">
                {loading ? (
                    <AlertBox message="Carregando..." />
                ) : (
                    <div className="boxMain">
                        <div className="boxTextTitle">

                            <p className="titleMain">
                                Catalogo de Jogos
                            </p>
                            <p className="subTitle">
                                Mostra de todos os top Jogos.
                            </p>

                        </div>

                        <div className="cardsContainer">

                            {jogosFiltrados.map((jogo, index) => (
                                <CardGame
                                    key={jogo.key}
                                    title={jogo.name}
                                    generes={jogo.genres?.map(g => g.name).join(", ") || "Sem gênero"}
                                    plataform={jogo.parent_platforms.map(p => p.platform.name)}
                                    img={jogo.background_image}
                                    nota={jogo.metacritic || "N/A"}
                                    date={jogo.released}
                                    jogo={jogo}

                                />
                            ))}
                        </div>
                    </div>

                )}
            </div>
            <div>
                <Footer/>
            </div>

        </div>
    )
}

export default Home;