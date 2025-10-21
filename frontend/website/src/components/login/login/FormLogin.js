import {useState} from "react";
import {useRouter} from "next/navigation";

import {handleChangeFields} from "@/utils/fieldValidation";
import Input from "@/components/form/Input";
import ErrorMsg from "@/components/form/ErrorMsg";

import styles from "@/components/login/form.module.css";
import loginUser from "@/customHooks/useLogin";
import {useAuth} from "@/context/AuthContext";
import useSetMessage from "@/customHooks/useSetMessage";

function FormLogin({fields, setFields, isEnabled, setIsEnabled}) {
    const [errorsMsg, setErrorsMsg] = useState([]);
    const router = useRouter();

    // Contexto
    const {isLogged, setIsLogged} = useAuth();

    const customStyle = {marginBottom: '15px'};

    useSetMessage({message: isLogged ? 'Você fez login com sucesso!' : '', type: 'success'});

    async function handleSubmit(e) {
        e.preventDefault();

        setErrorsMsg([]);

        setIsEnabled(true);

        const username = fields.find(f => f.name === 'username')?.value || '';
        const password = fields.find(f => f.name === 'password')?.value || '';
        await loginUser({username, password, setIsEnabled, setErrorsMsg, router, setIsLogged});
        }

        return (
            <form onSubmit={handleSubmit}>
                <Input
                    styleCustom={customStyle}
                    text="Usuário"
                    onChange={(e) => handleChangeFields(e, setFields)}
                    type="text"
                    name="username"
                    id="username"
                />

                <Input
                    styleCustom={customStyle}
                    text="Senha"
                    onChange={(e) => handleChangeFields(e, setFields)}
                    type="password"
                    name="password"
                    id="password"
                />

                {errorsMsg.map((msg, index) => (
                    <div key={index}>
                        <ErrorMsg>{msg}</ErrorMsg>
                    </div>
                ))}

                <button
                    className={!isEnabled ? styles.button : `${styles.button} ${styles.disabled}`}
                    disabled={isEnabled}
                    type="submit"
                >
                    {isEnabled ? 'Entrando...' : 'Entrar'}
                </button>
            </form>
        );
    }

    export default FormLogin;
