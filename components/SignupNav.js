import React, { useState, useEffect } from "react";
import Link from "next/link";

function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [user, setUser] = useState();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);
  return (
    <nav
      className={
        (props.transparent
          ? "top-0 absolute z-50 w-full"
          : "relative bg-white shadow-lg") +
        " flex flex-wrap items-center justify-between px-2 py-3 "
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/">
            <a
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " title-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              }
            >
              <svg
                width="71"
                height="67"
                viewBox="0 0 71 67"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.264648 12.8769V25.7323H2.61152V19.5027C2.61152 17.6442 4.11817 16.1375 5.97671 16.1375L23.4485 16.1375L4.14484 66.6972H14.0609L34.1176 12.8768L0.264648 12.8769Z"
                  fill="#057176"
                />
                <path fill="#057176" />
                <path
                  d="M28.3063 47.5914V40.8292H29.4281V43.331C29.5563 43.1256 29.722 42.9654 29.9249 42.8506C30.1279 42.7298 30.3603 42.6693 30.6221 42.6693C30.9319 42.6693 31.2017 42.7539 31.4314 42.9231C31.6664 43.0863 31.8481 43.322 31.9763 43.6302C32.1045 43.9384 32.1686 44.3009 32.1686 44.7179V47.5914H31.0468V44.8811C31.0468 44.5487 30.98 44.2889 30.8464 44.1015C30.7129 43.9081 30.5286 43.8115 30.2935 43.8115C30.1226 43.8115 29.973 43.8568 29.8448 43.9474C29.7166 44.032 29.6151 44.1529 29.5403 44.31C29.4655 44.4671 29.4281 44.6454 29.4281 44.8448V47.5914H28.3063Z"
                  fill="#057176"
                />
                <path
                  d="M60.9992 61.0641L40.0433 0.302856L34.278 12.7244L50.5267 60.3662C51.0219 61.8181 49.9427 63.3264 48.4087 63.3264H44.1424V66.6972H67.8696L67.8157 63.3264H64.1724C62.7404 63.3264 61.4661 62.4179 60.9992 61.0641Z"
                  fill="#057176"
                />
                <path
                  d="M53.7251 40.8292H35.2255L33.893 47.7273H53.7251V40.8292Z"
                  fill="#057176"
                />
                <path
                  d="M50.1655 12.547H52.2763L55.1115 23.6185L57.9052 12.547H60.0574L56.2704 27.033H53.9733L50.1655 12.547Z"
                  fill="#057176"
                />
                <path
                  d="M64.0881 12.547H71V14.4095H65.9713V18.4863H69.1996L68.6409 20.3074H65.9713V25.3361H70.9586V27.033H64.0881V12.547Z"
                  fill="#057176"
                />
              </svg>
            </a>
          </Link>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none transition ease-in-out duration-1000"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {!navbarOpen ? (
              <i
                className={
                  (props.transparent ? "text-[#057176]" : "text-gray-800") +
                  " fas fa-bars"
                }
              ></i>
            ) : (
              <i
                className={
                  (props.transparent ? "text-[#057176]" : "text-gray-800") +
                  " fas fa-times"
                }
              ></i>
            )}
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none " +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")
          }
          id="example-navbar-warning"
        >
          {/* Instagram Logo Here */}
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "lg:text-black lg:hover:text-green text-black "
                    : "text-black hover:text-green") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="https://www.instagram.com/pullupon7th/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className={
                    (props.transparent
                      ? "lg:text-black lg:hover:text-green text-gray-500 hover:text-[#057176]"
                      : "text-gray-500 ") +
                    " fab fa-instagram text-lg leading-lg "
                  }
                />
                <span className="lg:hidden inline-block ml-2 text-gray-500 hover:text-[#057176]">
                  Follow us on Instagram
                </span>
              </a>
            </li>

            {/* Twitter Logo here */}
            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "lg:text-black lg:hover:text-green text-black"
                    : "text-black hover:text-gold-green") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="https://twitter.com/pullupon7th"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className={
                    (props.transparent
                      ? "lg:text-black text-gray-500 hover:text-[#057176]"
                      : "text-gray-500") + " fab fa-twitter text-lg leading-lg "
                  }
                />
                <span className="lg:hidden inline-block ml-2 text-gray-500 hover:text-[#057176]">
                  Follow us on Twitter
                </span>
              </a>
            </li>
          </ul>
          <div className="pl-5 md:pr-10 mb-5 md:mb-0">
            {user ? (
              <Link href="/login">
                <button className="rounded-xl border border-[#057176] h-9 w-28 text-[#057176]">
                  Login
                </button>
              </Link>
            ) : (
              <Link href="/signup">
                <button className="rounded-xl border mb-5 border-[#057176] h-9 w-28 text-[#057176]">
                  Get Started
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
