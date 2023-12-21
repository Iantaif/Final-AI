import React from "react";

import image33 from "../images/image33.png";


const FinishRoute = () => {
    const handleButtonClick = (path) => {
        window.location.href = path;
    };

    return (
        <>
            <div className="flex flex-row justify-center pt-12 gap-10">

                <div
                    className=" p-10 bg-white rounded-[14px] shadow flex-col justify-center items-center gap-[30px] inline-flex">
                    <div className="justify-start items-center inline-flex">
                        <img className="w-[280px] h-[200px]" src={image33}/>
                        <div className=" ml-5 flex-col justify-start items-start gap-5 inline-flex">
                            <div className="flex-col justify-start items-start gap-3 flex">
                                <div
                                    className="text-black text-[32px] font-extrabold font-['Dela Gothic One'] leading-loose">Your
                                    Score
                                </div>
                                <div
                                    className="text-neutral-500 text-base font-semibold font-['Montserrat'] leading-snug">You
                                    did pretty good!
                                </div>
                            </div>
                            <div className="self-stretch justify-start items-start gap-5 inline-flex">
                                <div className="w-[120px] h-[120px] relative">
                                    <div
                                        className="w-[120px] h-[120px] left-0 top-0 absolute rounded-full border-4 border-slate-300"/>
                                    <div
                                        className="w-[79.50px] h-[78px] left-[19.95px] top-[22px] absolute flex-col justify-start items-center gap-1 inline-flex">
                                        <div className="flex-col justify-start items-center flex">
                                            <div
                                                className="text-black text-sm font-semibold font-['Montserrat'] leading-tight">retrieved
                                            </div>
                                            <div
                                                className="text-black text-[32px] font-extrabold font-['Dela Gothic One'] leading-loose">280
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="justify-start items-center gap-[30px] inline-flex">
                        <div className="justify-start items-center gap-2 flex"
                             onClick={() => handleButtonClick(`/finish-route`)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                                <path
                                    d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"/>
                            </svg>

                            <div
                                className="text-black hover:text-neutral-300 duration-200 text-base font-extrabold font-['Montserrat'] leading-none">Do
                                it again
                            </div>
                        </div>
                    </div>

                    <button
                        className="w-[88px] h-11 px-[22px] py-3.5 bg-orange-600 hover:bg-orange-400 duration-200 rounded-[100px] justify-center items-center gap-[19px] inline-flex"
                        onClick={() => handleButtonClick(`/cert`)}>
                        <div className="text-white text-base font-bold font-['Montserrat'] leading-none">Done</div>
                    </button>
                </div>
                <div className=" h-[500px]  p-10 bg-white rounded-[14px] shadow flex-col justify-start items-center
         inline-flex">
                    <div className=" flex-col justify-between items-start flex">
                        <div className="justify-start items-center gap-2.5 inline-flex">
                            <div
                                className="text-black text-[32px] font-extrabold font-['Dela Gothic One'] leading-loose">
                                End of Trial
                            </div>
                        </div>
                        <div className="w-[400px] justify-start items-start gap-1 flex">
                            <div>
                      <span className="text-black text-base font-semibold font-['Montserrat'] leading-snug">
                      Click here to get the answer
                        <br/>
                      </span>
                                <p className="text-green-500 w-[250px] break-words "><a
                                    href="https://colab.research.google.com/drive/1xAslqG1wzgk3sRr_iVzHzygeRYaz5m6h?usp=sharing">https://colab.research.google.com/drive/1xAslqG1wzgk3sRr_iVzHzygeRYaz5m6h?usp=sharing</a>
                                </p>


                            </div>

                        </div>
                        <div className="pt-10">
                      <span className="text-black text-base font-semibold font-['Montserrat'] leading-snug">
                      Click here to get the certification
                        <br/>
                      </span>


                        </div>


                    </div>
                </div>


            </div>
        </>
    );
};

export default FinishRoute;
