import Menu from '../../components/menu/Menu';
import './Jogos.css'
import JogosComponent from '../../components/jogos-component/JogosComponent';

function Jogos() {


    return (<>
        <Menu />
        <div className='container-label'>
            <h2 className='perguntaLbl'>Jogos</h2>
        </div>

        <JogosComponent/>
    </>
    );
}

export default Jogos;

