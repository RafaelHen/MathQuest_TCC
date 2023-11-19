import Login from '../pages/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio/Inicio';
import Professor from '../pages/Professor/Professor';
import Jogo from '../pages/Jogo/Jogo';
import Registrar from '../pages/Registrar/Registrar'
import LoginAluno from '../pages/Login Aluno/LoginAluno';
import GerenciarQuestoes from '../pages/GerenciarQuestoes/GerenciarQuestoes';
import Jogos from '../pages/Jogos/Jogos'
import GerenciaJogos from '../pages/GerenciaJogos/GerenciaJogos'


function AppRoutes() {

    return (<>
        <div>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Inicio/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/professor' element={<Professor/>}/> 
              <Route path='/registrar' element={<Registrar/>}/> 
              <Route path='/jogo' element={<Jogo/>}/> 
              <Route path='/aluno' element={<LoginAluno/>}/> 
              <Route path='/gerenciarQuestoes' element={<GerenciarQuestoes/>}/> 
              <Route path='/jogos' element={<Jogos/>}/> 
              <Route path='/gerenciarJogos' element={<GerenciaJogos/>}/> 
            </Routes>
          </BrowserRouter>
        </div>
      </>)
  }
  
  export default AppRoutes
  