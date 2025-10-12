import { Route, Router, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import GamePage from "../pages/GamePage/GamePage";
function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/GamePage" element={<GamePage/>}/>
        </Routes>
    )
}

export default AppRoutes;