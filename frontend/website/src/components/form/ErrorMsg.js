import styles from './ErrorMsg.module.css'

function ErrorMsg({children}) {
    return (
        <p className={styles.error}>{children}</p>
    )
}

export default ErrorMsg;