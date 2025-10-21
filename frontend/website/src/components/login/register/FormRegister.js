import {handleChangeFields, showError} from "@/utils/fieldValidation";

import ErrorMsg from "@/components/form/ErrorMsg";
import Input from "@/components/form/Input";

import styles from "@/components/login/form.module.css";
import {useState} from "react";
import {useRouter} from "next/navigation";

function FormRegister({errors, isEnabled, minLength, maxLength, setFields, fields, setIsEnabled}) {
    const [errorsMsg, setErrorsMsg] = useState([]);
    const router = useRouter();

    const labels = {
        first_name: "Nome",
        last_name: "Sobrenome",
        username: "Usuário",
        email: "Email",
        password: "Senha"
    };

    async function handleSubmit(event) {
        event.preventDefault();
        setIsEnabled(true);

        try {
            const dataToSend = fields.reduce((acc, field) => {
                acc[field.name] = field.value;
                return acc;
            }, {});

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_ACCOUNTS_REGISTER}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataToSend)
            });

            const data = await response.json();

            const errMsg = data?.errors?.flatMap(errObj => Object.values(errObj)) || [];
            setErrorsMsg(errMsg);

            if (!errMsg.length) {
                router.push('/login/login');
            }
        } catch (error) {
            setErrorsMsg(['Erro ao enviar dados.']);
        }

        setIsEnabled(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            {fields.map(field => (
                <div key={field.name}>
                    <Input
                        text={labels[field.name]}
                        onChange={(e) => handleChangeFields(e, setFields)}
                        type={field.name === 'password' ? 'password' : 'text'}
                        name={field.name}
                        id={field.name}
                    />
                    {showError(
                        errors,
                        field.name,
                        'minLengthErrors',
                        `Campo ${labels[field.name].toLowerCase()} precisa ter no mínimo ${minLength.firstName} caracteres.`
                    )}
                    {showError(
                        errors,
                        field.name,
                        'maxLengthErrors',
                        `Campo ${labels[field.name].toLocaleLowerCase()} precisa ter no máximo ${maxLength.firstName} caracteres.`
                    )}

                    {field.name === "email" && !errors.emailHasAt && (
                        <ErrorMsg>Campo email precisa incluir um @</ErrorMsg>
                    )}

                    {field.name === "email" && !errors.isValidEmail && (
                        <ErrorMsg>Email inválido</ErrorMsg>)}
                    <div style={{marginBottom: '20px'}}></div>
                </div>
            ))}

            {errorsMsg.map((field, index) => (
                <div key={index}>
                    <ErrorMsg>{field}</ErrorMsg>
                </div>
            ))}

            <button style={{marginTop: '15px'}}
                    className={!isEnabled ? styles.button : `${styles.button} ${styles.disabled}`}
                    disabled={isEnabled} type="submit">Entrar
            </button>
        </form>
    );
}

export default FormRegister;