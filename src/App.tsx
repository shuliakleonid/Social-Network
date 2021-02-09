import React from 'react';
import style from './App.module.css';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import Profile from './Components/Profile/Profile';
import Footer from './Components/Footer/Footer';
import Dialogs from './Components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import {ActionType, StateType} from './types/entities';

type PropsType = {
  state: StateType
  dispatch: (action: ActionType) => void
}

const App: React.FC<PropsType> = ({state,dispatch}) => {
  return (
      <BrowserRouter>
        <div className={style.wrapper}>
          <Header/>
          <main className={style.main}>
            <Navigation/>
            <div className={style.content}>
              <Route path='/profile'
                     render={() => <Profile
                         profilePage={state.profilePage}
                         dispatch={dispatch}

                     />}/>
              <Route path='/dialogs'
                     render={() => <Dialogs
                         messages={state.profilePage.posts}/>}/>
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
