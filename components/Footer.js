import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-[#057176] h-[869px] w-full md:h-[584px]">
      <div className="md:flex md:pt-8 pb-6 ">
        <div className="   flex-col flex justify-between items-center md:items-start md:ml-7 md:max-w-sm xl:ml-40">
          <div className="py-7 items-center lg:w-[639px] lg:mt-16">
            <h1 className="text-[26px] font-bold text-white max-w-[317px] md:text-2xl   lg:max-w-[600px]   ">
              Join the community on Seventh Ave today!
            </h1>
          </div>
          <div className="pb-10 items-center">
            <p className="text-white max-w-xs ml-3 text-sm md:text-base md:max-w-[349px] md:break-all md:m-0  lg:max-w-[385px]">
              Together, we believe we can create a world that celebrates
              Blackness in all its forms.
            </p>
          </div>
          <div className="flex w-full justify-around pb-16 mx-auto md:justify-between  ">
            <Link href="/signup">
              <button className="bg-[#f2762f] w-[154px] h-[44px] rounded-[16px] text-sm text-white cursor-pointer">
                Get Started
              </button>
            </Link>
            <Link href="/faqs">
              <button className="relative z-50 bg-none border-white border w-[154px] h-[44px] rounded-[16px] text-sm text-white cursor-pointer">
                FAQs
              </button>
            </Link>
          </div>
        </div>
        <div className=" w-auto ml-6 absolute  md:mt-8 md:z-10 lg:mt-0 lg:ml-32 xl:ml-[359px] overflow-hidden">
          <img
            src="/footer.png"
            alt=""
            className="w-[400.07px] object-cover ml-10  md:ml-[400px] lg:w-[581px] lg:h-[365px] lg:rounded-none lg:ml-[500px] lg:object-contain"
          />
        </div>

        <div className="bg-[#086266] w-[416.61px] h-[175px]  ml-12 my-8 md:h-[215px]  md:mt-[55px] md:m-0 md:inset-x-[410px] md:absolute lg:inset-x-[600px] lg:rounded-none lg:h-[310px] lg:w-[424px] lg:transform xl:inset-x-[830px] xl:w-[608px]"></div>
      </div>

      <hr className="w-4/5 mx-auto pb-8 md:w-11/12 lg:hidden" />
      <ul className="hidden md:flex-row md:flex  md:justify-around md:-mx-8 md:text-white md:text-xs md:mb-16 lg:hidden">
        <li>Get Started</li>
        <li>Faqs</li>
        <li>Collaborate with us</li>
        <li>Keep us informed</li>
      </ul>
      <div className="w-full justify-center flex flex-col items-center md:flex md:flex-row md:justify-between md:px-8 lg:mt-12">
        <div className="md:flex-col md:flex justify-center flex flex-col items-center md:items-start xl:ml-32">
          <svg
            width="43"
            height="40"
            viewBox="0 0 71 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.264648 12.8769V25.7323H2.61152V19.5027C2.61152 17.6442 4.11817 16.1375 5.97671 16.1375L23.4485 16.1375L4.14484 66.6972H14.0609L34.1176 12.8768L0.264648 12.8769Z"
              fill="white"
            />
            <path fill="white" />
            <path
              d="M28.3063 47.5914V40.8292H29.4281V43.331C29.5563 43.1256 29.722 42.9654 29.9249 42.8506C30.1279 42.7298 30.3603 42.6693 30.6221 42.6693C30.9319 42.6693 31.2017 42.7539 31.4314 42.9231C31.6664 43.0863 31.8481 43.322 31.9763 43.6302C32.1045 43.9384 32.1686 44.3009 32.1686 44.7179V47.5914H31.0468V44.8811C31.0468 44.5487 30.98 44.2889 30.8464 44.1015C30.7129 43.9081 30.5286 43.8115 30.2935 43.8115C30.1226 43.8115 29.973 43.8568 29.8448 43.9474C29.7166 44.032 29.6151 44.1529 29.5403 44.31C29.4655 44.4671 29.4281 44.6454 29.4281 44.8448V47.5914H28.3063Z"
              fill="white"
            />
            <path
              d="M60.9992 61.0641L40.0433 0.302856L34.278 12.7244L50.5267 60.3662C51.0219 61.8181 49.9427 63.3264 48.4087 63.3264H44.1424V66.6972H67.8696L67.8157 63.3264H64.1724C62.7404 63.3264 61.4661 62.4179 60.9992 61.0641Z"
              fill="white"
            />
            <path
              d="M53.7251 40.8292H35.2255L33.893 47.7273H53.7251V40.8292Z"
              fill="white"
            />
            <path
              d="M50.1655 12.547H52.2763L55.1115 23.6185L57.9052 12.547H60.0574L56.2704 27.033H53.9733L50.1655 12.547Z"
              fill="white"
            />
            <path
              d="M64.0881 12.547H71V14.4095H65.9713V18.4863H69.1996L68.6409 20.3074H65.9713V25.3361H70.9586V27.033H64.0881V12.547Z"
              fill="white"
            />
          </svg>

          <div className="py-4">
            <p className="text-[10px] text-white">
              ©2021 Made with ❤️ by 👋🏾 hands
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 w-4/5">
          <ul className=" md:hidden lg:flex lg:justify-around lg:text-white lg:text-[14px] flex justify-around text-white text-xs">
            <Link href="/">
              <li>
                <a className="cursor-pointer"> Home</a>
              </li>
            </Link>

            <Link href="/about">
              <li>
                <a className="cursor-pointer"> About</a>
              </li>
            </Link>
            <Link href="/contact">
              <li>
                <a className="cursor-pointer">Contact</a>
              </li>
            </Link>
            <Link href="/podcast">
              <li className="cursor-pointer">Faqs</li>
            </Link>
            <li className="cursor-pointer">Partners</li>
          </ul>
        </div>

        <div className="md:flex md:flex-col xl:mr-24">
          <div className="pb-6">
            <p className="text-[10px] text-white text-center md:text-left hidden">
              Questions? Text +1 (404) 737-2862
              <br /> Support@pullupon7th.com
            </p>
          </div>
          <div className="flex  items-center justify-center">
            <div className="px-2">
              <a
                className="text-white"
                href="https://www.instagram.com/pullupon7th/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter text-lg leading-lg " />
              </a>
            </div>
            <div className="px-2">
              <a
                className="text-white"
                href="https://www.instagram.com/pullupon7th/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram text-lg leading-lg " />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
