import './Menu.css'
import Logo from '../../assets/MathQuestMenu.png'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function Menu() {
  return (<>
      <ul className="conainer-lista">
        <li><img src={Logo} alt="" className="Logo"/></li>
        <li className='sair'><a href="#about"><ExitToAppIcon/></a></li>

      </ul>

      {/* */}
      {/* <div className="btn-sair">
        <a className="sair">
          <ExitToAppIcon />
        </a>
      </div> */}
  </>
  );

}

export default Menu;