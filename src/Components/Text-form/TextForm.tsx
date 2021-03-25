import React from 'react';
import {Field, InjectedFormProps} from 'redux-form';
import {maxLengthCreator, required} from '../../utils/validators/validators';
import Textarea from '../Common/Forms-controls/FormsControls';

export type TextFormType = {
  nameForm: string
  placeholder: string
}
const maxLength10 = maxLengthCreator(10)
// const minLength2 = minLengthCreator(2)
const TextForm: React.FC<TextFormType & InjectedFormProps<{}, TextFormType>> = (props) => {

  const {handleSubmit, nameForm, placeholder} = props
  return (
      <form onSubmit={handleSubmit}>
        <label htmlFor={nameForm}>Add Post</label>
        <br/>
        <Field type="text"
               name={nameForm}
               component={Textarea}
               placeholder={placeholder}
               validate={[required, maxLength10]}/>
        <br/>
        <button>ADD</button>
      </form>
  );
};

export default TextForm;
