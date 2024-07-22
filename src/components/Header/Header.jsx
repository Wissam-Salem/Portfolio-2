import React from "react";

export default function Header() {
  return (
    <div className="h-[5.5rem] flex justify-between items-center px-16 max-sm:px-6 border-b-2 border-[#eeeeee0c]">
      <div className="flex justify-between items-center gap-5">
        <img
          className="w-14 h-14 max-sm:w-12 max-sm:h-12 object-cover rounded-full"
          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <h1 className="text-[#EEEEEE] text-2xl">Wissam Salem</h1>
      </div>
      <div className="flex justify-center items-center max-md:hidden text-[#EEEEEE]">
        <ul className="poppins flex justify-center items-center gap-8 m-0">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about-me">About Me</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="max-md:block hidden">
        <div className="dropdown dropdown-bottom dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="p-3 active:bg-[#cdcdcd] transition rounded-lg bg-[#eeeeee]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              color="black"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="poppins dropdown-content menu bg-base-100 text-[#eeeeee] rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about-me">About Me</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
