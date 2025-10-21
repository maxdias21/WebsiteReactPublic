'use client';

import styles from './page.module.css';
import {useAuthCheck} from "@/customHooks/useAuthCheck";
import PostHeader from "@/components/home/PostHeader";

function Posts() {
    return (
        <div className={styles.container}>
            <PostHeader/>
        </div>
    );
}

export default Posts;