import './Tabela.css'


function Tabela() {
    return ( 

        <table className="tabela-aluno">
        <thead>
          <tr>
            <th>Açoes</th>
            <th>Nome do Aluno</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody className="tabela-aluno-body">
            <tr>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
            </tr>

        </tbody>
      </table>
  
    
        );
}

export default Tabela;