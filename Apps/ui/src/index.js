import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import userInfoReducer from './reducers/userInfo';
import createSagaMiddleware from "redux-saga";
import { rootSaga } from './saga/root';
import groupsReducer from './reducers/groups';
import snackbarReducer from './reducers/snackbar';
import usersReducer from './reducers/users';
import allGroupsReducer from './reducers/allGroups';
import activitiesReducer from './reducers/activities';
import pastActivitiesReducer from './reducers/pastActivities';


const AppReducer = combineReducers({
  userInfo: userInfoReducer,
  group: groupsReducer,
  snackbar: snackbarReducer,
  users: usersReducer,
  allGroups: allGroupsReducer,
  activities: activitiesReducer,
  pastActivities: pastActivitiesReducer,
  
})

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(AppReducer, composeEnhancer(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
