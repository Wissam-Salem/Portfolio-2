import React, { useRef, useState } from "react";
import Header from "../../components/Header/Header";
import emailjs from "@emailjs/browser";
import axios from "axios";

export default function Contact() {
  let form = useRef();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");
  let [showSuccess, setShowSuccess] = useState(false);
  let [showError, setShowError] = useState(false);
  let service_id = process.env.REACT_APP_SERVICE_ID;
  let template_id = process.env.REACT_APP_TEMPLATE_ID;
  let user_id = process.env.REACT_APP_USER_ID;

  let sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(service_id, template_id, form.current, {
        publicKey: user_id,
      })
      .then(
        () => {
          setShowSuccess(true);
          setTimeout(() => {
            setShowSuccess(false);
          }, 2000);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          setShowError(true);
          setTimeout(() => {
            setShowError(false);
          }, 2000);
        }
      );
  };

  return (
    <div>
      <Header />
      <div className="h-[calc(100dvh-5.5rem)] bg-[#222831] max-lg:h-fit flex max-lg:flex-col justify-evenly items-center gap-24 max-lg:gap-2 max-lg:py-8 px-10">
        <div className="flex flex-col">
          <h1 className="poppins text-[#eeeeee] text-5xl max-lg:text-4xl max-sm:text-3xl font-semibold leading-tight">
            Got a project in <br />{" "}
            <span className="text-[#00ADB5]">mind?</span>
          </h1>
          <img
            className="w-[22rem] h-[22rem] max-lg:w-[18rem] max-lg:h-[18rem] max-sm:w-[14rem] max-sm:h-[14rem]"
            src="../assets/email-design.svg"
            alt="email-me"
          />
        </div>
        <form className="flex flex-col gap-4" ref={form} onSubmit={sendEmail}>
          <div
            role="alert"
            className={`alert alert-success ${showSuccess ? "flex" : "hidden"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Your email has been sent!</span>
          </div>
          <div
            role="alert"
            className={`alert alert-error ${showError ? "flex" : "hidden"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Error! Please try again</span>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-1">
              <label className="text-[#eeeeee]" htmlFor="name">
                Your name
              </label>
              <input
                className="py-2 px-3 pl-4 text-[#eeeeee] w-[15rem] max-md:w-[15rem] max-sm:w-[10rem] rounded-xl bg-[#393E46]"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                id="name"
                type="text"
                name="name"
                value={name}
                placeholder="Name"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[#eeeeee]" htmlFor="email">
                Your email
              </label>
              <input
                className="py-2 px-3 pl-4 text-[#eeeeee] w-[15rem] max-md:w-[15rem] max-sm:w-[10rem] rounded-xl bg-[#393E46]"
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                id="email"
                name="email"
                value={email}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[#eeeeee]" htmlFor="message">
              Your message
            </label>
            <textarea
              className="py-2 px-3 pl-4 text-[#eeeeee] rounded-xl resize-none size-52 w-full bg-[#393E46]"
              type="text"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              id="message"
              name="message"
              value={message}
              placeholder="Message"
            />
          </div>
          <div>
            <button
              className="flex gap-2 py-2 px-4 active:bg-[#009098] rounded-2xl text-[#eeeeee] bg-[#00ADB5]"
              type="submit"
            >
              Send Message{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
