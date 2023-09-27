import Login from '../pages/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio/Inicio';
// import PaginaJogo from '../pages/PaginaJogo/PaginaJogo';

function AppRoutes() {

    return (<>
        <div>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Inicio/>}/>
              <Route path='/login' element={<Login/>}/>
              {/* /* <Route path='/JogoBall' element={<PaginaJogo/>}/> */ }
            </Routes>
          </BrowserRouter>
        </div>
      </>)
  }
  
  export default AppRoutes
  