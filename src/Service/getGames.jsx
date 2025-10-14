import { api } from "./conectApi"
export const getGames = async () => {
    const todosJogos = []
    try {
        for (let page = 1; page <=5; page++) {
            const response = await api.get("/games", {
                params: {
                    page,
                    page_size: 50,
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
