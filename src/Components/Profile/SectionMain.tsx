import React from 'react';
import classes from './SectionMain.module.css';
import {Posts} from './My_Posts/Post';

type PropsType = {
    title:string
}

export function SectionMain(props:PropsType) {
    return (
        <section className={classes.wrapper}>
            {props.title}
            <Posts message="Hi, how are you?"/>
            <Posts message="Its my first post"/>
            <Posts message="Hi, there"/>
            <Posts message="Hi, how are you?"/>
            <Posts message="Hi, how are you?"/>

        </section>
    )
}