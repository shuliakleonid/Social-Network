import React from 'react';
import style from './App.module.css';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import Dialogs from './Components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import {ActionType, StateType} from './types/entities';
import {ProfileContainer} from '../src/Components/Profile/ProfileConteiner'
import DialogContainer from './Components/Dialogs/DialogsContainer';

type PropsType = {
  store: StateType
  dispatch: (action: ActionType) => void
}

const App: React.FC<PropsType> = ({
                                    store,
                                    dispatch
}) => {
  console.log(dispatch)
  debugger
  return (
      <BrowserRouter>
        <div className={style.wrapper}>
          <Header/>
          <main className={style.main}>
            <Navigation/>
            <div className={style.content}>
              <Route path='/profile'
                     render={() => <ProfileContainer
                         store={store}
                         dispatch={dispatch}

                     />}/>
              <Route path='/dialogs'
                     render={() => <DialogContainer
                         dispatch={dispatch}
                         dialogsPages={store.dialogsPages}/>}/>
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
