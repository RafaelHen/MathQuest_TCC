import Menu from '../../components/menu/Menu';
import './Jogos.css'
import JogosComponent from '../../components/jogos-component/JogosComponent';

function Jogos() {


    return (<>
        <Menu />
        <div className='container-label'>
            <h2>Jogos</h2>
        </div>
        <JogosComponent nomeJogo='ColoronQuizz' linkJogo='src/service/JogoColoron/jogoColoron.html'/>
        <JogosComponent nomeJogo='Carrasco Matrizes' linkJogo='src/service/DeterminanteGame/index.html'/>
    </>
    );
}

export default Jogos;

