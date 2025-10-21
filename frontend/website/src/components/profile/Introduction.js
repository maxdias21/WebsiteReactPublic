import { useEffect, useRef, useState } from "react";
import { useMessageContext } from "@/context/MessageContext";
import useSetMessage from "@/customHooks/useSetMessage";

import Message from "@/components/Message";
import ProfileEmpty from "@/components/profile/ProfileEmpty";
import ProfileExists from "@/components/profile/ProfileExists";
import ProfileForm from "@/components/profile/ProfileForm";

import { postCreate } from "@/utils/postCreate";
import { profileFields } from "@/constants/formFields";

import styles from "./Introduction.module.css";

function Introduction({ profile, setProfile }) {
    const ref = useRef(null);
    const [user, setUser] = useState(profileFields);
    const [profileUser, setProfileUser] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState(null);

    useSetMessage(message ? { message: message.message, type: message.type } : { message: null });

    useEffect(() => {
        if (profile) {
            setUser(
                profileFields.map(field => ({
                    ...field,
                    value: field.type === 'file' ? undefined : profile[field.name] || '',
                }))
            );
        }
    }, [profile]);

    function closeModal({ data }) {
        ref.current.close();
        setUser(
            profileFields.map(field => ({
                ...field,
                value: data[field.name] || '',
            }))
        );

        setProfileUser(data);

        setProfile(prevProfile => ({
            ...prevProfile,
            ...data,
        }));
    }

    function onChange(event) {
        const { name, value, type, files } = event.target;

        setUser(prevUser =>
            prevUser.map(field =>
                field.name === name ? { ...field, value: type === 'file' ? files[0] : value } : field
            )
        );
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setIsSubmitting(true);

        const method = profile ? 'PATCH' : 'POST';
        const url = profile
            ? `${process.env.NEXT_PUBLIC_API_PROFILE_UPDATE}${profile.id}/`
            : `${process.env.NEXT_PUBLIC_API_PROFILE_CREATE}`;

        const formData = new FormData();

        user.forEach(field => {
            if (field.value) formData.append(field.name, field.value);
        });

        try {
            const res = await fetch(url, {
                credentials: "include",
                method: method,
                body: formData,
            });
            const data = await res.json();

            if (!res.ok) return;

            setMessage({ message: 'Perfil criado com sucesso!', type: 'success' });
            closeModal({ data });
        } catch (err) {
            closeModal({ data: {} });
            setMessage({
                message: 'Houve um erro ao editar seu perfil, tente novamente mais tarde!',
                type: 'error',
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    function handleModal() {
        ref.current.showModal();
    }

    return (
        <div className={styles.introduction}>
            {message && (
                <>
                    <Message />
                    <br />
                </>
            )}
            {profile ? <ProfileExists userProfile={profile} /> : <ProfileEmpty />}
            <ProfileForm
                isSubmitting={isSubmitting}
                ref={ref}
                profileFields={user}
                onChange={onChange}
                hasProfile={profile}
                handleSubmit={handleSubmit}
            />
            <button className={styles.button} onClick={handleModal}>
                {profile ? "Editar Perfil" : "Criar Perfil"}
            </button>
        </div>
    );
}

export default Introduction;
