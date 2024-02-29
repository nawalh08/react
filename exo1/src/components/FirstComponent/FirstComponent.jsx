import React from 'react';


const FirstComponent = () => {
    let tableau = [{nom :"Alice" , prenom :"Lemont" ,age: 29},{nom : "François" , prenom : "Lemaire" , age : 65}] 
  
  return ( 
    <div>
      <h1>Mon premier tableau</h1>
     
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prenom </th>
            <th>Age </th>
          </tr>
        </thead>
        <tbody>{
            tableau.map((tableau, index => { 
                return (
                    <tr key = {index}>
                    <td>{index.nom}</td>
                    <td>{index.prenom}</td>
                    <td>{index.age}</td>
                    </tr>
                )
                  
            }))
        }
        </tbody>
        

      </table>
    </div>
   );
}
 
export default FirstComponent;