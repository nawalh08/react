import { useEffect } from "react"

const Contact = () => {
    // let nom = "hammoudi"
    // let prenom = "nawal"
    // let adresseEmail = "naw@hotmail.com"
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const ajout = props.ajout

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
    )
};

export default Contact;