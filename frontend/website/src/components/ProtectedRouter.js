'use client';

import {useAuthCheck} from "@/customHooks/useAuthCheck";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

export function ProtectedRouter({children}) {
    const {isLoading, isLogged} = useAuthCheck();
    const router = useRouter();

    useEffect(() => {
        if(!isLoading && !isLogged) {
            router.push("/login")
        }
    }, [isLogged, isLoading, router]);

    if(isLoading || !isLogged) return null;

    return (
        <>
            {children}
        </>
    )
}

export default ProtectedRouter;