import React from "react";
import SelectField from "../../FormFields/SelectField";

const Interests = (props) => {
  const {
    formField: { accountType },
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

  const individualInterests = [
    {
      value: "Arts & Entertainment",
      label: "Arts & Entertainment",
    },
    {
      value: "  Beauty & Fashion",
      label: "  Beauty & Fashion",
    },
    {
      value: " Business & Tech",
      label: " Business & Tech",
    },
    {
      value: "     Education",
      label: "     Education",
    },
    {
      value: "        Family & Relationships",
      label: "        Family & Relationships",
    },
    {
      value: "          Finance",
      label: "          Finance",
    },
    {
      value: "              Music",
      label: "              Music",
    },
    {
      value: "News",
      label: "News",
    },
    {
      value: "Other",
      label: "Other",
    },
    {
      value: "Politics",
      label: "Politics",
    },
    {
      value: " Science",
      label: " Science",
    },
    {
      value: "Society & Culture",
      label: "Society & Culture",
    },
    {
      value: "Spirituality",
      label: "Spirituality",
    },
    {
      value: "Sports",
      label: "Sports",
    },
    {
      value: " Travel",
      label: " Travel",
    },
    {
      value: "          Wellness & Health",
      label: "          Wellness & Health",
    },
  ];

  const skip = () => {
    setActiveStep(activeStep + 1);
    console.log(activeStep);
  };

  return (
    <div className=" pt-5 md:pt-32 xl:flex-col xl:flex xl:items-center xl:justify-around xl:py-48">
      <div className="mx-auto xl:w-[888px] lg:h-[500px] xl:h-[546px] w-[85%] bg-white xl:flex-col xl:flex xl:items-center xl:justify-even rounded-[32px] xl:rounded-[4.35rem] mb-6 h-[350px] md:h-[500px]  ">
        <div className="w-full mt-28  justify-start items-center flex xl:pl-16  xl:mt-[70px] xl:mb-12 md:pt-24 lg:pt-32 md:ml-10 ">
          {accountType === "creator" ? (
            <h1 className=" py-5  pl-5 text-lg xl:text-lg xl:font-semibold">
              What type of creator are you
            </h1>
          ) : (
            <h1 className=" py-5  pl-5 text-lg xl:text-lg xl:font-semibold">
              {" "}
              What are you interested in
            </h1>
          )}

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
          {accountType === "creator" ? (
            <>
              <label
                htmlFor=""
                className="block  tracking-wide text-[#667682] text-xs font-bold mb-2"
              >
                Type of creator
              </label>
              <SelectField name="name" data={creatorInterests} fullWidth />
            </>
          ) : (
            <>
              <label
                htmlFor=""
                className="block  tracking-wide text-[#667682] text-xs font-bold mb-2"
              >
                What category best describes you
              </label>
              <SelectField name="name" data={individualInterests} fullWidth />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Interests;
