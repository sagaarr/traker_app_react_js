import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Header from "./components/Header";
import Users from "./pages/Users/Users";
import { Provider, useSelector } from "react-redux";
import store from "./utils/redux/store";
import EditUser from "./pages/EditUser/EditUser";
import AddUser from "./pages/AddUser/AddUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { openRoute, protectedRoutes } from "./navigation/paths";
import Ambulances from "./pages/Ambulances/Ambulances";
import AmbulanceCrew from "./pages/AmbulanceCrew/AmbulanceCrew";
import Loader from "./components/Loader";
import CreateAmbulance from "./pages/Ambulances/CreateAmbulance";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DailyReport from "./pages/Reports/DailyReport";
import PatentReport from "./pages/Reports/PatentReport";


const App = () =>  {
  const {loading} = useSelector((state) => state.loadingReducer)
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path={openRoute.signIn}component={Login} />
            <Route path={protectedRoutes.users} component={Users} />
            <Route path={protectedRoutes.editDriver} component={EditUser} />
            <Route path={protectedRoutes.createUser} component={AddUser} /> 
            <Route path={protectedRoutes.getAllAmbulances} component={Ambulances} /> 
            <Route path={protectedRoutes.ambulanceCrew} component={AmbulanceCrew} /> 
            <Route path={protectedRoutes.createAmbulance} component={CreateAmbulance} />
            <Route path={openRoute.privacyPolicy} component={PrivacyPolicy} />
            {/* Reports */}
            <Route path={protectedRoutes.dailyReport} component={DailyReport}/>
            <Route path={protectedRoutes.patentReport} component={PatentReport}/>
            
          </Switch>
        </div>
      </Router>
      <ToastContainer autoClose={2000} />
      {loading && <Loader/>}
    
    </>
  );
}

export default App;

