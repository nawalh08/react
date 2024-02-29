import './App.css';
import TodoForm from './components/TodoForm';
import Todolist from './components/Todolist';
import { useState } from 'react';

function App() {
  const [taches , setTaches] = useState([])
 

  const addTache = (tache) => {
    setTaches(previousTaches => [...previousTaches, tache])
    console.log(tache)
  }
  return (
    <div className="App">
      <TodoForm addTache={addTache}/>
      <Todolist taches={taches} setTaches={setTaches} />
    </div>
  );
}

export default App;
