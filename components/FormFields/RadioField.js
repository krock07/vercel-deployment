import React, { useState } from "react";

import { useField, Field } from "formik";

import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormGroup,
} from "@material-ui/core";

function RadioField(props) {
  const { label, ...rest } = props;
  const [field, meta, helper] = useField(props);
  const { setValue } = helper;
  const [selectedRadio, setSelectedRadio] = React.useState("individual");

  function renderHelperText() {
    const [touched, error] = (meta, "touched", "error");
    if (touched && error) {
      return <p className="text-red-600 ml-1 text-xs">{error}</p>;
    }
  }

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setValue(e.target.value);
    setSelectedRadio(e.target.value);
  };
  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  //   console.log(event.target.value);
  // };

  return (
    // <>
    //   <FormControl>
    //     <FormGroup>
    //       <FormControlLabel
    //         value={field.checked}
    //         checked={field.checked}
    //         control={<Radio {...field} />}
    //         label={label}
    //       />
    //       <FormControlLabel
    //         value={field.checked}
    //         checked={field.checked}
    //         control={<Radio {...field} />}
    //         label={label}
    //       />
    //     </FormGroup>

    //     {renderHelperText()}
    //   </FormControl>
    // </>
    <div>
      {/* <input
        id="individual"
        name="accountType"
        type="radio"
        onChange={onChange}
        value={field.value}
      />
      {props.label && <label htmlFor={props.name}>{props.label}</label>} */}

      <Field
        name="accountType"
        type="radio"
        className="xl:w-80  xl:h-80  "
        // onChange={handleChange}
      ></Field>
    </div>
    // <>
    //   <FormControl {...rest}>
    //     <RadioGroup onChange={onChange} >
    //       <FormControlLabel
    //         // name={field.name}
    //         value={field.checked}
    //         control={<Radio {...field} />}
    //         label={label}
    //       />
    //       <FormControlLabel
    //         // name={field.name}
    //         value={field.checked}
    //         control={<Radio {...field} onChange={onChange} />}
    //         label={label}
    //       />
    //     </RadioGroup>
    //     {/* {renderHelperText()} */}
    //   </FormControl>
    // </>
  );
}

export default RadioField;
