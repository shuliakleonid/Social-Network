import React, {useEffect} from 'react';
import style from './App.module.css';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import DialogContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import {useDispatch, useSelector} from 'react-redux';
import {ROUTES} from './constants/constants';
import {initializeApp} from './redux/app-reducer';
import PreLoader from './Components/Common/PreLoader/PreLoader';
import {AppStateType} from './redux/redux-store';

const App = () => {

  const dispatch = useDispatch()
  const initialized = useSelector<AppStateType, boolean>(state => state.app.initialized)

  useEffect(() => {
    dispatch(initializeApp())
  }, [dispatch])

  if (!initialized) {
    return <PreLoader/>
  }
  return (
      <BrowserRouter>
        <div className={style.wrapper}>
          <HeaderContainer/>
          <main className={style.main}>
            <Navigation/>
            <div className={style.content}>
              <Switch>
                <Route path={ROUTES.PROFILE} render={() => <ProfileContainer/>}/>
                <Route path={ROUTES.DIALOGS} render={() => <DialogContainer/>}/>
                <Route path={ROUTES.USERS} render={() => <UsersContainer/>}/>
                <Route path={ROUTES.NEWS} render={() => <News/>}/>
                <Route path={ROUTES.MUSIC} render={() => <Music/>}/>
                <Route path={ROUTES.SETTINGS} render={() => <Settings/>}/>
                <Route path={ROUTES.LOGIN} render={() => <Login/>}/>
              </Switch>
            </div>
          </main>
          <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App;

