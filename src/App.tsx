import React from 'react';
import style from './App.module.css';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import DialogContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';

// type PropsType = {
//   store: StateType
//   dispatch: (action: ActionType) => void
// }

const App = () => {

  return (
      <BrowserRouter>
        <div className={style.wrapper}>
          <HeaderContainer/>
          <main className={style.main}>
            <Navigation/>
            <div className={style.content}>
              <Route path='/profile/:userId?'
                                          render={() => <ProfileContainer/>}/>
              <Route path='/dialogs'
                     render={() => <DialogContainer/>}/>
              <Route path='/users' render={() => <UsersContainer/>}/>
              <Route path='/news' render={() => <News/>}/>
              <Route path='/music' render={() => <Music/>}/>
              <Route path='/settings' render={() => <Settings/>}/>
            </div>
          </main>
          <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App;
