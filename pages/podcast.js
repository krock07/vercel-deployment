import React, { useState, useEffect } from "react";
import axios from "axios";
import { Credentials } from "../components/Credentials";
import SignInLayout from "../components/SignInLayout";
import image from "next/image";
import { FiShare2, FiFastForward } from "react-icons/fi";
import { useRouter } from "next/router";
import { RiTwitterLine } from "react-icons/ri";
import { HiOutlineMicrophone } from "react-icons/hi";
import { GrDocumentText } from "react-icons/gr";
import { GiMagnifyingGlass } from "react-icons/gi";
import { IoDocumentTextOutline } from "react-icons/io5";

import Link from "next/link";
import { searchUser } from "../middleware/utilities";

const podcast = () => {
  const cred = Credentials();
  const router = useRouter();
  const links = [
    {
      label: "Playlists",
      url: "/playlists",
      active: false,
      icon: <FiFastForward />,
    },
    {
      label: "Podcasts",
      url: "/podcast",
      active: true,
      icon: <HiOutlineMicrophone />,
    },
    {
      label: "Content",
      url: "/content",
      active: false,
      icon: <IoDocumentTextOutline />,
    },
    { label: "Tweets", url: "/tweets", active: false, icon: <RiTwitterLine /> },
    {
      label: "Sneak Peak",
      url: "/sneakpeak",
      active: false,
      icon: <GiMagnifyingGlass />,
    },
  ];

  const [podcasts, setPodcasts] = useState([]);
  const [token, setToken] = useState("");
  const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      setUser(loggedInUser);
      console.log(user);
    }
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(cred.ClientId + ":" + cred.ClientSecret),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      console.log(tokenResponse.data.access_token);
      setToken(tokenResponse.data.access_token);

      axios(
        "https://api.spotify.com/v1/shows?ids=2S4tSSlT71Z5i8Dt1vlDJc%2C6gcw7EF2i70vXXXJnhBNgA%2C0nMF1JL5tNJW7B0teIFWxV%2C1CtRqrNGqpAttWyft6nVss%2C3Cdge5G5apw1LsC8jGcl4j%2C7ohkV2D7vX8ISlHdwN7lPB%2C71qcFqfm1Y5PAQ6tUonLR3%2C3n5hEIVLquNRPipeKTFJOi%2C5r41MwHqXBXxR87L3Qi41t&market=US",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + tokenResponse.data.access_token,
          },
        }
      ).then((podcastResponse) => {
        console.log(podcastResponse.data);
        console.log(podcastResponse);

        // setPodcasts({ listOfPodcastFromAPI: podcastResponse.data.shows });
        setPodcasts(podcastResponse.data.shows);
      });
    });
  }, [cred.ClientId, cred.ClientSecret]);

  console.log(podcasts);

  // const test = podcasts.forEach(function (podcast) {
  //   let i = podcast.images.forEach(function (k) {
  //     console.log(k)
  //   )}
  // })

  //   <span
  //   className={`${
  //     router.asPath === el.url
  //       ? "  hover:text-white  text-white cursor-pointer text-2xl"
  //       : " lg:px-6 2xl:px-10 xl:px-7 xl:mb-4 hover:text-white text-black  cursor-pointer"
  //   }`}
  // >

  return (
    <SignInLayout>
      <div className="xl:mt-36 mt-24">
        <div className="bg-[#EFEAE5] flex flex-col justify-center items-start  xl:relative xl:bottom-11 xl:pl-40 ">
          {user ? (
            <h1 className=" text-[28px] mb-5 ml-5 capitalize xl:m-0  font-bold xl:text-[32px] text-[#f2762f] xl:font-bold xl:pb-6 2xl:ml-[3%]">
              Hi {user.username}
            </h1>
          ) : (
            <h1>no user</h1>
          )}

          <h3 className=" text-[26px] font-semibold w-[250px] leading-8 ml-5 md:w-[550px] xl:text-[30px] xl:w-[550px] xl:m-0 xl:font-semibold relative bottom-4 2xl:ml-[3%]">
            Handpicked Vibes While You Wait
          </h3>
        </div>
        <h1 className=" ml-5  mt-10 text-[20px] xl:font-medium xl:ml-[10.5rem] relative xl:top-8 ">
          Content
        </h1>
        <h1 className="  relative top-36 ml-5 md:top-[-28px] md:left-60 xl:left-0  xl:top-[3px] xl:ml-[30rem] md:text-[20px] md:font-medium pb-6 2xl:left-[3%]">
          Keep your Ear to the Streets
        </h1>

        <div className=" flex  flex-col md:pl-6 md:flex md:flex-row  xl:pl-40">
          <div className="  flex md:bg-[#eaf1f7] md:w-[216px]  xl:w-[278px] md:h-[344px] md:rounded-[20px] md:items-center md:flex-col xl:flex xl:flex-col xl:items-center md:bg-opacity-30">
            <ul className=" border-b-2 border-[#222222] border-opacity-10 md:border-none md:mt-6 flex  md:flex-col md:items-center md:justify-center">
              <div className=" flex md:flex-col   xl:flex-col xl:justify-end">
                {links.map((el, index) => {
                  console.log(el.url);
                  return (
                    <Link href={el.url} key={index}>
                      <nav>
                        <li
                          className={`${
                            router.asPath === el.url
                              ? " border-b-2  border-[#057176] lg:px-6 2xl:px-10 md:p-0 xl:px-7 md:py-[7px] md:mb-4 md:hover:text-white md:text-white md:w-[184px] cursor-pointer xl:w-[230px] h-[52px] md:bg-[#057176] md:rounded-[10px] text-sm font-normal "
                              : "  lg:px-6 2xl:px-10 xl:px-7 md:mb-4 hover:text-[#057176] text-black font-normal  cursor-pointer"
                          }`}
                        >
                          <div className="flex items-center mt-3">
                            <div className=" ml-5  px-2 xl:pr-3 xl:text-lg">
                              {el.icon}
                            </div>
                            <div className="text-sm"> {el.label}</div>
                          </div>
                        </li>
                      </nav>
                    </Link>
                  );
                })}
              </div>
            </ul>
          </div>
          <div className=" mt-20 md:m-0 md:flex md:mx-auto md:w-9/12 md:justify-around md:flex-wrap">
            {podcasts.map((item, key) => {
              return (
                <div className="flex flex-col  px-6 md:p-0  md:mb-6">
                  <img
                    className="xl:w-[300px] object-cover xl:h-[300px] rounded-[20px] md:w-[200px] md:h-[200px]"
                    src={item.images[1].url}
                    alt=""
                  />
                  <i class="fab fa-spotify relative bottom-[35px] left-[1rem] object-center xl:bottom-8 xl:left-3 text-[#1DB954] text-xl"></i>
                  <div className="flex justify-between xl:justify-between xl:items-center">
                    <a
                      className="cursor-pointer"
                      target="_blank"
                      href={item.external_urls.spotify}
                    >
                      <p
                        className="text-base font-semibold overflow-ellipsis truncate max-w-[250px] md:max-w-[180px] xl:max-w-[250px]"
                        key={key}
                      >
                        {item.name}
                      </p>
                    </a>

                    <a href={item.external_urls.spotify} target="_blank">
                      <FiShare2 />
                    </a>
                  </div>

                  <small className=" pb-14 xl:p-0 xl:text-[13px] max-w-[250px] max-h-[50px] truncate overflow-ellipsis ">
                    {item.total_episodes} Episodes
                  </small>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SignInLayout>
  );
};

export default podcast;

// const creds = Credentials();
// var credentials = {
//   clientId: creds.ClientId,
//   clientSecret: creds.ClientSecret,
//   redirectUri: 'http://localhost:3000'
// };

// AQDr8KjI-_j5ehXq0q4v6PGoh6PG7lvBobKW1rvY49lLOGKczZswN-hHkuiM187c4Ww2SIoI9YuMv1NJ63Tqvo2R8twmyQkpMU2xIGFkHKtH4ASl36u7c0hIvjxzOwOlfT0pqcGrqk_x8S0nXU6BtxakngIv0e5JGEIPmOn8Wx653nxfiRFSIabEikZ_hexMaMmSwzKJPXQf_Gvvgp0iriO__Ofa779v6UT_K3w
