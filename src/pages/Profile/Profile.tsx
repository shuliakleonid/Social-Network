import React, {FC} from 'react';
import Posts from './My_Posts/Post';
import PreLoader from '../../Components/Common/PreLoader/PreLoader';
import {ContactsType, ProfileAPIType, ProfilePagesType} from '../../types/entities';
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
       <ProfileInfo profile={props.profilePage.profile} owner={props.owner} savePhoto={props.savePhoto}/>
        <ProfileStatus status={props.profilePage.status} updateStatus={props.updateStatus}/>
        <section className={style.wrapper}>
          <AddPost nameForm={'addPost'} placeholder={'Add You Post'} onSubmit={addNewMessage}/>
          {postsMessage}
        </section>
      </>
  )
})
const AddPost = reduxForm<{}, TextFormType>({form: 'addProfileMessage'})(TextForm)

type ProfileInfoType ={
  profile : ProfileAPIType
  owner:boolean
  savePhoto: (photo: any) => void
}
const ProfileInfo:FC<ProfileInfoType> = ({profile,owner,savePhoto}) => {
  const mainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files?.length) {
      savePhoto(e.target.files[0])
    }
  }
return (
    <>
    <img src={profile.photos.large || userPhoto} alt="Profile" className={style.userPhoto}/>
  {owner && <input onChange={mainPhotoSelected} type="file"/>}
  <div>
    <b>Full name</b>: {profile.fullName}
  </div>
  <div>
    <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
  </div>
  {profile.lookingForAJob &&
  <div>
    <b>My professional skills</b>: {profile.lookingForAJobDescription}
  </div>
  }
  <div>
    <b>About me</b>: {profile.aboutMe}
  </div>
  <div>
    <b>Contacts</b>: {
    Object
        .keys(profile.contacts)
        .map((key)  => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
        })}
  </div>
    </>
)
}





type ContactsPropsType = {
  contactTitle: string
  contactValue: string
}
const Contact: FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
  return <div className={style.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default Profile
