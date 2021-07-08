import React from "react";
import Image from "next/image";

const Discover = () => {
  return (
    <div className="bg-[#f2762f] h-[509px] w-[324px] rounded-[34px] mx-auto mt-10 md:w-[712px] md:h-[396px] md:flex md:flex-row md:items-center md:justify-between lg:w-[90%] lg:h-[635px] lg:rounded-[70px] xl:h-[835px]  ">
      <div className="ml-5 md:ml-9 xl:ml-[87px] ">
        <h1 className="text-white md:text-left  text-center font-bold text-[24px] xl:ml-5 mr-5 py-6 md:text-2xl lg:text-[37px] md:ml-5">
          Discover together
        </h1>
        <p className="text-white md:text-left  text-center mx-6 text-sm md:text-base md:max-w-[320px] lg:text-[20px] lg:leading-normal lg:max-w-[380px] lg:font-light xl:text-[24px] xl:font-normal xl:max-w-[450px]  ">
          Use us a tool to share, connect, and learn together. Hop into
          experiences with friends to hang out or venture into spaces with
          strangers to create new perspectives and connections.
        </p>
      </div>
      <div className=" w-auto absolute inset-y-[2016px] md:ml-[445px] md:inset-y-[1839.5px] lg:inset-y-[152.3rem] lg:ml-[503.5px] xl:ml-[750px] xl:inset-y-[2646px] 2xl:ml-[61.5%]">
        <img
          src="/imagine.png"
          alt=""
          className="w-[313.03px] h-[300px] object-contain md:w-[300px] md:h-[375px] md:object-contain md:rounded-br-[34px] lg:w-[450px] lg:h-[600px] lg:object-contain xl:w-[585px] xl:h-[790px]"
        />
        {/* <Image
          src="/imagine.png"
          alt="Picture of a women in a grey sweater"
          width={313.03}
          height={500}
          layout="responsive"
          className="object-cover"
        /> */}
      </div>
    </div>
  );
};

export default Discover;
