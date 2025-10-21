import styles from './Cards.module.css'

import CardProfile from "@/components/CardProfile";

function Cards({profiles}) {

    return (
        <div className={styles.cards}>
            {profiles.map(profile => (
                <CardProfile key={profile.id} profile={profile} />
            ))}

        </div>
    )
}

export default Cards;