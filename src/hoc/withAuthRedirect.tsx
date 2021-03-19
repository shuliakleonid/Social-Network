import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppStateType} from '../redux/redux-store';

type mapStateToPropsType = {
  isAuth: boolean
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth
  }
}


export function withAuthRedirect <T>(Component: ComponentType<T>) {//приходящий компонент будет равен приходящему компоненту

  const RedirectComponent = (props: mapStateToPropsType) => {
    const {isAuth,...restProps} = props //забираем нужные пропсы
    if (!isAuth) return <Redirect to={'/login'}/>
    return <Component {...restProps as T}/>//передаем остальные пропсы
  }
  let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
  return ConnectedRedirectComponent
}
