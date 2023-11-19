import Menu from '../../components/menu/Menu';
import './GerenciaJogos.css'
import Perguntas from '../../components/perguntas/Perguntas';
import { useState } from 'react';
import {ModalPergunta} from '../../components/modal-pergunta/ModalPergunta'

function GerenciaJogos() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handOpenModal = () => {
      setIsModalOpen(prev => !prev)
    }

    return (<>
        <Menu />
        <div className='container-label'>
            <h2 className='perguntaLbl'>Gerenciar Jogos</h2>
        </div>
        <div className="container-jogos">
            <label className='questoes-label'>Turma
            <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
            </label>
            
            <div className="funcionalidades">
                <button >Salvar</button>
                <button >Exportar Perguntas</button>
                <button >Importar Perguntas</button>

            </div>
        </div>
        {isModalOpen && <ModalPergunta closeModal={handOpenModal}/>}
        <Perguntas/>
    </>
    );
}

export default GerenciaJogos;

