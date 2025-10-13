import { api } from "./conectApi"
export const getGames = async () => {
    try {
        const response = await api.get("/games");
        return response.data;
    } catch (error) {
        console.error("Error: ", error)
        return null;
    }
}
