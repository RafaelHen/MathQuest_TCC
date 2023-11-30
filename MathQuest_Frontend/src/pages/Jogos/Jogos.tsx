import Menu from '../../components/menu/Menu';
import './Jogos.css'
import JogosComponent from '../../components/jogos-component/JogosComponent';
import colornImage from '../../assets/unnamed.png'

function Jogos() {


    return (<>
        <Menu />
        <div className='container-label'>
            <h2>Jogos</h2>
        </div>
        <JogosComponent nomeJogo='ColoronQuizz' linkJogo='src/service/JogoColoron/jogoColoron.html' linkImagem={colornImage}/>
        <JogosComponent nomeJogo='Carrasco Matrizes' linkJogo='src/service/DeterminanteGame/index.html' linkImagem={''}/>
    </>
    );
}

export default Jogos;

