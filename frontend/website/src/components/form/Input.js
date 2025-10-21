import styles from './Input.module.css'

function Input({text, onChange, type, id, name, styleCustom, value}) {
    return (
        <>
            <input
                placeholder={text}
                style={styleCustom}
                className={`${styles.input}`}
                onChange={onChange}
                type={type}
                id={id}
                name={name}
                value={value}
            />
        </>

    )
}

export default Input;