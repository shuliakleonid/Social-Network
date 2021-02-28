import React from 'react';
import style from './App.module.css';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import DialogContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';

// type PropsType = {
//   store: StateType
//   dispatch: (action: ActionType) => void
// }

const App = () => {
  return (
      <BrowserRouter>
        <div className={style.wrapper}>
          <Header/>
          <main className={style.main}>
            <Navigation/>
            <div className={style.content}>
              <Route path='/profile/:userId?'
                     render={() => <ProfileContainer
                         // store={store}
                         // dispatch={dispatch}
                     />}/>
              <Route path='/dialogs'
                     render={() => <DialogContainer
                         // dispatch={dispatch}
                         // dialogsPages={store.dialogsPages}
                     />}/>
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
