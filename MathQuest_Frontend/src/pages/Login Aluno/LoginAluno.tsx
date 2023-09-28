import Logo from "../../assets/MathQuest.png"
import Ilustra from "../../assets/Ilustra.png"
import './Login.css';

function Login() {
  
  return (<>
    <div className="container">
        <div className="colunaImagens">
          <img src={Ilustra} alt='mathQuest' className='ilustra' />
        </div>
        <form>
          <img src={Logo} alt='mathQuest' className='logo' />
          <div className="inputContainer">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>

          <div className="inputContainer">
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" id="senha" />
          </div>

          <button className="button">Login</button>
        </form>
      </div></>)
  }
  
  export default Login
  