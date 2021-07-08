import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { TwitterShareButton } from "react-share";
import { LinkedinShareButton } from "react-share";
import Link from "next/link";
import SelectField from "../../FormFields/SelectField";

const SignupSuccess = () => {
  const [open, setOpen] = useState(true);

  const creatorInterests = [
    {
      value: "1",
      label: "Podcast",
    },
    {
      value: "2",
      label: "Entertainment",
    },
    {
      value: "3",
      label: "Musician/Band",
    },
    {
      value: "4",
      label: "Finance",
    },
    {
      value: "5",
      label: "Tech",
    },
  ];
  return (
    <div className="xl:flex-col xl:flex xl:items-center xl:justify-around xl:py-48">
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed z-10 inset-0 overflow-y-auto"
          open={open}
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-[42px] w-[300px] mr-[95px] xl:w-[548px] xl:h-[540px] px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div className=" sm:block absolute top-0 right-0 pt-4 pr-4">
                  <Link href="/">
                    <button
                      type="button"
                      className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </Link>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="xl:mt-3 mt-6 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h1 className="xl:text-5xl text-4xl text-center mb-5">
                      Congratulations!
                    </h1>
                    <Dialog.Title
                      as="h3"
                      className="xl:text-[28px] text-xl font-bold text-[#057176] text-center leading-6 mb-5"
                    >
                      Want to skip the line?
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500 text-center">
                        Earn points to move up your spot in line to get in the
                        app through sharing on social media
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" mt-5 sm:mt-4 sm:flex sm:flex-row-reverse justify-center">
                  {/* <button
                    type="button"
                    className=" w-28 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Share to Twitter
                  </button> */}
                  <div className="flex flex-col justify-around h-32">
                    <div>
                      <button className="xl:w-[380px] w-[270px] text-[#057176]  font-semibold text-sm h-[44px] border-[#057176] border-2 rounded-[16px]">
                        <i className="fab fa-twitter text-[#057176] text-sm leading-lg mr-3 " />
                        <TwitterShareButton
                          url={String(window.location)}
                          hashtags={["#pullup"]}
                          title="I just saved my spot on the Ave"
                        >
                          {" "}
                          Share to Twitter
                        </TwitterShareButton>{" "}
                      </button>
                    </div>
                    <div>
                      <button className="xl:w-[380px] w-[270px] text-[#057176]  font-semibold text-sm h-[44px] border-[#057176] border-2 rounded-[16px]">
                        <i className="fab fa-linkedin text-[#057176] text-sm leading-lg mr-3 " />
                        <LinkedinShareButton
                          url={String(window.location)}
                          hashtags={["#pullup"]}
                          title="I just saved my spot on the Ave"
                        >
                          {" "}
                          Share to Linkedin
                        </LinkedinShareButton>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="mx-auto xl:w-[888px] xl:h-[846px] w-[85%] bg-white xl:flex-col xl:flex xl:items-center xl:justify-even rounded-[32px] xl:rounded-[4.35rem] mb-6 h-[350px]  ">
        <div className="w-full mt-28  justify-start items-center flex xl:pl-20  xl:mt-[120px] xl:mb-12">
          <h1 className=" py-5 pl-5 text-lg xl:text-lg xl:font-semibold">
            What type of creator are you
          </h1>
          {/* <div className=" xl:ml-60">
            <p
              onClick={skip}
              className=" cursor-pointer xl:text-sm xl:text-[#057176] xl:font-semibold"
            >
              Skip
            </p>
          </div> */}
        </div>
        <div className=" xl:w-[81%] w-[85%] flex flex-col mx-auto ">
          <label
            htmlFor=""
            className="block  tracking-wide text-[#667682] text-xs font-bold mb-2"
          >
            Type of creator
          </label>
          <select className=" block w-full text-black border  rounded-lg py-3 px-4 mt-3 mb-3 leading-tight focus:outline-none focus:ring-1 focus:ring-[#057176] focus:border-[#057176] bg-[#eaf1f7]  bg-opacity-30 focus:bg-white">
            <option>Podcast</option>
            <option></option>
            <option></option>
            <option></option>
          </select>
          {/* <SelectField
            name={interests.name}
            data={creatorInterests}
            fullWidth
          /> */}
        </div>
      </div>
    </div>
  );
};

export default SignupSuccess;
