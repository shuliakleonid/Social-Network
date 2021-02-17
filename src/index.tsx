import React from 'react';
import './index.css';
import {store} from './redux/redux-store';
import ReactDOM from 'react-dom';
import App from './App';
import {StateType} from './types/entities';
import {Provider} from './store-context';

let rerenderEntireTree = (state: StateType) => {

  ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
        <App
            // store={state}
            //  dispatch={store.dispatch.bind(store)}
        />
        </Provider>
      </ React.StrictMode>,
      document.getElementById('root')
  )
  ;
}
rerenderEntireTree(store.getState());
store.subscribe(() => {
  const newStore = store.getState()
  rerenderEntireTree(newStore)
});

