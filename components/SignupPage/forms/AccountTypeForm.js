import React, { useState } from "react";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import RadioField from "../../FormFields/RadioField";
import Link from "next/link";
import { useField, Field } from "formik";

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from "@material-ui/core";

const AccountTypeForm = (props) => {
  const [selectedRadio, setSelectedRadio] = useState("individual");
  const {
    formField: { individual, creator },
  } = props;
  return (
    <div className=" flex flex-col items-center justify-center pt-32  xl:flex-col xl:flex xl:items-center xl:justify-around xl:py-48">
      <div className=" rounded-[32px] xl:w-[888px]  h-[616px] w-[85%] flex-col flex items-center justify-around xl:h-[846px] bg-white xl:flex-col xl:flex xl:items-center xl:justify-between  xl:rounded-[4.35rem]">
        <h1 className=" text-lg  font-bold xl:text-4xl xl:font-bold text-[#057176] xl:mt-32">
          Let's create your account
        </h1>

        <div className=" justify-center  flex flex-col items-center xl:flex xl:flex-row xl:items-center">
          <Field
            type="radio"
            name="accountType"
            value="individual"
            className="xl:w-80 hidden  xl:rounded-[2.125rem] xl:h-72  xl:absolute xl:top-[31.1875rem] xl:left-[23.875rem]  "
          />
          <span
            className=" cursor-pointer justify-center  flex flex-col items-center rounded-3xl w-4/5 xl:flex-col xl:flex xl:w-80 xl:rounded-[2.125rem] xl:h-72  hover:bg-[#e6f1f1] hover:border-[#057176] border-[#9caab4] border-2  xl:items-center xl:justify-center xl:mr-10 focus:outline-none focus:ring-2 focus:ring-[#057176] focus:bg-[#e6f1f1]"
            tabIndex="0"
          >
            <PersonAddIcon
              className="text-[#057176] my-3"
              style={{ fontSize: 60 }}
            />
            {/* <input type="radio" name="accountType" /> */}
            <h1 className=" mb-2 text-base font-semibold xl:text-2xl xl:font-semi-bold xl:py-4 ">
              Individual Account
            </h1>
            <small className="  mb-3 px-2 text-sm text-center xl:max-w-xs xl:text-[#667682]">
              A space that empowers your voice, your power, and your people.
            </small>
          </span>
          <div className=" justify-center mt-8  flex flex-col items-center xl:flex xl:flex-col xl:items-center xl:m-0 ">
            <div
              className="  cursor-pointer justify-center  flex flex-col items-center rounded-3xl w-4/5 xl:flex-col xl:flex xl:w-80 xl:rounded-[2.125rem] xl:h-72  hover:bg-[#e6f1f1] hover:border-[#057176] border-[#9caab4] border-2  xl:items-center xl:justify-center  focus:outline-none focus:ring-2 focus:ring-[#057176] focus:bg-[#e6f1f1]"
              tabIndex="0"
            >
              <Field
                type="radio"
                name="accountType"
                value="creator"
                className="xl:w-80  xl:h-80  xl:absolute xl:top-[31.1875rem] xl:right-[21.875rem] hidden  "
              />

              <i className="fas fa-users text-5xl text-[#057176] my-3"></i>
              <h1 className=" text-base font-semibold mb-2  xl:text-2xl xl:font-semi-bold xl:py-4">
                Creator Account
              </h1>
              <small className="  mb-3 px-2 text-sm text-center xl:max-w-xs xl:text-[#667682]">
                A space that empowers your voice, your power, and your people.
              </small>
            </div>
          </div>
        </div>
        <div className="xl:flex xl:relative xl:bottom-[4.5rem] relative bottom-[-1rem] xl:justify-start xl:px-32 xl:w-full">
          <p className="xl:pb-24  text-[#667682]">
            Have an account already?{" "}
            <span className=" relative z-50 text-[#057176] cursor-pointer font-semibold tracking-[0.03]">
              <Link href="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountTypeForm;
