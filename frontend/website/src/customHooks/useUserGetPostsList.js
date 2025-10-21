import {useEffect, useState} from "react";

function useUserGetPostsList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_USE_USER_GET_POST_LIST}`,
                    {
                        credentials: "include",
                        method: "GET",
                    }
                );

                if (!res.ok) {
                    alert('erro');
                }

                const data = await res.json();
                setPosts(data);
            } catch (erro) {

            }
        };

        fetchPosts();
    }, []);

    return posts;
}

export default useUserGetPostsList;