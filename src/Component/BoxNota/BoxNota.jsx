import React from "react";
import colorNote from "../../utils/ColorNote";
import "./Style.css";

function BoxNota({ nota }) {
  return (
    <div className="boxNota" style={{ backgroundColor: colorNote(nota) }}>
      <p className="labelNota">Nota</p>
      <h3 className="valorNota">{nota}</h3>
    </div>
  );
}

export default BoxNota;