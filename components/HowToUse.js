import React from "react";
import Image from "next/image";

const HowToUse = () => {
  return (
    // <div className="mt-40 flex">
    //   <div>
    //     <div>
    //       <div
    //         id="aboutSeventhAvePhotos"
    //         className="flex  relative bottom-16 mx-36"
    //       >
    //         <div className="flex flex-col mx-5">
    //           <div className="h-60 w-64">
    //             <Image
    //               src="/purposeLeft.png"
    //               alt="Picture of a women in a grey sweater"
    //               width={272}
    //               height={404}
    //               layout="responsive"
    //               className="rounded-[40px]"
    //             />
    //           </div>
    //         </div>

    //         <div className="h-[339] w-[283px]">
    //           <Image
    //             src="/image 63.png"
    //             alt="Picture of a women in a grey sweater"
    //             width={283}
    //             height={339}
    //             layout="responsive"
    //             className="rounded-[40px] object-cover"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div id="aboutSeventhAve" className="max-w-lg mx-20">
    //     <h3 className="text-[#f46514] text-lg uppercase mb-5">purpose</h3>
    //     <h1 className="text-[#057176] font-bold text-4xl mb-5">
    //       We Stand Together
    //     </h1>
    //     <p className="text-2xl break-normal font-light">
    //       Seventh Ave can build a foundation for honoring, hosting and
    //       harnessing the power of Black communities, in community.
    //     </p>
    //   </div>
    // </div>

    // <div>
    //   <div className="w-[196px] h-[284.06px] mx-auto my-7">
    //     <Image
    //       src="/image 60.png"
    //       alt="Picture of a women in a grey sweater"
    //       width={196}
    //       height={284.06}
    //       layout="responsive"
    //       className="rounded-[28px]"
    //     />
    //   </div>
    //   <div className="ml-5">
    //     <h3 className="text-[#f46514] text-xs uppercase">about seventh ave</h3>
    //     <h1 className="text-[#057176] font-bold text-xl my-3">
    //       Pull up On 7th
    //     </h1>
    //     <p className="text-sm  font-light">
    //       7th Seventh ave has several features that can make you meet new
    //       friends and get
    //       <br /> acquainted with them.
    //     </p>
    //   </div>
    // </div>
    <div className="bg-[#057176] h-[509px] w-[324px] rounded-[34px] mx-auto md:w-[712px] md:h-[396px] md:flex md:flex-row-reverse md:items-center lg:w-[90%] lg:h-[635px] lg:rounded-[70px] xl:h-[835px] xl:flex xl:flex-row-reverse">
      <div className="ml-5 relative bottom-6 md:m-0 lg:mr-3 xl:mr-[65px]">
        <h1 className="text-[#f2762f] font-bold pb-3 mr-6 text-center  text-[24px]  md:text-2xl lg:text-[37px] xl:mr-10  ">
          How to use the Ave
        </h1>
        <p className="text-white text-center xl:text-left lg:text-left  md:text-base md:max-w-[320px] max-w-[268px] lg:text-[20px] xl:text-[24px] lg:leading-normal lg:max-w-[350px]  lg:font-light xl:font-normal xl:max-w-[400px]">
          The Ave is a social networking app, allowing communities to gather in
          audio chat rooms to discuss various topics.
        </p>
      </div>
      <div className="w-auto h-auto md:mr-9 xl:pr-32 ">
        <img
          src="/discover.png"
          alt=""
          className="w-[324px] h-[337px] md:w-[334px] md:mx-auto md:h-[575px] object-contain lg:object-cover lg:w-[434px] xl:w-[597px] xl:h-[638px]"
        />
        {/* <Image
          src="/discover.png"
          alt="Picture of a women in a grey sweater"
          width={324}
          height={337}
          layout="responsive"
          className="object-cover"
        /> */}
      </div>
    </div>
  );
};

export default HowToUse;
