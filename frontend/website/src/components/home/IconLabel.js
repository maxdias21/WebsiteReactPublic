import styles from "./IconLabel.module.css";
import { formatDistanceDateToNow } from "@/utils/formatDistanceDateToNow";

function IconLabel({ user, date, linkImg }) {
    return (
        <span className={styles.iconLabel}>
            <img
                className={styles.photo}
                src={linkImg}
                alt={`${user} profile`}
            />
            <div className={styles.container}>
                <span className={styles.text}>{user}</span>
                <span className={styles.hour}>{formatDistanceDateToNow(date)}</span>
            </div>
        </span>
    );
}

export default IconLabel;
