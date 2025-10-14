import React from "react";
export default function FormatDate(valorDate){
    const date = new Date(valorDate);
    const dataBR = date.toLocaleDateString("pt-BR");
    return dataBR;
}
