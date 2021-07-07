import React from "react";
import styles from "../../components/Radio.module.scss";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

import { useField, Field } from "formik";

function renderHelperText() {
  const [touched, error] = (meta, "touched", "error");
  if (touched && error) {
    return <p className="text-red-600 ml-1 text-xs">{error}</p>;
  }
}

function Radio(props) {
  //   const { label, ...rest } = props;
  const [field, meta, helper] = useField({
    name: "accountType",
    type: "radio",
  });
  const { setValue } = helper;
  const [selectedRadio, setSelectedRadio] = React.useState("Individual");

  const handleChange = (e) => {
    const { name, value } = e.target;
    // const value = target.type === "checkbox" ? target.checked : target.value;
    // const name = target.name;
    setValue(value);
    setSelectedRadio({
      [name]: value,
    });
    console.log(selectedRadio);
  };
  return (
    <>
      <label className={styles.radio}>
        <span className={styles.radio__input}>
          <Field
            type="radio"
            name="accountType"
            value="Individual"
            onChange={handleChange}
          />
          <span className={styles.radio__control}>
            <PersonAddIcon
              className="text-[#057176] mt-[1rem] ml-[6rem] mb-3 md:mt-[3rem] md:ml-[37%]  "
              style={{ fontSize: 60 }}
            />
            <h1 className=" text-base ml-16 mb-1 text-black font-semibold  md:text-2xl md:font-semi-bold md:py-4 md:ml-[16%]">
              {" "}
              Individual Account
            </h1>
            <p className="px-5 leading-[20px] text-sm text-center xl:max-w-xs xl:text-[#667682] xl:ml-[5%]">
              A space that empowers your voice, your power, and your people.
            </p>
          </span>
        </span>
        <span className={styles.radio__label}></span>
      </label>

      <label className={styles.radio}>
        <span className={styles.radio__input}>
          <Field
            type="radio"
            name="accountType"
            value="Creator"
            onChange={handleChange}
          />
          <span className={styles.radio__control}>
            <i className="fas fa-users text-5xl text-[#057176] mt-[1rem] ml-[6rem] mb-3 md:mb-[1rem] lg:mb-3 md:mt-[3.5rem] md:ml-[37%]  "></i>
            <h1 className=" text-base mb-1 ml-[4.5rem] text-black font-semibold md:text-2xl md:font-semi-bold md:py-4 md:ml-[23%]">
              {" "}
              Creator Account
            </h1>
            <p className="px-5 leading-[20px] text-sm text-center xl:max-w-xs xl:text-[#667682] xl:ml-[5%]">
              A space that empowers your voice, your power, and your people.
            </p>
          </span>
        </span>
        <span className={styles.radio__label}></span>
      </label>
    </>
  );
}

export default Radio;
