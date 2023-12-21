import React from "react";
import roadMap from "../images/roadmap.png";
import image55 from "../images/image55.png";

const Intro = () => {
  const handleButtonClick = (path) => {
    window.location.href = path;
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="text-black text-[26px] font-extrabold font-['Dela Gothic One'] leading-relaxed self-start	pl-20  ">
          Textbook
        </div>
        <div className="w-[484px] h-[26px] justify-center items-start gap-10 inline-flex">
          <div className="flex-col justify-start items-start gap-3.5 inline-flex">
            <div className="justify-start items-center gap-3 inline-flex">
              <div className="text-black text-[26px] font-extrabold font-['Dela Gothic One'] leading-relaxed">
                D1
              </div>
            </div>
          </div>
          <div className="justify-start items-center gap-3 flex">
            <div className="text-neutral-500 text-[26px] font-extrabold font-['Dela Gothic One'] leading-relaxed">
              D2
            </div>
          </div>
          <div className="justify-start items-center gap-3 flex">
            <div className="text-neutral-500 text-[26px] font-extrabold font-['Dela Gothic One'] leading-relaxed">
              D3
            </div>
          </div>
          <div className="justify-start items-center gap-3 flex">
            <div className="text-neutral-500 text-[26px] font-extrabold font-['Dela Gothic One'] leading-relaxed">
              D4
            </div>
          </div>
          <div className="justify-start items-center gap-3 flex">
            <div className="text-neutral-500 text-[26px] font-extrabold font-['Dela Gothic One'] leading-relaxed">
              D5
            </div>
          </div>
          <div className="justify-start items-center gap-3 flex">
            <div className="text-neutral-500 text-[26px] font-extrabold font-['Dela Gothic One'] leading-relaxed">
              5Ds
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pt-10 gap-10 ">
        <div className="w-[926px] h-[325px] pr-10 bg-white rounded-[14px] shadow justify-start items-start inline-flex">
          <div className="w-[337px] h-[325px] relative">
            <img
              className="w-[337px] h-[325px] left-0 top-0 absolute"
              src={image55}
            />
            <div className="w-[337px] h-[325px] py-10 left-0 top-0 absolute flex-col justify-start items-end gap-3 inline-flex"></div>
          </div>
          <div className="self-stretch pl-10 py-10 flex-col justify-start items-start gap-5 inline-flex">
            <div className="self-stretch h-[77px] flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch justify-between items-start inline-flex">
                <div className="justify-start items-start gap-3 flex">
                  <div className="text-black text-3xl font-extrabold font-['Dela Gothic One'] leading-[30px]">
                    Part 1 - Introduction
                  </div>
                </div>
                <div className="w-10 h-10 p-1 bg-stone-100 rounded justify-center items-center gap-2.5 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M19.5104 3.6192C19.4822 3.44999 19.4181 3.2888 19.3223 3.14648C19.2265 3.00416 19.1014 2.88403 18.9552 2.79419C18.8091 2.70435 18.6454 2.64688 18.4752 2.62567C18.3049 2.60445 18.1321 2.61998 17.9684 2.6712L9.56843 5.2956C9.32418 5.37185 9.1107 5.52418 8.95915 5.73035C8.8076 5.93651 8.72592 6.18573 8.72603 6.4416V16.2C8.18538 15.7945 7.52366 15.5835 6.84808 15.601C6.1725 15.6186 5.52264 15.8637 5.00379 16.2967C4.48493 16.7298 4.12749 17.3253 3.98936 17.9868C3.85123 18.6484 3.94052 19.3372 4.24275 19.9416C4.54498 20.5461 5.04245 21.0308 5.65456 21.3172C6.26667 21.6037 6.95756 21.675 7.61529 21.5197C8.27302 21.3645 8.85906 20.9917 9.27845 20.4618C9.69785 19.9318 9.92603 19.2758 9.92603 18.6V10.0416L18.326 7.416V10.8276C18.7376 10.8636 19.1396 10.9392 19.526 11.0484V3.816C19.526 3.7488 19.52 3.684 19.5104 3.6192ZM23.126 17.4C23.126 18.8322 22.5571 20.2057 21.5444 21.2184C20.5317 22.2311 19.1582 22.8 17.726 22.8C16.2939 22.8 14.9203 22.2311 13.9077 21.2184C12.895 20.2057 12.326 18.8322 12.326 17.4C12.326 15.9678 12.895 14.5943 13.9077 13.5816C14.9203 12.5689 16.2939 12 17.726 12C19.1582 12 20.5317 12.5689 21.5444 13.5816C22.5571 14.5943 23.126 15.9678 23.126 17.4ZM20.4104 16.878L16.8176 14.898C16.7263 14.8475 16.6234 14.8217 16.5191 14.8231C16.4148 14.8245 16.3126 14.8531 16.2227 14.906C16.1328 14.959 16.0583 15.0345 16.0065 15.125C15.9547 15.2156 15.9273 15.3181 15.9272 15.4224V19.3824C15.9271 19.4868 15.9543 19.5895 16.006 19.6802C16.0578 19.7709 16.1323 19.8466 16.2222 19.8997C16.3122 19.9527 16.4144 19.9814 16.5188 19.9829C16.6232 19.9844 16.7262 19.9585 16.8176 19.908L20.4104 17.928C20.5042 17.8761 20.5824 17.8001 20.6368 17.7077C20.6912 17.6154 20.72 17.5102 20.72 17.403C20.72 17.2958 20.6912 17.1906 20.6368 17.0983C20.5824 17.0059 20.5042 16.9299 20.4104 16.878Z"
                      fill="#BABABA"
                    />
                  </svg>
                </div>
              </div>
              <div />
            </div>
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="text-black text-base font-semibold font-['Montserrat'] leading-snug">
                What is Data Analyst, Why Python?
                <br />
                What other options are there? <br />
                What's the cycle of a Data Analysis project? <br />
                What's the difference between Data Analyst and Data Science?
              </div>
            </div>
            <div className="px-5 py-3 bg-orange-600 rounded-[100px] justify-center items-center gap-3 inline-flex">
              <div className="text-white text-base font-bold font-['Montserrat'] leading-none">
                Start
              </div>
            </div>
          </div>
        </div>
        <div className="w-[926px] h-[325px] pr-10 bg-white rounded-[14px] shadow justify-start items-start inline-flex">
          <div className="w-[337px] h-[325px] relative">
            <img
              className="w-[337px] h-[325px] left-0 top-0 absolute"
              src={image55}
            />
            <div className="w-[337px] h-[325px] py-10 left-0 top-0 absolute flex-col justify-start items-end gap-3 inline-flex"></div>
          </div>
          <div className="self-stretch pl-10 py-10 flex-col justify-start items-start gap-5 inline-flex">
            <div className="self-stretch h-[77px] flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch justify-between items-start inline-flex">
                <div className="justify-start items-start gap-3 flex">
                  <div className="text-black text-3xl font-extrabold font-['Dela Gothic One'] leading-[30px]">
                    Part 1 - Introduction
                  </div>
                </div>
                <div className="w-10 h-10 p-1 bg-stone-100 rounded justify-center items-center gap-2.5 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M19.5104 3.6192C19.4822 3.44999 19.4181 3.2888 19.3223 3.14648C19.2265 3.00416 19.1014 2.88403 18.9552 2.79419C18.8091 2.70435 18.6454 2.64688 18.4752 2.62567C18.3049 2.60445 18.1321 2.61998 17.9684 2.6712L9.56843 5.2956C9.32418 5.37185 9.1107 5.52418 8.95915 5.73035C8.8076 5.93651 8.72592 6.18573 8.72603 6.4416V16.2C8.18538 15.7945 7.52366 15.5835 6.84808 15.601C6.1725 15.6186 5.52264 15.8637 5.00379 16.2967C4.48493 16.7298 4.12749 17.3253 3.98936 17.9868C3.85123 18.6484 3.94052 19.3372 4.24275 19.9416C4.54498 20.5461 5.04245 21.0308 5.65456 21.3172C6.26667 21.6037 6.95756 21.675 7.61529 21.5197C8.27302 21.3645 8.85906 20.9917 9.27845 20.4618C9.69785 19.9318 9.92603 19.2758 9.92603 18.6V10.0416L18.326 7.416V10.8276C18.7376 10.8636 19.1396 10.9392 19.526 11.0484V3.816C19.526 3.7488 19.52 3.684 19.5104 3.6192ZM23.126 17.4C23.126 18.8322 22.5571 20.2057 21.5444 21.2184C20.5317 22.2311 19.1582 22.8 17.726 22.8C16.2939 22.8 14.9203 22.2311 13.9077 21.2184C12.895 20.2057 12.326 18.8322 12.326 17.4C12.326 15.9678 12.895 14.5943 13.9077 13.5816C14.9203 12.5689 16.2939 12 17.726 12C19.1582 12 20.5317 12.5689 21.5444 13.5816C22.5571 14.5943 23.126 15.9678 23.126 17.4ZM20.4104 16.878L16.8176 14.898C16.7263 14.8475 16.6234 14.8217 16.5191 14.8231C16.4148 14.8245 16.3126 14.8531 16.2227 14.906C16.1328 14.959 16.0583 15.0345 16.0065 15.125C15.9547 15.2156 15.9273 15.3181 15.9272 15.4224V19.3824C15.9271 19.4868 15.9543 19.5895 16.006 19.6802C16.0578 19.7709 16.1323 19.8466 16.2222 19.8997C16.3122 19.9527 16.4144 19.9814 16.5188 19.9829C16.6232 19.9844 16.7262 19.9585 16.8176 19.908L20.4104 17.928C20.5042 17.8761 20.5824 17.8001 20.6368 17.7077C20.6912 17.6154 20.72 17.5102 20.72 17.403C20.72 17.2958 20.6912 17.1906 20.6368 17.0983C20.5824 17.0059 20.5042 16.9299 20.4104 16.878Z"
                      fill="#BABABA"
                    />
                  </svg>
                </div>
              </div>
              <div />
            </div>
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="text-black text-base font-semibold font-['Montserrat'] leading-snug">
                What is Data Analyst, Why Python?
                <br />
                What other options are there? <br />
                What's the cycle of a Data Analysis project? <br />
                What's the difference between Data Analyst and Data Science?
              </div>
            </div>
            <div className="px-5 py-3 bg-orange-600 rounded-[100px] justify-center items-center gap-3 inline-flex">
              <div className="text-white text-base font-bold font-['Montserrat'] leading-none">
                Start
              </div>
            </div>
          </div>
        </div>
        <div className="w-[926px] h-[325px] pr-10 bg-white rounded-[14px] shadow justify-start items-start inline-flex">
          <div className="w-[337px] h-[325px] relative">
            <img
              className="w-[337px] h-[325px] left-0 top-0 absolute"
              src={image55}
            />
            <div className="w-[337px] h-[325px] py-10 left-0 top-0 absolute flex-col justify-start items-end gap-3 inline-flex"></div>
          </div>
          <div className="self-stretch pl-10 py-10 flex-col justify-start items-start gap-5 inline-flex">
            <div className="self-stretch h-[77px] flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch justify-between items-start inline-flex">
                <div className="justify-start items-start gap-3 flex">
                  <div className="text-black text-3xl font-extrabold font-['Dela Gothic One'] leading-[30px]">
                    Part 1 - Introduction
                  </div>
                </div>
                <div className="w-10 h-10 p-1 bg-stone-100 rounded justify-center items-center gap-2.5 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M19.5104 3.6192C19.4822 3.44999 19.4181 3.2888 19.3223 3.14648C19.2265 3.00416 19.1014 2.88403 18.9552 2.79419C18.8091 2.70435 18.6454 2.64688 18.4752 2.62567C18.3049 2.60445 18.1321 2.61998 17.9684 2.6712L9.56843 5.2956C9.32418 5.37185 9.1107 5.52418 8.95915 5.73035C8.8076 5.93651 8.72592 6.18573 8.72603 6.4416V16.2C8.18538 15.7945 7.52366 15.5835 6.84808 15.601C6.1725 15.6186 5.52264 15.8637 5.00379 16.2967C4.48493 16.7298 4.12749 17.3253 3.98936 17.9868C3.85123 18.6484 3.94052 19.3372 4.24275 19.9416C4.54498 20.5461 5.04245 21.0308 5.65456 21.3172C6.26667 21.6037 6.95756 21.675 7.61529 21.5197C8.27302 21.3645 8.85906 20.9917 9.27845 20.4618C9.69785 19.9318 9.92603 19.2758 9.92603 18.6V10.0416L18.326 7.416V10.8276C18.7376 10.8636 19.1396 10.9392 19.526 11.0484V3.816C19.526 3.7488 19.52 3.684 19.5104 3.6192ZM23.126 17.4C23.126 18.8322 22.5571 20.2057 21.5444 21.2184C20.5317 22.2311 19.1582 22.8 17.726 22.8C16.2939 22.8 14.9203 22.2311 13.9077 21.2184C12.895 20.2057 12.326 18.8322 12.326 17.4C12.326 15.9678 12.895 14.5943 13.9077 13.5816C14.9203 12.5689 16.2939 12 17.726 12C19.1582 12 20.5317 12.5689 21.5444 13.5816C22.5571 14.5943 23.126 15.9678 23.126 17.4ZM20.4104 16.878L16.8176 14.898C16.7263 14.8475 16.6234 14.8217 16.5191 14.8231C16.4148 14.8245 16.3126 14.8531 16.2227 14.906C16.1328 14.959 16.0583 15.0345 16.0065 15.125C15.9547 15.2156 15.9273 15.3181 15.9272 15.4224V19.3824C15.9271 19.4868 15.9543 19.5895 16.006 19.6802C16.0578 19.7709 16.1323 19.8466 16.2222 19.8997C16.3122 19.9527 16.4144 19.9814 16.5188 19.9829C16.6232 19.9844 16.7262 19.9585 16.8176 19.908L20.4104 17.928C20.5042 17.8761 20.5824 17.8001 20.6368 17.7077C20.6912 17.6154 20.72 17.5102 20.72 17.403C20.72 17.2958 20.6912 17.1906 20.6368 17.0983C20.5824 17.0059 20.5042 16.9299 20.4104 16.878Z"
                      fill="#BABABA"
                    />
                  </svg>
                </div>
              </div>
              <div />
            </div>
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="text-black text-base font-semibold font-['Montserrat'] leading-snug">
                What is Data Analyst, Why Python?
                <br />
                What other options are there? <br />
                What's the cycle of a Data Analysis project? <br />
                What's the difference between Data Analyst and Data Science?
              </div>
            </div>
            <div className="px-5 py-3 bg-orange-600 rounded-[100px] justify-center items-center gap-3 inline-flex">
              <div className="text-white text-base font-bold font-['Montserrat'] leading-none">
                Start
              </div>
            </div>
          </div>
        </div>
        <button className="w-[130px] h-[40px] px-5 py-3 bg-orange-600 hover:bg-orange-200 duration-200	 rounded-[100px] justify-center items-center gap-3 inline-flex" onClick={() => handleButtonClick(`/finish-day-1`)}>
          <div className="text-white text-2xl font-bold font-['Montserrat'] leading-[30px]">
            FINISH
          </div>
        </button>
      </div>
    </>
  );
};

export default Intro;
