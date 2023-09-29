import Logo from "../../assets/MathQuest.png"
import Ilustra from "../../assets/Ilustra.png"
// import './LoginAluno.css';

function Login() {
  
  return (<>
    <div className="container">
        <div className="colunaImagens">
          <img src={Ilustra} alt='mathQuest' className='ilustra' />
        </div>
        <form>
          <img src={Logo} alt='mathQuest' className='logo' />
          <div className="inputContainer">
            <label htmlFor="codigo">Código</label>
            <input type="text" name="codigo" id="codigo" />
          </div>
          <button className="button">Login</button>
        </form>
      </div></>)
  }
  
  export default Login
  