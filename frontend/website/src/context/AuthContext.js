'use client';

import {createContext, useState, useContext,} from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isLogged, setIsLogged] = useState(false);

    return (
        <AuthContext.Provider value={{isLogged, setIsLogged}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}