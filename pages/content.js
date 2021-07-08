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

const content = () => {
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
    // { label: "Tweets", url: "/tweets", active: false, icon: <RiTwitterLine /> },
    {
      label: "Sneak Peak",
      url: "/sneakpeak",
      active: false,
      icon: <GiMagnifyingGlass />,
    },
  ];

  const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      setUser(loggedInUser);
      console.log(user);
    }
  }, []);

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
        <div className="bg-[#EFEAE5] flex flex-col justify-center items-start  xl:relative xl:bottom-11 xl:pl-40">
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
        <h1 className=" ml-5  mt-10 text-[20px] xl:font-medium xl:ml-[10.5rem] relative xl:top-8  ">
          Content
        </h1>
        <h1 className=" relative top-9rem ml-5 md:top-[-1.75px] md:left-60 xl:left-0  xl:top-[3px] xl:ml-[30rem] md:text-[20px] md:font-medium pb-6 2xl:left-[3%]">
          Popular Articles
        </h1>

        <div className=" flex  flex-col md:pl-6 md:flex md:flex-row  xl:pl-40">
          <div className="  flex md:bg-[#eaf1f7] md:w-[216px]  xl:w-[278px] md:h-[344px] md:rounded-[20px] md:items-center md:flex-col xl:flex xl:flex-col xl:items-center md:bg-opacity-30">
            <ul className=" border-b-2 border-[#222222] border-opacity-10 md:border-none md:mt-6 flex  md:flex-col md:items-center md:justify-center">
              <div className=" flex md:flex-col   xl:flex-col xl:justify-end">
                {links.map((el, index) => {
                  console.log(el.label);
                  return (
                    <Link href={el.url} key={index}>
                      <nav>
                        <li
                          className={`${
                            router.asPath === el.url
                              ? " border-b-2  border-[#057176] lg:px-6 2xl:px-10 md:p-0 xl:px-7 md:py-[7px] md:mb-4 md:hover:text-white md:text-white md:w-[184px] cursor-pointer xl:w-[230px] h-[52px] md:bg-[#057176] md:rounded-[10px] text-sm "
                              : "  lg:px-6 2xl:px-10 xl:px-7 md:mb-4 hover:text-[#057176] text-black  cursor-pointer"
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
          <div class=" mt-20 md:mt-0 md:flex md:relative md:top-[-19px] md:w-9/12   md:flex-wrap items-center  container mx-auto my-auto mb-10 xs:ml-5 ">
            {/* <!-- Card 1 --> */}
            <div class="md:m-4  rounded-md w-[312px] h-[409px] xl:w-[278px] lg:h-[409px] md:w-[216px] md:h-[438px] bg-[#C7d2da] bg-opacity-30 my-12 mx-8">
              {/* <!-- Card Image --> */}
              <img
                src="https://cdn.vox-cdn.com/thumbor/FVpK_HSqQziIFmNZgxcf2v5ELQc=/0x0:1912x1230/920x613/filters:focal(872x433:1176x737):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69281680/Screen_Shot_2021_05_13_at_1.18.25_PM.0.png"
                alt=""
                class="overflow-hidden w-[312px] lg:w-[278px] h-[147px] object-cover rounded-t-md md:w-[216px]"
              />
              {/* <!-- Card Content --> */}
              <div class="p-4">
                <h3 class="font-medium text-[#202c23] text-lg my-2 line-clamp-2 ">
                  Jaden Smith to open LA restaurant to feed homeless people for
                  free
                </h3>
                <p class=" line-clamp-4 text-sm text-[#667682]">
                  Jaden Smith is turning his I Love You food truck into a
                  restaurant. According to Variety, the multi-hyphenate’s new
                  endeavor will distribute food to displaced people in Los
                  Angeles, similar to his food truck.
                </p>
                <div class="mt-5">
                  <a
                    href="https://www.revolt.tv/news/2021/5/13/22434420/jaden-smith-i-love-you-restaurant-homeless"
                    class="py-2 mr-[128px]  font-semibold hover:text-white  text-[#057176]  md:mr-0"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Card 2 --> */}
            <div class="md:m-4  rounded-md w-[312px] h-[409px] xl:w-[278px] lg:h-[409px] md:w-[216px] md:h-[438px] bg-[#C7d2da] bg-opacity-30 my-12 mx-8">
              {/* <!-- Card Image --> */}
              <img
                src="https://cdn.shopify.com/s/files/1/0135/0280/8123/articles/custom_resized_ee7ccc36-843f-4022-aaf7-569e4381ea14_1024x1024.png?v=1621585421"
                alt=""
                class="overflow-hidden w-[312px] lg:w-[278px] h-[147px] object-cover rounded-t-md md:w-[216px]"
                target="_blank"
              />
              {/* <!-- Card Content --> */}
              <div class="p-4">
                <h3 class="font-medium text-[#202c23] text-lg my-2 line-clamp-2">
                  The student who received $50K from Drake in ‘GOD’S PLAN’ MUSIC
                  VIDEO JUST GRADUATED WITH HER MASTER’S DEGREE
                </h3>
                <p class="line-clamp-4 text-sm text-[#667682]">
                  A student who received $50k from Drake in his "God's Plan"
                  music video just graduated with her master's degree, Blavity
                  reports. Destiny Paris James is a South Carolina native who
                  grew up in a single-parent household and rose above her
                  circumstances to beat the odds.
                </p>
                <div class="mt-5">
                  <a
                    href="https://www.becauseofthemwecan.com/blogs/the-feels/the-student-who-received-50k-from-drake-in-god-s-plan-music-video-just-graduated-with-her-master-s-degree"
                    class="py-2 mr-[128px]  font-semibold hover:text-white  text-[#057176]  md:mr-0"
                    target="_blank"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Card 3 --> */}
            <div class="md:m-4  rounded-md w-[312px] h-[409px] xl:w-[278px] lg:h-[409px] md:w-[216px] md:h-[438px] bg-[#C7d2da] bg-opacity-30 my-12 mx-8">
              {/* <!-- Card Image --> */}
              <img
                src="https://s2982.pcdn.co/wp-content/uploads/2015/03/woman-reading.jpg.webp"
                alt=""
                class="overflow-hidden w-[312px] lg:w-[278px] h-[147px] object-cover rounded-t-md md:w-[216px]"
              />
              {/* <!-- Card Content --> */}
              <div class="p-4">
                <h3 class="font-medium text-[#202c23] text-lg my-2 line-clamp-2">
                  Reading as Self-care
                </h3>
                <p class="line-clamp-5 text-sm text-[#667682]">
                  Reading sometimes feels like a guilty pleasure or something I
                  have to justify. It’s a one-person activity that doesn’t
                  involve helping others, saving money for the future, or
                  contributing to making the world a less awful place. It
                  doesn’t help me build relationships or invest in my health.
                </p>
                <div class="mt-5">
                  <a
                    href="https://bookriot.com/reading-self-care/"
                    class="py-2 mr-[128px]  font-semibold hover:text-white  text-[#057176]  md:mr-0"
                    target="_blank"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div class="md:m-4  rounded-md w-[312px] h-[409px] xl:w-[278px] lg:h-[409px] md:w-[216px] md:h-[438px] bg-[#C7d2da] bg-opacity-30 my-12 mx-8">
              {/* <!-- Card Image --> */}
              <img
                src="https://www.ft.com/__origami/service/image/v2/images/raw/https://d1e00ek4ebabms.cloudfront.net/production/670aff55-b431-4a27-ad11-ac4100c7a95a.jpg?source=next&fit=scale-down&quality=highest&width=1220"
                alt=""
                class="overflow-hidden w-[312px] lg:w-[278px] h-[147px] object-cover rounded-t-md md:w-[216px]"
              />
              {/* <!-- Card Content --> */}
              <div class="p-4">
                <h3 class="font-medium text-[#202c23] text-lg my-2 line-clamp-2">
                  The Inner Scorecard: How Warren Buffett Mastered Life
                </h3>
                <p class="line-clamp-4 text-sm text-[#667682]">
                  While human behavior is complex and resistant to a “one size
                  fits all” approach, there are core predictable instincts that
                  help us understand ourselves and others better.
                </p>
                <div class="mt-5">
                  <a
                    href="https://fs.blog/2016/08/the-inner-scorecard/"
                    class="py-2 mr-[128px]  font-semibold hover:text-white  text-[#057176]  md:mr-0"
                    target="_blank"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            {/* card 5 */}
            <div class="md:m-4  rounded-md w-[312px] h-[409px] xl:w-[278px] lg:h-[409px] md:w-[216px] md:h-[438px] bg-[#C7d2da] bg-opacity-30 my-12 mx-8">
              {/* <!-- Card Image --> */}
              <img
                src="https://blog.stephsmith.io/content/images/size/w1000/2019/06/Screen-Shot-2019-06-01-at-6.19.20-PM-3.png"
                alt=""
                class="overflow-hidden w-[312px] lg:w-[278px] h-[147px] object-cover rounded-t-md md:w-[216px]"
              />
              {/* <!-- Card Content --> */}
              <div class="p-4">
                <h3 class="font-medium text-[#202c23] text-lg my-2 line-clamp-2">
                  How to Be Great? Just Be Good, Repeatably
                </h3>
                <p class="line-clamp-4 text-sm text-[#667682]">
                  Over the years, we’ve all encountered our fair share of
                  successes and failures. As I’ve acquired more of both under my
                  name, I’ve started to contemplate which experiences were truly
                  “great” and why.
                </p>
                <div class="mt-5">
                  <a
                    href="https://blog.stephsmith.io/how-to-be-great/"
                    class="py-2 mr-[128px]  font-semibold hover:text-white  text-[#057176]  md:mr-0"
                    target="_blank"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            {/* card 6 */}
            <div class="md:m-4  rounded-md w-[312px] h-[409px] xl:w-[278px] lg:h-[409px] md:w-[216px] md:h-[438px] bg-[#C7d2da] bg-opacity-30 my-12 mx-8">
              {/* <!-- Card Image --> */}
              <img
                src="https://afro.com/wp-content/uploads/2021/05/Hill-Harper-Collage.jpg"
                alt=""
                class="overflow-hidden w-[312px] lg:w-[278px] h-[147px] object-cover rounded-t-md md:w-[216px]"
              />
              {/* <!-- Card Content --> */}
              <div class="p-4">
                <h3 class="font-medium text-[#202c23] text-lg my-2 line-clamp-2">
                  Actor Hill Harper launches first Black-owned DigitalWallet,
                  ‘The Black Wall Street
                </h3>
                <p class="line-clamp-4 text-sm text-[#667682]">
                  Award-Winning Actor, Best-Selling Author and Former US
                  Presidential appointee, Hill Harper announces the launch of
                  The Black Wall Street (TBWS), as the first major step in
                  closing the racial wealth gap in the United States. As the
                  first Black- owned digital wallet and cryptocurrency exchange
                  platform in the United States,
                </p>
                <div class="mt-5">
                  <a
                    href="https://afro.com/actor-hill-harper-launches-first-black-owned-digitalwallet-the-black-wall-street/"
                    class="py-2 mr-[128px] md:mr-0 font-semibold hover:text-white  text-[#057176]"
                    target="_blank"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className=" mt-20 container items-center mx-auto my-auto md:m-0 md:flex md:mx-auto mdmy-auto md:w-9/12 bg-blue-500 md:justify-around md:flex-wrap">
            <div className="flex flex-col md:flex-row md:justify-between md:w-9/12 bg-red-500  px-6 md:p-0  md:mb-6"> */}
          {/* <div className="bg-[#c7d2da] h-[409px]  bg-opacity-30">
                <img
                  className="xl:w-[278px] object-cover xl:h-[147px]  md:w-[200px] md:h-[200px]"
                  src="https://cdn.vox-cdn.com/thumbor/FVpK_HSqQziIFmNZgxcf2v5ELQc=/0x0:1912x1230/920x613/filters:focal(872x433:1176x737):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69281680/Screen_Shot_2021_05_13_at_1.18.25_PM.0.png"
                  alt=""
                />

                <div className="flex   justify-between xl:justify-between xl:items-center md:flex-col ">
                  <p className="text-base  mt-3 px-3 font-semibold line-clamp-2 max-w-[250px] md:max-w-[180px] xl:max-w-[250px]">
                    Jaden Smith to open LA restaurant to feed homeless people
                    for free
                  </p>
                  <p className=" line-clamp-4 ml-3 mt-5 text-[#667682]    pb-14 max-w-[230px] xl:p-0 xl:text-[13px]  max-h-[100px] ">
                    Jaden Smith is turning his I Love You food truck into a
                    restaurant. According to Variety, the multi-hyphenate’s new
                    endeavor will distribute food to displaced people in Los
                    Angeles, similar to his food truck.
                  </p>
                  <div class="mt-5">
                    <a
                      href="https://www.revolt.tv/news/2021/5/13/22434420/jaden-smith-i-love-you-restaurant-homeless"
                      class=" py-2 mr-[128px]  font-semibold hover:text-white  text-[#057176]"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div> */}
          {/* card 2 */}
          {/* <div className="bg-[#c7d2da] h-[409px]  bg-opacity-30">
                <img
                  className="xl:w-[278px] object-cover xl:h-[147px]  md:w-[200px] md:h-[200px]"
                  src="https://cdn.vox-cdn.com/thumbor/FVpK_HSqQziIFmNZgxcf2v5ELQc=/0x0:1912x1230/920x613/filters:focal(872x433:1176x737):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69281680/Screen_Shot_2021_05_13_at_1.18.25_PM.0.png"
                  alt=""
                />

                <div className="flex   justify-between xl:justify-between xl:items-center md:flex-col ">
                  <p className="text-base  mt-3 px-3 font-semibold line-clamp-2 max-w-[250px] md:max-w-[180px] xl:max-w-[250px]">
                    Jaden Smith to open LA restaurant to feed homeless people
                    for free
                  </p>
                  <p className=" line-clamp-4 ml-3 mt-5 text-[#667682]    pb-14 max-w-[230px] xl:p-0 xl:text-[13px]  max-h-[100px] ">
                    Jaden Smith is turning his I Love You food truck into a
                    restaurant. According to Variety, the multi-hyphenate’s new
                    endeavor will distribute food to displaced people in Los
                    Angeles, similar to his food truck.
                  </p>
                  <div class="mt-5">
                    <a
                      href="https://www.revolt.tv/news/2021/5/13/22434420/jaden-smith-i-love-you-restaurant-homeless"
                      class=" py-2 mr-[128px]  font-semibold hover:text-white  text-[#057176]"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div> */}
          {/* card 3 */}
          {/* <div className="bg-[#c7d2da] h-[409px] mxa bg-opacity-30">
                <img
                  className="xl:w-[278px] object-cover xl:h-[147px]  md:w-[200px] md:h-[200px]"
                  src="https://cdn.vox-cdn.com/thumbor/FVpK_HSqQziIFmNZgxcf2v5ELQc=/0x0:1912x1230/920x613/filters:focal(872x433:1176x737):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69281680/Screen_Shot_2021_05_13_at_1.18.25_PM.0.png"
                  alt=""
                />

                <div className="flex   justify-between xl:justify-between xl:items-center md:flex-col ">
                  <p className="text-base  mt-3 px-3 font-semibold line-clamp-2 max-w-[250px] md:max-w-[180px] xl:max-w-[250px]">
                    Jaden Smith to open LA restaurant to feed homeless people
                    for free
                  </p>
                  <p className=" line-clamp-4 ml-3 mt-5 text-[#667682]    pb-14 max-w-[230px] xl:p-0 xl:text-[13px]  max-h-[100px] ">
                    Jaden Smith is turning his I Love You food truck into a
                    restaurant. According to Variety, the multi-hyphenate’s new
                    endeavor will distribute food to displaced people in Los
                    Angeles, similar to his food truck.
                  </p>
                  <div class="mt-5">
                    <a
                      href="https://www.revolt.tv/news/2021/5/13/22434420/jaden-smith-i-love-you-restaurant-homeless"
                      class=" py-2 mr-[128px]  font-semibold hover:text-white  text-[#057176]"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div> */}
          {/* </div>
          </div> */}
        </div>
      </div>
    </SignInLayout>
  );
};

export default content;

// const creds = Credentials();
// var credentials = {
//   clientId: creds.ClientId,
//   clientSecret: creds.ClientSecret,
//   redirectUri: 'http://localhost:3000'
// };
