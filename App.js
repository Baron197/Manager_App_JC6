import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import { createStore } from 'redux';
import firebase from 'firebase';
import { Header } from 'react-native-elements';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

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
      const store = createStore(reducers);
      return (
        <Provider store={store}>
          <View>
            <Header
              placement="left"
              centerComponent={{ text: 'Please Login', style: { color: '#fff' } }}
            />
            <LoginForm />
          </View>
        </Provider>
      );
    }
}

export default App;
