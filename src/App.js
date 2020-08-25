import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { Route, Switch, Redirect } from "react-router-dom";
import SignInSignUpPage from "./components/auth/SignInSignUpPage";
import AllPosts from "./components/homepage/AllPosts";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={AllPosts} />
          {/* <Route exact path="/signIn" component={SignInSignUpPage} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
