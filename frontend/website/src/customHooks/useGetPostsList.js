import {useEffect, useState} from "react";

function useGetPostsList() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_USE_GET_POST_LIST}`, {
                        credentials: 'include',
                        method: 'GET'
                    }
                );

                if (!res.ok) {
                    setPosts([]);
                    return;
                }

                const data = await res.json();
                setPosts(data);
            } catch (error) {
                setPosts([]);
            } finally {
                setIsLoading(false);
            }
        };
        getData();
    }, []);

    return {posts, isLoading};
}

export default useGetPostsList;