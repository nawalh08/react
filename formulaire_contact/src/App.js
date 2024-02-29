import logo from './logo.svg';
import './App.css';
import Informations from './components/formulaire';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Informations/>
      <Contact Contact= {Contact} />
    </div>
  );
}

export default App;
