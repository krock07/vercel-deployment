import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Transition } from "@headlessui/react";

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
        multiple={true}
        className=" form-multiselect block w-full text-black border  rounded-lg py-3 px-4 mt-3 mb-3 leading-tight focus:outline-none focus:ring-1 focus:ring-[#057176] focus:border-[#057176] bg-[#eaf1f7]  bg-opacity-30 focus:bg-white"
        {...field}
        value={selectedValue ? selectedValue : ""}
      >
        {data.map((item, index) => (
          <option
            // className={({ active }) =>
            //   `${active ? "text-amber-900 bg-amber-100" : "text-gray-900"}
            //     cursor-default select-none relative py-2 pl-10 pr-4`
            // }
            className="border-gray-100 rounded-t rounded-b border-b  text-black hover:bg-[#057176] hover:text-white "
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
