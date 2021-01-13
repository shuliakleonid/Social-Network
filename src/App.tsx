import React from 'react';
import style from './App.module.css';
import {Header} from './Components/Header/Header';
import {Navigation} from './Components/Navigation/Navigation';
import {SectionMain} from './Components/Profile/SectionMain';
import {Footer} from './Components/Footer/Footer';
import {Dialogs} from './Components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './Components/News/News';
import {Music} from './Components/Music/Music';
import {Settings} from './Components/Settings/Settings';

function App() {
  return (
      <BrowserRouter>
        <div className={style.wrapper}>
          <Header/>
          <main className={style.main}>
            <Navigation/>
            <div className={style.content}>
              <Route path='/profile' component={SectionMain}/>
              <Route path='/dialogs' component={Dialogs}/>
              <Route path='/news' component={News}/>
              <Route path='/music' component={Music}/>
              <Route path='/settings' component={Settings}/>


            </div>
          </main>
          <Footer/>
          {/*<img src='./images.png'/>*/}
        </div>
      </BrowserRouter>
  );
}

export default App;
