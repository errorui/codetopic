"use client";
import React, { useEffect, useRef } from "react";
import { Usestore } from "../Context/Usestore";
import { themes, languages } from "../data";

const Options = () => {
  const {
    code,
    setcode,
    language,
    setlanguage,

    setstyle,
    showline,
    setshowline,
    handleDownload,
    author,
    setauthor,
    fontsize,
    setfontsize,
    gradient,
    onchangegradient,
    filename,
    setfilename,
  } = Usestore();

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const updateHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height to auto
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set height to scrollHeight
    }
  };

  useEffect(() => {
    updateHeight();
  }, [code]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = themes.find((theme) => theme.name === e.target.value);
    if (selectedTheme) {
      setstyle(selectedTheme.style);
    }
  };
  return (
    <div className="w-full h-full  p-1 md:p-5">
      <div id="theme_langugage_input" className="flex  gap-2 py-3 ">
        <div className="flex flex-col  w-full " id="language">
          <label className="font-medium text-xl" htmlFor="language">
            Language
          </label>
          <select
            className="focus:shadow-lg focus:shadow-blue-300  focus:border-blue-300    border-[1px] border-slate-300  p-3 px-6 bg-[#ededed] w-[100%]"
            name="language"
            id=""
            value={language}
            onChange={(e) => setlanguage(e.target.value)}
          >
            {languages.map((i) => {
              return (
                <option
                  key={i}
                  className={`${
                    language == i
                      ? `bg-blue-500 text-white
                    font-medium my-3
                    h-[12px]`
                      : null
                  }   p-4 text-md uppercase border-b-2 border-black`}
                >
                  {i}
                </option>
              );
            })}
          </select>
        </div>

        <div className="flex flex-col  w-full " id="theme">
          <label className="font-medium text-xl" htmlFor="language">
            Themes
          </label>
          <select
            className="  accent-purple-500  border-[1px] border-slate-300 
            focus:shadow-lg
           
            focus:outline-[0.5px]
            focus:shadow-blue-300  focus:border-blue-300  p-3 px-6 bg-[#ededed] w-[100%]"
            name="language"
            onChange={handleChange}
            id=""
          >
            {themes.map((i) => {
              return (
                <option
                  key={i.name}
                  className="p-4 text-md  border-b-2 border-black"
                >
                  {i.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="" id="text-area">
        <textarea
          ref={textareaRef}
          className="w-full h-auto 
           bg-[#ededed] font-normal p-3
           focus:shadow-lg
           focus:border-blue-300
           focus:outline-[0.5px]
           focus:outline-blue-300
           resize-none

         
    
          border-[0.5px] border-slate-300 overflow-hidden"
          id=""
          value={code}
          onChange={(e) => {
            setcode(e.target.value);
          }}
        ></textarea>
      </div>
      <div className=" text-xl" id="checker box">
        <label>
          <input
            className="transform scale-150 mx-3 accent-blue-500"
            type="checkbox"
            checked={showline}
            onChange={() => {
              setshowline(!showline);
            }}
          />
          Show lines
        </label>
      </div>
      <div className="flex gap-3 my-2" id="author">
        <div className="w-full">
          <label htmlFor="author" className=" text-xl font-light">
            Author
          </label>
          <input
            type="text"
            name="author"
            value={author}
            onChange={(e) => setauthor(e.target.value)}
            id=""
            className=" outline-none focus:shadow-sm focus:shadow-blue-300  focus:border-blue-300    border-[1px] border-slate-300  p-3  bg-[#ededed] w-[100%]"
          />
        </div>
        <div className="w-full">
          <label className=" text-xl font-light" htmlFor="size">
            Text Size
          </label>
          <input
            type="number"
            step={1}
            name="author"
            value={fontsize}
            onChange={(e) => setfontsize(parseInt(e.target.value))}
            id="size"
            className=" outline-none focus:shadow-sm focus:shadow-blue-300  focus:border-blue-300    border-[1px] border-slate-300  p-3  bg-[#ededed] w-[100%]"
          />
        </div>
      </div>
      <h1>Gradient</h1>
      <div className="flex gap-3 my-2" id="gradient">
        <div className="">
          <label htmlFor="primary" className=" text-xl font-light">
            Primary colour
          </label>
          <input
            type="text"
            name="primary"
            value={gradient.primary}
            onChange={(e) => onchangegradient(e)}
            id=""
            className=" outline-none focus:shadow-sm focus:shadow-blue-300  focus:border-blue-300    border-[1px] border-slate-300  p-3  bg-[#ededed] w-[100%]"
          />
        </div>
        <div className="">
          <label htmlFor="secondary" className=" text-xl font-light">
            secondary colour
          </label>
          <input
            type="text"
            name="secondary"
            value={gradient.secondary}
            onChange={(e) => onchangegradient(e)}
            id=""
            className=" outline-none focus:shadow-sm focus:shadow-blue-300  focus:border-blue-300    border-[1px] border-slate-300  p-3  bg-[#ededed] w-[100%]"
          />
        </div>{" "}
        <div className="">
          <label htmlFor="direction" className=" text-xl font-light">
            rotation
          </label>
          <input
            type="number"
            name="direction"
            min={0}
            value={
              gradient.direction > 360
                ? gradient.direction - 360
                : gradient.direction
            }
            onChange={(e) => onchangegradient(e)}
            id=""
            className=" outline-none focus:shadow-sm focus:shadow-blue-300  focus:border-blue-300    border-[1px] border-slate-300  p-3  bg-[#ededed] w-[100%]"
          />
        </div>
      </div>
      <div className="flex w-full my-2">
        <div className="w-full">
          <label htmlFor="primary" className=" text-xl font-light">
            filename
          </label>
          <input
            type="text"
            name="filename"
            value={filename}
            onChange={(e) => setfilename(e.target.value)}
            id=""
            className=" outline-none focus:shadow-sm focus:shadow-blue-300  focus:border-blue-300    border-[1px] border-slate-300  p-3  bg-[#ededed] w-[100%]"
          />
        </div>
      </div>
      <div className="" id="download button">
        <button
          onClick={handleDownload}
          className="transition-all duration-500 hover:bg-blue-500 hover:text-white inline-block bg-[#ededed] border-2  p-3 font-semibold text-black rounded-md"
        >
          Download Image
        </button>
      </div>
    </div>
  );
};

export default Options;
