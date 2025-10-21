"use client";

// CSS
import styles from './MainContainer.module.css';

// Components
import CreatePostBox from "@/components/home/CreatePostBox";
import PostHeader from "@/components/home/PostHeader";

// Hooks
import {useRef} from "react";

function MainContainer() {
    const dialogRef = useRef();

    return (
        <div className={styles.container}>
            <CreatePostBox ref={dialogRef} />
            <PostHeader />
        </div>
    )
}

export default MainContainer;