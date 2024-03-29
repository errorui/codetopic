"use client";
import React, { useRef, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import html2canvas from "html2canvas";
import { Usestore } from "../Context/Usestore";
import * as prismStyles from "react-syntax-highlighter/dist/esm/styles/prism";
import * as hljs from "react-syntax-highlighter/dist/esm/styles/hljs";
const Component = () => {
  const codeRef = useRef(null);
  const {
    code,
    language,
    style,
    showline,
    author,
    fontsize,
    filename,
    gradient,
  } = Usestore();

  return (
    <div
      style={{
        background: `linear-gradient(${gradient.direction}deg,   ${gradient.primary}, ${gradient.secondary})`,
      }}
      className="min-w-full flex flex-col justify-center items-center      p-6 "
      id="print"
    >
      <div className=" w-full flex flex-col gap-0       ">
        <div
          style={{
            borderRadius: "1rem 1rem 0 0",
          }}
          className="bg-[#2B2B2B] w-full p-3 flex flex-col -mb-3 "
        >
          <div className="file-name text-center text-white">
            <h2>{filename}</h2>
          </div>
          <div className="flex  gap-2">
            <div className="bg-red-500 aspect-square w-4   rounded-full"></div>
            <div className="bg-yellow-500 aspect-square w-4  rounded-full "></div>
            <div className="bg-green-500 aspect-square w-4  rounded-full "></div>
          </div>
        </div>
        <SyntaxHighlighter
          language={language}
          wrapLines={true}
          customStyle={{
            whiteSpace: "pre-wrap", // or "pre-line"
            wordWrap: "break-word",
          }}
          showLineNumbers={showline}
          style={style}
        >
          {code}
        </SyntaxHighlighter>
      </div>
      <h1
        style={{
          fontSize: `${fontsize}px`,
        }}
        className={`text-white  my-3`}
      >
        by-{author}
      </h1>
    </div>
  );
};

export default Component;
