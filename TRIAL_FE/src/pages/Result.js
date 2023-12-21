import React from "react";
import {Navigate, useLocation} from "react-router-dom";
import Predict from '../services/Predict'
import usePromise from "react-promise";

var userAnswer = [];

async function getMajors() {
    return await Predict.getMajors(userAnswer)
}

const Tests = () => {
    const handleContinueClick = () => {
        window.location.href = "/after-quiz";
    };

    const {state} = useLocation();
    const {value, loading} = usePromise(getMajors)

    if (state === null) return <Navigate to="/Intro"/>;
    userAnswer = state.answer

    if (loading) return null

    const result = value
    const majorKeysSorted = Object.keys(result).sort(function (a, b) {
        return result[b] - result[a]
    })
    const subMajorElements = [];
    for (let i = 1; i < majorKeysSorted.length; i++) {
        subMajorElements.push(
            <div className="text-black text-xl font-normal font-['Dela Gothic One']">
                {majorKeysSorted[i]} - {result[majorKeysSorted[i]]}%
            </div>
        )
    }
    return (
        <div className="flex justify-center items-center pt-10">
            <div
                className="flex flex-col items-center w-[999px] h-[450px] pt-12 bg-white rounded-[14px] shadow gap-2.5">
                <div className="text-black text-5xl font-normal font-['Dela Gothic One'] leading-[48px]">
                    Bạn hợp với nghề nghiệp
                </div>
                <div className="mt-5 mb-5 text-black text-5xl font-bold font-['Dela Gothic One'] leading-[48px]">
                    {majorKeysSorted[0]} - {result[majorKeysSorted[0]]}%
                </div>
                <div>
                    {subMajorElements}
                </div>
                <div className="h-64"></div>
                <button
                    className="w-[117px] h-11 px-[22px] py-3.5 bg-black rounded-[100px] justify-start items-start gap-2.5 inline-flex  hover:bg-blue-700 duration-200   mb-10"
                    onClick={handleContinueClick}
                >
                    <div className="text-white text-base font-bold font-['Montserrat'] leading-none">
                        Continue
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Tests;
