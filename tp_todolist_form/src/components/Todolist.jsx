import { useState, useEffect } from "react";
const Todolist = ({ taches, setTaches, }) => {

  const removeTache = (id) => {
    const updatedList = taches.filter((tache) => tache.id !== id);
    setTaches(updatedList);
  };
  const onToggle = (id) => {
    const oldTache = taches.find(taches => taches.id === id)
    if (oldTache) {
      oldTache.fait = !oldTache.fait
      setTaches([...taches.filter(taches => taches.id != id), oldTache])
    }
  }




  return (
    <>
      <div className="card text-white bg-dark mb-5">
        <h1>Todos</h1>
        {
          taches.length > 0 ?
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Titre</th>
                  <th>description</th>
                  <th>date</th>
                </tr>
              </thead>
              <tbody>
                {taches.sort((x,y)=> x.id - y.id).map((tache, index) => (
                  <tr key={index}>
                    <td>{tache.id}</td>
                    <td>{tache.titre}</td>
                    <td>{tache.description}</td>
                    <td>{tache.date}</td>
                    <td>
                      <button className="btn btn-danger mb-3 " onClick={() => removeTache(tache.id)}> X </button>
                      <button className={`btn ${tache.fait ? 'btn-success' : 'btn-warning'}`}
                        onClick={() => onToggle(tache.id)}>
                        {tache.fait ? 'Fait' : 'À faire'}
                      </button>
                    </td>
                  </tr>

                ))}
              </tbody>
            </table>
            :
            <p>Il n'y a pas de tache pour le moment</p>

        }

      </div>

    </>
  );
}

export default Todolist;