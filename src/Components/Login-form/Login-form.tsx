import React from 'react';
import {Field, InjectedFormProps} from 'redux-form';
import Input from '../Common/Forms-controls/InputControls';

export type FormDataType = {
  email:string
  password:string
  rememberMe:boolean
  error:string
}

const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
  console.log(props.error)
  return (
      <>
        <form onSubmit={props.handleSubmit}>
          <Field placeholder='Email' type="text" component={Input} name='email'/>
          <div>
            <Field placeholder='Password' type="password" component={Input} name='password'/>
          </div>
          <Field type="checkbox" component='input' name='rememberMe'/><span> Remember Me!</span><br/>
          {props.error && <div style={{border: '1px solid red'}}>
            {props.error}
          </div>}
          <button>Login</button>
        </form>
      </>
  );
};

export default LoginForm;
