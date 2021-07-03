import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";

export default function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const [message, setMessage] = useState("you not logged in");
  const baseUrl = "https://staging-api.seventhave.io";

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("user");
  //   if (loggedInUser) {
  //     const foundUser = JSON.parse(loggedInUser);
  //     setUser(foundUser);
  //   }
  // }, []);

  // const [firstName, setFirstName] = useState("");
  // useEffect(() => {
  //   (async (username) => {
  //     const response = await fetch(`${baseUrl}/users/read/${username}`, {});
  //     const content = await response.json();
  //     setFirstName(content.firstName);
  //     console.log(content);
  //   })();
  // }, []);

  const submit = async (e) => {
    e.preventDefault();
    let token = null;
    const user = { username, password };
    try {
      const response = await fetch("https://staging-api.seventhave.io/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.toLowerCase(),
          password: password,
          version: "staging",
        }),
      });
      const data = await response.json();
      token = data.token;
      setUser(data);

      localStorage.setItem("user", JSON.stringify(data));
      console.log(data);
    } catch (error) {
      return console.error(error);
    } finally {
      if (token) {
        const json = jwt.decode(token);
        console.log(json);

        // setMessage(`Hello ${json.username}`);
        await router.push("/");
      }
    }
  };

  // const submit = async (e) => {
  //   e.preventDefault();
  //   const user = { username, password };
  //   // send the username and password to the server
  //   const response = await axios.post({
  //     method: "POST",
  //     url: "https://staging-api.seventhave.io/login",
  //     version: "staging",
  //     user,
  //   });

  //   // set the state of the user
  //   setUser(data);
  //   // store the user in localStorage
  //   localStorage.setItem("user", response.data);
  //   console.log(response.data);
  // };

  // const submit = async (username, password) => {
  //   let data = JSON.stringify({
  //     username:username.toLowerCase(),
  //     password: password,
  //     version: "staging",
  //   })
  //   let config = {
  //     method: "POST",
  //     url:`${baseUrl}/login`,
  //     headers:{"Content-Type": "application/json"}
  //   },
  // }

  // try {
  //   const req = await axios(config)
  // }

  // const logout = () => {
  //   localStorage.removeItem("user")
  // }
  // const handleLogout = () => {
  //   setUser({});
  //   setUsername("");
  //   setPassword("");
  //   localStorage.clear();
  // };

  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
  if (user) {
    return (
      <h1 className="xl:font-bold xl:text-[28px] text-[#057176]">
        {user.username} is logged in
      </h1>
    );
  }

  return (
    <div className="  py-36 xl:flex xl:flex-col xl:justify-center xl:items-center xl:py-52 xl:px-52 ">
      <div className="bg-white w-[85%] h-[479px] rounded-[32px] mx-auto xl:w-[788px] xl:h-[592px] xl:rounded-[70px] xl:flex xl:flex-col xl:justify-around xl:px-20 xl:py-20 ">
        <h1 className=" text-lg pt-10 pb-3 px-5  font-bold xl:text-[28px] text-[#057176]">
          Login to Seventh Ave
        </h1>

        <p className=" px-5 pb-5 tracking-wide text-[13px] xl:text-base text-[#667682]">
          Don't have account yet?{" "}
          <span className="text-[#057176] text-[13px] tracking-wide font-semibold">
            <Link href="/signup">Register</Link>
          </span>
        </p>
        <form onSubmit={submit}>
          <div>
            <label
              htmlFor="username"
              className="  text-sm ml-5  font-bold text-[13px] text-[#667682]"
            >
              Username
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              type="text"
              name="username"
              value={username}
              className="w-[85%] px-2 ml-5 appearance-none block md:w-[93%] text-black border  rounded-lg py-3 md:px-4 mb-3 mt-3 leading-tight focus:outline-none focus:ring-1 focus:ring-[#057176] focus:border-[#057176] bg-[#eaf1f7]  bg-opacity-30 focus:bg-white"
            />
          </div>
          <div>
            <label
              htmlFor="first name"
              className="  text-sm ml-5  font-bold text-[13px] text-[#667682]"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
              name="password"
              placeholder="Enter your password"
              className="w-[85%] ml-5  px-2 appearance-none block md:w-[93%] text-black border  rounded-lg py-3 md:px-4 mb-5 mt-3 leading-tight focus:outline-none focus:ring-1 focus:ring-[#057176] focus:border-[#057176] bg-[#eaf1f7]  bg-opacity-30 focus:bg-white"
            />
          </div>

          <div className=" flex ml-5 md:pr-10 xl:flex md:justify-between md:items-center xl:mt-6">
            <p className="text-[13px] text-[#667682]">Forgot Password?</p>
            <input
              value="Login"
              type="submit"
              className="   cursor-pointer w-[129px] ml-6 md:ml-0 md:w-44 h-11 mt-10 rounded-[16px] md:mt-0 bg-[#057176] xl:rounded-[16px] text-white text-sm"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
