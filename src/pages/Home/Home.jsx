import React from "react";
import CardGame from "../../Component/CardGame/CardGame";
import imgGame from "../../assets/gtaImg.jpg"
import "./Style.css";
function Home(){
      const jogos = [
        { title: "Mafia", description: "Ação e mistério", image: imgGame, platform: ["pc", "playstation"] },
        { title: "Cyber Drift", description: "Corridas futuristas", image: imgGame, platform: ["xbox", "pc"] },
        { title: "Elder Forest", description: "Exploração mágica", image: imgGame, platform: ["playstation"] },

    ];
    return(
        <div>
            <p>
                olatela Home
            </p>
            <div className="cardsContainer">
                {jogos.map((jogo, index)=>(
                    <CardGame
                        title={jogo.title}
                        description={jogo.description}
                        plataform={jogo.platform}
                        img={jogo.image}
                    />

                ))}
            </div>


        </div>
    )
}

export default Home;