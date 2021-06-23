export default {
  formId: "signupForm",
  formName: "signup",
  formField: {
    accountType: {
      name: "accountType",
    },
    individual: {
      name: "individual",
      label: "Individual",
      value: "individual",
    },
    creator: {
      name: "creator",
      label: "Creator",
      value: "creator",
    },

    firstName: {
      name: "firstName",
      label: "First Name",
      requiredErrorMsg: "Required Field",
    },
    lastName: {
      name: "lastName",
      label: "Last Name",
      requiredErrorMsg: "Required Field",
    },
    phoneNumber: {
      name: "phoneNumber",
      label: "Phone Number",
      requiredErrorMsg: "Required Field",
      invalidErrorMsg: "Phone number is not valid",
    },
    email: {
      name: "email",
      label: "Email",
      requiredErrorMsg: "Required Field",
      invalidErrorMsg: "Email address is not valid",
    },
    birthday: {
      name: "birthday",
      label: "Birthday",
      requiredErrorMsg: "Required Field",
    },
    location: {
      name: "location",
      label: "City",
      requiredErrorMsg: "Required Field",
    },
    username: {
      name: "username",
      label: "Username",
      requiredErrorMsg: "Required Field",
      invalidErrorMsg:
        "Username is limited to a minimum length of 3 and must contain only letters, numbers, periods, and underscores",
    },
    password: {
      name: "password",
      label: "Password",
      requiredErrorMsg: "Required Field",
      invalidErrorMsg:
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character",
    },
  },
};
