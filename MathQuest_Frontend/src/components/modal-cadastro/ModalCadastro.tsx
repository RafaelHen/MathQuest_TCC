import Tabela from '../tabela/Tabela';
import './ModalCadastro.css'


interface ModalProps {
  closeModal(): void;
}

export function ModalCadastro({ closeModal }: ModalProps) {

  return (<>
    <div className="modal-overlay">
      <div className="modal-body">
        <div className="header-modal">
          <h1> Cadastrar Turma </h1>
          <button onClick={closeModal} className="close">X</button>
        </div>
        <form className="input-container">
          <div className="input-container-escola">
            <label htmlFor="email">Nome da Escola:</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="input-container-turma-serie">
            <div className="input-group">
              <label htmlFor="turma">Turma:</label>
              <input type="text" name="turma" id="turma" />
            </div>
            <div className="input-group-serie">
              <label htmlFor="serie">Serie:</label>
              <input type="text" name="serie" id="serie" />
            </div>
          </div>
            <div className='fooder-modal'>
              <h4>Informações de Cadastro</h4>  
              <div className="footer-btn">
                <button className="btn-adicionar">Adicionar Aluno</button>
                <button className="btn-importar">Importar Aluno</button>
              </div>
            </div>
              <Tabela/>

        </form>
        <button className="btn-salvar">Salvar</button>
      </div>

    </div>
  </>
  )

}

