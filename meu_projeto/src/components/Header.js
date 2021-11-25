import styles from "./Header.module.css"

function Header(){
    return (
        <div className={styles.general}>
                <h1 className={styles.title}>
                    React Project
                </h1>
                <div>
                    <ul className={styles.list}>
                        <li>inicio</li>
                        <li>meio</li>
                        <li>fim </li>
                    </ul>
                </div>
        </div>
    )
}

export default Header