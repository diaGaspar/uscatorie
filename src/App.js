import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import dryerAppReducer from './reducers/index';
import FirstPageContainer from './components/FirstPageContainer';
import { Provider } from 'react-redux';
import './App.css';

let store = createStore(dryerAppReducer, applyMiddleware(thunk));

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <FirstPageContainer/>
            </Provider>
        );
    }
}

export default App;
