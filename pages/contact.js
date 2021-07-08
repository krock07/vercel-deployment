import React, { useState } from "react";
import ContactLayout from "../components/ContactLayout";
import { RiPhoneLine } from "react-icons/ri";

const contact = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    typeInquiry: "",
    note: "",
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

  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
    const response = await fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .then(() => {
        setValues({
          firstName: "",
          lastName: "",
          email: "",
          typeInquiry: "",
          note: "",
        });
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
            Don’t forget to follow our social media.
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

          <form>
            <div className="  xl:flex xl:justify-between xl:w-[510px] xl:mb-5">
              {/* <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0"> */}

              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="block  tracking-wide text-black text-xs font-bold mb-2"
                >
                  First Name
                </label>
                <input
                  placeholder="Type your first name"
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleInputChange}
                  id=""
                  className="appearance-none block w-full text-black border  rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-1 focus:ring-[#057176] focus:border-[#057176] bg-[#eaf1f7]  bg-opacity-30 focus:bg-white"
                />
              </div>
              <div className="xl:flex xl:flex-col">
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
              </div>
            </div>
            <div className="xl:flex xl:flex-col">
              <label
                htmlFor="name"
                className="block  tracking-wide text-black text-xs font-bold mb-2"
              >
                Email
              </label>
              <input
                value={values.email}
                onChange={handleInputChange}
                placeholder="Type your email"
                type="email"
                name="email"
                id=""
                className="appearance-none block w-full text-black border  rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-1 focus:ring-[#057176] focus:border-[#057176] bg-[#eaf1f7] bg-opacity-30 focus:bg-white"
              />
            </div>
            <div className="xl:flex-col xl:flex mb-5">
              <label
                htmlFor="typeInquiry"
                className="block  tracking-wide text-black text-xs font-bold mb-2"
              >
                Type Inquiry
              </label>
              <select
                name="typeInquiry"
                value={values.typeInquiry}
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
                Note
              </label>
              <textarea
                placeholder="Tell us what's on your mind"
                name="note"
                value={values.note}
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
