import Header from "../../components/Header/Header";

export default function Home() {
  return (
    <div className="bg-[#222831]">
      <Header />
      <div className="poppins h-[calc(100dvh-7rem)] flex justify-evenly items-center px-5">
        <div className="flex flex-col gap-10">
          <h1 className="text-[#EEEEEE] text-6xl leading-tight max-md:text-5xl max-lg:text-center max-sm:text-4xl">
            CREATIVE FULL-STACK <br />
            <span className="text-[#00ADB5]">DEVELOPER</span>
          </h1>
          <div className="flex max-lg:justify-center gap-5">
            <a
              href="https://wa.me/447366162914"
              target="_blank"
              className="home bg-[#00ADB5] hover:bg-[#00979f] p-3 rounded-3xl text-[#eeeeee] font-semibold px-5"
            >
              Hire me
            </a>
            <a
              download="wissam resume.pdf"
              href="../assets/Wissam-Salem-CV.pdf"
              className="home flex justify-center items-center gap-2 bg-[#393E46] hover:bg-[#30343a] text-[#eeeeee] px-5 font-semibold rounded-3xl"
            >
              Download CV{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </a>
          </div>
        </div>
        <img
          className="w-[30rem] max-lg:hidden"
          src="../assets/design.svg"
          alt=""
        />
      </div>
    </div>
  );
}
