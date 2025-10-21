import styles from "./IntroMessage.module.css";

function IntroMessage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Max Dias</h1>
            <p className={styles.text}>Um lugar onde tecnologia, criatividade e propósito se encontram. Seja bem-vindo
                ao meu espaço pessoal.</p>
        </div>
    )
}

export default IntroMessage;