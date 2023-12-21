import React from "react";
import iamgetest from "../images/imagetest.png";
import image57 from "../images/image57.png";
import image58 from "../images/image58.png";
import gt1 from "../images/gt1.png";
import gt2 from "../images/gt2.png";
import gt3 from "../images/gt3.png";
import gt4 from "../images/gt4.png";
import gt5 from "../images/gt5.png";
import gt6 from "../images/gt6.png";
import gt7 from "../images/gt7.png";
import gt8 from "../images/gt8.png";
import gt9 from "../images/gt9.png";
import gt10 from "../images/gt10.png";


import gt11 from "../images/gt11.png";


const AfterQuiz = () => {
    const handleButtonClick = (path) => {
        window.location.href = path;
    };
    return (
        <div className="flex flex-col">
            <div className="container pt-12 ">
                <h1 className="text-black text-2xl font-extrabold font-['Dela Gothic One'] leading-relaxed ml-10">
                    Your Discoveries
                </h1>
            </div>
            <div className=" flex flex-row justify-evenly pt-12 ">
                <div
                    className="w-[274px] h-[358px] px-10 pb-10 bg-white rounded-[14px] shadow justify-center items-center gap-[30px] flex-col">
                    <div className="mt-10">
                        <img className="w-[200px] h-[200px]" src={iamgetest}/>
                    </div>
                    <div className=" px-5 m-10 py-2.5 bg-neutral-200 rounded-[88px] shadow gap-3 "
                         onClick={() => handleButtonClick(`/roadmap-1`)}>
                        <div className="justify-center items-center gap-1 flex">
                            <div className="text-center text-black text-lg font-semibold font-['Montserrat'] ">
                                Mentor
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="w-[274px] h-[358px] px-10 pb-10 bg-white rounded-[14px] shadow justify-center items-center gap-[30px] flex-col">
                    <div className="mt-10">
                        <img className="w-[200px] h-[200px]" src={iamgetest}/>
                    </div>
                    <button className=" px-5 m-10 py-2.5 bg-neutral-200 rounded-[88px] shadow gap-3 ">
                        <div className="justify-center items-center gap-1 flex">
                            <div className="text-center text-black text-lg font-semibold font-['Montserrat'] ">
                                Assertive
                            </div>
                        </div>
                    </button>
                </div>
                <div
                    className="w-[274px] h-[358px] px-10 pb-10 bg-white rounded-[14px] shadow justify-center items-center gap-[30px] flex-col">
                    <div className="mt-10">
                        <img className="w-[200px] h-[200px]" src={iamgetest}/>
                    </div>
                    <button className=" px-5 m-10 py-2.5 bg-neutral-200 rounded-[88px] shadow gap-3 ">
                        <div className="justify-center items-center gap-1 flex">
                            <div className="text-center text-black text-lg font-semibold font-['Montserrat'] ">
                                Active
                            </div>
                        </div>
                    </button>
                </div>
                <div
                    className="w-[274px] h-[358px] px-10 pb-10 bg-white rounded-[14px] shadow justify-center items-center gap-[30px] flex-col">
                    <div className="mt-10">
                        <img className="w-[200px] h-[200px]" src={iamgetest}/>
                    </div>
                    <button className=" px-5 m-10 py-2.5 bg-neutral-200 rounded-[88px] shadow gap-3 ">
                        <div className="justify-center items-center gap-1 flex">
                            <div
                                className="text-center text-black whitespace-nowrap		 text-lg font-semibold font-['Montserrat'] ">
                                Goal-Driven
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <div className="container py-12 ">
                <h1 className="text-black text-2xl font-extrabold font-['Dela Gothic One'] leading-relaxed ml-10">
                    Your carrer matches
                </h1>
            </div>

            <div className=" flex flex-row justify-evenly">
                <div
                    className="w-[567px] h-[550px] bg-white rounded-[14px] shadow flex-col justify-start items-center gap-10 inline-flex">
                    <div className="flex-col justify-start items-center gap-10 flex">
                        <button
                            className="px-5 py-2.5 bg-neutral-200 hover:bg-neutral-400 duration-200 hover:shadow rounded-[88px] shadow justify-start items-center gap-3 inline-flex"
                            onClick={() => handleButtonClick('/roadmap-1')}>
                            <div className="justify-start items-start gap-1 flex">
                                <div className="text-black text-lg font-semibold font-['Montserrat'] leading-[25.20px]">
                                    Data Analyst
                                </div>
                            </div>
                        </button>
                        <img className="w-60 h-60" src={image57}/>
                        <div className="justify-start items-start gap-2.5 inline-flex">
                            <div
                                className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                                ♥
                            </div>
                            <div
                                className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                                ♥
                            </div>
                            <div
                                className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                                ♥
                            </div>
                            <div
                                className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                                ♥
                            </div>
                            <div
                                className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                                ♥
                            </div>
                        </div>
                    </div>
                    <div className="w-[344px] h-[63px] relative">
                        <div className="w-[108px] h-[63px] left-[236px] top-0 absolute bg-amber-400 rounded-xl"/>
                        <div className="w-[108px] h-[63px] left-[118px] top-0 absolute bg-red-600 rounded-xl"/>
                        <div className="w-[108px] h-[63px] left-0 top-0 absolute bg-sky-700 rounded-xl"/>
                        <div
                            className="left-[27px] top-[32px] absolute text-white text-xl font-bold font-['Montserrat']">
                            $93K
                        </div>
                        <div
                            className="left-[153px] top-[32px] absolute text-white text-xl font-bold font-['Montserrat']">
                            N/A
                        </div>
                        <div
                            className="left-[269px] top-[32px] absolute text-white text-xl font-bold font-['Montserrat']">
                            Low
                        </div>
                        <div
                            className="w-[68px] h-4 left-[20px] top-[9px] absolute text-center text-white text-xs font-normal font-['Montserrat']">
                            Avg Salary
                        </div>
                        <div
                            className="w-[68px] h-4 left-[138px] top-[9px] absolute text-center text-white text-xs font-normal font-['Montserrat']">
                            Growth
                        </div>
                        <div
                            className="w-[68px] h-4 left-[256px] top-[9px] absolute text-center text-white text-xs font-normal font-['Montserrat']">
                            Satisfaction
                        </div>
                    </div>
                </div>
                <div
                    className="w-[567px] h-[550px] bg-white rounded-[14px] shadow flex-col justify-start items-center gap-10 inline-flex">
                    <div className="flex-col justify-start items-center gap-10 flex">
                        <div
                            className="px-5 py-2.5 bg-neutral-200 rounded-[88px] shadow justify-start items-center gap-3 inline-flex">
                            <div className="justify-start items-start gap-1 flex">
                                <div className="text-black text-lg font-semibold font-['Montserrat'] leading-[25.20px]">
                                    Systems Architect
                                </div>
                            </div>
                        </div>
                        <img className="w-60 h-60" src={image58}/>
                        <div className="justify-start items-start gap-2.5 inline-flex">
                            <div
                                className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                                ♥
                            </div>
                            <div
                                className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                                ♥
                            </div>
                            <div
                                className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                                ♥
                            </div>
                            <div
                                className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                                ♥
                            </div>
                            <div
                                className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                                ♥
                            </div>
                        </div>
                    </div>
                    <div className="w-[344px] h-[63px] relative">
                        <div className="w-[108px] h-[63px] left-[236px] top-0 absolute bg-amber-400 rounded-xl"/>
                        <div className="w-[108px] h-[63px] left-[118px] top-0 absolute bg-red-600 rounded-xl"/>
                        <div className="w-[108px] h-[63px] left-0 top-0 absolute bg-sky-700 rounded-xl"/>
                        <div
                            className="left-[27px] top-[32px] absolute text-white text-xl font-bold font-['Montserrat']">
                            $162K
                        </div>
                        <div
                            className="left-[153px] top-[32px] absolute text-white text-xl font-bold font-['Montserrat']">
                            N/A
                        </div>
                        <div
                            className="left-[269px] top-[32px] absolute text-white text-xl font-bold font-['Montserrat']">
                            Low
                        </div>
                        <div
                            className="w-[68px] h-4 left-[20px] top-[9px] absolute text-center text-white text-xs font-normal font-['Montserrat']">
                            Avg Salary
                        </div>
                        <div
                            className="w-[68px] h-4 left-[138px] top-[9px] absolute text-center text-white text-xs font-normal font-['Montserrat']">
                            Growth
                        </div>
                        <div
                            className="w-[68px] h-4 left-[256px] top-[9px] absolute text-center text-white text-xs font-normal font-['Montserrat']">
                            Satisfaction
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex pt-10 justify-evenly gap 4 ">
                <div className="w-[567px] h-[248px] relative bg-white rounded-[14px] shadow col-span-1 	">
                    <div
                        className="px-5 py-2.5 left-[260px] top-[101px] absolute bg-neutral-200 rounded-[88px] shadow justify-start items-center gap-3 inline-flex">
                        <div className="self-stretch justify-start items-start gap-1 flex">
                            <div className="text-black text-lg font-semibold font-['Montserrat'] leading-[25.20px]">
                                Business Management
                            </div>
                        </div>
                    </div>
                    <div className="left-[267px] top-[178px] absolute justify-start items-start gap-2.5 inline-flex">
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                    </div>
                    <img
                        className

                            ="w-[195px] h-[195px] left-[44px] top-[26px] absolute"
                        src={gt1}
                    />
                </div>
                <div className="w-[567px] h-[248px] relative bg-white rounded-[14px] shadow 	">
                    <div
                        className="px-5 py-2.5 left-[260px] top-[101px] absolute bg-neutral-200 rounded-[88px] shadow justify-start items-center gap-3 inline-flex">
                        <div className="self-stretch justify-start items-start gap-1 flex">
                            <div className="text-black text-lg font-semibold font-['Montserrat'] leading-[25.20px]">
                                Business Administration
                            </div>
                        </div>
                    </div>
                    <div className="left-[267px] top-[178px] absolute justify-start items-start gap-2.5 inline-flex">
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                    </div>
                    <img
                        className="w-[195px] h-[195px] left-[44px] top-[26px] absolute"
                        src={gt2}
                    />
                </div>
            </div>
            <div className="flex pt-10 justify-evenly gap 4 ">
                <div className="w-[567px] h-[248px] relative bg-white rounded-[14px] shadow col-span-1 	">
                    <div
                        className="px-5 py-2.5 left-[260px] top-[101px] absolute bg-neutral-200 rounded-[88px] shadow justify-start items-center gap-3 inline-flex">
                        <div className="self-stretch justify-start items-start gap-1 flex">
                            <div className="text-black text-lg font-semibold font-['Montserrat'] leading-[25.20px]">
                                Applied Science
                            </div>
                        </div>
                    </div>
                    <div className="left-[267px] top-[178px] absolute justify-start items-start gap-2.5 inline-flex">
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                    </div>
                    <img
                        className="w-[195px] h-[195px] left-[44px] top-[26px] absolute"
                        src={gt3}
                    />
                </div>
                <div className="w-[567px] h-[248px] relative bg-white rounded-[14px] shadow 	">
                    <div
                        className="px-5 py-2.5 left-[260px] top-[101px] absolute bg-neutral-200 rounded-[88px] shadow justify-start items-center gap-3 inline-flex">
                        <div className="self-stretch justify-start items-start gap-1 flex">
                            <div className="text-black text-lg font-semibold font-['Montserrat'] leading-[25.20px]">
                                Entrepreneurship
                            </div>
                        </div>
                    </div>
                    <div className="left-[267px] top-[178px] absolute justify-start items-start gap-2.5 inline-flex">
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                    </div>
                    <img
                        className="w-[195px] h-[195px] left-[44px] top-[26px] absolute"
                        src={gt4}
                    />
                </div>
            </div>
            <div className="container py-12 ">
                <h1 className="text-black text-2xl font-extrabold font-['Dela Gothic One'] leading-relaxed ml-10">
                    Your carrer matches
                </h1>
            </div>
            <div className="flex pt-10 justify-evenly gap 4 ">
                <div className="w-[567px] h-[248px] relative bg-white rounded-[14px] shadow col-span-1 	">
                    <div
                        className="px-5 py-2.5 left-[260px] top-[101px] absolute bg-neutral-200 rounded-[88px] shadow justify-start items-center gap-3 inline-flex">
                        <div className="self-stretch justify-start items-start gap-1 flex">
                            <div className="text-black text-lg font-semibold font-['Montserrat'] leading-[25.20px]">
                                Enterprise Architect
                            </div>
                        </div>
                    </div>
                    <div className="left-[267px] top-[178px] absolute justify-start items-start gap-2.5 inline-flex">
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                    </div>
                    <img
                        className="w-[195px] h-[195px] left-[44px] top-[26px] absolute"
                        src={gt5}
                    />
                </div>
                <div className="w-[567px] h-[248px] relative bg-white rounded-[14px] shadow 	">
                    <div
                        className="px-5 py-2.5 left-[260px] top-[101px] absolute bg-neutral-200 rounded-[88px] shadow justify-start items-center gap-3 inline-flex">
                        <div className="self-stretch justify-start items-start gap-1 flex">
                            <div className="text-black text-lg font-semibold font-['Montserrat'] leading-[25.20px]">
                                Enterprise Architect
                            </div>
                        </div>
                    </div>
                    <div className="left-[267px] top-[178px] absolute justify-start items-start gap-2.5 inline-flex">
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                    </div>
                    <img
                        className="w-[195px] h-[195px] left-[44px] top-[26px] absolute"
                        src={gt6}
                    />
                </div>
            </div>
            <div className="flex pt-10 justify-evenly gap 4 ">
                <div className="w-[567px] h-[248px] relative bg-white rounded-[14px] shadow col-span-1 	">
                    <div
                        className="px-5 py-2.5 left-[260px] top-[101px] absolute bg-neutral-200 rounded-[88px] shadow justify-start items-center gap-3 inline-flex">
                        <div className="self-stretch justify-start items-start gap-1 flex">
                            <div className="text-black text-lg font-semibold font-['Montserrat'] leading-[25.20px]">
                                Enterprise Architect
                            </div>
                        </div>
                    </div>
                    <div className="left-[267px] top-[178px] absolute justify-start items-start gap-2.5 inline-flex">
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                    </div>
                    <img
                        className="w-[195px] h-[195px] left-[44px] top-[26px] absolute"
                        src={gt10}
                    />
                </div>
                <div className="w-[567px] h-[248px] relative bg-white rounded-[14px] shadow 	">
                    <div
                        className="px-5 py-2.5 left-[260px] top-[101px] absolute bg-neutral-200 rounded-[88px] shadow justify-start items-center gap-3 inline-flex">
                        <div className="self-stretch justify-start items-start gap-1 flex">
                            <div className="text-black text-lg font-semibold font-['Montserrat'] leading-[25.20px]">
                                Enterprise Architect
                            </div>
                        </div>
                    </div>
                    <div className="left-[267px] top-[178px] absolute justify-start items-start gap-2.5 inline-flex">
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                    </div>
                    <img
                        className="w-[195px] h-[195px] left-[44px] top-[26px] absolute"
                        src={gt7}
                    />
                </div>
            </div>
            <div className="flex pt-10 justify-evenly gap 4 ">
                <div className="w-[567px] h-[248px] relative bg-white rounded-[14px] shadow col-span-1 	">
                    <div
                        className="px-5 py-2.5 left-[260px] top-[101px] absolute bg-neutral-200 rounded-[88px] shadow justify-start items-center gap-3 inline-flex">
                        <div className="self-stretch justify-start items-start gap-1 flex">
                            <div className="text-black text-lg font-semibold font-['Montserrat'] leading-[25.20px]">
                                Enterprise Architect
                            </div>
                        </div>
                    </div>
                    <div className="left-[267px] top-[178px] absolute justify-start items-start gap-2.5 inline-flex">
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                    </div>
                    <img
                        className="w-[195px] h-[195px] left-[44px] top-[26px] absolute"
                        src={gt8}
                    />
                </div>
                <div className="w-[567px] h-[248px] relative bg-white rounded-[14px] shadow 	">
                    <div
                        className="px-5 py-2.5 left-[260px] top-[101px] absolute bg-neutral-200 rounded-[88px] shadow justify-start items-center gap-3 inline-flex">
                        <div className="self-stretch justify-start items-start gap-1 flex">
                            <div className="text-black text-lg font-semibold font-['Montserrat'] leading-[25.20px]">
                                Enterprise Architect
                            </div>
                        </div>
                    </div>
                    <div className="left-[267px] top-[178px] absolute justify-start items-start gap-2.5 inline-flex">
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                        <div className="text-pink-500 text-[32px] font-normal font-['Dela Gothic One'] leading-loose">
                            ♥
                        </div>
                    </div>
                    <img
                        className="w-[195px] h-[195px] left-[44px] top-[26px] absolute"
                        src={gt9}
                    />
                </div>
            </div>
        </div>
    );
};

export default AfterQuiz;
