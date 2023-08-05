import React from 'react'
import styles from "./about.module.scss"

export default function About() {
  return (
    <div className={styles.about}>
        <h1> Sobre o Nutricional: </h1>
        <h2> O sistema de atendimento e acompanhamento a <span> Nutrição </span> </h2>
        <p> 
          O Nutricional surgiu como uma forma de unir nutricionistas e seus pacientes em
          um lugar só. Para isso contamos uma interface e experiencia muito agradaveis de usar!       
        </p>
    </div>
  )
}
