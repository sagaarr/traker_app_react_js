import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Header from './components/Header';
import Users from './pages/Users/Users';
import { Provider } from 'react-redux'
import store from './utils/redux/store';

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
    <Header/>

    
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={Register} />
            <Route path="/users" component={Users}/>
          </Switch>
     
    </div>
    </Router>
    </Provider>
  );
}

export default App;
