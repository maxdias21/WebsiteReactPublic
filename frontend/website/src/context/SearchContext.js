'use client';

import {createContext, useContext, useState} from "react";

const SearchContext = createContext();

export function SearchProvider({ children }) {
    const [results, setResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <SearchContext.Provider value={{results, setResults, searchTerm, setSearchTerm}}>{children}</SearchContext.Provider>
    )
}

export function useSearchContext() {
    return useContext(SearchContext);
}