import './Registrar.css'
import Logo from "../../assets/MathQuest.png"
import Ilustra from "../../assets/Ilustra.png"
function Professor() {

  return (<>
    <div className="container">
      <div className="colunaImagens">
        <img src={Ilustra} alt='mathQuest' className='ilustra' />
      </div>
      <form>
        <img src={Logo} alt='mathQuest' className='logo' />

        <div className="inputContainer-nome">
          <label htmlFor="email">Nome e Sobrenome</label>
          <input type="text" name="email" id="email" />
        </div>

        <div className="inputContainer-horizontal">
          <label htmlFor="senha">
            Senha
            <input type="password" name="senha" id="senha" />
          </label>

          <label htmlFor="senha">
            Confirmar Senha
            <input type="password" name="senha" id="senha" />
          </label>
        </div>

        <div className="inputContainer-horizontal">
          <label htmlFor="senha">
            CPF
            <input type="text" name="senha" id="senha" />
          </label>

          <label htmlFor="senha">
            Telefone
            <input type="text" name="senha" id="senha" />
          </label>
        </div>

        <div className="inputContainer-nome">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>

        <button className="button">Login</button>
      </form>
    </div></>);
}

export default Professor;

