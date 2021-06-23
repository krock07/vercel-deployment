import React from "react";
import { at } from "lodash";

import { useField, Field } from "formik";
import { TextField } from "@material-ui/core";

export default function InputField(props) {
  const { errorText, ...rest } = props;
  const [field, meta] = useField(props.name);

  // function renderHelperText() {
  //   const [touched, error] = at(meta, "touched", "error");
  //   if (touched && error) {
  //     return error;
  //   }
  // }

  return (
    <>
      <Field
        className="appearance-none block w-full  text-black border  rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-1 focus:ring-[#057176] focus:border-[#057176] bg-[#eaf1f7]  bg-opacity-30 focus:bg-white"
        type="text"
        // error={meta.touched && meta.error && true}
        // helperText={renderHelperText()}
        {...field}
        {...rest}
      />
      {meta.error && meta.touched && (
        <div className="relative xl:bottom-3 bottom-[12px]">
          <p className="text-red-600 text-xs ml-1">{meta.error}</p>
        </div>
      )}
    </>
  );
}
