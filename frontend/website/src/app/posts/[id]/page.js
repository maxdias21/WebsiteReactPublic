'use client';

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import styles from './page.module.css';
import Post from "@/components/profile/Post";

export function PostPage() {
    const params = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_POST_DETAIL}${params.id}/`, {
                    method: "GET",
                    credentials: 'include',
                    cache: 'no-store'
                });

                if (!res.ok) {
                    if (res.status === 401) setError(new Error("Você precisa estar logado"));
                    else if (res.status === 404) setError(new Error("Post não encontrado"));
                }

                const data = await res.json();
                setPost(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [params.id]);

    return (
        <div className={styles.container}>
            <Post
                content={post?.content}
                created_at={post?.created_at}
                image={post?.image}
                user={post?.user}
            />
        </div>
    );
}

export default PostPage;
