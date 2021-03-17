import React, {ChangeEvent, useState} from 'react';

export const ProfileStatus = () => {
  const [status, getStatus] = useState<string>("Enter you status")
  const [valueInput, getValueInput] = useState<string>()
  const [editMode, getEditMode] = useState<boolean>(true)

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.onkeypress)
    getValueInput(e.currentTarget.value)
  }
  const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.currentTarget.value){
    getStatus(e.currentTarget.value)
    }
    getValueInput('')
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
                <span onDoubleClick={setEditMode}>{status}</span>
              </div>
              : <div>
                <input value={valueInput} type="text" onChange={changeValue} onBlur={changeStatus}/>
              </div>
        }
      </div>
  );
};

