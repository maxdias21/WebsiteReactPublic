import {useEffect} from "react";
import ErrorMsg from "@/components/form/ErrorMsg";

export function invalidMinLengthFields(fields) {
    return fields.filter(field => field.value.trim().length < field.minLength).map(field => field.name);
}

export function invalidMaxLengthFields(fields) {
    return fields.filter(field => field.value.trim().length > field.maxLength).map(field => field.name);
}

export function handleChangeFields(e, setFields) {
    const valueField = e.target.value;
    const fieldName = e.target.name;

    setFields(prevFields => prevFields.map(
        field => field.name === fieldName ? {...field, value: valueField} : field
    ));
}

export function useValidateFieldsAndToggleButton(fields, setIsEnabled, setErrors) {
    useEffect(() => {
        const minLengthErrorsResult = invalidMinLengthFields(fields);
        const maxLengthErrorsResult = invalidMaxLengthFields(fields);

        const emailField = fields.find(field => field.name === 'email');
        const {emailHasAt, isValidEmail} = emailValidation(emailField, minLengthErrorsResult, maxLengthErrorsResult);

        const allValid = minLengthErrorsResult.length === 0 && maxLengthErrorsResult.length === 0;

        setErrors({
            minLengthErrors: minLengthErrorsResult,
            maxLengthErrors: maxLengthErrorsResult,
            emailHasAt,
            isValidEmail,
        });

        setIsEnabled(!allValid ||  !emailHasAt || !isValidEmail);
    }, [fields])
}

export const showError = (errors, field, type, message) => {
    return errors[type].includes(field) && <ErrorMsg>{message}</ErrorMsg>;
};


export function emailValidation(emailField) {
    const emailHasAt = emailField && emailField.value.includes('@');
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value);

    return {emailHasAt, isValidEmail};
}