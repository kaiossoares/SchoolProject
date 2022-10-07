import './App.css'

import Logo from './components/template/Logo'
import Menu from './components/template/Menu'
import Main from './components/template/Main'
import Footer from './components/template/Footer'

function App() {
  return (
    <div className='App'>
      <Logo />
      <Menu />

      <Main title="Bem Vindo!">
        <div>Cadastro de alunos, cursos e carômetro</div>
      </Main>

      <Footer />
    </div>
  );
}

export default App;
