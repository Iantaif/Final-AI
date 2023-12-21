import { FunctionComponent, useCallback } from "react";

const Job: FunctionComponent = () => {
  const onFrameContainer32Click = useCallback(() => {
    // Please sync "Game Test" to the project
  }, []);

  const onFrameContainer33Click = useCallback(() => {
    // Please sync "Salary" to the project
  }, []);

  return (
    <div className="rounded-sm bg-white  flex flex-row items-start justify-center p-10 box-border ">
      <div className="rounded-sm bg-white shadow-[0px_22.898128509521484px_45.8px_-11.45px_rgba(52,_41,_39,_0.08)] w-[885px] flex flex-col items-center justify-start p-10 box-border gap-[20px]">
        <div className=" flex flex-col items-center justify-between font-black text-primaty-cyan-dark text-3xl	">
          <div className="flex flex-row items-center justify-center gap-[10px]">
            <div className="relative tracking-[0.1em] leading-[100%] ">
              CERTIFICATION
            </div>
          </div>
        </div>
        <div className=" bg-gold overflow-hidden shrink-0 text-[15px] p-1">
          <div className=" tracking-[0.25em] font-extrabold">
            OF APPRECIATION
          </div>
        </div>
        <div className="flex flex-col items-center justify-start text-[7px]">
          <div className="relative tracking-[0.25em] font-extrabold">
            PROUDLY PRESENTED TO
          </div>
          <div className="flex flex-col items-center justify-start text-4xl font-bold text-primaty-cyan-dark pt-2">
            <div className="text-center text-black text-[32px] font-bold text-label">
              Ms. Quynh Nhu
            </div>
          </div>
        </div>
        <div className="w-[481px] opacity-50 text-center text-black text-xs font-bold font-['Dela Gothic One'] leading-[8px]">
          In recognition of your outstanding completion the Data Analyst Trial
        </div>
        <div />
        <div className="flex flex-col items-center justify-start gap-[4px] text-[10px]">
          <div className="relative box-border w-[65px] h-px border-t-[1px] border-solid border-primaty-cyan-dark" />
          <div className="text-center text-zinc-900 text-[15px] font-bold font-['Dela Gothic One'] tracking-wider">
            SIGNATURE
          </div>
        </div>
        <div className="flex overflow-hidden shrink-0 text-left text-base text-white font-text-label">
          <div className="w-[126px] h-11 px-[22px] py-3.5 mr-4 hover:bg-gold duration-300 ease-in-out bg-orange-600 rounded-[100px] justify-center items-center gap-[19px] inline-flex">
            <div className="text-white text-base font-bold font-['Montserrat'] leading-none">
              Download
            </div>
          </div>

          <div className="w-[126px] h-11 px-[18px] py-3.5 mr-4 hover:bg-gold duration-300 ease-in-out bg-orange-600 rounded-[100px] justify-center items-center gap-[19px] inline-flex">
            <div className="text-white whitespace-nowrap text-base font-bold font-['Montserrat'] leading-none">
              Try another
            </div>
          </div>

          <div className="w-[126px] h-11 px-[22px] py-3.5 hover:bg-gold duration-300 ease-in-out bg-orange-600 rounded-[100px] justify-center items-center gap-[19px] inline-flex">
            <div className="text-white text-base font-bold font-['Montserrat'] leading-none">
              Detail
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
