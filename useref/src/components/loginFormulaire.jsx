import { useRef } from "react";

const LoginRef = (props) => {
    const { logUserInfo } = props

    const firstnameRef = useRef();
    const passwordRef = useRef();

    const getValueFromInput = () => {
        const firstname = firstnameRef.current.value
        console.log(firstnameRef.current.value);
        const password = passwordRef.current.value
        console.log(passwordRef.current.value);
        
        logUserInfo({ firstname, password })
        firstnameRef.current.value = " "
        passwordRef.current.value = " "
    };




    return (
        <>
            <label htmlFor="firstname">Firstname</label>
            <input type="text" ref={firstnameRef} />
            <label htmlFor="password">Password</label>
            <input type="text" ref={passwordRef} />
            <button onClick={getValueFromInput}>Valider</button>
        </>
    );
}

export default LoginRef;