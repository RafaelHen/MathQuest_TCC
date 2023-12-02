import Menu from '../../components/menu/Menu';
import './Jogos.css'
import JogosComponent from '../../components/jogos-component/JogosComponent';
import colornImagem from '../../assets/unnamed.png'
import carrascoImagem from '../../assets/Carrasco.png'

function Jogos() {


    return (<>
        <Menu />
        <div className='container-label'>
            <h2>Bem vindo, Rafael</h2>
        </div>
        <div className="jogosElementos">
            <JogosComponent nomeJogo='ColoronQuizz' linkJogo='src/service/JogoColoron/jogoColoron.html' linkImagem={colornImagem}/>
            <JogosComponent nomeJogo='Carrasco Matrizes' linkJogo='src/service/DeterminanteGame/index.html' linkImagem={carrascoImagem}/>
        </div>
    </>
    );
}

export default Jogos;

