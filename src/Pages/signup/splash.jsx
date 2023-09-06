import React from 'react'
import styles from "./Splash.module.scss"
import { useNavigate} from "react-router-dom";

const SplashPage = () => {

    const navigate = useNavigate()

    return (
        <div className={styles.splash}>
            <h1> Selecione seu Perfil: </h1>
            <button className={styles.button} onClick={() => navigate("/signup/patient")}> Paciente </button>
            <button className={styles.button} onClick={() => navigate("/signup/nutritionist")}> Nutricionista </button>       
        </div>
    )
}

export default SplashPage