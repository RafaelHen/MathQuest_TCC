import '../Inicio/Inicio.css'
import Ilustra from "../../assets/Ilustra.png"
import Logo from "../../assets/MathQuest.png"

function Inicio() {
    return (
        <div className="container">
            <div className="colunaImagens">
            <img src={Ilustra} alt='mathQuest' className='ilustra' />
            </div>

            <div className="botoes">
                <img src={Logo} alt='mathQuest' className='logo' />

                <div className="buttonsContainer">
                    <a href='/login' >
                        <button className='btn-opcoes' >Sou Professor</button>
                    </a>
                </div>

                <div className="buttonsContainer">
                    <a href='/login' >
                        <button className='btn-opcoes' >Sou Aluno</button>
                    </a>
                </div>
            </div>
           

        </div>
    );
}

export default Inicio;