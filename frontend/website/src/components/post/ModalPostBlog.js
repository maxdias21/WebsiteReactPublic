'use client';

import ModalPost from "@/components/post/ModalPost";
import {postCreate} from "@/utils/postCreate";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImage} from "@fortawesome/free-solid-svg-icons";

import styles from './ModalPost.module.css';

import {forwardRef, useRef, useState} from "react";

const ModalPostBlog = forwardRef((props, ref) => {
    const {setMessage} = props;


    const iconImage = <FontAwesomeIcon size="1x" color="#28a745" icon={faImage}/>;

    const inputRef = useRef(null);

    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [text, setText] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showErrors, setShowErrors] = useState([]);

    const closeModal = () => {
        ref?.current?.close();
        setImage(null);
        setPreview(null);
        setText('');
        setMessage(true);
    };

    const handleClick = () => {
        inputRef.current.click();
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    async function handleSubmit(event) {
        event.preventDefault();

        setIsSubmitting(true);

        const form = event.target;
        const formData = new FormData(form);

        formData.append('content', form.elements['content']?.value);
        const imageFile = form.elements['image']?.files[0];

        if (imageFile) {
            formData.append('image', imageFile);
        }

        const {data, errors} = await postCreate({
            setIsSubmitting,
            formData,
            url: `${process.env.NEXT_PUBLIC_API_POSTS_CREATE}`,
            method: 'POST',
        });

        if(!errors) {
            setShowErrors([]);
            closeModal();
            return;
        }

        setShowErrors([data?.content] || 'Erro ao enviar os dados.');

    }

    return (
        <ModalPost setImage={setImage} setText={setText} setPreview={setPreview} title="Criar post" titleButton="Postar"
                   ref={ref} isSubmitting={isSubmitting} handleSubmit={handleSubmit}>
            <div>
                <hr/>
                <textarea
                    style={image ? {height: '100px'} : {width: '100%'}}
                    className={styles.textArea}
                    placeholder="No que você está pensando, Max?"
                    onChange={handleTextChange}
                    value={text}
                    name="content"
                />
                {preview && <img
                    className={styles.img}
                    name="image"
                    src={preview}
                    alt="Preview"
                ></img>}
            </div>
            <div>
                <button
                    style={{border: "none", backgroundColor: "transparent"}}
                    onClick={handleClick}
                    type="button"
                >{iconImage}</button>
                <input
                    type="file"
                    accept="image/*"
                    style={{"display": "none"}}
                    ref={inputRef}
                    name="image"
                    onChange={handleImageChange}
                ></input>
            </div>
            {showErrors && showErrors.map((error, index) => (
                <p className={styles.error} key={error.index}>{error}</p>
            )) }
        </ModalPost>
    );
});

ModalPostBlog.displayName = 'ModalPostBlog';


export default ModalPostBlog;