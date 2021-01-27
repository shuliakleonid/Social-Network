import React from 'react';
import PostItem from '../Post/PostItem';

type TypeProps = {
  message: string
  like: number
  id:number
}

const Posts = (props: TypeProps) => {
  return (

      <div>
        <PostItem message={props.message} like={props.like} key={props.id}/>
      </div>

  )
}
export default Posts;
