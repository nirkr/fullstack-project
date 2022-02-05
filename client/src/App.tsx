import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import { Index } from './pages/index';
import { Signup } from './pages/auth/signup';
import { Signin } from './pages/auth/signin';
import Header from './components/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={Index} ></Route>
          <Route path='/signup' component={Signup} ></Route>
          <Route path='/signin' component={Signin}></Route>
        </Switch >
      </BrowserRouter >
    </>
  );
}

export default App;
