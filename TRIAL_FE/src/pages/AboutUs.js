import React from 'react';
import iamge54 from '../images/image54.png';
import about from '../css/about.css';
import abouts2 from '../images/abouts2.png';
import abouts3 from '../images/abouts3.png';


const AboutUs = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-10	">
    <div className='flex items-center justify-center border-solid border-1 rounded-2xl drop-shadow-2xl p-5 bg-white	max-w-4xl mt-10 	'>
    <div className="image54" style={{ backgroundImage: `url(${iamge54})` }}></div>
    <div className="frame20 flex ">
      <div className="frame18 ml-8">
        <div className="frame23 inline-block">
          <div className=" flex">
          <div className="leThiQuynhNhu font-black">Le Thi Quynh Nhu</div>
          <div className=" frame40 ml-2">
            <button className="github"> github</button>
          </div>
          </div>
        </div>
        <div className="madeDesignApiQueriesStatistics">
          Made design, api queries, statistics, sprint game, did some layout and supervised development.
        </div>
      </div>
    </div>
    </div>

    <div className='flex items-center justify-center border-solid border-1 rounded-2xl drop-shadow-2xl p-5 bg-white	max-w-4xl	'>
    <div className="image54" style={{ backgroundImage: `url(${abouts2})` }}></div>
    <div className="frame20 flex ">
      <div className="frame18 ml-8">
        <div className="frame23 inline-block">
          <div className=" flex">
          <div className="leThiQuynhNhu font-black">Ngo Le Ngoc Quy</div>
          <div className=" frame40 ml-2">
          <button className="github"> github</button>
          </div>
          </div>
        </div>
        <div className="madeDesignApiQueriesStatistics">
          Made design, api queries, statistics, sprint game, did some layout and supervised development.
        </div>
      </div>
    </div>
    </div>
    <div className='flex items-center justify-center border-solid border-1 rounded-2xl drop-shadow-2xl p-5 bg-white	max-w-4xl	'>
    <div className="image54" style={{ backgroundImage: `url(${abouts3})` }}></div>
    <div className="frame20 flex ">
      <div className="frame18 ml-8">
        <div className="frame23 inline-block">
          <div className=" flex">
          <div className="leThiQuynhNhu font-black">Nguyen Van Tai</div>
          <div className=" frame40 ml-2">
          <button className="github"> github</button>
          </div>
          </div>
        </div>
        <div className="madeDesignApiQueriesStatistics">
          Made design, api queries, statistics, sprint game, did some layout and supervised development.
        </div>
      </div>
    </div>
    </div>
    <div className='flex items-center justify-center border-solid border-1 rounded-2xl drop-shadow-2xl p-5 bg-white	max-w-4xl	'>
    <div className="image54" style={{ backgroundImage: `url(${abouts3})` }}></div>
    <div className="frame20 flex ">
      <div className="frame18 ml-8">
        <div className="frame23 inline-block">
          <div className=" flex">
          <div className="leThiQuynhNhu font-black">Nguyen Nguyen Vu</div>
          <div className=" frame40 ml-2">
          <button className="github"> github</button>
          </div>
          </div>
        </div>
        <div className="madeDesignApiQueriesStatistics">
          Made design, api queries, statistics, sprint game, did some layout and supervised development.
        </div>
      </div>
    </div>
    </div>
  </div>
  );
};

export default AboutUs;
