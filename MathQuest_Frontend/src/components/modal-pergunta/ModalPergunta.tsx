import { Checkbox } from '@mui/material';
import './ModalPergunta.css'


interface ModalProps {
  closeModal(): void;
}

export function ModalPergunta({ closeModal }: ModalProps) {

  return (<>
    <div className="modal-overlay">
      <div className="modal-body">
        <div className="header-modal">
          <h1> Perguntas </h1>
          <button onClick={closeModal} className="close">X</button>
        </div>
        <form className="form-pergunta">
          <div className="input-container-perguta">
            <label>Enunciado</label>
            <textarea/>
          </div>
          <div className="input-container-perguta">
            <label>Resposta 1</label>
            <input/><Checkbox/>
          </div>
          <div className="input-container-perguta">
            <label>Resposta 2</label>
            <input/><Checkbox/>
          </div>
          <div className="input-container-perguta">
            <label>Resposta 3</label>
            <input/><Checkbox/>
          </div>
          <div className="input-container-perguta">
            <label>Resposta 4</label>
            <input/><Checkbox/>
          </div>
        </form>
        <button className="btn-salvar">Salvar</button>
      </div>

    </div>
  </>
  )

}

