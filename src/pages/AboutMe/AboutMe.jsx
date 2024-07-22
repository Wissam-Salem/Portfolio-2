import React from "react";
import Header from "../../components/Header/Header";

export default function AboutMe() {
  return (
    <div>
      <Header />
      <div className="h-[calc(100dvh-5.5rem)] flex flex-col justify-center items-center gap-16">
        <div className="poppins flex flex-col justify-center items-center gap-5">
          <h1 className="text-[#eeeeee] text-5xl max-sm:text-4xl">
            About <span className="text-[#00ADB5]">Me</span>
          </h1>
          <p className="w-[30rem] max-sm:w-[21rem] text-[#eeeeee] text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
            commodi enim quos numquam exercitationem vel rerum quis veritatis
            laboriosam placeat recusandae, provident doloribus dolores corrupti
            excepturi dignissimos nam sit ab necessitatibus hic cum a tempore.
            Reprehenderit esse, facilis mollitia impedit officia veritatis
            molestias iusto itaque deserunt, enim, aspernatur quos sint?
          </p>
        </div>
        <div className="w-full h-fit flex justify-center items-center gap-5 ">
          <a
            className="w-10 h-10 tooltip text-white tooltipt flex justify-center items-center rounded-md bg-[#393E46]"
            href="#"
            target="_blank"
            data-tip="Mostaql"
          >
            <img
              className="w-6 h-6"
              src="https://zaetoon.hsoubcdn.com/helpdesk/4/files/f5fb769d-041c-4c75-8ac6-d3543eae1d06.png"
              alt=""
            />
          </a>
          <a
            className="w-10 h-10 tooltip text-white tooltipt flex justify-center items-center rounded-md bg-[#393E46]"
            href="https://github.com/Wissam-Salem"
            target="_blank"
            data-tip="Github"
          >
            <img
              className="w-8 h-8"
              src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000"
              alt=""
            />
          </a>
          <a
            className="w-10 h-10 tooltip text-white tooltipt flex justify-center items-center rounded-md bg-[#393E46]"
            href="https://www.instagram.com/mrbateman2/"
            target="_blank"
            data-tip="Instagram"
          >
            <img
              className="w-8 h-8"
              src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000"
              alt=""
            />
          </a>
          <a
            className="w-10 h-10 tooltip text-white tooltipt flex justify-center items-center rounded-md bg-[#393E46]"
            href="https://x.com/Wissamsalem10"
            target="_blank"
            data-tip="Twitter"
          >
            <img
              className="w-8 h-8"
              src="https://img.icons8.com/?size=100&id=13963&format=png&color=000000"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}
