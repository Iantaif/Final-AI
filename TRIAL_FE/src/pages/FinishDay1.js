import React from "react";
import roadMap from "../images/roadmap.png";
import image55 from "../images/image55.png";
import image33 from "../images/image33.png";


const FinishDay1 = () => {
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
                                                className="text-black text-[32px] font-extrabold font-['Dela Gothic One'] leading-loose">240
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="justify-start items-center gap-[30px] inline-flex">
                        <div className="justify-start items-center gap-2 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                                <path
                                    d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"/>
                            </svg>

                            <div
                                className="text-black hover:text-blue-500 duration-200 text-base font-extrabold font-['Montserrat'] leading-none">Do
                                it again
                            </div>
                        </div>
                    </div>
                    <div className="justify-start items-center gap-2 inline-flex"
                         onClick={() => handleButtonClick(`/roadmap-2`)}>
                        <div className="text-black hover:text-red-500 duration-200 text-base font-extrabold font-['Montserrat'] leading-none">Next</div>
                    </div>
                </div>
                <div className=" h-[500px]  p-10 bg-white rounded-[14px] shadow flex-col justify-start items-center
         inline-flex">
                    <div className=" flex-col justify-between items-start flex">
                        <div className="justify-start items-center gap-2.5 inline-flex">
                            <div
                                className="text-black text-[32px] font-extrabold font-['Dela Gothic One'] leading-loose">
                                State 1
                            </div>
                            <div className="px-2 py-1 bg-orange-600 rounded-md justify-start items-start gap-2.5 flex">
                                <div className="text-white text-xs font-semibold font-['Montserrat'] leading-none">
                                    Day 1
                                </div>
                            </div>
                        </div>
                        <div className="  justify-start items-start gap-2.5 inline-flex">
                            <div className=" basis-0 flex-col justify-start items-start gap-3.5 inline-flex">
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div
                                        className="w-10 h-10 p-1 bg-stone-100 rounded justify-start items-center gap-2.5 flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24"
                                             viewBox="0 0 25 24" fill="none">
                                            <path
                                                d="M19.5104 3.6192C19.4822 3.44999 19.4181 3.2888 19.3223 3.14648C19.2265 3.00416 19.1014 2.88403 18.9552 2.79419C18.8091 2.70435 18.6454 2.64688 18.4752 2.62567C18.3049 2.60445 18.1321 2.61998 17.9684 2.6712L9.56843 5.2956C9.32418 5.37185 9.1107 5.52418 8.95915 5.73035C8.8076 5.93651 8.72592 6.18573 8.72603 6.4416V16.2C8.18538 15.7945 7.52366 15.5835 6.84808 15.601C6.1725 15.6186 5.52264 15.8637 5.00379 16.2967C4.48493 16.7298 4.12749 17.3253 3.98936 17.9868C3.85123 18.6484 3.94052 19.3372 4.24275 19.9416C4.54498 20.5461 5.04245 21.0308 5.65456 21.3172C6.26667 21.6037 6.95756 21.675 7.61529 21.5197C8.27302 21.3645 8.85906 20.9917 9.27845 20.4618C9.69785 19.9318 9.92603 19.2758 9.92603 18.6V10.0416L18.326 7.416V10.8276C18.7376 10.8636 19.1396 10.9392 19.526 11.0484V3.816C19.526 3.7488 19.52 3.684 19.5104 3.6192ZM23.126 17.4C23.126 18.8322 22.5571 20.2057 21.5444 21.2184C20.5317 22.2311 19.1582 22.8 17.726 22.8C16.2939 22.8 14.9203 22.2311 13.9077 21.2184C12.895 20.2057 12.326 18.8322 12.326 17.4C12.326 15.9678 12.895 14.5943 13.9077 13.5816C14.9203 12.5689 16.2939 12 17.726 12C19.1582 12 20.5317 12.5689 21.5444 13.5816C22.5571 14.5943 23.126 15.9678 23.126 17.4ZM20.4104 16.878L16.8176 14.898C16.7263 14.8475 16.6234 14.8217 16.5191 14.8231C16.4148 14.8245 16.3126 14.8531 16.2227 14.906C16.1328 14.959 16.0583 15.0345 16.0065 15.125C15.9547 15.2156 15.9273 15.3181 15.9272 15.4224V19.3824C15.9271 19.4868 15.9543 19.5895 16.006 19.6802C16.0578 19.7709 16.1323 19.8466 16.2222 19.8997C16.3122 19.9527 16.4144 19.9814 16.5188 19.9829C16.6232 19.9844 16.7262 19.9585 16.8176 19.908L20.4104 17.928C20.5042 17.8761 20.5824 17.8001 20.6368 17.7077C20.6912 17.6154 20.72 17.5102 20.72 17.403C20.72 17.2958 20.6912 17.1906 20.6368 17.0983C20.5824 17.0059 20.5042 16.9299 20.4104 16.878Z"
                                                fill="#BABABA"/>
                                        </svg>
                                    </div>
                                    <div className="w-[336px] justify-start items-start gap-1 flex">
                                        <div>
                      <span className="text-black text-base font-semibold font-['Montserrat'] leading-snug">
                        Part 1 - Introduction
                        <br/>
                      </span>
                                            <span
                                                className="text-neutral-400  text-base font-semibold font-['Montserrat'] leading-snug">
                        What is Data Analyst, Why Python?
                        <br/>
                        What other options are there? <br/>
                        What's the cycle of a Data Analysis project? <br/>
                        What's the difference between <br/>
                        Data Analyst and Data Science?
                      </span>
                                        </div>
                                    </div>
                                </div>
                                <div/>
                                <div/>
                                <div className="justify-start items-center gap-3 inline-flex">
                                    <div
                                        className="w-10 h-10 p-1 bg-stone-100 rounded justify-center items-center gap-2.5 flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24"
                                             viewBox="0 0 25 24" fill="none">
                                            <path
                                                d="M19.5104 3.6192C19.4822 3.44999 19.4181 3.2888 19.3223 3.14648C19.2265 3.00416 19.1014 2.88403 18.9552 2.79419C18.8091 2.70435 18.6454 2.64688 18.4752 2.62567C18.3049 2.60445 18.1321 2.61998 17.9684 2.6712L9.56843 5.2956C9.32418 5.37185 9.1107 5.52418 8.95915 5.73035C8.8076 5.93651 8.72592 6.18573 8.72603 6.4416V16.2C8.18538 15.7945 7.52366 15.5835 6.84808 15.601C6.1725 15.6186 5.52264 15.8637 5.00379 16.2967C4.48493 16.7298 4.12749 17.3253 3.98936 17.9868C3.85123 18.6484 3.94052 19.3372 4.24275 19.9416C4.54498 20.5461 5.04245 21.0308 5.65456 21.3172C6.26667 21.6037 6.95756 21.675 7.61529 21.5197C8.27302 21.3645 8.85906 20.9917 9.27845 20.4618C9.69785 19.9318 9.92603 19.2758 9.92603 18.6V10.0416L18.326 7.416V10.8276C18.7376 10.8636 19.1396 10.9392 19.526 11.0484V3.816C19.526 3.7488 19.52 3.684 19.5104 3.6192ZM23.126 17.4C23.126 18.8322 22.5571 20.2057 21.5444 21.2184C20.5317 22.2311 19.1582 22.8 17.726 22.8C16.2939 22.8 14.9203 22.2311 13.9077 21.2184C12.895 20.2057 12.326 18.8322 12.326 17.4C12.326 15.9678 12.895 14.5943 13.9077 13.5816C14.9203 12.5689 16.2939 12 17.726 12C19.1582 12 20.5317 12.5689 21.5444 13.5816C22.5571 14.5943 23.126 15.9678 23.126 17.4ZM20.4104 16.878L16.8176 14.898C16.7263 14.8475 16.6234 14.8217 16.5191 14.8231C16.4148 14.8245 16.3126 14.8531 16.2227 14.906C16.1328 14.959 16.0583 15.0345 16.0065 15.125C15.9547 15.2156 15.9273 15.3181 15.9272 15.4224V19.3824C15.9271 19.4868 15.9543 19.5895 16.006 19.6802C16.0578 19.7709 16.1323 19.8466 16.2222 19.8997C16.3122 19.9527 16.4144 19.9814 16.5188 19.9829C16.6232 19.9844 16.7262 19.9585 16.8176 19.908L20.4104 17.928C20.5042 17.8761 20.5824 17.8001 20.6368 17.7077C20.6912 17.6154 20.72 17.5102 20.72 17.403C20.72 17.2958 20.6912 17.1906 20.6368 17.0983C20.5824 17.0059 20.5042 16.9299 20.4104 16.878Z"
                                                fill="#BABABA"/>
                                        </svg>
                                    </div>
                                    <div className="w-[352px] justify-start items-start gap-1 flex">
                                        <div>
                      <span className="text-black text-base font-semibold font-['Montserrat'] leading-snug">
                        Part 2 - Real Life Example of a Python/Pandas <br/>
                        Data Analysis project <br/>
                      </span>
                                            <span
                                                className="text-neutral-400 text-base font-semibold font-['Montserrat'] leading-snug">
                        A demonstration of a real life data analysis <br/>
                        project using Python, Pandas, SQL and
                        <br/>
                        Seaborn. Don't worry,   we'll dig deeper in the following sections
                      </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default FinishDay1;
