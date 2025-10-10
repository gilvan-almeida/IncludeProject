import React from "react";
import CardGame from "../../Component/CardGame/CardGame";
import "./Style.css";
function Home(){
    return(
        <div>
            <p>
                ola penis home
            </p>
            <div className="cardsContainer">
                <CardGame/>
                <CardGame/>
            </div>


        </div>
    )
}

export default Home;