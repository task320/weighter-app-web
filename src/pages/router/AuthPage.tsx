import React, {useContext, useEffect, FC } from 'react';

import { StateUserContext } from '../../App';

import {
    RouteProps,
    Route,
    Redirect
  } from "react-router-dom";

  

  const AuthPage: FC<RouteProps > = ({ component: Component, ...rest }) => {
    // TODO ユーザ情報を取得する前に、値の参照をしてしまうため、ログイン状態でも、非ログインと判定してしまう。
    var stateUser = useContext(StateUserContext);
    console.log("[AuthPage] signinFlg:", stateUser.signinFlg )
    return stateUser.signinFlg ? <Route component={Component} {...rest} /> : <Redirect to="/" />;
}

export default AuthPage;