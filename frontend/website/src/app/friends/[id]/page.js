'use client';

import Image from 'next/image';
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import styles from './page.module.css';
import stylesIntroduction from '@/components/profile/Introduction.module.css';
import ProfileContent from "@/components/profile/ProfileContent";
import ProfileExists from "@/components/profile/ProfileExists";

function FriendProfile() {
    const params = useParams();
    const [profile, setProfile] = useState(null);
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    console.log(params.id);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch profile
                const resProfile = await fetch(
                    `https://maxdias21.pythonanywhere.com/api/profile/detail/${params.id}/`,
                    {
                        method: "GET",
                        credentials: "include",
                    }
                );

                if (!resProfile.ok) {
                    setProfile(null);
                    setError('Perfil não encontrado');
                } else {
                    const dataProfile = await resProfile.json();
                    setProfile(dataProfile);
                }
                console.log(resProfile);

                // Fetch posts
                const resPosts = await fetch(
                    `https://maxdias21.pythonanywhere.com/api/posts/list/${params.id}/`,
                    {
                        method: "GET",
                        credentials: "include",
                    }
                );

                if (!resPosts.ok) {
                    setPosts([]);
                    setError(new Error("Perfil não encontrado"));
                } else {
                    const dataPosts = await resPosts.json();
                    console.log(dataPosts);
                    setPosts(dataPosts);
                }

            } catch (err) {
                setError('Erro ao buscar dados');
                setProfile(null);
                setPosts([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [params.id]);


    return (
        <>
            <div className={styles.contentContainer}>
                <div className={styles.content}>
                    {!isLoading && (
                        <Image
                            className={styles.imgProfile}
                            alt="Foto do Perfil"
                            width={800}
                            height={800}
                            src={profile?.profile_photo || '/images/media/no-profile.webp'}
                        />
                    )}
                    <h1 className={styles.name}>max vieira</h1>
                </div>
            </div>

            <div className={styles.profileContainer}>
                <div className={stylesIntroduction.introduction}>
                    {profile ? (
                        <ProfileExists userProfile={profile} isLoading={isLoading} />
                    ) : (
                        <h2 className={styles.h2}>Esse usuário não criou um perfil ainda</h2>
                    )}
                </div>

                <ProfileContent posts={posts} />
            </div>
        </>
    );
}

export default FriendProfile;
