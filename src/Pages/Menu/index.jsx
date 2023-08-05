import React from 'react'
import styles from "./Menu.module.scss"

export default function Menu() {
    return (
        <div className={styles.Menu}>
            <nav> Bem-vindo!
                <ul>
                    <li>
                        <a href='/'>Login</a>
                    </li>
                    <li>
                        <a href='/'>Cadastre-se</a>
                    </li>
                    <li>
                        <a href='/'>Sobre</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
