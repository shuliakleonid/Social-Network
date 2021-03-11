import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {DataStateType, getAuthUserData, setAuthUserData} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';

type MapStateToProps = {
  isAuth: boolean
  login: string
}

type HeaderContainerPropsType = {
  // setAuthUserData: (el: DataStateType) => void
  isAuth: boolean
  login: string
  getAuthUserData: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  componentDidMount() {

    this.props.getAuthUserData()
  }
  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state: AppStateType):MapStateToProps => {
  return {isAuth: state.auth.isAuth, login: state.auth.login}

}


export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);
