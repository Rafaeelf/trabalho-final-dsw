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
export const obterUserEmailApi = (email) => clienteApi.get(`/usuario/${email}`);
export const obterUserIdApi = (id) => clienteApi.get(`/users/${id}`);
export const obterUsuariosApi = () => clienteApi.get(`/users`);

export const autenticarApi = (credencial) => clienteApi.post(`/autenticar`,credencial);

export const registerImageApi = (image) => clienteApi.post(`/files`,image, configImage);
export const registerProdutoApi = (produto) => clienteApi.post(`/products`,produto);

export const obterSucessoProduto = () => clienteApi.get(`/sucessos`);
export const obterProdutoApi = (id) => clienteApi.get(`/products/${id}`);
export const obterProdutosApi = () => clienteApi.get(`/products`);

export const criaPedidoApi = (pedido) => clienteApi.post(`/pedidos`, pedido); 
export const obterPedidosUsuarioApi = (id) => clienteApi.get(`/pedidouser/${id}`);
export const obterProdutoPedidoApi = (id) => clienteApi.get(`/pedidos/${id}/product`);

export const obterCarrinhoUserApi = (id) => clienteApi.get(`/user/${id}/carrinho/products`);
export const removeItemCarrinhoApi = (id) => clienteApi.delete(`/carrinho/${id}`);
export const diminuiQuantidadeCarrinhoApi = (id) => clienteApi.put(`/carrinho/${id}/diminui`);
export const aumentaQuantidadeCarrinhoApi = (id) => clienteApi.put(`/carrinho/${id}/aumenta`);
export const adicionarProdutoCarrinhoApi = (carrinho) => clienteApi.post(`/carrinho`,carrinho);
export const obterEnderecoEntrega = (id) => clienteApi.get(`users/${id}/enderecoentrega`);

export const obterProdutoMaisVendido = () => clienteApi.get(`/topproduct`);
export const obterEntregasApi = () => clienteApi.get(`/entregas`);
export const obterEntregaPedidoApi = (id) => clienteApi.get(`/entrega/${id}/pedido`);

