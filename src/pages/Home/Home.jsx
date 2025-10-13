import React from "react";
import CardGame from "../../Component/CardGame/CardGame";
import imgGame from "../../assets/gtaImg.jpg"
import "./Style.css";
import Select from "../../Component/Select/Select";
import Footer from "../../Component/Footer/Footer";
import NavBar from "../../Component/NavBar/NavBar";
import { NavigateDades } from "../../utils/NavigateDades";

function Home() {

    const jogos = [
        { title: "Mafia", description: "Ação e mistério", image: imgGame, plataform: ["pc", "playstation"], nota: 65 },
        { title: "Cyber Drift", description: "Corridas futuristas", image: imgGame, plataform: ["xbox", "pc"], nota: 13 },
        { title: "Elder Forest", description: "Exploração mágica", image: imgGame, plataform: ["playstation"], nota: 100 },
        { title: "Elder Forest", description: "Exploração mágica", image: imgGame, plataform: ["playstation"], nota: 27 },
        { title: "Elder Forest", description: "Exploração mágica", image: imgGame, plataform: ["playstation"], nota: 27 },
        { title: "Elder Forest", description: "Exploração mágica", image: imgGame, plataform: ["playstation"], nota: 27 },
        { title: "Elder Forest", description: "Exploração mágica", image: imgGame, plataform: ["playstation"], nota: 65 },
        { title: "Elder Forest", description: "Exploração mágica", image: imgGame, plataform: ["playstation"], nota: 65 },
        { title: "Elder Forest", description: "Exploração mágica", image: imgGame, plataform: ["playstation"], nota: 39 },
        { title: "Elder Forest", description: "Exploração mágica", image: imgGame, plataform: ["playstation"], nota: 65 },
        { title: "Elder Forest", description: "Exploração mágica", image: imgGame, plataform: ["playstation"], nota: 65},
        { title: "Elder Forest", description: "Exploração mágica", image: imgGame, plataform: ["playstation"], nota: 88 },
        { title: "Elder Forest", description: "Exploração mágica", image: imgGame, plataform: ["playstation"], nota: 65},
        { title: "Elder Forest", description: "Exploração mágica", image: imgGame, plataform: ["playstation"], nota: 95 },
        { title: "Elder Forest", description: "Exploração mágica", image: imgGame, plataform: ["playstation"], nota: 65 }
    ];

    const opcoesPlataforma = [
        { value: "", label: "Selecione uma plataforma" },
        { value: "pc", label: "PC" },
        { value: "playstation", label: "PlayStation" },
        { value: "xbox", label: "Xbox" },
        { value: "switch", label: "Nintendo Switch" },
    ];


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

                    {/* <div className="selectBox">
                        <Select
                            label="Plataforma:"
                            options={opcoesPlataforma}

                            onChange={onchange}
                        />
                        <Select
                            label="Plataforma:"
                            options={opcoesPlataforma}

                            onChange={onchange}
                        />
                    </div> */}

                    <div className="cardsContainer">
                        {jogos.map((jogo, index) => (
                            <CardGame
                                key={index}
                                title={jogo.title}
                                description={jogo.description}
                                plataform={jogo.plataform}
                                img={jogo.image}
                                nota={jogo.nota}
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