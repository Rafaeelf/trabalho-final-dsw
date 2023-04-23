import axios from "axios";

const clienteApi = axios.create({
    baseURL: 'http://localhost:8080'
});

const configImage = {'header': {
    'Accept': 'application/json',
    'Content-Type': 'multipart/form-data',
  }}

export const registerUserApi = (user) => clienteApi.post(`/users`,user);
export const registerEnderecoApi = (endereco) => clienteApi.post(`/endereco`,endereco);

export const autenticarApi = (credencial) => clienteApi.post(`/autenticar`,credencial);
export const obterUserEmailApi = (email) => clienteApi.get(`/usuario/${email}`);

export const registerImageApi = (image) => clienteApi.post(`/files`,image, configImage);
export const registerProdutoApi = (produto) => clienteApi.post(`/products`,produto);