import Menu from '../../components/menu/Menu';
import './GerenciarQuestoes.css'
import Perguntas from '../../components/pergunta/Perguntas';
import { useState } from 'react';
import {ModalPergunta} from '../../components/modal-pergunta/ModalPergunta'

function GerenciarQuestoes() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handOpenModal = () => {
      setIsModalOpen(prev => !prev)
    }

    return (<>
        <Menu />
        <div className='container-label'>
            <h2 className='perguntaLbl' >Gerenciar Questões</h2>
        </div>
       <div className="container-questoes">
            <h4 className='questoes-label'>Questões</h4>
            <button className='nova-questao' onClick={handOpenModal}>Nova Questão</button>
        </div>
        {isModalOpen && <ModalPergunta closeModal={handOpenModal}/>}  
        <Perguntas/>
    </>
    );
}

export default GerenciarQuestoes;
