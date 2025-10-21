'use client';

import { useSearchContext } from '@/context/SearchContext';
import CardProfile from "@/components/CardProfile";
import Post from "@/components/profile/Post";
import styles from "./page.module.css";

export default function Search() {
    const { results, searchTerm } = useSearchContext();
    const { posts, users } = results;

    return (
        <div className={styles.container}>
            {users && users.length > 0 && (
                <div>
                    <h2 className={styles.h2}>Usuários encontrados com {searchTerm}</h2>
                    <div className={styles.content}>
                        {users.map(user => (
                            <CardProfile key={user.id} profile={user} />
                        ))}
                    </div>
                </div>
            )}

            {posts && posts.length > 0 && (
                <div>
                    <h2 className={styles.h2}>Posts encontrados com {searchTerm}</h2>
                    <div className={styles.content}>
                        {posts.map(post => (
                            <Post
                                key={post.id}
                                id={post.id}
                                user={post.user}
                                content={post.content}
                                image={post.image}
                                created_at={post.created_at}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
