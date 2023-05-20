import { useEffect, useState } from "react";
import { obterUsuariosApi } from "../Api/Service";

export default function Cliente() {
  
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => atualizarUsuarios(),[usuarios]);

  function atualizarUsuarios() {
    obterUsuariosApi()
      .then((resposta) => {
        setUsuarios(resposta.data);
      })
      .catch((erro) => console.log(erro));
  }

  return (
    <div class="container">
      <table className="table">
        <tbody>
          <th>Id</th>
          <th>Nome</th>
          <th>Tipo</th>
          {usuarios.map((produto) => (
            <tr key={produto.id}>
                <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.tipo === 1 ? "Cliente" : "Administrador"}</td>             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
