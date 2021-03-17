 import { createStore, applyMiddleware, compose } from 'redux';
 import thunk from 'redux-thunk';
 import { composeWithDevTools } from 'redux-devtools-extension'
 import rootReducer from './reducers';
 
 
 // const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const middlewares = [thunk];
let loginReducer;

const userAuthToken = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token") || "")
  : null;

if (userAuthToken) {
  loginReducer = {
    data: userAuthToken,
    loading: false,
    error: false,
    isLoggedIn: true,
  };
  
}

const initialState = {
  loginReducer,
};

//  const initialState = {};
 
 
 const store = createStore(
     rootReducer,
     initialState,
     composeWithDevTools(applyMiddleware(...middlewares))
 );
 
 export default store;
 