import React, {useEffect} from 'react';
import style from './App.module.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import News from './pages/News/News';
import Music from './pages/Music/Music';
import Settings from './pages/Settings/Settings';
import DialogContainer from './pages/Dialogs/DialogsContainer';
import UsersContainer from './pages/Users/UsersContainer';
import ProfileContainer from './pages/Profile/ProfileContainer';
import {useDispatch, useSelector} from 'react-redux';
import {ROUTES} from './constants/constants';
import {initializeApp} from './redux/app-reducer';
import {AppStateType} from './redux/redux-store';
import Navigation from './Components/Navigation/Navigation';
import HeaderContainer from './Components/Header/HeaderContainer';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import PreLoader from './Components/Common/PreLoader/PreLoader';

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

