import React, {FC} from 'react';
import style from './Profile.module.css';

type ContactsPropsType = {
  contactTitle: string
  contactValue: string
}
export const Contact: FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
  return <div className={style.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

