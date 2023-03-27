import Cabecalho from "./Componentes/Cabecalho";
import Login from "./Componentes/Login";
import Rodape from "./Componentes/Rodape";
import Card from "./Componentes/Card";
import Carrinho from "./Componentes/Carrinho";
import Cadastro from "./Componentes/Cadastro";
import Produtos from "./Componentes/Produtos";
import Carrossel from "./Componentes/Carrossel";

import Carrossel2 from "./Componentes/Carrossel2";


import AutProvider, { useAutCtx } from "./autCtx";
import { BrowserRouter, Navigate, Routes, Route} from "react-router-dom"


function HomePage(){

    function AuthenticateRoute({children}){
        const atCtx = useAutCtx();
        if(atCtx.autenticado){
            return children;
        }
        return <Navigate to='/'/>
    }

    return (
        <div className="HomePage">
            <AutProvider>
                <BrowserRouter>
                    <Cabecalho></Cabecalho>
                 
                    <Routes>

                        <Route path='/' element={<Carrossel2 />}></Route>
                        <Route path='/login' element={<Login />}></Route>
                        <Route path='/Cadastro' element={<Cadastro />}></Route>
                        <Route path='/Produtos' element={<Produtos/>}></Route>

                        <Route path='/carrinho' element={
                        <AuthenticateRoute>
                            <Carrinho />
                        </AuthenticateRoute>}>
                        
                         </Route>
                    </Routes>                    
                </BrowserRouter>
                <Rodape></Rodape>
            </AutProvider>
        </div>
    )
}

export default HomePage;