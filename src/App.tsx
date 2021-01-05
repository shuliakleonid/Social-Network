import React from 'react';
import './App.css';
import {Header} from './Components/Header';
import {Navigation} from './Components/Navigation';
import {SectionMain} from './Components/SectionMain';
import {Footer} from './Components/Footer';


function App() {
    return (
        <div className='app__wrapper'>
            <Header/>
            <main className='main__wrapper'>
                <Navigation />
                <SectionMain />
            </main>
            <Footer />
        </div>
    );
}

export default App;
