import React from 'react';
import style from './SectionMain.module.css';
import Posts from './My_Posts/Post';
import {ActionType, ProfilePagesType} from '../../types/entities';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../redux/state';


type PropsType = {
  profilePage: ProfilePagesType;
  dispatch: (action: ActionType) => void
}


const Profile = (props: PropsType) => {
  const addNewPostElement = React.createRef<HTMLTextAreaElement>();


  const buttonAddPost = () => {
    props.dispatch(addPostActionCreator())
  }
  const onPostsChange = () => {
    if (addNewPostElement.current) {
      props.dispatch(updateNewPostTextActionCreator(addNewPostElement.current.value))
    }
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
            ref={addNewPostElement}
            value={props.profilePage.newPostText}
            placeholder='Add message'/>
        <button onClick={buttonAddPost}>Add post</button>
        {postsMessage}
      </section>
  )
}
export default Profile;
