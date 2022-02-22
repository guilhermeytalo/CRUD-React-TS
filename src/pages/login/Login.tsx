import React from "react";
import './Login.css';
import PrimaryButton from "../../components/buttons/primaryButton";
import LoginForm from "./forms/LoginForm";

export default function Login() {
  return (
    <div className="App">
      <LoginForm />
      <PrimaryButton text={"login"} className="login__button"/>
    </div>
  );
}
