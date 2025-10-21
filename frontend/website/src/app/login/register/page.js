'use client';

import styles from '../page.module.css';

// Hooks
import {useState} from "react";

import {useValidateFieldsAndToggleButton} from "@/utils/fieldValidation";
import {minLength, maxLength} from "@/utils/validationConfig";

// Components
import FormRegister from "@/components/login/register/FormRegister";
import IntroMessage from "@/components/login/IntroMessage";
import {useRedirectIsLoggedIn} from "@/customHooks/useRedirectIsLoggedIn";

function Register() {
    const [isEnabled, setIsEnabled] = useState(false);
    const [fields, setFields] = useState(
        [
            {name: "first_name", value: "", minLength: minLength.firstName, maxLength: maxLength.firstName},
            {name: "last_name", value: "", minLength: minLength.lastName, maxLength: maxLength.lastName},
            {name: "username", value: "", minLength: minLength.username, maxLength: maxLength.username},
            {name: "email", value: "", minLength: minLength.email, maxLength: maxLength.email},
            {name: "password", value: "", minLength: minLength.password, maxLength: maxLength.password},
        ]
    );
    const [errors, setErrors] = useState({
        minLengthErrors: [],
        maxLengthErrors: [],
        emailHasAt: false,
        isValidEmail: false
    });

    useValidateFieldsAndToggleButton(fields, setIsEnabled, setErrors, errors);

    return (
        <div className={styles.container}>
            <IntroMessage/>
            <div className={styles.content}>
                <h2 className={styles.h2}>Criar uma nova conta</h2>
                <p className={styles.p}>É rápido e fácil.</p>
                <hr/>
                <FormRegister errors={errors} isEnabled={isEnabled} minLength={minLength} maxLength={maxLength}
                              setFields={setFields} fields={fields} setIsEnabled={setIsEnabled} />
            </div>
        </div>
    )
}

export default Register;