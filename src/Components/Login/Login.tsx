import React from 'react';
import LoginForm, {FormDataType} from '../Login-form/Login-form';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {login, loginType} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../../redux/redux-store';

type LoginPropsType = {
  isAuth:boolean
  login: (arg: loginType) => void
}


const Login: React.FC<LoginPropsType> = ({login,isAuth}) => {

  const onSubmit = (formData: FormDataType) => {
    const {email, password, rememberMe} = formData
    login({email, password, rememberMe})
  }

  if (isAuth) {
    return <Redirect to={'/profile'}/>
  }
  return (
      <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
      </div>)
};
const mapStateToProps = (state: AppStateType) => {
  return {
    isAuth: state.auth.isAuth
  }
}


export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export default connect(mapStateToProps, {login})(Login)
