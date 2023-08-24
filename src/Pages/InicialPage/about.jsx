import React from 'react'
import styles from "./about.module.scss"
import { useNavigate} from "react-router-dom";


export default function About() {

  const navigate = useNavigate()

  return (
    <div className={styles.about}>  
        <h1> O sistema de atendimento e acompanhamento a <span> Nutrição </span> </h1>

        <h3> Comece agora mesmo:</h3>
        <input type='email' placeholder='Insira seu Email'/>
        <button className={styles.button} onClick={() => navigate("/splash")}> Cadastre-se </button>

        <button className={styles.button} onClick={() => navigate("/login")}> Login </button>
    </div>
  )
}
