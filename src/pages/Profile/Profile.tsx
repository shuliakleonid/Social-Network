import React, {useState} from 'react';
import Posts from './My_Posts/Post';
import PreLoader from '../../Components/Common/PreLoader/PreLoader';
import {ProfilePagesType} from '../../types/entities';
import {ProfileStatus} from './ProfileStatus/ProfileStatus';
import TextForm, {TextFormType} from '../../Components/Text-form/TextForm';
import {reduxForm} from 'redux-form';
import style from './Profile.module.css';
import {ProfileInfoForm} from './ProfileInfoForm';
import {ProfileInfo} from './ProfileInfo';


type ProfilePropsType = {
  profilePage: ProfilePagesType;
  owner: boolean;
  savePhoto: (photo: any) => void
  updateStatus: (text: string) => void
  getUserProfile: (userId: string) => void
  buttonAddPost: (text: string) => void
}

export const Profile = React.memo((props: ProfilePropsType) => {
  const [editMode, setEditMode] = useState(false)

  const addNewMessage = (value: any) => {
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
        {props.owner && <button onClick={() => setEditMode(!editMode)}>Edit</button>}
        {
          editMode
              ? <ProfileInfoForm profile={props.profilePage.profile}/>
              : <ProfileInfo
                  profile={props.profilePage.profile}
                  owner={props.owner}
                  savePhoto={props.savePhoto}/>

        }
        <ProfileStatus status={props.profilePage.status} updateStatus={props.updateStatus}/>
        <section className={style.wrapper}>
          <AddPost nameForm={'addPost'} placeholder={'Add You Post'} onSubmit={addNewMessage}/>
          {postsMessage}
        </section>
      </>
  )
});

const AddPost = reduxForm<{}, TextFormType>({form: 'addProfileMessage'})(TextForm)


