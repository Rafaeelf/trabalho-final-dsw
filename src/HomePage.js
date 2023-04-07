 
import Cabecalho from "./Componentes/Cabecalho";
import Login from "./Componentes/Login";
import Rodape from "./Componentes/Rodape";
import Carrinho from "./Componentes/Carrinho";
import Cadastro from "./Componentes/Cadastro";
import Produtos from "./Componentes/Produtos";


import Card from "./Componentes/Card";


import AutProvider, { useAutCtx } from "./autCtx";
import { BrowserRouter, Navigate, Routes, Route} from "react-router-dom"
import Inicio from "./Componentes/Inicio";




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

                        <Route path='/' element={<Inicio />}></Route>
                        <Route path='/inicio' element={<Inicio />}></Route>
                        <Route path='/Login' element={<Login />}></Route>
                        <Route path='/Cadastro' element={<Cadastro />}></Route>
                        <Route path='/Produtos' element={<Produtos />}></Route>

                        <Route path='/Carrinho' element={
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