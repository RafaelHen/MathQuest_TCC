import './Menu.css'
import Logo from '../../assets/MathQuestMenu.png'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function Menu() {
  return (<>
      <ul className="conainer-lista">
        <li><img src={Logo} alt="" className="Logo"/></li>
        <li className='sair'><a href="http://localhost:5173/"><ExitToAppIcon/></a></li>

      </ul>

  
  </>
  );

}

export default Menu;