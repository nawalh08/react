import React from 'react';
import ListingComponent from './ListingComponent';

const ChildComponent = (props) => {
  // let maVariable = props.maVariable
  // let sayHelloFromParent = props.sayHelloFromParent

  let {maVariable, sayHelloFromParent} = props;

  const ajout = () => {
    maListe.push("Toto")
   
    sayHelloFromParent()
  }

  return (  
    <div>
    
      <button onClick={ajout}>Ajouter !</button>
    </div>
  );
}

export default ChildComponent; 