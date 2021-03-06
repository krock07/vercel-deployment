import React, { useState } from "react";
import ContactLayout from "../components/ContactLayout";
import { RiPhoneLine } from "react-icons/ri";
import axios from "axios";

const contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    type: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({
      ...values,
      [name]: value,
    });
  };
  // const handleInputChange = (e) => {
  //   setValues((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  // const sendMessage = (e) => {
  //   e.preventDefault();
  //   if (!this.validateMail()) {
  //     return;
  //   }
  //   const templateParams = {
  //     from_name: values.firstName + " (" + values.lastName + ")",
  //     // to_name: {wherever you are sending the email},
  //     typeInquiry: values.typeInquiry,
  //     note: values.note,
  //   };
  // };

  // const submitEmail = async (e) => {
  //   e.preventDefault();
  //   console.log({ values });
  //   const response = await fetch("https://api.seventhave.io/func/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify({ values }),
  //   })
  //     .then((res) => res.json())
  //     .then(async (res) => {
  //       const resData = await res;
  //       console.log(resData);
  //       if (resData.status === "success") {
  //         alert("Message Sent");
  //       } else if (resData.status === "fail") {
  //         alert("Message failed to send");
  //       }
  //     })
  //     .then(() => {
  //       setValues({
  //         name: "",
  //         subject: "",
  //         email: "",
  //         type: "",
  //         message: "",
  //       });
  //     });
  // };
  // const submitEmail = () => {
  //   fetch("https://api.seventhave.io/func/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ values }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       const resData = res;
  //       console.log(resData);
  //       if (resData.status === "success") {
  //         alert("Message Sent");
  //       } else if (resData.status === "fail") {
  //         alert("Message failed to send");
  //       }
  //     });
  // };
  // async function submitEmail(e) {
  //   e.preventDefault();

  //   await fetch("https://api.seventhave.io/func/contact", {
  //     method: "POST",
  //     body: JSON.stringify({ values }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }

  // const submitEmail = async (e) => {
  //   e.preventDefault();
  //   console.log({ value });
  // const response = await fetch("https://api.seventhave.io/func/contact", {
  //   method: "POST",
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  //   body: JSON.stringify({ values }),
  // });
  //   const resData = await response.json();
  //   if (resData.status === 'success'){
  //     alert("Message Sent.");
  //     this.resetForm()
  // }else if(resData.status === 'fail'){
  //     alert("Message failed to send.")
  // }
  // };
  const submitEmail = (e) => {
    e.preventDefault();
    fetch("https://api.seventhave.io/func/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,
        type: values.type,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Message Sent");
      });
  };

  return (
    <ContactLayout>
      <div className="mt-40 mb-8 md:mb-0 px-6 w-full xl:flex xl:justify-around md:flex md:justify-around">
        <div className="xl:mt-14">
          <h1 className=" font-sans pb-3 xl:text-[30px] xl:font-bold xl:mb-4 text-3xl font-bold">
            Contact us
          </h1>
          <div className="pb-3 flex  items-center max-w-[220px] justify-between xl:flex xl:items-center xl:max-w-[220px] xl:justify-between">
            <i class="far fa-envelope"></i>
            <p className=" text-sm ">business@pullupon7th.com</p>
          </div>
          <div className=" flex  items-center max-w-[145px] justify-between  xl:flex xl:items-center xl:justify-between xl:max-w-[150px] xl:py-6 xl:mb-36">
            <RiPhoneLine className="text-xl" />
            <p className="text-sm">+1 (407) 737 2863</p>
          </div>
          <p className="text-sm text-[#86868c] relative top-[42rem] text-left xl:top-[-79px] md:top-[10px]">
            Don???t forget to follow our social media.
          </p>
          <div className=" relative top-[42.5rem] flex mb-0 md:mb-10  xl:top-[-79px] md:top-[20px]  justify-between w-2/12 xl:flex xl:items-center xl:justify-between xl:max-w-[50px] xl:mt-10">
            <a href="https://www.instagram.com/pullupon7th/">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/pullupon7th">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div>
          <h1 className=" text-lg pb-5 md:pb-0   font-bold xl:text-2xl xl:font-bold xl:mb-10">
            Get in touch with us
          </h1>

          <form onSubmit={submitEmail}>
            <div className="  xl:flex xl:justify-between xl:w-[510px] xl:mb-5">
              {/* <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0"> */}

              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="block  tracking-wide text-black text-xs font-bold mb-2"
                >
                  Name
                </label>
                <input
                  placeholder="Type your first name"
                  type="text"
                  name="name"
                  // value={values.firstName}
                  onChange={handleInputChange}
                  id=""
                  className="appearance-none block w-full text-black border  rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-1 focus:ring-[#057176] focus:border-[#057176] bg-[#eaf1f7]  bg-opacity-30 focus:bg-white"
                />
              </div>
              {/* <div className="xl:flex xl:flex-col">
                <label
                  htmlFor="name"
                  className="block  tracking-wide text-black text-xs font-bold mb-2"
                >
                  Last Name
                </label>
                <input
                  value={values.lastName}
                  onChange={handleInputChange}
                  placeholder="Type your last name"
                  type="text"
                  name="firstName"
                  id=""
                  className="appearance-none block w-full text-black border  rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-1 focus:ring-[#057176] focus:border-[#057176] bg-[#eaf1f7] bg-opacity-30 focus:bg-white"
                />
              </div> */}
            </div>
            <div className="xl:flex xl:flex-col">
              <label
                htmlFor="name"
                className="block  tracking-wide text-black text-xs font-bold mb-2"
              >
                Email
              </label>
              <input
                // value={values.email}
                onChange={handleInputChange}
                placeholder="Type your email"
                type="email"
                name="email"
                id=""
                className="appearance-none block w-full text-black border  rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-1 focus:ring-[#057176] focus:border-[#057176] bg-[#eaf1f7] bg-opacity-30 focus:bg-white"
              />
              <label
                htmlFor="name"
                className="block  tracking-wide text-black text-xs font-bold mb-2"
              >
                Subject
              </label>
              <input
                // value={values.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                type="text"
                name="subject"
                id=""
                className="appearance-none block w-full text-black border  rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-1 focus:ring-[#057176] focus:border-[#057176] bg-[#eaf1f7] bg-opacity-30 focus:bg-white"
              />
            </div>
            <div className="xl:flex-col xl:flex mb-5">
              <label
                htmlFor="typeInquiry"
                className="block  tracking-wide text-black text-xs font-bold mb-2"
              >
                Type
              </label>
              <select
                name="type"
                // value={values.type}
                onChange={handleInputChange}
                id=""
                className=" relative w-full border rounded-md shadow-sm pl-3 pr-10 py-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-[#057176] focus:border-[#057176] bg-[#eaf1f7] bg-opacity-30 sm:text-sm"
              >
                <option value="press">Press</option>
                <option value="brandPartnerships">Brand Partnerships</option>
                <option value="appSupport">App Support</option>
                <option value="generalInquiry">General Inquiry</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>
            <div className="xl:flex-col xl:flex xl:mb-5">
              <label
                htmlFor="note"
                className="block  tracking-wide text-black text-xs font-bold mb-2"
              >
                Message
              </label>
              <textarea
                placeholder="Tell us what's on your mind"
                name="message"
                // value={values.message}
                onChange={handleInputChange}
                id=""
                cols="30"
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none bg-[#eaf1f7] bg-opacity-30 focus:ring-1 focus:ring-[#057176] focus:border-[#057176]"
                rows="4"
              ></textarea>
            </div>
            <input
              type="submit"
              name=""
              id=""
              value="Drop us a line"
              className=" mt-3 ml-[9.5rem]  bg-[#057176] w-44 h-11 rounded-2xl text-white  text-sm font-semibold mb-20 xl:m-0 xl:mb-20"
            />
          </form>
        </div>
      </div>
    </ContactLayout>
  );
};

export default contact;
