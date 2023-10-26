import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider,  } from 'react-redux';
import { applyMiddleware, combineReducers ,createStore } from 'redux';
import {userReducer,userReducerById,deleteReducerById} from './Reducers/Reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Sagas/rootSaga';
const rootReducers = combineReducers({userReducer,
  userReducerById,deleteReducerById});
const root = ReactDOM.createRoot(document.getElementById('root'));
const sagaMiddleWare = createSagaMiddleware()
const store = createStore(rootReducers,applyMiddleware(sagaMiddleWare))
sagaMiddleWare.run(rootSaga);
root.render(
  
    <Provider store={store}>
    <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
