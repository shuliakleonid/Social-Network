import React from 'react';
import LoginForm, {FormDataType} from '../Login-form/Login-form';
import {reduxForm} from 'redux-form';

export const Login = () => {
  const onSubmit = (formData:FormDataType) => {
    console.log(formData)
  }
  return (
      <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
      </div>)
};
export const LoginReduxForm = reduxForm<FormDataType>({  form: 'login'})(LoginForm)


