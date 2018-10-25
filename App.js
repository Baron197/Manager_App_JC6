import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from '@firebase/app';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Main from './src/components/Main';

class App extends Component {
    componentWillMount() {
      const config = {
        apiKey: 'AIzaSyBTDRNH7Rs6bRBZYknfRmrzxiFySLUa7ok',
        authDomain: 'manager-a7679.firebaseapp.com',
        databaseURL: 'https://manager-a7679.firebaseio.com',
        projectId: 'manager-a7679',
        storageBucket: 'manager-a7679.appspot.com',
        messagingSenderId: '659089192370'
      };
      firebase.initializeApp(config);
    }

    render() {
      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
      console.disableYellowBox = true;
      return (
        <Provider store={store}>
          <Main />
        </Provider>
      );
    }
}

export default App;
