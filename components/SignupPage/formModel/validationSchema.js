import * as Yup from "yup";
import Interests from "../forms/Interests";
import signupFormModel from "./signupFormModel";

const {
  formField: {
    firstName,
    lastName,
    phoneNumber,
    email,
    birthday,
    location,
    username,
    password,
    creator,
    individual,
    interests,
  },
} = signupFormModel;

const usernameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{3,29}$/;
// const emailRegex = !/\S+@\S+\.\S+/;
const phoneNumberRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export default [
  Yup.object().shape({
    [individual.name]: Yup.mixed().notRequired(),
    [creator.name]: Yup.mixed().notRequired(),
  }),

  Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
    [email.name]: Yup.string().required(`${email.requiredErrorMsg}`).email(),
    [phoneNumber.name]: Yup.string()
      .required(`${phoneNumber.requiredErrorMsg}`)
      .matches(phoneNumberRegex, phoneNumber.invalidErrorMsg),

    [birthday.name]: Yup.string().required(`${birthday.requiredErrorMsg}`),
    [location.name]: Yup.string().required(`${location.requiredErrorMsg}`),
  }),

  Yup.object().shape({
    [username.name]: Yup.string()
      .required(`${username.requiredErrorMsg}`)
      .matches(usernameRegex, username.invalidErrorMsg),
    [password.name]: Yup.string()
      .required(`${password.requiredErrorMsg}`)
      .matches(passwordRegex, password.invalidErrorMsg),
  }),

  // Yup.object().shape({
  //   [interests.name]: Yup.mixed().notRequired(),
  // }),
];
