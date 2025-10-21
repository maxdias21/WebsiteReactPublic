import {forwardRef, useState} from "react";
import {capitalize} from "lodash";

import {profileFields} from "@/constants/formFields";

import Input from "@/components/form/Input";
import ModalPost from "@/components/post/ModalPost";

import styles from "./ProfileForm.module.css";
import stylesInput from "@/components/form/Input.module.css";

const ProfileForm = forwardRef((
    {onChange, profileFields, hasProfile, isSubmitting, handleSubmit},
    ref
) => {

    const [visibility, setVisibility] = useState('public');
    const defaultValueMarginBottom = '15px';

    return (
        <ModalPost
            titleButton={hasProfile ? "Editar perfil" : "Criar perfil"}
            titleButtonIsLoading={hasProfile ? "Editando..." : 'Criando...'}
            ref={ref}
            isSubmitting={isSubmitting}
            handleSubmit={handleSubmit}
        >
            {profileFields.map((field) => (
                <div key={field.name} style={{marginBottom: defaultValueMarginBottom}}>
                    <Input
                        text={`${capitalize(field.label)}:`}
                        name={field.name}
                        type={field.type || "text"}
                        {...(field.type !== 'file' ? {value: field.value} : {})}
                        onChange={onChange}
                        minLength={field.minLength}
                        maxLength={field.maxLength}
                    />

                    {field.errors &&
                        Object.values(field.errors).map((error, index) => (
                            <div
                                className={styles.error}
                                key={index}
                            >
                                {error}
                            </div>
                        ))}
                </div>
            ))}
            <label className={stylesInput.label}>Status do perfil:</label>
            <select style={{marginBottom: defaultValueMarginBottom}}
                    className={stylesInput.input}
                    name="visibility" value={visibility}
                    onChange={(e) => setVisibility(e.target.value)}>
                <option value="public">Público</option>
                <option value="private">Privado</option>
            </select>
        </ModalPost>
    );
});

export default ProfileForm;
