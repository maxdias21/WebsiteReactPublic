import styles from './Profile.module.css';

function ProfileEmpty() {
    return (
        <span>
            <h2 className={styles.h2}>Apresentação</h2>
            <p>Crie seu perfil</p>
            <hr/>
        </span>
    );
}

export default ProfileEmpty;