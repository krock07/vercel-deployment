import React, { useState } from "react";
import { Formik, Form } from "formik";
import {
  Stepper,
  Step,
  StepLabel,
  ThemeProvider,
  CircularProgress,
} from "@material-ui/core";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

import AccountTypeForm from "./forms/AccountTypeForm";
import UserInfoForm from "./forms/UserInfoForm";
import ProfileSettings from "./forms/ProfileSettings";
import Interests from "./forms/Interests";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import validationSchema from "./formModel/validationSchema";
import signupFormModel from "./formModel/signupFormModel";
import formInitialValues from "./formModel/formInitialValues";
import SignupSuccess from "./forms/SignupSuccess";

const steps = [
  "Create your account",
  "Profile Settings",
  "Your Interests",
  "Create Account",
];
const { formId, formField } = signupFormModel;

function renderStepContent(step) {
  switch (step) {
    case 0:
      return <AccountTypeForm formField={formField} />;
    case 1:
      return <UserInfoForm formField={formField} />;
    case 2:
      return <ProfileSettings formField={formField} />;
    case 3:
      return <Interests formField={formField} />;
    default:
      return <div>Not Found</div>;
  }
}

export default function SignupPage() {
  const [activeStep, setActiveStep] = useState(0);
  console.log(steps[0].status);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function submitForm(values, actions) {
    await sleep(3000);
    const account = values.individual ? "individual" : "creator";
    const username = values.username;
    const body = {
      ...values,
      username: username.toLowerCase(),
      accountType: account,
      photo: localStorage.getItem("imageData"),
      version: "staging",
    };
    const url = "https://staging-api.seventhave.io/register";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("success", json);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);

    console.log(values);
  }

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      console.log(values);

      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
    console.log(activeStep);
  };
  const defaultTheme = createMuiTheme();
  const theme = createMuiTheme({
    overrides: {
      MuiTypography: {
        root: {
          [defaultTheme.breakpoints.down("sm")]: {
            backgroundColor: defaultTheme.palette.secondary.contrast,
            display: "none",
          },
        },
      },
      MuiStepLabel: {
        labelContainer: {
          [defaultTheme.breakpoints.down("sm")]: {
            display: "none",
          },
        },
      },
    },
    palette: {
      primary: {
        main: "#057176",
        contrastText: "#fff",
      },
      secondary: {
        main: "#ffffff",
        contrast: "#F1F5F8",
      },
    },
  });

  const useStyles = makeStyles((theme) => ({
    root: {
      [theme.breakpoints.down("sm")]: {
        backgroundColor: "#f1f5f8",

        position: "relative",
        top: "6rem",
      },
    },
  }));
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <>
        {activeStep !== 0 ? (
          <div className="xl:mt-56 xl:px-80     xl:absolute xl:w-full 2xl:w-[75%] 2xl:ml-64 ">
            <Stepper
              className={classes.root}
              border-radius="10"
              activeStep={activeStep}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel className={classes.labelContainer}>
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
            <hr className=" hidden xl:w-[670px] xl:ml-14" />
          </div>
        ) : // <nav aria-label="Progress" className="mt-96 ml-52   absolute">
        //   <h1 className="xl:text-2xl xl:font-bold xl:w-[300px] xl:leading-10 text-[#058176] xl:ml-3">
        //     Let's create your account
        //   </h1>
        //   <Stepper activeStep={activeStep}>
        //     <ol className="overflow-hidden">
        //       {steps.map((step, stepIdx) => (
        //         <li
        //           key={step.name}
        //           className={classNames(
        //             stepIdx !== steps.length - 1 ? "pb-10" : "",
        //             "relative"
        //           )}
        //         >
        //           {step.status === "complete" ? (
        //             <>
        //               {stepIdx !== steps.length - 1 ? (
        //                 <div
        //                   className="-ml-px absolute mt-0.5 top-4  w-0.5 h-full"
        //                   aria-hidden="true"
        //                 />
        //               ) : null}

        //               <span className="h-9 flex items-center justify-end w-64">
        //                 <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white rounded-full top-6">
        //                   <CheckCircleIcon className="text-red-500" />
        //                 </span>
        //               </span>
        //               <span className="ml-4 min-w-0 flex flex-col">
        //                 <span className="text-xs font-semibold tracking-wide  text-[#057176]">
        //                   {step.name}
        //                 </span>
        //               </span>
        //             </>
        //           ) : step.status === "current" ? (
        //             <>
        //               {stepIdx !== steps.length - 1 ? (
        //                 <div
        //                   className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full"
        //                   aria-hidden="true"
        //                 />
        //               ) : null}

        //               <span
        //                 className="h-9 flex items-center"
        //                 aria-hidden="true"
        //               ></span>
        //               <span className="ml-4 min-w-0 h-12 flex flex-col bg-[#e6f1f1] w-72 justify-center rounded-2xl px-4">
        //                 <span className="text-xs font-semibold tracking-wide  text-[#057176]">
        //                   {step.name}
        //                 </span>
        //                 <span className="text-sm text-gray-500">
        //                   {step.description}
        //                 </span>
        //               </span>
        //             </>
        //           ) : (
        //             <>
        //               {stepIdx !== steps.length - 1 ? (
        //                 <div
        //                   className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full "
        //                   aria-hidden="true"
        //                 />
        //               ) : null}

        //               <span
        //                 className="h-9 flex items-center"
        //                 aria-hidden="true"
        //               ></span>
        //               <span className="ml-4 min-w-0 flex flex-col px-4 text-[#667682]">
        //                 {step.name}
        //               </span>
        //             </>
        //           )}
        //         </li>
        //       ))}
        //     </ol>
        //   </Stepper>
        //   <hr className=" w-[470px] origin-center transform rotate-90 ml-28 -mt-36" />
        // </nav>
        null}

        {/* stepper here */}
        <>
          {activeStep === steps.length ? (
            <SignupSuccess />
          ) : (
            <Formik
              initialValues={formInitialValues}
              validationSchema={currentValidationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form id={formId}>
                  {renderStepContent(activeStep)}

                  <div className="flex justify-end ml-[3.5rem] md:ml-[-10px]">
                    {activeStep !== 0 && (
                      <button
                        type="button"
                        onClick={handleBack}
                        className=" xl:bottom-[25.26rem] z-50 relative bottom-[88px] xl:left-[40rem] pointer xl:mr-80 xl:w-44 w-32 h-11 bg-none border-2 border-[#057176]  text-[#057176] rounded-2xl text-sm"
                      >
                        Previous
                      </button>
                    )}
                    <div className="xl:m-1 xl:bottom-[25.56rem] lg:left-6 w-[60%] relative bottom-[5.5rem] left-1">
                      <button
                        disabled={isSubmitting}
                        type="submit"
                        className="  xl:ml-[19.5rem] mr-20 w-32 xl:mr-80 xl:w-44 h-11 rounded-2xl xl:rounded-[16px] bg-[#057176]  text-white text-sm"
                      >
                        {isLastStep ? "Create Account" : "Next"}
                        {isSubmitting && (
                          <CircularProgress
                            size={24}
                            color="secondary"
                            style={{
                              position: "absolute",
                              top: "52%",
                              left: "50%",
                            }}
                          />
                        )}
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </>
      </>
    </ThemeProvider>
  );
}
