'use client';

import {createContext, useContext, useEffect, useState} from "react";

const MessageContext = createContext();

export function MessageProvider( {children}) {
    const [message, setMessage] = useState(null);

    useEffect(() => {
        if(message) {
            localStorage.setItem('message', JSON.stringify(message));
        } else {
            localStorage.removeItem('message');
        }
    },[message])

    return <MessageContext.Provider value={{message, setMessage}}>{children}</MessageContext.Provider>
}

export function useMessageContext() {
    return useContext(MessageContext);
}