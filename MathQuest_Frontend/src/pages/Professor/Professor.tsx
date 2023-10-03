import Menu from '../../components/Menu';
import './Professor.css'
import CreateIcon from '@mui/icons-material/Create';
import AddIcon from '@mui/icons-material/Add';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SearchIcon from '@mui/icons-material/Search';
import   { ModalCadastro }  from '../../components/modal-cadastro/ModalCadastro';
import { useState } from 'react';


function Professor() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handOpenModal = () => {
      setIsModalOpen(prev => !prev)
    }

    return (<>
        <Menu />
        <div className="container">
            <div className="container-btn">
                <button className="btnMenu"><CreateIcon className='icon'/> 
                    Gerenciar Jogos 
                </button>
                <button className="btnMenu">
                    <AddIcon className='icon'/>Cadastrar Turma
                </button>
                <button className="btnMenu">
                    <AutoAwesomeIcon className='icon'/>Gerenciar Turma
                </button>
                <button className="btnMenu"><SearchIcon className='icon' /> Consultar Desempenho </button>
                {isModalOpen && <ModalCadastro />}
                <button onClick={handOpenModal}>Novo</button>
            </div>
        </div>
    </>
    );
}

export default Professor;

