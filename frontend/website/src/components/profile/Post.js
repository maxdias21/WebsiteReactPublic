import styles from "./Posts.module.css";

import IconLabel from "@/components/home/IconLabel";
import Link from "next/link";

function Post({id, user, content, image, created_at, customStyle}) {
    const postContent =
        <div className={styles.posts} style={customStyle || undefined}>
            <div className={styles.postContent}>
                <IconLabel user={user} date={created_at} text={content}
                           linkImg={image}/>
                <p className={styles.content}>{content}</p>
                {image && <img className={styles.img} src={image}/>}
            </div>
        </div>;


    return id ? <Link href={`/posts/${id}/`}>{postContent}</Link> : postContent;
}

export default Post;