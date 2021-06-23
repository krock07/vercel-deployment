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
    accountType,
    // interests,
  },
} = signupFormModel;

export default {
  [firstName.name]: "",
  [lastName.name]: "",
  [phoneNumber.name]: "",
  [email.name]: "",
  [birthday.name]: "",
  [location.name]: "",
  [username.name]: "",
  [password.name]: "",
  [accountType.name]: "",
  // [individual.name]: "false",
  // [creator.name]: "false",
  // [interests.name]: "",
};
