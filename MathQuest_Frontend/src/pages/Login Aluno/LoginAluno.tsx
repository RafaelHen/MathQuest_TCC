import Logo from "../../assets/MathQuest.png"
import Ilustra from "../../assets/Ilustra.png"
import { CredenciaisAluno, credenciaisAlunoMoch } from '../../types/alunoResgistro'
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { succesLoginAlert } from '../../components/alerts/alerts'

// import './LoginAluno.css';

function Login() {
  const navegacao = useNavigate();

  const [credenciaisAluno, setCredenciaisAluno] = useState<CredenciaisAluno>(credenciaisAlunoMoch);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> ) =>{
    const {name,value} = event.target;
    setCredenciaisAluno({...credenciaisAluno, [name]:value})
  }

  const succesRegistro = async (event: React.FormEvent<HTMLFormElement>)=> {
    event.preventDefault();

    
    if(credenciaisAluno.codigo == '123'){
      navegacao("/jogos");
      succesLoginAlert.fire();
    }
    
  };
  return (<>
    <div className="container">
        <div className="colunaImagens">
          <img src={Ilustra} alt='mathQuest' className='ilustra' />
        </div>
        <form onSubmit={succesRegistro}>
          <img src={Logo} alt='mathQuest' className='logo' />
          <div className="inputContainer">
            <label htmlFor="codigo">Código</label>
            <input type="text" name="codigo" onChange={handleInputChange} />
          </div>
          <button className="button">Login</button>
        </form>
      </div></>)
  }
  
  export default Login
  