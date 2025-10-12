function colorNote(nota){
    if(nota >= 70){
        return "#00ce7a" 
    }else if(nota < 70 && nota > 50){
        return "#ffbd3f"
    }
    return "#ff6874"
}

export default colorNote;