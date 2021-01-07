import React from 'react';
import classes from './Post.module.css'

type TypeProps = {
    message: string
}

export function Posts(props:TypeProps) {
    return (
        <div className={classes.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg6QsnK2l4v2ZXFfr49_l9cf_5WAn84hIkhA&usqp=CAU"
                alt=""/>

            <p>{props.message}</p>
        </div>

    )
}