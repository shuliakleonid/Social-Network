import React, {FC} from 'react';
import {Field, InjectedFormProps} from 'redux-form';
import Input from '../Common/Forms-controls/InputControls';

export type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
  error: string
}

const LoginForm: FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
  return (
      <>
        <form onSubmit={handleSubmit}>
          <Field placeholder="Email" type="text" component={Input} name="email"/>
          <div>
            <Field placeholder="Password" type="password" component={Input} name="password"/>
          </div>
          <Field type="checkbox" component="input" name="rememberMe"/><span> Remember Me!</span><br/>
          {error && <div style={{border: '1px solid red'}}>
            {error}
          </div>}
          <button>Login</button>
        </form>
      </>
  );
};

export default LoginForm;
