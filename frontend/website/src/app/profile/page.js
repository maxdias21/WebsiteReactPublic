'use client';

import styles from './page.module.css';
import Introduction from "@/components/profile/Introduction";
import ProfileContent from "@/components/profile/ProfileContent";
import ProfileContentTop from "@/components/profile/ProfileContentTop";

import { useAuthCheck } from "@/customHooks/useAuthCheck";
import useGetProfile from "@/customHooks/useGetProfile";
import useGetPostsList from "@/customHooks/useGetPostsList";
import Message from "@/components/Message";

function Profile() {
    const { profile, isLoading, setProfile } = useGetProfile();
    const { posts } = useGetPostsList();

    return (
        <>
            {!isLoading && (
                <>
                    <ProfileContentTop profile={profile} isLoading={isLoading} />

                    <div className={styles.profileContainer}>
                        <Introduction
                            setProfile={setProfile}
                            profile={profile}
                            isLoading={isLoading}
                        />
                        <ProfileContent posts={posts} />
                    </div>
                </>
            )}
        </>
    );
}

export default Profile;
