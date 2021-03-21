import React, {ChangeEvent, useState} from 'react';

type ProfileStatusPropsType = {
  status: string
  updateStatus: (text: string) => void
}


export const ProfileStatus = (props: ProfileStatusPropsType) => {
  const [status, getStatus] = useState<string>(props.status)
  const [valueInput, getValueInput] = useState<string>()
  const [editMode, getEditMode] = useState<boolean>(true)
  debugger
  console.log('status',status)
  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    getValueInput(e.currentTarget.value)
  }
  const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value) {
      getStatus(e.currentTarget.value)
      props.updateStatus(e.currentTarget.value)
    }
    // getValueInput('')
    getEditMode(!editMode)
  }
  const setEditMode = () => {
    getEditMode(!editMode)
  }
  return (
      <div>
        {
          editMode
              ? <div>
                <p onDoubleClick={setEditMode}>{status}</p>
              </div>
              : <div>
                <input value={valueInput} type="text" onChange={changeValue} onBlur={changeStatus}/>
              </div>
        }
      </div>
  );
};

