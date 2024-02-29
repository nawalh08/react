import logo from './logo.svg';
import './App.css';
import LoginRef from './components/loginFormulaire';

function App() {
  const logUserInfo = (infos) => {
    console.log(infos)
  }
 
  return (
    <div className="App">
     <LoginRef logUserInfo = {logUserInfo}/>
    </div>
  );
}

export default App;
