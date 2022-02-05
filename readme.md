import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import { index } from './pages/index';
import { signup } from './pages/auth/signup';
import { signin } from './pages/auth/signin';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={index} ></Route>
          <Route path='/auth/signup' component={signup} ></Route>
          <Route path='/auth/signin' component={signin}></Route>
        </Switch >
      </BrowserRouter >
    </>
  );
}

export default App;
