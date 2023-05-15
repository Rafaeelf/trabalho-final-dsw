import Cabecalho from "./Componentes/Cabecalho";
import Login from "./Componentes/Login";
import Rodape from "./Componentes/Rodape";
import Carrinho from "./Componentes/Carrinho";
import Cadastro from "./Componentes/Cadastro";
import Produto from "./Componentes/Produto";

import AutProvider, { useAutCtx } from "./autCtx";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Inicio from "./Componentes/Inicio";
import CadastroProdutos from "./Componentes/CadastroProduto";
import ProdutoDetalhes from "./Componentes/ProdutoDetalhes";
import Administrador from "./Componentes/Administrador";
import Compra from "./Componentes/Compra";
import PedidoDetalhe from "./Componentes/PedidoDetalhe";

function HomePage() {
  function AuthenticateRoute({ children }) {
    const atCtx = useAutCtx();
    if (atCtx.autenticado) {
      return children;
    }
    return <Navigate to="/" />;
  }

  return (
    <div className="HomePage">
      <AutProvider>
        <BrowserRouter>
          <Cabecalho></Cabecalho>
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/inicio" element={<Inicio />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/cadastro" element={<Cadastro />}></Route>
            <Route path="/produtos" element={<Produto />}></Route>
            <Route path="/produtos/cadastro" element={<CadastroProdutos />}></Route>
            <Route path="/carrinho" element={<Carrinho />}></Route>
            <Route path="/produtodetalhes" element={<ProdutoDetalhes />}></Route>
            <Route path="/produtoDetalhes/:id" element={<ProdutoDetalhes />}></Route>   
            <Route path="/pedidoDetalhes/:id" element={<PedidoDetalhe/>}></Route>           
            {<Route path="/administrador" element={
                <AuthenticateRoute>
                    <Administrador />
                </AuthenticateRoute>}>
            </Route>
            }            
            {<Route path="/carrinho" element={
                <AuthenticateRoute>
                    <Carrinho />
                </AuthenticateRoute>}>
            </Route>
            }
            {<Route path="/compras" element={
                <AuthenticateRoute>
                    <Compra />
                </AuthenticateRoute>}>
            </Route>
            }
          </Routes>
        </BrowserRouter>
        <Rodape></Rodape>
      </AutProvider>
    </div>
  );
}

export default HomePage;
