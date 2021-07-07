import React, { useState } from "react";
import Radio from "../../FormFields/Radio";
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
        <h1 className=" text-lg  font-bold md:text-4xl md:font-bold text-[#057176] xl:mt-32">
          Let's create your account
        </h1>

        <div className=" justify-center  flex flex-col items-center md:flex md:flex-row md:items-center md:ml-5">
          <Radio />
        </div>
        <div className="md:flex   md:relative md:bottom-[1.5rem] relative bottom-[-1rem] md:justify-start md:px-6 lg:px-24 md:w-full  xl:bottom-[.5rem]">
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
