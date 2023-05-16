import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { obterUsuariosApi } from "../Api/Service";

export default function Cliente() {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => atualizarUsuarios());

  function atualizarUsuarios() {
    obterUsuariosApi()
      .then((resposta) => {
        setUsuarios(resposta.data);
      })

      .catch((erro) => console.log(erro));
  }

  function visualizarTarefa(id) {
    console.log(id);
    navigate(`/produtoDetalhes/${id}`);
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
              <td>{produto.tipo == 1 ? "Cliente" : "Administrador"}</td>
              <td>
                <button className="btn btn-success mb-3" onClick={() => visualizarTarefa(produto.id)}> Ver + </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
