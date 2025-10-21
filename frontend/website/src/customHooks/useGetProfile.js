import {useEffect, useState} from "react";

function useGetProfile() {
    const [profile, setProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const hasProfile = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_USE_GET_PROFILE}`,
                    {
                        method: 'GET',
                        credentials: 'include',
                    });

                const data = await response.json();
                setProfile(data);
            } catch (error) {
                setIsLoading(false);
            } finally {
                setIsLoading(false);
            }

        };
        hasProfile();
    }, []);

    return {profile, isLoading, setProfile};
}

export default useGetProfile;