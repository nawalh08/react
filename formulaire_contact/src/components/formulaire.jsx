import React, { useEffect, useState } from 'react';


const Informations = () => {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");



    const nomInputHandler = (event) => {
        setNom(event.target.value)
    };

    const prenomInputHandler = (event) => {
        setPrenom(event.target.value)
    };

    const emailInputHandler = (event) => {
        setEmail(event.target.value)
    };

    return (
        <form action="*">
            <table>
                <div>
                    <label htmlFor="nom">nom</label>
                    <input type="text" value={nom} onInput={nomInputHandler} />
                </div>
                <div>
                    <label htmlFor="prénom ">prenom</label>
                    <input type="text" value={prenom} onInput={prenomInputHandler} />
                </div>
                <div>
                    <label htmlFor="email">adresse email </label>
                    <input type="text" value={email} onInput={emailInputHandler} />
                </div>
            </table>
        </form>
    )
};
export default Informations;


