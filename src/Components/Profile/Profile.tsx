import React, {ChangeEvent} from 'react';
import style from './SectionMain.module.css';
import Posts from './My_Posts/Post';
import PreLoader from '../Common/PreLoader/PreLoader';
import {ProfilePagesType} from '../../types/entities';

type ProfilePropsType = {
  profilePage: ProfilePagesType;
  updateNewPostText: (text: string) => void
  getUserProfile: (userId: string) => void
  buttonAddPost: () => void
}

const Profile = (props: ProfilePropsType) => {
  debugger
  const onAddPost = () => {
    props.buttonAddPost()
  }
  const onPostsChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value) {
      props.updateNewPostText(e.currentTarget.value)
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

  if (!props.profilePage.profile) {
    return <PreLoader/>
  }
  return (

      <>
        <img src={props.profilePage.profile.photos.large} alt=""/>
        <section className={style.wrapper}>
        <textarea
            onChange={onPostsChange}
            value={props.profilePage.newPostText}
            placeholder='Add message'/>
          <button
              onClick={onAddPost}
          >Add post
          </button>
          {postsMessage}
        </section>
      </>
  )
}
export default Profile;
