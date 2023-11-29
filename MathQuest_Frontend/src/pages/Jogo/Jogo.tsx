import './Jogo.css'
import Menu from '../../components/menu/Menu';

function Jogo() {
    const titulo: string = "titulo";

    return (  <>
        <Menu/>
        <div className="containerHeader">
            <header className="tituloJogo">
                <h1>{titulo}</h1>
            </header>
        </div>
        <div className="containerJogo">
            {/* <iframe className="jogo" src="http://127.0.0.1:5500/src/service/JogoColoron/jogoColoron.html" title="YouTube video player"></iframe> */}
            <iframe className="jogo" src="http://127.0.0.1:5500/src/service/DeterminanteGame/index.html" title="YouTube video player"></iframe>
        </div>


        </>
    );
}

export default Jogo;