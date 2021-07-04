import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusPropsType = {
  status: string
  updateStatus: (text: string) => void
}

export const ProfileStatus = (props: ProfileStatusPropsType) => {
  const [status, setStatus] = useState<string>(props.status)
  const [valueInput, setValueInput] = useState<string>('')
  const [editMode, setEditMode] = useState<boolean>(true)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.currentTarget.value)
  }
  const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value) {
      setStatus(e.currentTarget.value)
      props.updateStatus(e.currentTarget.value)
    }
    setEditMode(!editMode)
  }
  const getEditMode = () => {
    setEditMode(!editMode)
  }

  return (
      <div>
        {
          editMode
              ? <div>
                  <p onDoubleClick={getEditMode}>{status}</p>
                </div>
              : <div>
                  <input value={valueInput} type="text" onChange={changeValue} onBlur={changeStatus}/>
                </div>
        }
      </div>
  );
};

