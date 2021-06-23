import React from "react";
import InputField from "../../FormFields/InputField";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const UserInfoFrom = (props) => {
  const {
    formField: {
      firstName,
      lastName,
      phoneNumber,
      email,
      birthday,
      location,
      password,
    },
  } = props;

  return (
    <div className="xl:flex-col xl:flex xl:items-center xl:justify-around xl:py-48">
      <div className=" mx-auto xl:w-[888px] xl:h-[846px] w-[85%] bg-white xl:flex-col xl:flex xl:items-center xl:justify-even rounded-[32px] xl:rounded-[4.35rem] mb-6 h-[670px]  ">
        <div className="w-full  justify-start items-center flex xl:pl-20  mt-[120px]">
          <h1 className=" py-5 pl-5 xl:text-lg xl:mb-8 text-lg font-semibold">
            Create Your Account
          </h1>
        </div>
        <div className="xl:w-[100%]">
          <div className="  w-full  xl:flex xl:flex-col ">
            <div className=" xl:flex xl:justify-around xl:items-center  xl:w-[101%] ">
              <div className="xl:flex xl:flex-col xl:w-[30%] w-[85%] flex flex-col mx-auto ">
                <label
                  htmlFor="first name"
                  className="xl:text-[13px] text-[#667682] text-xs"
                >
                  {firstName.label}
                </label>
                <InputField
                  name={firstName.name}
                  placeholder="Sarah Darwanto"
                />
              </div>
              <div className="xl:flex xl:flex-col xl:w-[30%] w-[85%] flex flex-col mx-auto">
                <label
                  htmlFor="last name"
                  className="xl:text-[13px] text-[#667682] text-xs"
                >
                  {lastName.label}
                </label>
                <InputField
                  name={lastName.name}
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div
              id="email"
              className="xl:ml-[91px] xl:w-[81%] w-[85%] flex flex-col mx-auto"
            >
              <label
                htmlFor="email"
                className="xl:text-[13px] text-[#667682] text-xs"
              >
                {email.label}
              </label>
              <InputField name={email.name} placeholder="Enter your email" />
            </div>
            <div
              id="phone number"
              className="xl:ml-[91px] xl:w-[81%] w-[85%] flex flex-col mx-auto"
            >
              <label
                htmlFor="phone number"
                className="xl:text-[13px] text-[#667682] text-xs"
              >
                {phoneNumber.label}
              </label>
              <InputField
                type="tel"
                name={phoneNumber.name}
                placeholder="999-999-9999"
              />
            </div>
            <div
              id="birthday"
              className="xl:ml-[91px] xl:w-[81%] w-[85%] flex flex-col mx-auto"
            >
              <label
                htmlFor="birthday"
                className="xl:text-[13px] text-[#667682] text-xs"
              >
                {birthday.label}
              </label>
              <InputField type="date" name={birthday.name} />
            </div>
            <div
              id="city"
              className="xl:ml-[91px] xl:w-[81%] w-[85%] flex flex-col mx-auto"
            >
              <label
                htmlFor="city"
                className="xl:text-[13px] text-[#667682] text-xs"
              >
                {location.label}
              </label>
              <InputField name={location.name} placeholder="Enter your city" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoFrom;
