import styles from "@/app/profile/page.module.css";
import Image from 'next/image';

function ProfileContentTop({ profile, isLoading }) {
    console.log(profile);
    return (
        <div className={styles.contentContainer}>
            <div className={styles.content}>
                {!isLoading && (
                    <Image
                        className={styles.imgProfile}
                        alt="Foto do Perfil"
                        width={800}
                        height={800}
                        src={
                            profile?.profile_photo
                                ? profile.profile_photo
                                : '/images/media/no-profile.webp'
                        }
                    />
                )}
                <h1 className={styles.name}>
                    {profile?.first_name ? `${profile.first_name} ${profile.last_name}` : ''}
                </h1>
            </div>
        </div>
    );
}

export default ProfileContentTop;
