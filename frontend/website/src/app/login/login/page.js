'use client';

import styles from '../page.module.css';

import FormLogin from "@/components/login/login/FormLogin";
import IntroMessage from "@/components/login/IntroMessage";

import {useState} from "react";

import {minLength, maxLength} from "@/utils/validationConfig";


function Login() {
    const [isEnabled, setIsEnabled] = useState(false);
    const [fields, setFields] = useState(
        [
            {name: "username", value: "", min_length: minLength.username, max_length: 100},
            {name: "password", value: "", min_length: minLength.firstName, max_length: 100},
        ]
    );

    const [errors, setErrors] = useState({
        minLengthErrors: [],
        maxLengthErrors: [],
    });

    return (
        <div className={styles.container}>
            <IntroMessage/>
            <div className={styles.content}>
                <h2 className={styles.h2}>Criar uma nova conta</h2>
                <p className={styles.p}>É rápido e fácil.</p>
                <hr/>
                <FormLogin errors={errors} setIsEnabled={setIsEnabled} isEnabled={isEnabled} minLength={minLength} maxLength={maxLength}
                           setFields={setFields} fields={fields}/>
            </div>
        </div>
    )
}

export default Login;