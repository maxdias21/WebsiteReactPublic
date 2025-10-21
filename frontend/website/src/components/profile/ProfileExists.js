import styles from './Profile.module.css';

function ProfileExists({userProfile}) {
    const {
        biography,
        current_instituition,
        birth_city,
        current_city,
        website,
        instagram,
        graduated_institution
    } = userProfile;

    return (
        <div>
            <h2 className={styles.h2}>Apresentação</h2>
            {biography && <p>{biography}</p>}
            <hr/>
            {userProfile.current_instituition && <p>Estuda na instituição de ensino {current_instituition}</p>}
            {graduated_institution && <p>Estudou na instituição de ensino {graduated_institution}</p>}
            {current_city && <p>Mora em {current_city}</p>}
            {birth_city && <p>De {birth_city}</p>}
            {instagram &&
                <div>
                    Instagram:
                    <a
                        className={styles.a}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://instagram.com/${instagram}`}>
                        {instagram}
                    </a>
                </div>}
            {website &&
                <div>
                    Website:
                    <a
                        className={styles.a}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://${website}`}>
                        {website}
                    </a>
                </div>}
        </div>
    );
}

export default ProfileExists;