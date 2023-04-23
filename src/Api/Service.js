import axios from "axios";

const clienteApi = axios.create({
    baseURL: 'http://localhost:8080'
});

export const registerUserApi = (user) => clienteApi.post(`/users`,user);
export const registerEnderecoApi = (endereco) => clienteApi.post(`/endereco`,endereco);

export const autenticarApi = (credencial) => clienteApi.post(`/autenticar`,credencial);
export const obterUserEmailApi = (email) => clienteApi.get(`/usuario/${email}`);
