import { createContext, useContext, useState } from "react";
import { Await } from "react-router-dom";

export const AutCtx    = createContext();
export const useAutCtx = () =>useContext(AutCtx);

export default function AutProvider({children}){
    const [autenticado, setAutenticado] = useState(false);
    const[usuario,setUsuario] = useState(null);

    async function autenticar(usuario,senha){

        //const credencial = {"usuario" : usuario, "senha" : senha};
       // const resposta = Await autenticarApi(credencial);

        if (usuario == "admin" && senha == "1234") {
            setAutenticado(true);
            setUsuario(usuario);
            return true;
        } else {
            setAutenticado(false);
            setUsuario(null);
            return false;
        }
    }

    function sair(){
        setAutenticado(false);
        setUsuario(null);
    }

    return (
        <AutCtx.Provider value={{autenticado, autenticar, sair, usuario}}>
            {children}
        </AutCtx.Provider>
    )
}