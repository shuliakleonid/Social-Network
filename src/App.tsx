import React from 'react';
import classes from './App.module.css';
import {Header} from './Components/Header/Header';
import {Navigation} from './Components/Navigation/Navigation';
import {SectionMain} from './Components/Profile/SectionMain';
import {Footer} from './Components/Footer/Footer';


function App() {
    return (
        <div className={classes.wrapper}>
            <Header/>
            <main className={classes.main}>
                <Navigation/>
                <SectionMain title='Section' />
            </main>
            <Footer/>
            {/*<img src='./images.png'/>*/}
        </div>
    );
}

export default App;
