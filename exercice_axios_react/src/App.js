import { useState, useEffect, useRef } from 'react'
// import Modal from "react-modal";
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Modal } from 'bootstrap';


function App() {
  const tacheRef = useRef("")
  const descriptionRef = useRef("")
  const [input, setInput] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  const [data, setData] = useState([]) // on déclare notre tableau data 
  useEffect(() => {
    axios.get("http://localhost:7777/taches") // On met la route qui nous ramène vers le chemin de notre bdd.json 
      .then((response) => { // si tout est bon me renvoyer toutes les commandes suivante avec le .then
        console.log(response);
        setData(response.data)
      }).catch(error => console.error(error)) // Sinon avec le catch on renvoie l'erreur dans la console
  }, [input])


  const addTache = () => { // On souhaite rajouter une nouvelle tâche
    axios.post("http://localhost:7777/taches", { nom: tacheRef.current.value, description: descriptionRef.current.value }) // On va chercher notre api et on définie ce qu'on souhaite ajouter comme tâche 
      .then((response) => { // Si tout ce passe bien , avec le .then on ajoute la tâche 
        setData(prev => [...prev, response.data])
        setInput(!input)
      }).catch((error) => { // sinon on aura un message d'erreur avec le .catch 
        console.error(error);
      })
  }

  const deleteTache = (id) => { // On supprime une tâche 


    axios.delete(`http://localhost:7777/taches/${id}`)
      .then(() => {
        console.log(`La tâche avec l'id ${id} est correctement supprimée`)

        setInput(!input)
      })
      .catch((error) => {
        console.error(error);
      })
  }

  const updateTache = (id) => {


    axios.put(`http://localhost:7777/taches/${id}`, { nom: tacheRef.current.value, description: descriptionRef.current.value })
      .then(response => {
        console.log(response.data)
        setInput(!input)
      })
      .catch(error => console.error(error))
  }
  const HandleOpen = () => {
    console.log(isOpen);
    setIsOpen(!isOpen)
    console.log(isOpen);
  }




  return (
    <div className="App">
      <form className='mt-4'>
        
          <div>
            <label htmlFor='AddTache' className='label-lg  mt-4 mb-4 mx-4'>Donnez un nom à votre tâche : </label>
            <input type='text' ref={tacheRef} className='input input-lg border border-3 rounded' ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Donnez une description à votre tâche : </label>
            <textarea className="form-control " cols={30} rows={10} ref={descriptionRef}  />
          </div>

          <button type='submit' className='btn btn-primary mx-5  mt-3 mb-4' onClick={() => addTache(tacheRef)}>Ajouter une tâche</button>
        
        {
          data && (
            <ul>
              {
                data.map((tache) => (
                  <table class="table table-dark">
                    <thead>

                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Description</th>
                      </tr>
                    </thead>
                    <tbody>

                      <tr>
                        <th scope="row">{tache.id}</th>
                        <td>{tache.nom}</td>
                        <td>{tache.description}</td>
                      </tr>
                      <td>
                        <button onClick={() => setIsOpen} className='btn btn-success mx-2'>Modifier </button>
                        {
                          isOpen && <Modal closeModal={() => setIsOpen(!isOpen)}>{updateTache}</Modal>
                        }
                        <button onClick={() => deleteTache(tache.id)} className='btn btn-danger'>Supprimer </button>
                      </td>

                    </tbody>
                  </table>

                ))
              }
            </ul>
          )
        }
      </form>
    </div>

  );
}

export default App;
