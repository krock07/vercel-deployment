import React, {useState, useEffect} from "react";
import axios from "axios";
import {Credentials} from "../components/Credentials";
import ContactLayout from "../components/ContactLayout";
import image from "next/image";
import {FiShare2, FiFastForward} from "react-icons/fi";
import {useRouter} from "next/router";
import {RiTwitterLine} from "react-icons/ri";
import {HiOutlineMicrophone} from "react-icons/hi";
import {GrDocumentText} from "react-icons/gr";
import {GiMagnifyingGlass} from "react-icons/gi";

import Link from "next/link";
import {searchUser} from "../middleware/utilities";

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
			icon: <GrDocumentText />,
		},
		{label: "Tweets", url: "/tweets", active: false, icon: <RiTwitterLine />},
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
		<ContactLayout>
			<div className="xl:mt-36 mt-24">
				<div className="bg-[#EFEAE5] flex flex-col justify-center items-start  xl:relative xl:bottom-11 xl:pl-40">
					{user ? (
						<h1 className=" text-[28px] mb-5 ml-5 capitalize xl:m-0  font-bold xl:text-[32px] text-[#f2762f] xl:font-bold xl:pb-6">
							Hi {user.username}
						</h1>
					) : (
						<h1>no user</h1>
					)}

					<h3 className=" text-[26px] font-semibold w-[250px] leading-8 ml-5 md:w-[550px] xl:text-[30px] xl:w-[460px] xl:m-0 xl:font-semibold relative bottom-4">
						Handpicked Vibes While You Wait
					</h3>
				</div>
				<h1 className=" ml-5  mt-10 text-[20px] xl:font-medium xl:ml-[10.5rem] relative xl:top-8 ">
					Content
				</h1>
				<h1 className=" relative top-28 ml-5 md:top-[-28px] md:left-60 xl:left-0  xl:top-[3px] xl:ml-[30rem] md:text-[20px] md:font-medium pb-6">
					Keep your Ear to the Streets
				</h1>

				<div className=" flex  flex-col md:pl-6 md:flex md:flex-row  xl:pl-40">
					<div className=" no-scrollbar overflow-x-auto flex md:bg-[#eaf1f7] md:w-[216px]  xl:w-[278px] md:h-[344px] md:rounded-[20px] md:items-center md:flex-col xl:flex xl:flex-col xl:items-center md:bg-opacity-30">
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
					<div className=" mt-20 md:m-0 md:flex md:mx-auto md:w-9/12 md:justify-around md:flex-wrap">
						<div className="flex flex-col md:flex-row  px-6 md:p-0  md:mb-6">
							<div className="bg-[#c7d2da] h-[409px] mxa bg-opacity-30">
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
							</div>
							{/* card 2 */}
							<div className="bg-[#c7d2da] h-[409px] mxa bg-opacity-30">
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
							</div>
							{/* card 3 */}
							<div className="bg-[#c7d2da] h-[409px] mxa bg-opacity-30">
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
							</div>
						</div>
					</div>
				</div>
			</div>
		</ContactLayout>
	);
};

export default content;

// const creds = Credentials();
// var credentials = {
//   clientId: creds.ClientId,
//   clientSecret: creds.ClientSecret,
//   redirectUri: 'http://localhost:3000'
// };
