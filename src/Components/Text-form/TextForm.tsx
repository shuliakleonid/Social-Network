import React from 'react';
import {Field, InjectedFormProps} from 'redux-form';

export type TextFormType = {
  nameForm:string
  placeholder:string
}
const TextForm: React.FC<TextFormType & InjectedFormProps<{}, TextFormType>> = (props) => {

  const { handleSubmit,nameForm,placeholder } = props
  console.log(props)
  return (
      <form onSubmit={handleSubmit}>
        <label htmlFor={nameForm}>Add Post</label>
        <br/>
        <Field placeholder={placeholder} name={nameForm} component="textarea" type="text" />
        <br/>
        <button>ADD</button>
      </form>
  );
};

export default TextForm;
