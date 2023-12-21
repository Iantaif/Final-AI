import React from 'react';
import image30 from "../images/image30.png";


const Intro = () => {
    const handleButtonClick = (path) => {
        window.location.href = path;
    };
    return (
        <div className="rounded-sm bg-white  flex flex-row items-start justify-center p-10 box-border">
            <div
                className="w-[856px] h-[520px] px-10 py-24 bg-white rounded-[14px] shadow justify-start items-center gap-2.5 inline-flex">
                <div className="w-[250px] h-[400px] flex-col justify-center items-center inline-flex">
                    <img className="w-[250px] h-[400px]" src={image30}/>
                </div>
                <div className="w-[452px] flex-col justify-center items-start gap-[30px] inline-flex">
                    <div className="flex-col justify-start items-start gap-3.5 flex">
                        <div className="justify-start items-center gap-2.5 inline-flex">
                            <div
                                className="text-black text-5xl font-extrabold font-['Dela Gothic One'] leading-[48px]">Rescuing
                                the Ebony Cat on top of the snowy mountain
                            </div>
                        </div>
                        <div
                            className="w-[458.33px] text-neutral-500 text-base font-semibold font-['Montserrat'] leading-snug">Ebony
                            cat invited her friends to go out, but got lost along the way. Thanks to the Location
                            device, YOU - Mun's owner - knew that Cat's location was at the top of a snowy mountain near
                            your home. However, it is winter so the weather in the mountains is very harsh. You need to
                            prepare the necessary items to go up the mountain to save your cat. Knowing that the longer
                            the time lasts, the more dangerous the cats' lives will be, so you need to leave as quickly
                            as possible.
                        </div>
                    </div>
                    <div className="self-stretch h-11 flex-col justify-start items-start gap-2 flex">
                        <div className="self-stretch justify-start items-start gap-6 inline-flex">
                            <button
                                className="px-[13px] py-3.5 border-3.5 rounded-[300px] border-2 border-green-500 justify-center items-center gap-[19px] flex"
                                onClick={() => handleButtonClick('/quiz')} // Replace '/path-for-yes' with the actual path for "Yes"
                            >
                                <div
                                    className="text-green-500 text-base font-bold font-['Montserrat'] leading-none">Yes
                                </div>
                            </button>
                            <button
                                className="h-13 px-[13px] border-3.5 py-3.5 bg-white rounded-[300px] border-2 border-yellow-500 justify-center items-center gap-[19px] flex"
                                onClick={() => handleButtonClick('/home')} // Replace '/path-for-no' with the actual path for "No"
                            >
                                <div
                                    className="text-yellow-400 text-base font-bold font-['Montserrat'] leading-none">No
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
