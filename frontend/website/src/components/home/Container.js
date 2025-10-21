'use client';

import {useRef} from "react";

import styles from './Container.module.css';

import MainContainer from "@/components/home/MainContainer";
import RightContainer from "@/components/home/RightContainer";
import CreatePostBox from "@/components/home/CreatePostBox";
import PostHeader from "@/components/home/PostHeader";
import Message from "@/components/Message";

function Container() {
    const dialogRef = useRef();


    return (
        <div className={styles.container}>
            <MainContainer>
                <div className={styles.container}>
                    <CreatePostBox ref={dialogRef}/>
                    <PostHeader/>
                </div>
            </MainContainer>
            <RightContainer/>
        </div>
    );
}

export default Container;
