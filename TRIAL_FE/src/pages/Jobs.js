import React from "react";

import imagejob from "../images/imagejob.png";
import imagejob1 from "../images/imagejob1.png";


const Jobs = () => {
    const handleButtonClick = (path) => {
        window.location.href = path;
    };

    return (
        <>
            <div className=" p-5 bg-white rounded-[14px] justify-center items-center flex">
                <div className="justify-start items-center gap-5 flex">
                    <div className="justify-start items-center gap-2.5 flex">
                        <svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" viewBox="0 0 640 512"
                             className="text-neutral-400">
                            <path
                                d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/>
                        </svg>

                        <div className="text-black text-[26px] font-extrabold font-['Dela Gothic One'] leading-relaxed">
                            Jobs
                        </div>
                    </div>
                    <div className="justify-start items-center gap-2.5 flex">
                        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 576 512">
                            <path
                                d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"/>
                        </svg>

                        <button
                            className="text-neutral-400  hover:text-neutral-900 text-[26px] font-extrabold font-['Dela Gothic One'] leading-relaxed"
                            onClick={() => handleButtonClick(`/favorite`)}>
                            Favorite
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex justify-center  ">
                <div className="justify-start items-start gap-10 inline-flex">
                    <div className="flex-col justify-start items-start gap-3.5 inline-flex">
                        <div className="justify-start items-center gap-3 inline-flex">
                            <div
                                className="text-black text-[26px] font-extrabold font-['Dela Gothic One'] leading-relaxed">Data
                                Science
                            </div>
                        </div>
                    </div>
                    <div className="justify-start items-center gap-3 flex">
                        <div
                            className="text-neutral-400 text-[26px] font-extrabold font-['Dela Gothic One'] leading-relaxed">Computer
                            Science
                        </div>
                    </div>
                    <div className="justify-start items-center gap-3 flex">
                        <div
                            className="text-neutral-400 text-[26px] font-extrabold font-['Dela Gothic One'] leading-relaxed">Business
                            Management
                        </div>
                    </div>
                    <div className="justify-start items-center gap-3 flex">
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-10 pt-10">
                <div
                    className="w-[380px] h-[652px] bg-white rounded-[14px] shadow flex-col justify-start items-start inline-flex">
                    <div className="w-[380px] h-[250px] relative">
                        <img className="w-[380px] h-[250px] left-0 top-0 absolute" src={imagejob}/>
                        <div
                            className="w-[380px] h-[250px] py-10 left-0 top-0 absolute flex-col justify-end items-end gap-3 inline-flex">
                        </div>
                    </div>
                    <div className="self-stretch h-[402px] p-[30px] flex-col justify-start items-start gap-5 flex">
                        <div className="h-[104px] flex-col justify-start items-start gap-4 flex">
                            <div className="self-stretch justify-start items-start gap-3 inline-flex">
                                <div
                                    className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2 inline-flex">
                                    <div
                                        className="text-black text-[20px] font-extrabold font-['Dela Gothic One'] leading-relaxed "> How
                                        to become AI engineer
                                    </div>
                                    <div
                                        className="text-neutral-500 text-[26px] font-extrabold font-['Dela Gothic One'] leading-relaxed">Course
                                    </div>
                                </div>

                            </div>
                            <div className="self-stretch justify-start items-center gap-2.5 inline-flex ">
                                <div
                                    className="px-3 py-1 bg-orange-600 rounded justify-center items-center gap-2.5 flex">
                                    <div
                                        className="text-white text-sm font-semibold font-['Montserrat'] leading-tight">Data
                                        Analyst
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch pt-5 flex-col justify-start items-start gap-3 flex">
                            <div
                                className="self-stretch text-black text-sm font-semibold font-['Montserrat'] leading-tight">To
                                remark is to say something. - Remarquer, c'est dire quelque chose
                            </div>
                            <div className="self-stretch h-[60px] flex-col justify-start items-start gap-2 flex">
                                <div
                                    className="self-stretch text-neutral-500 text-sm font-semibold font-['Montserrat'] leading-tight">The
                                    teacher remarked on how quickly the students were learning. L'enseignant a noté la
                                    rapidité avec laquelle les élèves apprenaient.
                                </div>
                            </div>
                        </div>
                        <div className="flex-col justify-center items-start gap-2.5 flex">
                            <div
                                className="px-5 py-1.5 bg-green-800 rounded-[100px] justify-center items-center gap-3 inline-flex">
                                <div className="text-white text-sm font-semibold font-['Montserrat'] leading-tight">Read
                                    more
                                </div>
                            </div>
                            <div
                                className="px-5 py-1.5 bg-orange-600 bg-opacity-30 rounded-[100px] justify-center items-center gap-3 inline-flex">
                                <div
                                    className="text-orange-600 text-sm font-semibold font-['Montserrat'] leading-tight">Remove
                                    from Favorite
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div
                    className="w-[380px] h-[652px] bg-white rounded-[14px] shadow flex-col justify-start items-start inline-flex">
                    <div className="w-[380px] h-[250px] relative">
                        <img className="w-[380px] h-[250px] left-0 top-0 absolute" src={imagejob1}/>
                        <div
                            className="w-[380px] h-[250px] py-10 left-0 top-0 absolute flex-col justify-end items-end gap-3 inline-flex">
                        </div>
                    </div>
                    <div className="self-stretch h-[402px] p-[30px] flex-col justify-start items-start gap-5 flex">
                        <div className="h-[104px] flex-col justify-start items-start gap-4 flex">
                            <div className="self-stretch justify-start items-start gap-3 inline-flex">
                                <div
                                    className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2 inline-flex">
                                    <div
                                        className="text-black text-[20px] font-extrabold font-['Dela Gothic One'] leading-relaxed">AI
                                        engineer
                                    </div>
                                    <div
                                        className="text-neutral-500 text-[26px] font-extrabold font-['Dela Gothic One'] leading-relaxed">Course
                                    </div>
                                </div>

                            </div>
                            <div className="self-stretch justify-start items-center gap-2.5 inline-flex ">
                                <div
                                    className="px-3 py-1 bg-orange-600 rounded justify-center items-center gap-2.5 flex">
                                    <div
                                        className="text-white text-sm font-semibold font-['Montserrat'] leading-tight">Data
                                        Analyst
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch pt-5 flex-col justify-start items-start gap-3 flex">
                            <div
                                className="self-stretch text-black text-sm font-semibold font-['Montserrat'] leading-tight">To
                                remark is to say something. - Remarquer, c'est dire quelque chose
                            </div>
                            <div className="self-stretch h-[60px] flex-col justify-start items-start gap-2 flex">
                                <div
                                    className="self-stretch text-neutral-500 text-sm font-semibold font-['Montserrat'] leading-tight">The
                                    teacher remarked on how quickly the students were learning. L'enseignant a noté la
                                    rapidité avec laquelle les élèves apprenaient.
                                </div>
                            </div>
                        </div>
                        <div className="flex-col justify-center items-start gap-2.5 flex">
                            <div
                                className="px-5 py-1.5 bg-green-800 rounded-[100px] justify-center items-center gap-3 inline-flex">
                                <div className="text-white text-sm font-semibold font-['Montserrat'] leading-tight">Read
                                    more
                                </div>
                            </div>
                            <div
                                className="px-5 py-1.5 bg-orange-600 bg-opacity-30 rounded-[100px] justify-center items-center gap-3 inline-flex">
                                <div
                                    className="text-orange-600 text-sm font-semibold font-['Montserrat'] leading-tight">Remove
                                    from Favorite
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div
                    className="w-[380px] h-[652px] bg-white rounded-[14px] shadow flex-col justify-start items-start inline-flex">
                    <div className="w-[380px] h-[250px] relative">
                        <img className="w-[380px] h-[250px] left-0 top-0 absolute" src={imagejob}/>
                        <div
                            className="w-[380px] h-[250px] py-10 left-0 top-0 absolute flex-col justify-end items-end gap-3 inline-flex">
                        </div>
                    </div>
                    <div className="self-stretch h-[402px] p-[30px] flex-col justify-start items-start gap-5 flex">
                        <div className="h-[104px] flex-col justify-start items-start gap-4 flex">
                            <div className="self-stretch justify-start items-start gap-3 inline-flex">
                                <div
                                    className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2 inline-flex">
                                    <div
                                        className="text-black text-[20px] font-extrabold font-['Dela Gothic One'] leading-relaxed">How
                                        to become AI Sience
                                    </div>
                                    <div
                                        className="text-neutral-500 text-[26px] font-extrabold font-['Dela Gothic One'] leading-relaxed">Course
                                    </div>
                                </div>

                            </div>
                            <div className="self-stretch justify-start items-center gap-2.5 inline-flex ">
                                <div
                                    className="px-3 py-1 bg-orange-600 rounded justify-center items-center gap-2.5 flex">
                                    <div
                                        className="text-white text-sm font-semibold font-['Montserrat'] leading-tight">Data
                                        Analyst
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch pt-5 flex-col justify-start items-start gap-3 flex">
                            <div
                                className="self-stretch text-black text-sm font-semibold font-['Montserrat'] leading-tight">To
                                remark is to say something. - Remarquer, c'est dire quelque chose
                            </div>
                            <div className="self-stretch h-[60px] flex-col justify-start items-start gap-2 flex">
                                <div
                                    className="self-stretch text-neutral-500 text-sm font-semibold font-['Montserrat'] leading-tight">The
                                    teacher remarked on how quickly the students were learning. L'enseignant a noté la
                                    rapidité avec laquelle les élèves apprenaient.
                                </div>
                            </div>
                        </div>
                        <div className="flex-col justify-center items-start gap-2.5 flex">
                            <div
                                className="px-5 py-1.5 bg-green-800 rounded-[100px] justify-center items-center gap-3 inline-flex">
                                <div className="text-white text-sm font-semibold font-['Montserrat'] leading-tight">Read
                                    more
                                </div>
                            </div>
                            <div
                                className="px-5 py-1.5 bg-orange-600 bg-opacity-30 rounded-[100px] justify-center items-center gap-3 inline-flex">
                                <div
                                    className="text-orange-600 text-sm font-semibold font-['Montserrat'] leading-tight">Remove
                                    from Favorite
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="flex justify-center gap-10 pt-10">
                <div
                    className="w-[380px] h-[652px] bg-white rounded-[14px] shadow flex-col justify-start items-start inline-flex">
                    <div className="w-[380px] h-[250px] relative">
                        <img className="w-[380px] h-[250px] left-0 top-0 absolute" src={imagejob}/>
                        <div
                            className="w-[380px] h-[250px] py-10 left-0 top-0 absolute flex-col justify-end items-end gap-3 inline-flex">
                        </div>
                    </div>
                    <div className="self-stretch h-[402px] p-[30px] flex-col justify-start items-start gap-5 flex">
                        <div className="h-[104px] flex-col justify-start items-start gap-4 flex">
                            <div className="self-stretch justify-start items-start gap-3 inline-flex">
                                <div
                                    className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2 inline-flex">
                                    <div
                                        className="text-black text-[20px] font-extrabold font-['Dela Gothic One'] leading-relaxed "> How
                                        to become AI engineer
                                    </div>
                                    <div
                                        className="text-neutral-500 text-[26px] font-extrabold font-['Dela Gothic One'] leading-relaxed">Course
                                    </div>
                                </div>

                            </div>
                            <div className="self-stretch justify-start items-center gap-2.5 inline-flex ">
                                <div
                                    className="px-3 py-1 bg-orange-600 rounded justify-center items-center gap-2.5 flex">
                                    <div
                                        className="text-white text-sm font-semibold font-['Montserrat'] leading-tight">Data
                                        Analyst
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch pt-5 flex-col justify-start items-start gap-3 flex">
                            <div
                                className="self-stretch text-black text-sm font-semibold font-['Montserrat'] leading-tight">To
                                remark is to say something. - Remarquer, c'est dire quelque chose
                            </div>
                            <div className="self-stretch h-[60px] flex-col justify-start items-start gap-2 flex">
                                <div
                                    className="self-stretch text-neutral-500 text-sm font-semibold font-['Montserrat'] leading-tight">The
                                    teacher remarked on how quickly the students were learning. L'enseignant a noté la
                                    rapidité avec laquelle les élèves apprenaient.
                                </div>
                            </div>
                        </div>
                        <div className="flex-col justify-center items-start gap-2.5 flex">
                            <div
                                className="px-5 py-1.5 bg-green-800 rounded-[100px] justify-center items-center gap-3 inline-flex">
                                <div className="text-white text-sm font-semibold font-['Montserrat'] leading-tight">Read
                                    more
                                </div>
                            </div>
                            <div
                                className="px-5 py-1.5 bg-orange-600 bg-opacity-30 rounded-[100px] justify-center items-center gap-3 inline-flex">
                                <div
                                    className="text-orange-600 text-sm font-semibold font-['Montserrat'] leading-tight">Remove
                                    from Favorite
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div
                    className="w-[380px] h-[652px] bg-white rounded-[14px] shadow flex-col justify-start items-start inline-flex">
                    <div className="w-[380px] h-[250px] relative">
                        <img className="w-[380px] h-[250px] left-0 top-0 absolute" src={imagejob1}/>
                        <div
                            className="w-[380px] h-[250px] py-10 left-0 top-0 absolute flex-col justify-end items-end gap-3 inline-flex">
                        </div>
                    </div>
                    <div className="self-stretch h-[402px] p-[30px] flex-col justify-start items-start gap-5 flex">
                        <div className="h-[104px] flex-col justify-start items-start gap-4 flex">
                            <div className="self-stretch justify-start items-start gap-3 inline-flex">
                                <div
                                    className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2 inline-flex">
                                    <div
                                        className="text-black text-[20px] font-extrabold font-['Dela Gothic One'] leading-relaxed">AI
                                        engineer
                                    </div>
                                    <div
                                        className="text-neutral-500 text-[26px] font-extrabold font-['Dela Gothic One'] leading-relaxed">Course
                                    </div>
                                </div>

                            </div>
                            <div className="self-stretch justify-start items-center gap-2.5 inline-flex ">
                                <div
                                    className="px-3 py-1 bg-orange-600 rounded justify-center items-center gap-2.5 flex">
                                    <div
                                        className="text-white text-sm font-semibold font-['Montserrat'] leading-tight">Data
                                        Analyst
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch pt-5 flex-col justify-start items-start gap-3 flex">
                            <div
                                className="self-stretch text-black text-sm font-semibold font-['Montserrat'] leading-tight">To
                                remark is to say something. - Remarquer, c'est dire quelque chose
                            </div>
                            <div className="self-stretch h-[60px] flex-col justify-start items-start gap-2 flex">
                                <div
                                    className="self-stretch text-neutral-500 text-sm font-semibold font-['Montserrat'] leading-tight">The
                                    teacher remarked on how quickly the students were learning. L'enseignant a noté la
                                    rapidité avec laquelle les élèves apprenaient.
                                </div>
                            </div>
                        </div>
                        <div className="flex-col justify-center items-start gap-2.5 flex">
                            <div
                                className="px-5 py-1.5 bg-green-800 rounded-[100px] justify-center items-center gap-3 inline-flex">
                                <div className="text-white text-sm font-semibold font-['Montserrat'] leading-tight">Read
                                    more
                                </div>
                            </div>
                            <div
                                className="px-5 py-1.5 bg-orange-600 bg-opacity-30 rounded-[100px] justify-center items-center gap-3 inline-flex">
                                <div
                                    className="text-orange-600 text-sm font-semibold font-['Montserrat'] leading-tight">Remove
                                    from Favorite
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div
                    className="w-[380px] h-[652px] bg-white rounded-[14px] shadow flex-col justify-start items-start inline-flex">
                    <div className="w-[380px] h-[250px] relative">
                        <img className="w-[380px] h-[250px] left-0 top-0 absolute" src={imagejob}/>
                        <div
                            className="w-[380px] h-[250px] py-10 left-0 top-0 absolute flex-col justify-end items-end gap-3 inline-flex">
                        </div>
                    </div>
                    <div className="self-stretch h-[402px] p-[30px] flex-col justify-start items-start gap-5 flex">
                        <div className="h-[104px] flex-col justify-start items-start gap-4 flex">
                            <div className="self-stretch justify-start items-start gap-3 inline-flex">
                                <div
                                    className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2 inline-flex">
                                    <div
                                        className="text-black text-[20px] font-extrabold font-['Dela Gothic One'] leading-relaxed">How
                                        to become AI Sience
                                    </div>
                                    <div
                                        className="text-neutral-500 text-[26px] font-extrabold font-['Dela Gothic One'] leading-relaxed">Course
                                    </div>
                                </div>

                            </div>
                            <div className="self-stretch justify-start items-center gap-2.5 inline-flex ">
                                <div
                                    className="px-3 py-1 bg-orange-600 rounded justify-center items-center gap-2.5 flex">
                                    <div
                                        className="text-white text-sm font-semibold font-['Montserrat'] leading-tight">Data
                                        Analyst
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch pt-5 flex-col justify-start items-start gap-3 flex">
                            <div
                                className="self-stretch text-black text-sm font-semibold font-['Montserrat'] leading-tight">To
                                remark is to say something. - Remarquer, c'est dire quelque chose
                            </div>
                            <div className="self-stretch h-[60px] flex-col justify-start items-start gap-2 flex">
                                <div
                                    className="self-stretch text-neutral-500 text-sm font-semibold font-['Montserrat'] leading-tight">The
                                    teacher remarked on how quickly the students were learning. L'enseignant a noté la
                                    rapidité avec laquelle les élèves apprenaient.
                                </div>
                            </div>
                        </div>
                        <div className="flex-col justify-center items-start gap-2.5 flex">
                            <div
                                className="px-5 py-1.5 bg-green-800 rounded-[100px] justify-center items-center gap-3 inline-flex">
                                <div className="text-white text-sm font-semibold font-['Montserrat'] leading-tight">Read
                                    more
                                </div>
                            </div>
                            <div
                                className="px-5 py-1.5 bg-orange-600 bg-opacity-30 rounded-[100px] justify-center items-center gap-3 inline-flex">
                                <div
                                    className="text-orange-600 text-sm font-semibold font-['Montserrat'] leading-tight">Remove
                                    from Favorite
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="flex justify-center gap-10 pt-10">
                <div
                    className="w-[380px] h-[652px] bg-white rounded-[14px] shadow flex-col justify-start items-start inline-flex">
                    <div className="w-[380px] h-[250px] relative">
                        <img className="w-[380px] h-[250px] left-0 top-0 absolute" src={imagejob}/>
                        <div
                            className="w-[380px] h-[250px] py-10 left-0 top-0 absolute flex-col justify-end items-end gap-3 inline-flex">
                        </div>
                    </div>
                    <div className="self-stretch h-[402px] p-[30px] flex-col justify-start items-start gap-5 flex">
                        <div className="h-[104px] flex-col justify-start items-start gap-4 flex">
                            <div className="self-stretch justify-start items-start gap-3 inline-flex">
                                <div
                                    className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2 inline-flex">
                                    <div
                                        className="text-black text-[20px] font-extrabold font-['Dela Gothic One'] leading-relaxed "> How
                                        to become AI engineer
                                    </div>
                                    <div
                                        className="text-neutral-500 text-[26px] font-extrabold font-['Dela Gothic One'] leading-relaxed">Course
                                    </div>
                                </div>

                            </div>
                            <div className="self-stretch justify-start items-center gap-2.5 inline-flex ">
                                <div
                                    className="px-3 py-1 bg-orange-600 rounded justify-center items-center gap-2.5 flex">
                                    <div
                                        className="text-white text-sm font-semibold font-['Montserrat'] leading-tight">Data
                                        Analyst
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch pt-5 flex-col justify-start items-start gap-3 flex">
                            <div
                                className="self-stretch text-black text-sm font-semibold font-['Montserrat'] leading-tight">To
                                remark is to say something. - Remarquer, c'est dire quelque chose
                            </div>
                            <div className="self-stretch h-[60px] flex-col justify-start items-start gap-2 flex">
                                <div
                                    className="self-stretch text-neutral-500 text-sm font-semibold font-['Montserrat'] leading-tight">The
                                    teacher remarked on how quickly the students were learning. L'enseignant a noté la
                                    rapidité avec laquelle les élèves apprenaient.
                                </div>
                            </div>
                        </div>
                        <div className="flex-col justify-center items-start gap-2.5 flex">
                            <div
                                className="px-5 py-1.5 bg-green-800 rounded-[100px] justify-center items-center gap-3 inline-flex">
                                <div className="text-white text-sm font-semibold font-['Montserrat'] leading-tight">Read
                                    more
                                </div>
                            </div>
                            <div
                                className="px-5 py-1.5 bg-orange-600 bg-opacity-30 rounded-[100px] justify-center items-center gap-3 inline-flex">
                                <div
                                    className="text-orange-600 text-sm font-semibold font-['Montserrat'] leading-tight">Remove
                                    from Favorite
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div
                    className="w-[380px] h-[652px]  bg-white rounded-[14px] shadow flex-col justify-start items-start inline-flex">
                    <div className="w-[380px] h-[250px] relative">
                        <img className="w-[380px] h-[250px] left-0 top-0 absolute" src={imagejob1}/>
                        <div
                            className="w-[380px] h-[250px] py-10 left-0 top-0 absolute flex-col justify-end items-end gap-3 inline-flex">
                        </div>
                    </div>
                    <div className="self-stretch h-[402px] p-[30px] flex-col justify-start items-start gap-5 flex">
                        <div className="h-[104px] flex-col justify-start items-start gap-4 flex">
                            <div className="self-stretch justify-start items-start gap-3 inline-flex">
                                <div
                                    className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2 inline-flex">
                                    <div
                                        className="text-black text-[20px] font-extrabold font-['Dela Gothic One'] leading-relaxed">AI
                                        engineer
                                    </div>
                                    <div
                                        className="text-neutral-500 text-[26px] font-extrabold font-['Dela Gothic One'] leading-relaxed">Course
                                    </div>
                                </div>

                            </div>
                            <div className="self-stretch justify-start items-center gap-2.5 inline-flex ">
                                <div
                                    className="px-3 py-1 bg-orange-600 rounded justify-center items-center gap-2.5 flex">
                                    <div
                                        className="text-white text-sm font-semibold font-['Montserrat'] leading-tight">Data
                                        Analyst
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch pt-5 flex-col justify-start items-start gap-3 flex">
                            <div
                                className="self-stretch text-black text-sm font-semibold font-['Montserrat'] leading-tight">To
                                remark is to say something. - Remarquer, c'est dire quelque chose
                            </div>
                            <div className="self-stretch h-[60px] flex-col justify-start items-start gap-2 flex">
                                <div
                                    className="self-stretch text-neutral-500 text-sm font-semibold font-['Montserrat'] leading-tight">The
                                    teacher remarked on how quickly the students were learning. L'enseignant a noté la
                                    rapidité avec laquelle les élèves apprenaient.
                                </div>
                            </div>
                        </div>
                        <div className="flex-col justify-center items-start gap-2.5 flex">
                            <div
                                className="px-5 py-1.5 bg-green-800 rounded-[100px] justify-center items-center gap-3 inline-flex">
                                <div className="text-white text-sm font-semibold font-['Montserrat'] leading-tight">Read
                                    more
                                </div>
                            </div>
                            <div
                                className="px-5 py-1.5 bg-orange-600 bg-opacity-30 rounded-[100px] justify-center items-center gap-3 inline-flex">
                                <div
                                    className="text-orange-600 text-sm font-semibold font-['Montserrat'] leading-tight">Remove
                                    from Favorite
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div
                    className="w-[380px] h-[652px] bg-white rounded-[14px] shadow flex-col justify-start items-start inline-flex">
                    <div className="w-[380px] h-[250px] relative">
                        <div
                            className="w-[380px] h-[250px] py-10 left-0 top-0 absolute flex-col justify-end items-end gap-3 inline-flex">
                        </div>
                    </div>
                    <div className="self-stretch h-[402px] p-[30px] flex-col justify-start items-start gap-5 flex">

                        <div className="self-center text-black font-extrabold ">Next page -</div>


                    </div>
                </div>

            </div>

            <div className="flex justify-center pt-10 ">

                <nav aria-label="Page navigation example">
                    <ul class="flex items-center -space-x-px h-10 text-base">
                        <li>
                            <a href="#"
                               class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-blue-100 hover:text-blue-700">
                                <span class="sr-only">Previous</span>
                                <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="M5 1 1 5l4 4"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                               class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-blue-100 hover:text-blue-700">1</a>
                        </li>
                        <li>
                            <a href="#"
                               class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-blue-100 hover:text-blue-700">2</a>
                        </li>
                        <li>
                            <a href="#" aria-current="page"
                               class="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700">3</a>
                        </li>
                        <li>
                            <a href="#"
                               class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-blue-100 hover:text-blue-700">4</a>
                        </li>
                        <li>
                            <a href="#"
                               class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-blue-100 hover:text-blue-700">5</a>
                        </li>
                        <li>
                            <a href="#"
                               class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-blue-100 hover:text-blue-700">
                                <span class="sr-only">Next</span>
                                <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="m1 9 4-4-4-4"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>


            </div>

        </>
    );
};

export default Jobs;
