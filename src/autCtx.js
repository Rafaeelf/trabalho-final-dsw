import { createContext, useContext, useState } from "react";
import { autenticarApi, obterUserEmailApi } from "./Api/Service";
import { Navigate } from "react-router-dom";

export const AutCtx    = createContext();
export const useAutCtx = () =>useContext(AutCtx);

export default function AutProvider({children}){
    const [autenticado, setAutenticado] = useState(false);
    const[usuario,setUsuario] = useState(null);
    const[tipo,setAdministrador] = useState(false);

    async function autenticar(usuario,senha){              
        const credencial = {"userEmail": usuario, "senha":senha};
        const resposta = await autenticarApi(credencial);
        const foiAutenticado = resposta.data;

        if (foiAutenticado) {
            const user = obterUserEmailApi(credencial.userEmail);
            const id = (await user).data.id;
            const tipoUser = (await user).data.tipo;
            if(tipoUser === 2){
                setAdministrador(true);
            } else {
                setAdministrador(false);
            }            
            setUsuario(id);
            setAutenticado(true);            
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
        Navigate(`/inicio`);
    }

    function atualizaDadosCadastro(usuario){
        setUsuario(usuario);
        setAutenticado(true);
    }

    return (
        <AutCtx.Provider value={{autenticado, autenticar, sair, usuario, atualizaDadosCadastro,tipo}}>
            {children}
        </AutCtx.Provider>
    )
}