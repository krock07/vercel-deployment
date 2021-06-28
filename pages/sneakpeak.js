import React, {useState, useEffect} from "react";
import {Credentials} from "../components/Credentials";
import SignInLayout from "../components/SignInLayout";
import {FiFastForward} from "react-icons/fi";
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
	}, []);

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
				<img
					src="/sneakPeakImages/search.png"
					alt=""
					className="w-[30px] h-[30px] absolute top-[320px] left-[1320px]"
				/>

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
					<div className="flex flex-col space-y-8 md:mb-6 mt-20 md:m-0 md:flex md:mx-auto md:w-9/12">
						{/* rectangle 1 */}
						<div className="flex space-x-5 justify-center bg-[#eaf1f7] w-[888px] h-[386px] bg-opacity-30 rounded-[20px]">
							<img
								src="/sneakPeakImages/Mask Group.png"
								alt=""
								className="relative w-[362px] h-[386px]"
							/>
							<div className="flex self-center md:w-[344px] md:h-[68px]">
								<p className="font-bold text-[24px] leading-[34px] text-[#057176] tracking-[0.02em]">
									Join audio conversations on the ave
								</p>
							</div>
						</div>

						{/* rectangle 2 */}
						<div className="flex items-center justify-end bg-[#eca413] w-[888px] h-[471px] bg-opacity-[0.06] rounded-[20px]">
							<section className="flex flex-col w-[330px] h-[254px]">
								<div className="md:w-[306px] md:h-[68px] md:mb-6">
									<p className="font-bold text-[24px] leading-[34px] text-[#eca413] tracking-[0.02em]">
										Share your authentic self with your profile
									</p>
								</div>
								<ul className="space-y-4 font-medium text-[16px] leading-[24px] tracking-[0.02em]">
									<li className="flex space-x-4">
										<span className="text-[17px] leading-[24px]">🎨 </span>
										<div className="inline-block align-text-bottom md:w-[159px] md:h-[24px]">
											<p>Share your intrest</p>
										</div>
									</li>
									<li className="flex space-x-4">
										<span className="text-[16px] leading-[16px]">💬 </span>
										<div className="md:w-[301px] md:h-[24px]">
											<p>Show your personality with prompts</p>
										</div>
									</li>
									<li className="flex space-x-4">
										<span className="text-[16px] leading-[16px]">😎 </span>
										<div className="md:w-[249px] md:h-[48px]">
											<p>Connect your instagram, twitter, and spotify</p>
										</div>
									</li>
									<li className="flex space-x-4">
										<span className="text-[17px] leading-[24px]">🚀 </span>
										<div className="md:w-[186px] md:h-[24px]">
											<p>Share your takeaways</p>
										</div>
									</li>
								</ul>
							</section>
							<img
								src="/sneakPeakImages/Mask Group2.png"
								alt=""
								className="w-[482px] h-[471px]"
							/>
						</div>

						{/* rectangle 3 */}
						<div className="flex space-x-5 justify-center bg-[#f2762f] w-[888px] h-[386px] bg-opacity-[0.06] rounded-[20px]">
							<img
								src="/sneakPeakImages/Group 1965.png"
								alt=""
								className="w-[362px] h-[386px]"
							/>
							<div className="flex self-center md:w-[344px] md:h-[68px]">
								<p className="font-bold text-[24px] leading-[34px] text-[#f2762f] tracking-[0.02em]">
									Share your conversations on social media
								</p>
							</div>
						</div>

						{/* rectangle 4 */}
						<div className="flex justify-end bg-[#eaf1f7] w-[888px] h-[386px] bg-opacity-30 rounded-[20px]">
							<div className="flex self-center md:w-[306px] md:h-[102px]">
								<p className="font-bold text-[24px] leading-[34px] text-[#057176] tracking-[0.02em]">
									Earn points and rewards for being a community advocate
								</p>
							</div>
							<img
								src="/sneakPeakImages/Mask Group4.png"
								alt=""
								className="w-[482px] h-[386px]"
							/>
						</div>

						{/* rectangle 5 */}
						<div className="flex space-x-5 justify-center bg-[#eca413] w-[888px] h-[386px] bg-opacity-[0.06] rounded-[20px]">
							<img
								src="/sneakPeakImages/Mask Group5.png"
								alt=""
								className="w-[362px] h-[386px]"
							/>
							<div className="flex self-center md:w-[344px] md:h-[34px]">
								<p className="font-bold text-[24px] leading-[34px] text-[#eca413] tracking-[0.02em]">
									Connect with your people
								</p>
							</div>
						</div>

						{/* rectangle 6 */}
						<div className="flex space-x-5 justify-center bg-[#f2762f] w-[888px] h-[386px] bg-opacity-[0.06] rounded-[20px]">
							<div className="flex self-center md:w-[334px] md:h-[68px]">
								<p className="font-bold text-[24px] leading-[34px] text-[#f2762f] tracking-[0.02em]">
									Schedule conversations for later
								</p>
							</div>
							<img
								src="/sneakPeakImages/Mask Group6.png"
								alt=""
								className="w-[395px] h-[386px]"
							/>
						</div>

						{/* rectangle 7 */}
						<div className="flex space-x-5 justify-center bg-[#eaf1f7] w-[888px] h-[386px] bg-opacity-30 rounded-[20px]">
							<img
								src="/sneakPeakImages/Mask Group7.png"
								alt=""
								className="w-[395px] h-[386px]"
							/>
							<div className="flex self-center md:w-[344px] md:h-[68px]">
								<p className="font-bold text-[24px] leading-[34px] text-[#057176] tracking-[0.02em] font-sans">
									Chat with your people in real time
								</p>
							</div>
						</div>

						{/* rectangle 8 */}
						<div className="flex justify-end bg-[#eca413] w-[888px] h-[386px] bg-opacity-[0.06] rounded-[20px]">
							<div className="flex self-center md:w-[306px] md:h-[68px]">
								<p className="font-bold text-[24px] leading-[34px] text-[#eca413] tracking-[0.02em]">
									Share your takeaways from great experiences
								</p>
							</div>
							<img
								src="/sneakPeakImages/Mask Group8.png"
								alt=""
								className="w-[482px] h-[386px]"
							/>
						</div>
					</div>
				</div>
			</div>
		</SignInLayout>
	);
}
