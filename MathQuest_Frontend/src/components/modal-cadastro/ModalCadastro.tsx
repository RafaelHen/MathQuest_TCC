import './ModalCadastro.css'


interface ModalProps{
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
          <form className = "input-container">
            <div className="escola">
              <label htmlFor="email">Nome da Escola: </label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="inputContainer-horizontal">
              <label htmlFor="turma">
                Turma
                <input type="password" name="senha" id="senha" />
              </label>

              <label htmlFor="serie">
                Serie
                <input type="password" name="senha" id="senha" />
              </label>
           </div>
            
          </form>
         <button className="btn-salvar">Salvar</button>
        </div>

    </div>
    </>
    )

}

