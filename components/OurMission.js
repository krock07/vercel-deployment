import React from "react";
import Image from "next/image";

const OurMission = () => {
  return (
    <div className="bg-[#eca413] h-[509px] w-[324px] rounded-[34px] mx-auto my-10 md:w-[712px] md:h-[396px] md:flex md:flex-row-reverse md:items-center lg:w-[90%] lg:h-[635px] lg:rounded-[70px] xl:h-[835px] ">
      <div className="ml-5 md:mr-[-7px] lg:mr-[-30px] lg:max-w-[450px] xl:mr-4 lg:pr-10 2xl:mr-[9.75%] ">
        <h1 className="text-white text-center md:text-left   font-bold text-[24px] py-6 md:text-2xl tracking-wider lg:text-[37px]">
          Our mission
        </h1>
        <p className="text-white text-center md:text-left mb-1 text-sm md:text-base md:max-w-[290px] md:mr-4 break-normal max-w-[268px] lg:text-left   lg:text-[20px] lg:leading-normal lg:font-light lg:max-w-md lg:mb-3  xl:text-[24px] xl:font-normal ">
          Create a world wide community across the diaspora.
        </p>

        <p className="text-white text-center md:text-left mb-1 lg:text-left  text-sm md:text-base md:max-w-[290px] md:mr-4 break-normal max-w-[268px]  lg:text-[20px] lg:leading-normal  lg:font-light lg:max-w-sm lg:mb-3  xl:text-[24px] xl:font-normal ">
          Spotlight untold and nuanced Black narratives.
        </p>
        <p className="text-white text-center md:text-left lg:text-left  text-sm md:text-base md:max-w-[290px] md:mr-4 break-normal max-w-[268px]  lg:text-[20px] lg:leading-normal  lg:font-light lg:max-w-md  xl:text-[24px] xl:font-normal ">
          {" "}
          Build tools, both digital + physical, that evangelize and empower our
          communities at scale.
        </p>
      </div>
      <div className="w-auto absolute inset-y-[2595px] md:mr-80 md:inset-y-[2295px] lg:inset-y-[198.1rem] lg:left-14 xl:inset-y-[505.5%] 2xl:inset-y-[378.1%] 2xl:left-36  ">
        <img
          src="/Create.png"
          alt=""
          className="w-[324px] h-[270px] md:w-[392px] md:h-[356px] object-contain md:object-contain lg:w-[531px] lg:h-[542px] lg:object-cover xl:w-[731px] xl:h-[742px] xl:object-contain xl:ml-[18px]"
        />

        {/* <Image
          src="/create.png"
          alt="Picture of a women in a grey sweater"
          width={324}
          height={509}
          layout="responsive"
          className="object-contain"
        /> */}
      </div>
    </div>
  );
};

export default OurMission;
