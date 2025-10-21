import styles from "./ProfileContent.module.css";

import Post from "@/components/profile/Post";

import useGetPostsList from "@/customHooks/useGetPostsList";

function ProfileContent({posts}) {
    return (
        <div className={styles.content}>
            {posts && posts.map((post, index) => (
                   <Post customStyle={{'overflowY': 'visible', 'maxHeight': '100%', 'minHeight': '0px'}} key={post.id} user={post.user} content={post.content} image={post.image}
                          created_at={post.created_at}/>
            ))}
        </div>
    );
}

export default ProfileContent;