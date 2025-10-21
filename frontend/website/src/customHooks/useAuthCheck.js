'use client';

import { useEffect, useState } from 'react';

export function useAuthCheck() {
    const [isLogged, setIsLogged] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function checkAuth() {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_USE_AUTH_CHECK}`,
                    {
                        method: 'GET',
                        credentials: 'include',
                    }
                );
                setIsLogged(response.ok);
            } catch (error) {
                setIsLogged(false);
            } finally {
                setIsLoading(false);
            }
        }

        checkAuth();
    }, []);

    return { isLoading, isLogged };
}
