import Link from "next/link";
import styles from "./IconLabel.module.css";
import { formatDistanceDateToNow } from "@/utils/formatDistanceDateToNow";

function IconLabel({ first_name, last_name, last_activity, linkImg, id }) {
    const result = formatDistanceDateToNow(last_activity);

    return (
        <Link href={`/friends/${id}/`}>
            <span className={styles.iconLabel}>
                <img
                    className={styles.photo}
                    src={linkImg}
                    alt={`${first_name} ${last_name} profile`}
                />
                <div className={styles.container}>
                    <span className={styles.text}>{first_name} {last_name}</span>
                    <span className={styles.hour}>{result}</span>
                </div>
            </span>
        </Link>
    );
}

export default IconLabel;
