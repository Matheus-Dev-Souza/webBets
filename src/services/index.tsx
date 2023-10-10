import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.football-data.org',
    timeout: 10000,
})