import React from 'react'
//import "materialize-css/dist/css/materialize.min.css"
import styles from "./Nutritionist.module.scss"

const Nutritionist = () => {
    return (
        <>
            <div className={styles.nutri}>
                <h2> Cadastre-se: </h2>

                <form action="/nutricionista" method="post">

                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" />

                    <label for="sobrenome">Sobrenome:</label>
                    <input type="text" id="sobrenome" name="sobrenome" />

                    <label for="sobrenome">CPF:</label>
                    <input type="text" name="cpf"
                        pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                        title="Digite um CPF no formato: xxx.xxx.xxx-xx" />

                    <label for="crn"> CRN: </label>
                    <input type="text" id="crn" name="crn" pattern="[0-9]+" />

                    <label for="Data_Nascimento"> Data Nascimento: </label>
                    <input type="date" id="Data_Nascimento" name="Data_Nascimento" />

                    <label for="email">Email:</label>
                    <input type="text" id="Email" name="Email" />

                    <button className={styles.button} type="submit" name="Confirmar">Confirmar </button>

                </form>
            </div>
        </>
    )
}

export default Nutritionist