import React from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import InputField from "../../FormFields/InputField";
import ImageUpload from "../../ImageUpload";

const ProfileSettings = (props) => {
  const {
    formField: { username, password },
  } = props;
  return (
    <div className="xl:flex-col xl:flex xl:items-center xl:justify-around xl:py-48">
      <div className="mx-auto xl:w-[888px] xl:h-[846px] w-[85%] bg-white xl:flex-col xl:flex xl:items-center xl:justify-even rounded-[32px] xl:rounded-[4.35rem] mb-6 h-[550px]  ">
        <div className="w-full  justify-start items-center flex xl:pl-20  mt-[120px]">
          <h1 className="py-5 pl-5 text-lg xl:text-lg font-semibold xl:mb-5">
            Profile Settings
          </h1>
        </div>

        <div className="xl:flex  xl:justify-center ">
          <ImageUpload avatar />
        </div>
        <div className="xl:ml-[10%] xl:w-[81%] w-[85%] flex flex-col mx-auto 2xl:ml-20">
          <div className="relative">
            <label
              className="xl:text-[13px] text-[#667682] text-xs"
              htmlFor="username"
            >
              {username.label}
            </label>
            <InputField
              placeholder="Sarah Darwanto"
              className="appearance-none block w-full text-black border  rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-1 focus:ring-[#057176] focus:border-[#057176] bg-[#eaf1f7]  bg-opacity-30 focus:bg-white"
              type="text"
              name={username.name}
              id=""
            />
          </div>
          <div className="xl:relative">
            <label
              className="xl:text-[13px] text-[#667682] text-xs"
              htmlFor="username"
            >
              {password.label}
            </label>
            <InputField
              placeholder="Type your instagram username"
              className="appearance-none block w-full text-black border  rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-1 focus:ring-[#057176] focus:border-[#057176] bg-[#eaf1f7]  bg-opacity-30 focus:bg-white"
              type="password"
              name={password.name}
              id=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
