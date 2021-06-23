import axios from "axios";
import React, { useState } from "react";
import SignupLayout from "../components/SignupLayout";
import LoginForm from "../components/SignupPage/forms/LoginForm";

const login = () => {
  //    [isLoggedIN, setIsLoggedIn] = useState(false)
  //     const baseUrl =  "https://staging-api.seventhave.io",

  //    const handleLogin =(e)  => {
  //         e.preventDefault()
  //         axios.post(`${baseUrl}/login`, {
  //             password: password,
  //             username: username
  //         })
  //         .then(response => {
  //             localStorage.token = response.data.token
  //             setIsLoggedIn(true)
  //         })
  //         .catch(err => console.log(err))
  //     }

  //     const handleLogout = () => {

  //     }
  return (
    <div className="bg-[#e5e5e5]">
      <SignupLayout>
        <LoginForm />
      </SignupLayout>
    </div>
  );
};

export default login;
