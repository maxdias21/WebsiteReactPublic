import {useEffect, useState} from "react";

import styles from './Container.module.css';

import stylesRight from './RightContainer.module.css';

import IconLabelUser from "@/components/home/IconLabelUser";

function RightContainer() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_PROFILE_LIST_LAST_USERS}`,
                    {
                        method: "GET",
                        credentials: "include",
                    }
                );

                if (response.ok) {
                    const data = await response.json();
                    if (Array.isArray(data) && isLoading) {
                        setUsers(data);
                    }
                }
            } catch (error) {
                // Você pode adicionar um console.error(error) aqui se quiser logar erros
            } finally {
                setIsLoading(false);
            }
        }

        fetchUsers();
    }, [isLoading]);

    if (!isLoading && users.length === 0) {
        return <h4 className={styles.noContact}>Nenhum contato disponível</h4>;
    }

    return (
        !isLoading && users.length > 0 && (
            <div className={styles.containerRight}>
                <h6 className={stylesRight.title}>Contatos</h6>
                <div>
                    {users.map(user => (
                        <IconLabelUser
                            key={user.id}
                            id={user.id}
                            last_activity={user.last_activity}
                            first_name={user.first_name}
                            last_name={user.last_name}
                            linkImg={user.profile_photo}
                        />
                    ))}
                </div>
            </div>
        )
    );
}

export default RightContainer;
