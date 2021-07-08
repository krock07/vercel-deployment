import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";

const Hero = () => {
  return (
    //     <div className="relative  overflow-hidden">
    //       <img
    //         className="h-56 w-full object-cover  sm:h-72 md:h-96 lg:w-full lg:h-full"
    //         src="/hero.png"
    //         alt=""
    //       />
    //       <div className=" 2xl:mx-auto  2xl:px-4 2xl:relative 2xl:container 2xl:mt-14">
    //         <div className="md:absolute md:bottom-[100px] md:left-14 2xl:flex 2xl:flex-wrap 2xl:items-end 2xl:absolute 2xl:bottom-96">
    //           <div className="2xl:w-full  2xl:px-4 2xl:ml-auto 2xl:mr-auto 2xl:text-left 2xl:z-50">
    //             <div className="2xl:max-w-sm md:max-w-xs">
    //               <h1 className="text-white 2xl:font-semibold 2xl:text-3xl md:text-2xl md:font-bold ">
    //                 We Work Together
    //               </h1>
    //               <p className="2xl:mt-4 2xl:text-xl text-white 2xl:leading-loose md:py-6">
    //                 Come together🚀 , create shared experiences👍 , and explore the
    //                 limits of our imaginations.
    //               </p>
    //               <Link href="#">
    //                 <a className="bg-white hover:bg-[#057176] text-black font-semibold hover:text-white 2xl:py-2  2xl:px-4 border border-white hover:border-transparent 2xl:inline-block 2xl:mt-5 cursor-pointer rounded-2xl 2xl:text-[14px] md:px-8 md:py-2">
    //                   Reserve your name
    //                 </a>
    //               </Link>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    <div className="bg-[#057176] h-[41.625rem] w-screen lg:h-[50rem] overflow-x-hidden ">
      <div className="flex  w-80 mx-auto absolute inset-y-32  inset-x-6 md:w-screen md:absolute md:inset-x-[45%] md:inset-y-[13.5625rem] lg:inset-y-[120px] lg:inset-x-[43%] 2xl:inset-x-[57.5%]  ">
        <div className="w-auto ">
          <img
            src="/topLeft.png"
            alt=""
            className="md:w-[162.66px] md:h-[206.36px] w-[81.5px] lg:w-[256.43px] lg:h-[325.33px] object-cover"
          />
        </div>
        <div className=" w-auto object-cover mx-1">
          <img
            src="/middle.jpg"
            alt=""
            className=" w-[68.96px] md:w-[137.64px] md:h-[206.78px] lg:w-[217px] lg:h-[326px]"
          />
        </div>

        <div className="flex flex-col justify-between ">
          <div className=" w-auto">
            <img
              src="/leeft.jpg"
              alt=""
              className=" w-[116.95px]  md:h-[175px] md:w-[233.42px] lg:w-[368px] lg:h-[276px] object-cover object-right-bottom "
            />
          </div>
          <div className="w-auto mb-[340px] lg:mb-[700px]">
            <img
              src="/bottomRight.png"
              alt=""
              className="w-[167.48px] h-[133.8px] object-cover  md:w-[334.28px] md:h-[267.04px] md:mt-1 md:transform md:scale-x-[-1] lg:w-[527px lg:h-[421px] lg:object-right lg:transform-none xl:transform xl:scale-x-[-1]"
            />
          </div>
        </div>
      </div>
      <div className="flex absolute  inset-y-[242px] justify-between inset-x-[54px] w-80 sm:inset-x-[18%] md:inset-y-[428px] md:inset-x-[25rem] lg:inset-y-[450px] lg:inset-x-[598px] xl:inset-x-[777px] 2xl:inset-x-[65.7%]">
        <div className="w-auto">
          <img
            src="/bottom.png"
            alt=""
            className="w-[124.58px] md:w-[248.65px] lg:w-[392px] lg:h-[439px] object-cover"
          />
        </div>
      </div>
      <div className="absolute inset-y-[425px] inset-x-6 md:inset-y-[300px] md:inset-x-[2rem] lg:inset-x-12 lg:inset-y-[260px] xl:inset-x-[6rem] 2xl:inset-x-[11%] ">
        <div className="pb-6">
          <h1 className="text-[26px] font-bold text-white lg:text-[48px]">
            Seventh Ave
          </h1>
        </div>
        <div className="pb-6">
          <p className="text-white text-base leading-loose max-w-[300px] lg:text-2xl lg:max-w-[350px] lg:break-all">
            The digital neighborhood for our community.
          </p>
        </div>
        <div className="pt-2">
          <Link href="/signup">
            <a className=" bg-white hover:bg-[#f2762f] text-black font-medium px-6 py-2 hover:text-white 2xl:py-2  2xl:px-4 border border-white hover:border-transparent 2xl:inline-block 2xl:mt-5 cursor-pointer rounded-2xl 2xl:text-[14px] md:px-8 md:py-2">
              Reserve your username
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
