import { useState, useEffect } from "react";

// Dicionário focado em termos de games
const dicionarioGames = {
    // Termos gerais
    "the": "o", "and": "e", "of": "de", "to": "para", "a": "um", "in": "em",
    "is": "é", "you": "você", "that": "que", "it": "isso", "he": "ele",
    "was": "era", "for": "para", "on": "em", "are": "são", "as": "como",
    "with": "com", "his": "dele", "they": "eles", "at": "em", "be": "ser",
    "this": "este", "have": "ter", "from": "de", "or": "ou", "one": "um",
    
    // Termos de games
    "game": "jogo", "player": "jogador", "level": "nível", "score": "pontuação",
    "play": "jogar", "start": "iniciar", "menu": "menu", "settings": "configurações",
    "character": "personagem", "weapon": "arma", "enemy": "inimigo", "boss": "chefe",
    "quest": "missão", "mission": "missão", "story": "história", "world": "mundo",
    "map": "mapa", "item": "item", "inventory": "inventário", "health": "vida",
    "energy": "energia", "power": "poder", "skill": "habilidade", "attack": "ataque",
    "defense": "defesa", "multiplayer": "multijogador", "singleplayer": "um jogador",
    "online": "online", "offline": "offline", "save": "salvar", "load": "carregar",
    "continue": "continuar", "exit": "sair", "review": "análise", "rating": "classificação",
    
    // Gêneros
    "genre": "gênero", "action": "ação", "adventure": "aventura", "rpg": "RPG",
    "strategy": "estratégia", "simulation": "simulação", "sports": "esportes",
    "racing": "corrida", "puzzle": "quebra-cabeça", "horror": "terror",
    
    // Plataformas
    "platform": "plataforma", "pc": "PC", "xbox": "Xbox", "playstation": "PlayStation",
    "nintendo": "Nintendo", "mobile": "mobile",
    
    // Desenvolvimento
    "developer": "desenvolvedor", "publisher": "publicadora", "studio": "estúdio",
    "release": "lançamento", "update": "atualização", "patch": "patch",
    
    // Gráficos/Performance
    "graphics": "gráficos", "performance": "performance", "frame": "frame",
    "resolution": "resolução", "quality": "qualidade",
    
    // Descrições
    "amazing": "incrível", "awesome": "impressionante", "great": "ótimo",
    "good": "bom", "bad": "ruim", "poor": "pobre", "excellent": "excelente",
    "fantastic": "fantástico", "epic": "épico", "fun": "divertido",
    "challenging": "desafiador", "difficult": "difícil", "easy": "fácil"
};

function TradutorText({ texto }) {
    const [textoTraduzido, setTextoTraduzido] = useState('');
    const [carregando, setCarregando] = useState(false);

    useEffect(() => {
        if (!texto) {
            setTextoTraduzido('');
            return;
        }

        setCarregando(true);
        
        const timer = setTimeout(() => {
            // Tradução manual baseada no dicionário
            const traduzido = texto.split(' ').map(palavra => {
                // Remove pontuação para comparar
                const palavraLimpa = palavra.toLowerCase().replace(/[.,!?;:()]/g, '');
                return dicionarioGames[palavraLimpa] || palavra;
            }).join(' ');
            
            setTextoTraduzido(traduzido);
            setCarregando(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [texto]);

    if (carregando) return <span style={{ color: '#999' }}>Traduzindo...</span>;
    return <span>{textoTraduzido}</span>;
}

export default TradutorText;