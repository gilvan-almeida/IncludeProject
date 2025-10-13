import React from "react";
import './Style.css'
import BoxNota from "../BoxNota/BoxNota";
function CardReview({date, titulo, nota, descricao, autor}) {
    return (
        <div className="boxReview">
            <div className="boxDadosReview">
                <div className="boxDateReview">
                    <p>7 DE OUTUBRO DE 2025</p>
                </div>

                <div className="boxNoteReview">
                    <div className="boxNote">
                        <BoxNota
                            nota={nota}
                        />
                    </div>
                    <div className="boxTitleNote">
                        <h3 className="note">
                            {titulo}
                        </h3>
                    </div>
                </div>

                <div className="boxTextReview">
                    <p>
                        {/* {descricao} */}
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, quis, pariatur eligendi numquam reiciendis ipsam rem nesciunt nemo quod explicabo itaque ex impedit excepturi adipisci praesentium obcaecati dolores quasi libero.
                    </p>
                </div>
                <div className="boxUserReview">
                    <div className="boxUser">
                        <h3 style={{margin:"5px"}}>
                            Autor: {autor}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardReview;