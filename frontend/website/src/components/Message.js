import {useMessageContext} from "@/context/MessageContext";

import styles from './Message.module.css';

function Message() {
    const {setMessage, message} = useMessageContext();

    return (
        message &&
        <div className={`${styles.message} ${styles[message?.type]}`}>
            <p>{message?.message}</p>
            <button onClick={() => setMessage(null)}>X</button>
        </div>
    );
}

export default Message;