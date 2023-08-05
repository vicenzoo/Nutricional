import styles from "./Header.module.scss"
import logo from "./diet-32.png"

export default function Header(){
    return (
    <header className={styles.Header}>
        <div className={styles.Title}>
            <h1>  Nutricional <img src={logo} alt="Logo"/> </h1> 
        </div>
    </header>
    )
}