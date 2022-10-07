import './App.css'

import Logo from './components/template/Logo'
import Menu from './components/template/Menu'
import Main from './components/template/Main'
import Footer from './components/template/Footer'
import CrudAluno from './components/CrudAluno/CrudAluno'

function App() {
  return (
    <div className='App'>
      <Logo />
      <Menu />
      <CrudAluno />
      <Footer />
    </div>
  );
}

export default App;
