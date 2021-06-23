import React from "react";
import PropTypes from "prop-types";

import { useField } from "formik";
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

const SelectField = (props) => {
  const { label, data, ...rest } = props;
  const [field, meta] = useField(props);
  const { value: selectedValue } = field;
  const [touched, error] = (meta, "touched", "error");
  const isError = touched && error && true;
  //   function _renderHelperText() {
  //     if (isError) {
  //       return <FormHelperText>{error}</FormHelperText>;
  //     }
  //   }

  return (
    <FormControl {...rest}>
      <InputLabel>{label}</InputLabel>
      <select
        className=" block w-full text-black border  rounded-lg py-3 px-4 mt-3 mb-3 leading-tight focus:outline-none focus:ring-1 focus:ring-[#057176] focus:border-[#057176] bg-[#eaf1f7]  bg-opacity-30 focus:bg-white"
        {...field}
        value={selectedValue ? selectedValue : ""}
      >
        {data.map((item, index) => (
          <option
            className="border-gray-100 rounded-t border-b  text-black hover:bg-[#057176] "
            key={index}
            value={item.value}
          >
            {item.label}
          </option>
        ))}
      </select>
      {/* {_renderHelperText()} */}
    </FormControl>
  );
};

SelectField.defaultProps = {
  data: [],
};

SelectField.propTypes = {
  data: PropTypes.array.isRequired,
};

export default SelectField;
