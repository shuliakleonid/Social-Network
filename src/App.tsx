import React, {useEffect,Suspense} from 'react';
import style from './App.module.css';
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';
import Music from './pages/Music/Music';
import Settings from './pages/Settings/Settings';
import {useDispatch, useSelector} from 'react-redux';
import {ROUTES} from './constants/constants';
import {initializeApp} from './redux/app-reducer';
import {AppStateType} from './redux/redux-store';
import Navigation from './Components/Navigation/Navigation';
import HeaderContainer from './Components/Header/HeaderContainer';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import PreLoader from './Components/Common/PreLoader/PreLoader';

const DialogContainer = React.lazy(()=> import('./pages/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(()=> import('./pages/Profile/ProfileContainer'));
const UsersContainer = React.lazy(()=> import('./pages/Users/UsersContainer'));
const News = React.lazy(()=> import('./pages/News/News'));


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
      <HashRouter>
        <div className={style.wrapper}>
          <HeaderContainer/>
          <main className={style.main}>
            <Navigation/>
            <div className={style.content}>
              <Suspense fallback={<h1>Loading...</h1>}>
              <Switch>
                <Route path={ROUTES.PROFILE} render={() => <ProfileContainer/>}/>
                <Route path={ROUTES.DIALOGS} render={() => <DialogContainer/>}/>
                <Route path={ROUTES.USERS} render={() => <UsersContainer/>}/>
                <Route path={ROUTES.NEWS} render={() => <News/>}/>
                <Route path={ROUTES.MUSIC} render={() => <Music/>}/>
                <Route path={ROUTES.SETTINGS} render={() => <Settings/>}/>
                <Route path={ROUTES.LOGIN} render={() => <Login/>}/>
              </Switch>
              </Suspense>
            </div>
          </main>
          <Footer/>
        </div>
      </HashRouter>
  );
}

export default App;

