import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const links = [
    {
      label: "Home",
      url: "/",
      active: true,
    },
    { label: "About", url: "/about", active: false },
    { label: "Contact", url: "/contact", active: false },
  ];
  const [user, setUser] = useState();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);
  return (
    <nav className="w-screen h-[100px] flex flex-row items-center px-3 justify-between top-0 absolute bg-[#EFEAE5] z-50">
      <div className="lg:ml-10 2xl:ml-52 md:ml-3 ml-3 xl:ml-36">
        <Link href="/">
          <svg
            width="43"
            height="40"
            viewBox="0 0 71 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="lg:w-[63.92px] lg:h-[60px] md:w-[52px] md:h-[48.81px] cursor-pointer"
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
        </Link>
      </div>
      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <ul className="md:flex md:justify-between md:items-center  ml-16 xl:ml-[110px]">
          {links.map((el, index) => {
            console.log(el.label);
            return (
              <Link href={el.url} key={index}>
                <li
                  className={`${
                    router.asPath === el.url
                      ? "lg:px-6 2xl:px-10 xl:px-7 hover:text-black text-black cursor-pointer "
                      : " lg:px-6 2xl:px-10 xl:px-7 hover:text-black text-black text-opacity-50 cursor-pointer"
                  }`}
                >
                  {el.label}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="flex items-center mr-3 md:mr-22">
        <div className="px-2">
          <a
            className="text-[#057176]"
            href="https://www.instagram.com/pullupon7th/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter text-lg leading-lg " />
          </a>
        </div>
        <div className="px-2">
          <a
            className="text-[#057176]"
            href="https://www.instagram.com/pullupon7th/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram text-lg leading-lg " />
          </a>
        </div>
        <div className="pl-5 md:pr-10">
          {user ? (
            <Link href="/podcast">
              <div className=" cursor-pointer flex w-[199px] justify-around items-center h-[62px] rounded-[10px] bg-white bg-opacity-[18%]">
                <img
                  src={user.photo}
                  className=" rounded-full w-[42px] h-[42px] object-cover"
                  alt=""
                />
                <span className="text-black text-sm">
                  {user.firstName} {user.lastName}
                </span>
              </div>
            </Link>
          ) : (
            <Link href="/login">
              <button className=" hover:bg-[#f2762f] rounded-xl border border-white h-9 w-28 text-black">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
