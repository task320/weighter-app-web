import React, {useState, useContext, useEffect} from 'react';
import {useHistory} from "react-router-dom";

import {AmplifyAuthenticator, AmplifySignUp, AmplifyConfirmSignUp, AmplifySignIn} from "@aws-amplify/ui-react";
import {AuthState, onAuthUIStateChange, CognitoUserInterface} from "@aws-amplify/ui-components";

import { StateUserContext } from '../../App';

// TODO SignInとSignUpを別々のページに分離する。

function AuthTop() {
  var stateUser = useContext(StateUserContext);
  var location = useHistory();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      console.log("[AuthTop] onAuthUIStateChange : ", nextAuthState);
      if (nextAuthState === AuthState.SignedIn) {
        console.log("user successfully signed in!");
        console.log("user data: ", authData);

        stateUser.signinFlg = true;
        stateUser.sub = (authData as CognitoUserInterface).attributes.sub;

        console.log("user sub: ", stateUser.sub );

        //サインイン状態であればTopページへ遷移
        location.push("/Top");
      }
      if (!authData) {
        console.log("[AuthTop] user is not signed in...");
      }
    });
  }, []);

    return (
        <div>
          <h1>SignIn</h1>
          <AmplifyAuthenticator initialAuthState={AuthState.SignIn}>
            <AmplifySignIn
                  slot="sign-in"
                  formFields={[
                      { type: "username" },
                      { type: "password" },
                    ]}
              ></AmplifySignIn>
              <AmplifySignUp
                  slot="sign-up"
                  formFields={[
                      { type: "username" },
                      { type: "password" },
                      { type: "email" }
                    ]}
                  haveAccountText=""
                  signInText=""
              ></AmplifySignUp>
              <AmplifyConfirmSignUp
                slot="confirm-sign-up"
              ></AmplifyConfirmSignUp>
          </AmplifyAuthenticator>
        </div>
    );
}

export default AuthTop;