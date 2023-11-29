import './Registrar.css'
import Logo from "../../assets/MathQuest.png"
import Ilustra from "../../assets/Ilustra.png"
import { useState, useCallback } from 'react';
import { Credenciais, credenciasiMoch } from '../../types/professorRegistro'
import { succesLoginAlert } from '../../components/alerts/alerts'
import { useNavigate } from 'react-router-dom'


function Professor() {
  const navegacao = useNavigate();

  const [credenciais, setCredenciais] = useState<Credenciais>(credenciasiMoch);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> ) =>{
    const {name,value} = event.target;
    setCredenciais({...credenciais, [name]:value})
  }

  const succesRegistro = async (event: React.FormEvent<HTMLFormElement>)=> {
    event.preventDefault();

    
    if(credenciais.senha != credenciais.senhaConfirmar ){
      window.alert("Senhas nao coici")
    }
    navegacao("/professor")

  };

  return (<>
    <div className="container">
      <div className="colunaImagens">
        <img src={Ilustra} alt='mathQuest' className='ilustra' />
      </div>
      <form onSubmit={succesRegistro}>
        <img src={Logo} alt='mathQuest' className='logo' />

        <div className="inputContainer-nome">
          <label htmlFor="email">Nome e Sobrenome</label>
          <input type="text" name="nomeSobrenome" onChange={handleInputChange} />
        </div>
        <div className="inputContainer-horizontal">
          <label htmlFor="senha">
            Senha
            <input type="password" name="senha" onChange={handleInputChange}/>
          </label>

          <label htmlFor="senha">
            Confirmar Senha
            <input type="password" name="senhaConfirmar" onChange={handleInputChange} />
          </label>
        </div>

        <div className="inputContainer-horizontal">
          <label htmlFor="senha">
            CPF
            <input type="text" name="cpf" onChange={handleInputChange}/>
          </label>

          <label htmlFor="senha">
            Telefone
            <input type="text" name="telefone" onChange={handleInputChange}/>
          </label>
        </div>

        <div className="inputContainer-nome">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" onChange={handleInputChange} />
        </div>

        <button className="button" >Login</button>
      </form>
    </div></>);
}

export default Professor;

