import { useRef, useState } from "react";



const TodoForm = ({ addTache }) => {
  const [id, setId] = useState(1)
  const titre = useRef("")
  const description = useRef("")
  const date = useRef("")



  const onSubmitHandler = (event) => {
    event.preventDefault() // éviter d'avoir la page qui se réactualise 
    const newTache = { id: id, titre: titre.current.value, description: description.current.value, date: date.current.value, fait: false }
    addTache(newTache)
    setId(id + 1)
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="card text-white bg-dark mb-5">
        <h1>TodoForm</h1>
        <div className="mb-3">
          <label htmlFor="titre" className="mx-5">Titre : </label>
          <input type="text" className=" form-control rounded" ref={titre} required />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="mx-4">Description : </label>
          <textarea cols={40} rows={10} className="form-control rounded" ref={description} required />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="mx-4">Date : </label>
          <input type="date" className="form-control rounded" ref={date} required />
        </div>
        <button className="mb-3 btn btn-success ">Ajouter une tâche</button>
      </form>
    </>
  );
}

export default TodoForm; 