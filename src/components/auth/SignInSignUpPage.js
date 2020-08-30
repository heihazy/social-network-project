import React from "react";
import "./SignInSignUp.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
const SignInSignUpPage = () => {
  return (
    <div className="sign-in-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUpPage;
