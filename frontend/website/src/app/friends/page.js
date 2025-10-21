'use client';

import styles from './page.module.css';
import Cards from "@/components/Cards";
import { useEffect, useState } from "react";

function Friends() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_PROFILE_LIST}`,
                    {
                        method: "GET",
                        credentials: "include",
                    }
                );

                if (!res.ok) {
                    setError(new Error("Erro ao buscar dados."));
                    return;
                }

                const data = await res.json();
                setProfiles(data);

            } catch (err) {
                setError(new Error(err.message || "Erro desconhecido."));
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (isLoading) {
        return <h1 className={styles.noProfile}>Carregando...</h1>;
    }

    if (error) {
        return <h1 className={styles.noProfile}>{error.message}</h1>;
    }

    return (
        <>
            {profiles.length > 0 ? (
                <div className={styles.container}>
                    <h1 className={styles.h1}>Pessoas que você talvez conheça</h1>
                    <Cards profiles={profiles} />
                </div>
            ) : (
                <h1 className={styles.noProfile}>Nenhum perfil encontrado</h1>
            )}
        </>
    );
}

export default Friends;
