import React from "react";
import { useEffect, useState } from "react";
import { getGames } from "../../Service/getGames";
import CardGame from "../../Component/CardGame/CardGame";
import imgGame from "../../assets/gtaImg.jpg"
import "./Style.css";
import Footer from "../../Component/Footer/Footer";
import NavBar from "../../Component/NavBar/NavBar";


function Home() {

    const [jogos, setJogos] = useState([]);

    useEffect(() => {
        const getDadosGames = async () =>{
            try {
                const dados = await getGames();
                if(dados) setJogos(dados.results);
                console.log(dados.results[0]);
            } catch (error) {
                console.error("Error: ", error)
            }
        };
        getDadosGames();
    },[]);

    // const jogos = [
    //     { title: "Mafia", description: "Ação e mistério", image: imgGame, plataform: ["pc", "playstation"], nota: 65 },
    //     { title: "Cyber Drift", description: "Corridas futuristas", image: imgGame, plataform: ["xbox", "pc"], nota: 13 },
    //     { title: "Elder Forest", description: "Exploração mágica", image: imgGame, plataform: ["playstation"], nota: 100 },
    //     { title: "Elder Forest", description: "Exploração mágica", image: imgGame, plataform: ["playstation"], nota: 27 },
    //     { title: "Elder Forest", description: "Exploração mágica", image: imgGame, plataform: ["playstation"], nota: 27 },
    //     { title: "Elder Forest", description: "Exploração mágica", image: imgGame, plataform: ["playstation"], nota: 27 },
    //     { title: "Elder Forest", description: "Exploração mágica", image: imgGame, plataform: ["playstation"], nota: 65 },
    //     { title: "Elder Forest", description: "Exploração mágica", image: imgGame, plataform: ["playstation"], nota: 65 },
    //     { title: "Elder Forest", description: "Exploração mágica", image: imgGame, plataform: ["playstation"], nota: 39 },
    //     { title: "Elder Forest", description: "Exploração mágica", image: imgGame, plataform: ["playstation"], nota: 65 },
    //     { title: "Elder Forest", description: "Exploração mágica", image: imgGame, plataform: ["playstation"], nota: 65},
    //     { title: "Elder Forest", description: "Exploração mágica", image: imgGame, plataform: ["playstation"], nota: 88 },
    //     { title: "Elder Forest", description: "Exploração mágica", image: imgGame, plataform: ["playstation"], nota: 65},
    //     { title: "Elder Forest", description: "Exploração mágica", image: imgGame, plataform: ["playstation"], nota: 95 },
    //     { title: "Elder Forest", description: "Exploração mágica", image: imgGame, plataform: ["playstation"], nota: 65 }
    // ];

    return (
        <div className="containerHome">
            <NavBar />
            <div className="aligBoxMain">
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
                        {jogos.map((jogo, index) => (
                            <CardGame
                                key={jogo.key}
                                title={jogo.name}
                                description={jogo.description}
                                plataform={jogo.platforms}
                                img={jogo.background_image}
                                date={jogo.release}
                                nota={jogo.metacritic}
                            />
                        ))}
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;