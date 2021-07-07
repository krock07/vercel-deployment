import React from "react";
import Image from "next/image";

export const About = () => {
  return (
    // <div className="2xl:flex 2xl:flex-wrap 2xl:justify-center">
    //   <div className="2xl:mt-40 2xl:flex">
    //     <div id="aboutSeventhAve" className="2xl:max-w-lg 2xl:mx-20">
    //       <h3 className="text-[#f46514] 2xl:text-lg uppercase 2xl:mb-5">
    //         about seventh ave
    //       </h3>
    //       <h1 className="text-[#057176] font-bold 2xl:text-4xl 2xl:mb-5">
    //         Pull up On 7th
    //       </h1>
    //       <p className="2xl:text-2xl 2xl:break-normal font-light">
    //         7th Seventh ave has several features that can make you meet new
    //         friends and get acquainted with them.
    //       </p>
    //     </div>
    //     <div>
    //       <div>
    //         <div
    //           id="aboutSeventhAvePhotos"
    //           className="2xl:flex  2xl:relative 2xl:bottom-16 2xl:mx-12"
    //         >
    //           <div className="2xl:flex 2xl:flex-col 2xl:mx-5">
    //             <div className="2xl:h-60 2xl:w-64">
    //               <Image
    //                 src="/aboutTop.jpg"
    //                 alt="Picture of a women in a grey sweater"
    //                 width={271}
    //                 height={241}
    //                 layout="responsive"
    //                 className="object-cover"
    //               />
    //             </div>
    //             <div>
    //               <Image
    //                 src="/aboutBottom.jpg"
    //                 alt="Picture of a women in a grey sweater"
    //                 width={271}
    //                 height={143}
    //                 layout="responsive"
    //                 className="2xl:rounded-[40px] object-cover"
    //               />
    //             </div>
    //           </div>

    //           <div className="2xl:h-60 2xl:w-64">
    //             <Image
    //               src="/aboutRight.jpg"
    //               alt="Picture of a women in a grey sweater"
    //               width={272}
    //               height={404}
    //               layout="responsive"
    //               className="2xl:rounded-[40px]"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* PURPOSE SECTION */}

    //   <Purpose />
    //   <div className="container flex justify-center m-0 relative bottom-[1050px]">
    //     <img src="/about-pattern.png" alt="" />
    //   </div>
    // </div>
    <div className="md:pb-28">
      <div className="flex-col flex md:flex-row  md:items-center lg:mt-49 lg:ml-24">
        <div className="w-auto h-auto mx-auto md:ml-[2rem] my-7 md:mt-44 lg:ml-0 lg:mr-24 xl:ml-2">
          <img
            src="/pullUp.png"
            alt=""
            className="w-[312px] h-[348px] object-contain md:w-[276px] md:h-[400px] lg:rounded-none lg:w-[547px] lg:h-[610px]  "
          />
          {/* <Image
          src="/image 60.png"
          alt="Picture of a women in a grey sweater"
          width={196}
          height={284.06}
          layout="responsive"
          className="rounded-[28px]"
        /> */}
        </div>
        <div className=" md:mt-40 md:ml-[10rem] lg:ml-[55px] xl:ml-[160px] mx-8 2xl:ml-[25%]">
          <h3 className="text-[#f46514] text-xs uppercase md:text-base lg:text-[18px] lg:pb-6">
            about seventh ave
          </h3>
          <h1 className="text-[#057176] font-bold text-xl my-3 md:text-2xl lg:text-[38px] lg:pb-6">
            Pull up On 7th
          </h1>
          <p className="text-sm   mb-10 md:text-base md:max-w-[325px] lg:text-[24px] lg:max-w-[432px] lg:leading-normal xl:break-word xl:max-w-[439px] ">
            Seventh Ave is a global community focused on creating experiences
            powered by voice. The Ave is our space to come create, imagine, and
            build in real-time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
