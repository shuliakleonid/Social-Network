import React, {ChangeEvent} from 'react';
import style from './SectionMain.module.css';
import Posts from './My_Posts/Post';
import PreLoader from '../Common/PreLoader/PreLoader';
import {ProfilePagesType} from '../../types/entities';
import {ProfileStatus} from './ProfileStatus/ProfileStatus';
import TextForm, {TextFormType} from '../Text-form/TextForm';
import {reduxForm} from 'redux-form';

type ProfilePropsType = {
  profilePage: ProfilePagesType;
  // updateNewPostText: (text: string) => void
  updateStatus: (text: string) => void
  getUserProfile: (userId: string) => void
  buttonAddPost: (text:string) => void
}

const Profile = (props: ProfilePropsType) => {
  // const onAddPost = () => {
  //   props.buttonAddPost()
  // }
  // const onPostsChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   if (e.currentTarget.value) {
  //     props.updateNewPostText(e.currentTarget.value)
  //   }
  // }
const addNewMessage = (value:any) => {
  console.log(value)
  props.buttonAddPost(value.addPost)
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
        <ProfileStatus status={props.profilePage.status} updateStatus={props.updateStatus}/>
        <section className={style.wrapper}>
          <AddPost nameForm={'addPost'} placeholder={'Add You Post'} onSubmit={addNewMessage} />
        {/*<textarea*/}
        {/*    onChange={onPostsChange}*/}
        {/*    value={props.profilePage.newPostText}*/}
        {/*    placeholder='Add message'/>*/}
        {/*  <button*/}
        {/*      onClick={onAddPost}*/}
        {/*  >Add post*/}
        {/*  </button>*/}
          {postsMessage}
        </section>
      </>
  )
}
const AddPost = reduxForm<{},TextFormType>({  form: 'addProfileMessage'})(TextForm)

export default Profile
