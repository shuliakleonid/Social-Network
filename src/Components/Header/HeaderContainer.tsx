import React from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {initialStateType, setAuthUserData} from '../../redux/auth-reducer';

type HeaderContainerPropsType = {
  setAuthUserData: (el: initialStateType) => void
  isAuth: boolean
  login: string
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  componentDidMount() {
    debugger
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
        .then((res) => {

          if (res.data.resultCode === 0) {
            const {id, email, login} = res.data.data
            console.log('Enter')
            this.props.setAuthUserData({id, email, login})
          } else {
            console.log('Не зашел')
          }
        })
  }

  render() {
    return <Header {...this.props} />

  }
}

const mapStateToProps = (state: any) => {
  // console.log(state)
  return {isAuth: state.auth.isAuth, login: state.auth.login}

}

// @ts-ignore
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
