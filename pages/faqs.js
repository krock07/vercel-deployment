import React, { useState } from "react";
import ContactLayout from "../components/ContactLayout";
import { RiPhoneLine } from "react-icons/ri";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const theFaqs = [
  {
    question: "About 7th Ave",
    answer:
      "7th Ave is an interactive community that allows users to connect, converse, and chat through audio and messaging functions by creating an experience. We are focused on providing a space that allows people across the Black diaspora to build relationships, knowledge, and skills in a more streamlined way. ",
    answerTwo:
      "We are still in the early beta stages but want to build with our community. Your feedback and input is greatly appreciated and allows us to not move in assumptions, but build with certainty. Please continue to be a part of the process as we roll out new features and grow communities! ",
  },
  {
    question: "Where can I access 7th Ave?",
    answer:
      "We currently are an invitation only app, operating solely on iOS. To get access into the app, you must receive an invitation that holds an access code. We are working to expand to android in the upcoming months.",
  },
  {
    question: "Who can access an experience within 7th Ave?",
    answer:
      "Experiences are public to the community; meaning anyone can join in as a listener, including people who do not follow you.",
  },
  {
    question: "As a host of an experience, what can I do?",
    answer:
      "As a host you have the ability to control who speaks, message within the chat feature, block users, report users, and end the experience. If someone who is a participant raises their hand, you have the ability to bring up from the audience and make them a speaker. ",
  },
  {
    question: "As a participant in an experience, what can I do?",
    answer:
      "A user has the ability to raise their hand to indicate they want to speak, message in the chat feature, block users, and report users in the experience. Once a user is blocked, the experiences the blocked user creates will no longer populate on your home feed.",
    answerTwo: "How to create an experience",
    answerThree:
      "1. To create an experience, a user (now considered a host) will need to click on the microphone which will prompt them to the ‘create experience’ screen.",
    answerFour:
      " 2. The user/host will have the option to create a title, select the category they believe the conversation is most relevant to, and then select an experience type.",
    answerFive:
      "3. Upon pulling up on the ave, a user/host is able to choose between 6 different experiences. The experiences allow those in the community to understand beforehand what to expect before joining the space and help manage their expectations. ",
    answerSix:
      "4. Once the necessary information is available, you can select ‘Next’ to begin your experience!",
  },
  {
    question: "Once an experience has been created",
    answer1i: "How many people can speak at once? ",
    answer2i:
      "There is a limit of 11 people who are allowed to speak at one time. Depending on community feedback, this number may change. ",
    answer3i: "How many people can join an experience?",
    answer4i:
      "There is no limit to the amount of people who can join an experience. ",
    answer5i: "How can I report an incident?",
    answer6i:
      "Safety is our #1 priority for those who pull up on the ave. With that being said, there are three different places to report a user and/or experience. ",
  },
  {
    question: "Within the experience",
    answer:
      "If there is an individual person that has broken any of the neighborhood rules and/or is a danger to themselves or community",
    answerThree:
      "1. You can click on that person's picture within the experience to enable their profile to appear.",
    answerFour:
      "2. On their profile, there is an option to ‘Report User.’ Select it.",
    answerSix:
      "3. You will then be taken to another screen and prompted to fill out a report explaining what took place so we at 7th Ave can open an investigation.",
    answerSeven:
      "If there is an experience that has broken any of the neighborhood rules and/or is a danger to themselves or community:",
    answerSeven1:
      "1. In the top right corner of the experience, click on the 3 dots to allow for a drop down screen.",
    answerSeven2:
      "2. Within the drop down screen there is an option to ‘Report Experience.’ Select it. ",
    answerSeven3:
      "3 .You will then be taken to another screen and prompted to fill out a report explaining what took place so we at 7th Ave can open an investigation. ",
  },
  {
    question: "Outside of an experience",
    answer:
      "Given the fact rooms can end any time, potentially before you get a chance to report the incident, there is an option to report a user and/or experience outside of the experience itself.If there is a user and/or experience that has broken any of the neighborhood rules and/or is a danger to themselves or the 7th Ave community but the experience is no longer live:",
    answerThree: "1. Click on your profile picture in the right hand corner.",
    answerFour:
      "2. In the top right corner of your profile, click on the 3 dots to allow for a drop down screen.",
    answerFive:
      "3. Within the drop down screen there is an option to ‘Report Incident.’ Select it. ",
    answerSix:
      "4. You will then be taken to another screen and prompted to fill out a report explaining what took place so we at 7th Ave can open an investigation. ",
  },
  {
    question: "Who can end an experience?",
    answer:
      "The host is able to end an experience at any time. If the experience is in violation of any of the neighborhood rules, 7th Ave is also able to end experiences immediately. ",
  },
  {
    question: "When an experience ends, what happens?",
    answer:
      "Experiences are only accessible while live. Once the host has ended it, the experience will no longer populate on the home screen or be available to the community. Audio and chats are kept temporarily in case there are any incidents filed on a particular user or experience that may require further investigation and/or appeals. If nothing is reported, both audio and chat are permanently deleted.  ",
  },

  // More questions...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const faqs = () => {
  return (
    <ContactLayout>
      <div className="bg-gray-50 mt-24 xl:mt-36">
        <div className="bg-[#EFEAE5] h-[100px] flex flex-col justify-center items-start  xl:relative xl:bottom-12  xl:pl-40  ">
          <h3 className=" text-[26px] font-semibold w-[250px] leading-8 ml-5 md:w-[550px] xl:text-[30px] xl:w-[550px] xl:m-0 xl:font-bold relative bottom-4 text-[#f2762f] 2xl:ml-[3%]">
            Frequently Asked Questions
          </h3>
        </div>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <dl className="mt-6  space-y-6 divide-y divide-gray-200 ">
              {theFaqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6 ">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="  focus:outline-primary  focus:rounded-md  text-left w-full flex justify-between items-start text-gray-400 ">
                          <span className="font-semibold text-base  tracking-[2%] text-gray-900">
                            {faq.question}
                          </span>
                          {!open ? (
                            <span className="ml-6 h-7 text-xl flex items-center">
                              <AiOutlinePlus aria-hidden="true" />
                            </span>
                          ) : (
                            <span className="ml-6 h-7 text-xl  flex items-center">
                              <AiOutlineMinus aria-hidden="true" />
                            </span>
                          )}
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base text-[#1a1a1c]  ">
                          {faq.answer}
                        </p>
                        <p className="text-base text-[#1a1a1c] italic ">
                          {faq.answer1i}
                        </p>
                        <p className="text-base text-[#1a1a1c] italic  mt-5">
                          {faq.answerTwo}
                        </p>
                        <p className="text-base text-[#1a1a1c]   mt-[-8px]">
                          {faq.answer2i}
                        </p>
                        <p className="text-base text-[#1a1a1c]d leading-5   mt-2 ml-3">
                          {faq.answerThree}
                        </p>
                        <p className="text-base text-[#1a1a1c] leading-5 italic  mt-2">
                          {faq.answer3i}
                        </p>
                        <p className="text-base text-[#1a1a1c] leading-5  mt-2 ml-3">
                          {faq.answerFour}
                        </p>
                        <p className="text-base text-[#1a1a1c] leading-5  mt-[-8px]">
                          {faq.answer4i}
                        </p>
                        <p className="text-base text-[#1a1a1c] leading-5  mt-5 ml-3">
                          {faq.answerFive}
                        </p>
                        <p className="text-base text-[#1a1a1c] leading-5  mt-2 italic ">
                          {faq.answer5i}
                        </p>
                        <p className="text-base text-[#1a1a1c]d leading-5   mt-2 ml-3 ">
                          {faq.answerSix}
                        </p>
                        <p className="text-base text-[#1a1a1c] leading-5  mt-[-8px] ">
                          {faq.answer6i}
                        </p>
                        <p className="text-base text-[#1a1a1c] leading-5 mt-5">
                          {faq.answerSeven}
                        </p>
                        <p className="text-base text-[#1a1a1c]d leading-5   mt-2 ml-3">
                          {faq.answerSeven1}
                        </p>
                        <p className="text-base text-[#1a1a1c]d leading-5   mt-2 ml-3">
                          {faq.answerSeven2}
                        </p>
                        <p className="text-base text-[#1a1a1c]d leading-5   mt-2 ml-3">
                          {faq.answerSeven3}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </ContactLayout>
  );
};

export default faqs;
