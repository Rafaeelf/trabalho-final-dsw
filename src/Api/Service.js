import axios from "axios";

const clienteApi = axios.create({
    baseURL: 'http://localhost:8080'
});

export const autenticarApi = (username);