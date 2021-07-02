import React from "react";
import { ProgressBar } from "react-bootstrap";

import Link from "next/link";
import ContactLayout from "../components/ContactLayout";
import AboutLayout from "../components/AboutLayout";

const about = () => {
  return (
    <AboutLayout>
      <div className="relative  overflow-hidden">
        <img
          className="h-96 w-[400px] object-cover object-right  sm:h-72 md:h-96 md:w-full lg:w-full lg:h-full xl:h-[605px]"
          src="/aboutHero.png"
          alt=""
        />
        <div className=" xl:mx-auto  xl:px-4 xl:relative xl:container xl:mt-14  ">
          <div className="md:absolute bg-red-600 md:bottom-[100px] md:left-14 xl:flex xl:flex-wrap xl:items-end xl:absolute xl:bottom-56 xl:left-2">
            <div className="w-full flex flex-col  justify-center items-center mx-auto md:w-[285px] xl:w-[500px] xl:px-4 xl:ml-auto xl:mr-auto xl:text-left xl:z-50">
              <div className="xl:max-w-[27.81rem]  md:ml-[-25px]  md:max-w-xl absolute top-40 md:top-[-116px] max-w-[315px] xl:-top-52">
                <h1 className="text-white font-bold xl:font-semi-bold text-3xl md:text-2xl md:font-bold ">
                  Our Mission
                </h1>
                <p className=" text-sm py-6 xl:text-xl text-white xl:leading-loose md:py-6 break-all ">
                  Together, we believe we can create a world that celebrates
                  Blackness in all its forms
                </p>
                <Link href="#">
                  <a className=" px-4 py-2 text-sm  font-normal bg-[#f2762f] hover:bg-[#057176] text-white xl:font-semibold hover:text-white 2xl:py-2  2xl:px-4 border border-[#f2762f] hover:border-transparent 2xl:inline-block 2xl:mt-5 cursor-pointer rounded-2xl 2xl:text-[14px] md:px-8 md:py-2">
                    Get to know us
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About the company */}
      <div className=" xl:-mt-56  mx-auto xl:mb-36">
        <div className=" flex flex-col-reverse  xl:flex md:flex-row md:w-full   md:items-center lg:mt-49 lg:pb-10 lg:ml-24 xl:pb-12 2xl:ml-[10%]">
          <div className="ml-5 mr-5 md:mt-[-76px] md:ml-[35px] lg:ml-[-45px] lg:mt-[-90px]  xl:w-[57rem] xl:-ml-2 xl:mt-36 ">
            <h3 className="text-[#057176] mb-5  font-bold text-2xl  md:text-2xl lg:text-[24px] lg:pb-2 xl:text-[24px] xl:ml-[28px] ">
              About the Company
            </h3>
            <p className="text-sm  leading-loose md:leading-normal mb-10 md:text-[15px] md:max-w-[490px] lg:text-[15px] lg:leading-8 lg:max-w-[456px]  xl:break-word xl:max-w-[539px] xl:text-[15px] xl:ml-[28px] ">
              For centuries physical spaces have acted as a beacon for cultures
              and communities. For the Black community, we have always counted
              on these havens to truly lean into ourselves and our community.
              We’re talking cookouts, carnivals, hair salons, and your auntie’s
              dinner table. You know, those places that just feel like home.{" "}
            </p>
          </div>
          <div className="w-auto h-auto mx-auto md:ml-3 md:right-2 my-7 md:mt-44 lg:mr-24 xl:mr-32  relative xl:w-[1000px] xl:left-[24px] xl:top-[-1px] bottom-36">
            <img
              src="/aboutCompany.png"
              alt=""
              className=" w-[395px] h-[265px] object-cover md:w-[378px] md:object-contain md:h-[347px] lg:ml-[-10px] lg:w-[478px] lg:rounded-none xl:w-[805.89px] xl:h-[510px] xl:mt-10 xl:object-contain  "
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
        </div>
      </div>

      {/* three photo section */}
      <div className=" xl:flex xl:ml-5 xl:mr-5 xl:justify-center mb-20 md:relative md:bottom-36 md:mb-2  ">
        <div className="xl:flex-col xl:flex  2xl:w-[85%] ">
          <div className=" flex gap-3 justify-between xl:flex pb-12 md:justify-around   md:w-[90%] md:mx-auto xl:w-full    ">
            <div className="xl:pr-6">
              <img
                src="/leftAboutImage.png"
                className=" w-[192px] h-[202px] object-cover xl:w-[380px] xl:h-[400px] md:w-[297px] md:h-[314px]"
                alt=""
              />
            </div>
            <div className="xl:pr-6">
              <img
                src="/centerAboutImage.png"
                className=" w-[192px] h-[202px] md:w-[297px] md:h-[314px] xl:w-[380px] xl:h-[400px] object-cover"
                alt=""
              />
            </div>
            <div className=" hidden xl:block md:block ">
              <img
                src="/rightAboutImage.png"
                className="md:w-[297px] md:h-[314px] xl:w-[380px] xl:h-[400px] object-cover"
                alt=""
              />
            </div>
          </div>

          <div className="xl:w-[1196px] xl:m-0 ml-5 mr-5 leading-loose text-sm md:mx-auto md:w-[689px] lg:w-[920px] 2xl:w-full 2xl:px-14 2xl:mb-3">
            <p className="md:text-[15px] md:leading-normal lg:leading-8">
              Seventh Ave boldly sets out to build the Black Metaverse, a place
              where digital and physical Black sensibilities converge to drive
              social, economic and political substantiality. Black-ness is broad
              yet specific, global yet local, and is steadily evolving over time
              and space at an exponential rate. Seventh Ave can build a
              foundation for honoring, hosting and harnessing the power of Black
              communities, In community.
            </p>
          </div>
        </div>
      </div>
      {/* our goal is to */}
      <div className="xl:mx-auto  pb-12 ml-5 mr-5   w-full md:m-0 md:px-6 md:relative md:bottom-24 lg:pl-14 2xl:pl-12">
        <div className="xl:flex items-center justify-between md:flex md:justify-around lg:justify-between xl:justify-around   w-screen">
          <div className="mb-10">
            <img
              src="/ladyTurban.png"
              className="md:w-[376px] md:h-[376px] xl:pr-6 xl:w-[556px] xl:h-[524px] md:object-cover"
              alt=""
            />
          </div>
          <div className="lg:max-w-[532px]  lg:w-[450px]  xl:mr-56  md:w-[400px] md:ml-22 md:px-10  lg:mr-24 lg:p-0 ">
            <h1 className="text-[#057176] mb-5  font-bold text-2xl xl:text-[24px] xl:font-bold xl:pb-12">
              Our goal is to...
            </h1>
            <ul className="list-disc text-sm px-5 xl:text-[15px] ">
              <li> Create a world wide community across the diaspora.</li>
              <li className="py-3">
                Spotlight untold and nuanced Black narratives.
              </li>
              <li>
                Build tools, both digital + physical, that evangelize and
                empower Black communities at scale.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </AboutLayout>
  );
};

export default about;
