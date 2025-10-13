import axios from "axios";

const KEY_API = "86e36edd31ef4fd787ce3e27a93f3ccc";
const API_URL = "https://api.rawg.io/api";

export const api = axios.create({
    baseURL : API_URL,
    params: {key: KEY_API}
});