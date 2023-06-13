import React from "react";
import { twitter, telegram } from "./assets/index.js";

const App = () => {
  return (
    <main className="2xl:w-[1300px] xl:w-[1300px] lg:w-[1100px] min-h-[100vh] relative border flex mx-auto overflow-hidden bg-[#f5f5f5]">
      <div className="absolute sm:w-[387.62px] xs:w-[213px]  sm:h-[387.62px] xs:h-[213px] sm:left-[590.52px] xs:left-[143px] sm:top-[86.31px] xs:top-[-23px] bg-[#ffb760] blur-[90.387px] xs:blur-[70px] rotate-[90.12deg]"></div>
      <div className="absolute sm:w-[387.62px] xs:w-[213px]  sm:h-[387.62px] xs:h-[213px] sm:left-[4.55px] xs:left-[-88px] sm:top-[456.07px] xs:top-[276px] bg-[#ffb760] blur-[90.387px] xs:blur-[70px] rotate-[90.12deg]"></div>
      <div className="absolute sm:w-[387.62px] xs:w-[213px]  sm:h-[387.62px] xs:h-[213px] sm:left-[1033.74px] xs:left-[116px] sm:top-[507.85px] xs:top-[658px] bg-[#ffb760] blur-[90.387px] xs:blur-[70px] rotate-[90.12deg]"></div>

      <h1 className="absolute left-[3.688rem] top-[11.875rem] xs:left-[1rem] xs:top-[11.8] xxs:top-[200px] font-montserrat font-[400] text-[3.806rem] xs:text-[1.6rem] sm:text-[2.5rem] sm:top-[12.8rem] leading-[4.639rem] text-[#000] w-[40.92rem] xs:w-[95vw] h-[4.625rem]">
        GIPPERPAY
      </h1>

      <h1 className="absolute left-[3.688rem] top-[16.526rem] xs:left-[1rem] xs:top-[14.8rem] xxs:top-[314px] font-montserrat font-[600] text-[3.806rem] xs:text-[1.6rem] leading-[4.639rem] text-[#000] sm:text-[2.5rem] w-[40.92rem] xs:w-[95vw] h-[4.625rem]">
        PROTOCOL
      </h1>
      <p className="absolute left-[3.688rem] top-[23.715rem] xs:left-[1rem] xs:top-[20rem] sm:top-[22rem] font-montserrat font-[400] text-[2.304rem] sm:text-[1.5rem] xs:text-[1.6999rem] xxs:text-[18rem] leading-[1.8125rem]  text-[#000] max-w-[1088px] h-[10.355rem] xs:w-[95vw] md:w-[45rem]">
        Build & scale your projects with our comprehensive set of Web3 tools. We
        provide payment solutions, payroll tools, wallet services, and more.
      </p>

      <div className="absolute left-[3.688rem] top-[33.7rem] xs:left-[1.5rem] sm:top-[30rem] xxs:top-[32rem] w-[18.363rem] h-[2.209rem]">
        <hr className="absolute left-[6.816rem] sm:left-[9.816rem] after:content-[''] after:ml-[5.25rem] after:text-red-600 w-[7.47rem] h-0 border-[0.093rem] border-[#ff7b00]" />
        <p className="absolute w-[9.816rem] h-[2.416rem] px-5 font-montserrat italic text-[1.855rem] leading-[2.281rem] xs:text-[1.4rem] xs:w-fit text-[#fff] bg-[#ff7b00] rounded-bl-xl">
          COMING
        </p>
        <p className="absolute left-[7.803rem] sm:left-[9.5rem] w-[6.955rem] h-[2.416rem] px-3 font-montserrat italic font-[400] xs:w-fit text-[1.855rem] leading-[2.281rem] text-[#ff7b00] xs:text-[1.3rem]">
          SOON
        </p>
        <hr className="absolute left-[7.816rem] sm:left-[9.816rem] top-[2.38125rem] w-[5.548rem] h-0 border-dashed border-[#ff7b00]" />
      </div>
      <a
        href="https://twitter.com/gipperpayments?s=21&t=kGEk6LOUQ13y2ff3xqa_Lg
"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={twitter}
          alt=""
          className="absolute w-[41.23px] h-[39.85px] top-[45.877rem] left-[3.875rem] xs:top-[40.877rem] xs:left-[1.5rem] sm:top-[41rem] rounded-md"
        />
      </a>
      <a
        href="https://t.me/GipperpayX"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={telegram}
          alt=""
          className="absolute w-[41.23px] h-[39.85px] top-[45.877rem] left-[9.125rem] xs:top-[40.877rem] xs:left-[7rem] sm:top-[41rem] rounded-md"
        />
      </a>
    </main>
  );
};

export default App;
