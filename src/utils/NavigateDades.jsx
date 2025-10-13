import { useNavigate } from "react-router-dom";

export const NavigateDades = () => {
    const navigation = useNavigate();

    const openPageDades = (rote, state={}) =>{
        if(!rote){
            console.error("Rota não identificada");
            return;
        }
        navigation(rote,{state});
    }

    return { openPageDades }
}