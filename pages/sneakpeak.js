import React, {useState, useEffect} from "react";
import axios from "axios";
import {Credentials} from "../components/Credentials";
import SignInLayout from "../components/SignInLayout";
import image from "next/image";
import {FiShare2, FiFastForward} from "react-icons/fi";
import {useRouter} from "next/router";
import {RiTwitterLine} from "react-icons/ri";
import {HiOutlineMicrophone} from "react-icons/hi";
import {GrDocumentText} from "react-icons/gr";
import {GiMagnifyingGlass} from "react-icons/gi";

import Link from "next/link";

export default function sneakpeak() {
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
	});

	return (
		<SignInLayout>
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
					Sneak Peak
				</h1>

				<div className=" flex  flex-col md:pl-6 md:flex md:flex-row  xl:pl-40">
					<div className="  flex md:bg-[#eaf1f7] md:w-[216px] xl:w-[278px] md:h-[344px] md:rounded-[20px] md:items-center md:flex-col xl:flex xl:flex-col xl:items-center md:bg-opacity-30">
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
						<div className="flex md:bg-[#eaf1f7]"></div>
					</div>
				</div>
			</div>
		</SignInLayout>
	);
}
