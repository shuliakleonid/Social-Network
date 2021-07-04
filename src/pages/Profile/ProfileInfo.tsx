import {ContactsType, ProfileAPIType} from '../../types/entities';
import React, {FC} from 'react';
import userPhoto from '../../assets/icons/user.png';
import style from './Profile.module.css';
import {Contact} from './Contact';


type ProfileInfoType = {
  profile: ProfileAPIType
  owner?: boolean
  savePhoto?: (photo: any) => void
}
export const ProfileInfo: FC<ProfileInfoType> = ({profile, owner, savePhoto}) => {

  const mainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files?.length) {
      if (savePhoto) {
        savePhoto(e.target.files[0])
      }
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
          <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
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
              .map((key) => {
                return <Contact key={key} contactTitle={key}
                                contactValue={profile.contacts[key as keyof ContactsType]}/>
              })}
        </div>
      </>
  )
}

