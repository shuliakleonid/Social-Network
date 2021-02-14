import React, {ChangeEvent} from 'react';
import style from './SectionMain.module.css';
import Posts from './My_Posts/Post';
import {ProfilePagesType} from '../../types/entities';


type PropsType = {
  buttonAddPost: () => void
  profilePage: ProfilePagesType;
  updateNewPostText: (text: string) => void
}


const Profile = (props: PropsType) => {
  const onAddPost = () => {
    props.buttonAddPost()
  }
  const onPostsChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value) {
      props.updateNewPostText(e.currentTarget.value)
    }
    // props.dispatch(updateNewPostTextActionCreator(addNewPostElement.current.value))
  }

  let postsMessage = props.profilePage.posts.map((i) => {
    return <Posts
        key={i.id}
        message={i.message}
        like={i.likesCount}
        id={i.id}
    />
  })
  return (
      <section className={style.wrapper}>
        <textarea
            onChange={onPostsChange}
            value={props.profilePage.newPostText}
            placeholder='Add message'/>
        <button onClick={onAddPost}>Add post</button>
        {postsMessage}
      </section>
  )
}
export default Profile;
