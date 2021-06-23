import React from "react";
import SelectField from "../../FormFields/SelectField";

const Interests = (props) => {
  const {
    formField: { interests },
  } = props;

  const creatorInterests = [
    {
      value: "Podcast",
      label: "Podcast",
    },
    {
      value: "Entertainment",
      label: "Entertainment",
    },
    {
      value: "Musician/Band",
      label: "Musician/Band",
    },
    {
      value: "Finance",
      label: "Finance",
    },
    {
      value: "Tech",
      label: "Tech",
    },
  ];

  const skip = () => {
    setActiveStep(activeStep + 1);
    console.log(activeStep);
  };

  return (
    <div className="xl:flex-col xl:flex xl:items-center xl:justify-around xl:py-48">
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
          <SelectField name="name" data={creatorInterests} fullWidth />
        </div>
      </div>
    </div>
  );
};

export default Interests;
