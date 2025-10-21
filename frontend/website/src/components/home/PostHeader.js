import styles from "@/components/home/PostHeader.module.css";
import Post from "@/components/profile/Post";
import useGetPostsList from "@/customHooks/useGetPostsList";
import Link from "next/link";

function PostHeader() {
    const {posts} = useGetPostsList();

    return (
        <div className={styles.container}>
            {posts  && posts?.map((post) => (
                <div key={post.id}>
                    <Link className={styles.link} href={`/posts/${post.id}`}>
                        <Post id={post.id} user={post.user} content={post.content} image={post.image}
                              created_at={post.created_at} customStyle={{'overflowY': 'visible', 'maxHeight': '100%', 'minHeight': '0px'}}/>
                    </Link>
                </div>
            ))}
        </div>
    );
}


export default PostHeader;