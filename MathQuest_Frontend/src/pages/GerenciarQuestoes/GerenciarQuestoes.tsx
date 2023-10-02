import Menu from '../../components/Menu';
import './GerenciarQuestoes.css'
import Perguntas from '../../components/Perguntas/Perguntas';
function GerenciarQuestoes() {


    return (<>
        <Menu />
        <div className='container-label'>
            <h2 className='perguntaLbl'>Gerenciar Jogos</h2>
        </div>
        <div className="container-questoes">
            <h4 className='questoes-label'>Questões</h4>
            <button className='nova-questao'>Nova Questão</button>
        </div>
        <Perguntas/>
    </>
    );
}

export default GerenciarQuestoes;

