import './App.css'

import Logo from './components/template/Logo'
import Menu from './components/template/Menu'
//import Main from './components/template/Main'
import Footer from './components/template/Footer'
import Rotas from './Rotas';
import { BrowserRouter } from 'react-router-dom';
//import CrudAluno from './components/CrudAluno/CrudAluno'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Logo />
        <Menu />
        <Rotas />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
