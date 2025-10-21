"use client";

import {forwardRef, useEffect, useState} from "react";

import styles from './CreatePostBox.module.css';
import ModalPostBlog from "@/components/post/ModalPostBlog";
import Message from "@/components/Message";
import {useMessageContext} from "@/context/MessageContext";
import useSetMessage from "@/customHooks/useSetMessage";

const CreatePostBox = forwardRef((props, ref) => {
    const [message, setMessage] = useState(false);

    useSetMessage(message ? {message: 'Post criado com sucesso!', type: 'success'} :  {'message': null});


    return (
        <>
            <Message/>
            <div className={styles.content}>

                <img
                    src="https://cdn.outsideonline.com/wp-content/uploads/2023/03/Funny_Dog_H.jpg?crop=16:9&width=960&enable=upscale&quality=100"
                    className={styles.photo}
                    alt="Imagem de capa"
                />
                <button
                    onClick={() => ref.current.showModal()}
                    className={styles.buttonField}
                >
                    No que você está pensando, Max?
                </button>
                <ModalPostBlog setMessage={setMessage} ref={ref}/>
            </div>
        </>
    );
});

CreatePostBox.displayName = 'CreatePostBox';

export default CreatePostBox;
