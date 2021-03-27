import React from 'react';
import {Field, InjectedFormProps} from 'redux-form';
import Input from '../Common/Forms-controls/InputControls';

export type FormDataType = {
  email:string
  password:string
  rememberMe:boolean
}

const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
      <>
        <form onSubmit={props.handleSubmit}>
          <Field placeholder='Email' type="text" component={Input} name='email'/>
          <div>
            <Field placeholder='Password' type="password" component={Input} name='password'/>
          </div>
          <Field type="checkbox" component='input' name='rememberMe'/><span> Remember Me!</span><br/>
          <button>Login</button>
        </form>
      </>
  );
};

export default LoginForm;
