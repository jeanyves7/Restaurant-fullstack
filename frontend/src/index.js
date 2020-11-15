
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './theme';
import {createStore,applyMiddleware} from "redux";
import allReducer from "./Reducers/CombinedReducers";
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './SagasCalls/rootSaga' 
import {Provider} from "react-redux"

const sagaMiddleware = createSagaMiddleware()

const store=createStore(allReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
