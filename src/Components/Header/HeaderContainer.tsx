import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {DataStateType, setAuthUserData} from '../../redux/auth-reducer';
import {usersAPI} from '../../api/api';
import {AppStateType} from '../../redux/redux-store';

type MapStateToProps = {
  isAuth: boolean
  login: string
}

type HeaderContainerPropsType = {
  setAuthUserData: (el: DataStateType) => void
  isAuth: boolean
  login: string
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  componentDidMount() {

    usersAPI.getAuthentication()
        .then((data) => {
          if (data.resultCode === 0) {
            const {id, email, login} = data.data
            this.props.setAuthUserData({id, email, login})
          }
        })
  }
  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state: AppStateType):MapStateToProps => {
  return {isAuth: state.auth.isAuth, login: state.auth.login}

}


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
