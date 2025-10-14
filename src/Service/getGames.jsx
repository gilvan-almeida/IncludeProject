import { api } from "./conectApi"
export const getGames = async () => {
    const todosJogos = []
    try {
        for (let page = 1; page <=2; page++) {
            const response = await api.get("/games", {
                params: {
                    page,
                    page_size: 40,
                }
            });
            todosJogos.push(...response.data.results);
        }
        return todosJogos;
    } catch (error) {
        console.error("Error: ", error)
        return [];
    }
}
