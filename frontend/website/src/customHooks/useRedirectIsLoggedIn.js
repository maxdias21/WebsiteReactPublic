'use client';

import {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';

export function useRedirectIsLoggedIn() {
    const router = useRouter();

    useEffect(() => {
        async function checkAuth() {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_USE_REDIRECT_IS_LOGGEDIN}`, {
                    credentials: 'include',
                    method: 'GET',
                });

                if (response.ok) {
                    router.push('/');
                }

            } catch (error) {
                router.push('/login/login');
            }
        }

        checkAuth();
    }, [router]);
}
