import React from 'react';
import style from './Post.module.css'
import {PostItem} from '../Post/PostItem';

type TypeProps = {
    message: string
}

export function Posts(props:TypeProps) {
    return (

        <div>
          <PostItem message={props.message}/>
        </div>

    )
}