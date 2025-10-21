// CSS
import styles from "./ModalPost.module.css";
import {forwardRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {postCreate} from "@/utils/postCreate";


const ModalPost = forwardRef(({
                                  title,
                                  titleButton,
                                  titleButtonIsLoading,
                                  children,
                                  handleSubmit,
                                  isSubmitting
                              }, ref) => {

    return (
        <dialog ref={ref} className={styles.dialog}>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className={styles.containerDialog}>
                        <div className={styles.content}>
                            <div className={styles.title}>
                                <h4>{title}</h4>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className={styles.buttonClose}
                                    onClick={() => ref.current.close()}>
                                    {<FontAwesomeIcon icon={faXmark}/>}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {children}
                <button disabled={isSubmitting} type="submit"
                        className={styles.button}>{isSubmitting ? titleButtonIsLoading : titleButton}</button>
            </form>
        </dialog>
    );
});


export default ModalPost;