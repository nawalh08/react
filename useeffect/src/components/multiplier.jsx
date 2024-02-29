import React, { useEffect , useState } from 'react';

const Multiple = (props) => {
    const [nombreA , setNombreA] = useState(0)
    const [nombreB , setNombreB] = useState(0)
    const [showResult , setShowResult] = useState(false)
    const resultat = props.resultat

    const nombreAInputHandler = (event) => {
        setNombreA(+event.target.value)
    }

    const nombreBInputHandler = (event) => {
        setNombreB(+event.target.value) // Le + devant le event sert à dire que c'est de type nombre, on pourrais le remplacer par number ou par parseInt
    }

    useEffect(() => {
        let multiplication = nombreA * nombreB;
        if (resultat===multiplication){
            setShowResult(true)
        
        } else setShowResult(false)
    })

    const message = () => {
        if (showResult) {
            return `La multiplication fait bien ${resultat}`
        } else 
        return `La multiplication ne fait pas ${resultat}`
    }

  

    return (
        <div>
            <div>
                <label htmlFor="nombreA">NombreA</label>
                <input type="text" value={nombreA} onInput={nombreAInputHandler}/>
            </div>
            <div>
                <label htmlFor="nombreB">NombreB</label>
                <input type="text" value={nombreB} onInput={nombreBInputHandler}/>
            </div>
            <hr />
           <p>{message()}</p>
        </div>
    )
}

export default Multiple;
