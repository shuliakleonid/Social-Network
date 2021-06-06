import React from 'react';
import Posts from './My_Posts/Post';
import PreLoader from '../../Components/Common/PreLoader/PreLoader';
import {ProfilePagesType} from '../../types/entities';
import {ProfileStatus} from './ProfileStatus/ProfileStatus';
import TextForm, {TextFormType} from '../../Components/Text-form/TextForm';
import {reduxForm} from 'redux-form';
import userPhoto from '../../assets/icons/user.png'
import style from './Profile.module.css';


type ProfilePropsType = {
  profilePage: ProfilePagesType;
  owner: boolean;
  savePhoto: (photo: any) => void
  updateStatus: (text: string) => void
  getUserProfile: (userId: string) => void
  buttonAddPost: (text: string) => void
}

const Profile = React.memo((props: ProfilePropsType) => {

  const addNewMessage = (value: any) => {
    props.buttonAddPost(value.addPost)
  }
  const mainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files?.length) {
      props.savePhoto(e.target.files[0])
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
        <img src={props.profilePage.profile.photos.large || userPhoto} alt="Profile" className={style.userPhoto}/>
        {props.owner && <input onChange={mainPhotoSelected} type="file"/>}
        <ProfileStatus status={props.profilePage.status} updateStatus={props.updateStatus}/>
        <section className={style.wrapper}>
          <AddPost nameForm={'addPost'} placeholder={'Add You Post'} onSubmit={addNewMessage}/>
          {postsMessage}
        </section>
      </>
  )
})
const AddPost = reduxForm<{}, TextFormType>({form: 'addProfileMessage'})(TextForm)

export default Profile
