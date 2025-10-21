import styles from './CardProfile.module.css';

import {useRouter} from "next/navigation";

function CardProfile({profile}) {
    const router = useRouter();

    const buttonClasses = `${styles.visitProfile} ${profile.visibility === 'private' ? styles.disabled : styles.enabled}`;
    return (
            <div className={styles.card}>
                <img className={styles.imgProfile}
                     src={profile?.profile_photo ? profile?.profile_photo : '/images/media/no-profile.webp' }/>
                <div className={styles.cardContainer}>
                    <div className={styles.name}>{profile.first_name} {profile.last_name}</div>
                    <button className={buttonClasses}
                            onClick={() => router.push(`/friends/${profile.id}/`)}> Visitar Perfil
                    </button>
                    <span
                        className={profile.visibility === 'public' ? styles.public : styles.private}>
                        Status: {profile.visibility === 'public' ? 'Público' : 'Privado'}
                </span>
                </div>
            </div>
    );
}

export default CardProfile;