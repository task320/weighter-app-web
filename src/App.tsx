//React
import React, 
      {
        createContext, 
        useContext, 
        useEffect
      } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

//AWS
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import {CognitoUserInterface} from "@aws-amplify/ui-components";

import AuthTop from './pages/auth/AuthTop';
import AuthPage from './pages/router/AuthPage';
import Top from './pages/main/Top';
import NoPage from './pages/error/NoPage'; 

import UseAuth from './util/auth/UseAuth';
import SatetUser from './lib/StateUser'

import './App.css';

Amplify.configure(awsconfig);

var stateUserData:SatetUser = {
  signinFlg:false,
  sub:"" 
}

export const StateUserContext = createContext(stateUserData);

function App() {
  var stateUser = useContext(StateUserContext);
  var location = useHistory();

  useEffect(() => {
    initializeGlobal();
  }, []);

  const initializeGlobal = async() => {
    console.log("[App] initializeGlobal");

    try{
      const user = await Auth.currentAuthenticatedUser();

      console.log("[App] userInfo:",user);
      stateUser.signinFlg = true;
      stateUser.sub = user.attributes.sub;

      console.log("[App] signinFlg:", stateUser.signinFlg);
      console.log("[App] sub:", stateUser.sub);
    }catch(err){
      console.log("[App] Auth.currentAuthenticatedUser error : ", err);
    }
    
  }
  
  return (

      <div className="main">
        <StateUserContext.Provider value={stateUserData}>
          <Router>
            <Switch>
            <AuthPage exact path="/top">
                <Top />
              </AuthPage>
              <Route exact path="/">
                <AuthTop />
              </Route>
              <Route path="*">
                <NoPage />
              </Route>
            </Switch>
          </Router>
        </StateUserContext.Provider>
      </div>

  );
}

export default App;
