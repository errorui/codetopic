"use client";
import React, { createContext, useContext, useState } from "react";
import html2canvas from "html2canvas";
import * as hljs from "react-syntax-highlighter/dist/esm/styles/hljs";
import { error } from "console";
import { direction } from "html2canvas/dist/types/css/property-descriptors/direction";
type usestoretype = {
  code: string;
  setcode: React.Dispatch<React.SetStateAction<string>>;
  language: string;
  setlanguage: React.Dispatch<React.SetStateAction<string>>;
  filename: string;
  setfilename: React.Dispatch<React.SetStateAction<string>>;
  author: string;
  setauthor: React.Dispatch<React.SetStateAction<string>>;
  style: { [key: string]: React.CSSProperties };
  setstyle: React.Dispatch<
    React.SetStateAction<{ [key: string]: React.CSSProperties }>
  >;
  showline: boolean;
  setshowline: React.Dispatch<React.SetStateAction<boolean>>;
  fontsize: number;
  setfontsize: React.Dispatch<React.SetStateAction<number>>;
  gradient: {
    primary: string;
    secondary: string;
    direction: number;
  };
  onchangegradient: (e: any) => void;
  handleDownload: () => void;
};

const store = createContext<usestoretype | null>(null);

const UsestoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [code, setcode] = useState<string>(
    `
    function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid; // Found the target, return its index
        } else if (arr[mid] < target) {
            left = mid + 1; // Target is in the right half
        } else {
            right = mid - 1; // Target is in the left half
        }
    }
    
    return -1; // Target not found
}

// Example usage:
const array = [1, 3, 5, 7, 9, 11, 13];
const target = 7;
const index = binarySearch(array, target);
console.log("Index of", target, ":", index); // Output: Index of 7 : 3

  `
  );
  const [language, setlanguage] = useState<string>("javascript");
  const [author, setauthor] = useState<string>("Raj Raman");
  const [style, setstyle] = useState<{ [key: string]: React.CSSProperties }>(
    hljs.dracula
  );
  const [showline, setshowline] = useState<boolean>(true);
  const [fontsize, setfontsize] = useState<number>(8);
  const [filename, setfilename] = useState<string>("file.js");
  const [gradient, setgradient] = useState<{
    primary: string;
    secondary: string;
    direction: number;
  }>({
    primary: "green",
    secondary: "yellow",
    direction: 500,
  });
  const onchangegradient = (e: React.ChangeEvent<HTMLInputElement>) => {
    setgradient({ ...gradient, [e.target.name]: e.target.value });
  };
  const handleDownload = async () => {
    const element = document.getElementById("print");
    if (!element) return; // Check if element exists

    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/jpg");

    const link = document.createElement("a");
    link.href = data;
    link.download = "downloaded-image.jpg";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <store.Provider
      value={{
        fontsize,
        setfontsize,
        code,
        setcode,
        language,
        setlanguage,
        showline,
        setshowline,
        handleDownload,
        style,
        setstyle,
        author,
        setauthor,
        filename,
        setfilename,
        gradient,
        onchangegradient,
      }}
    >
      {children}
    </store.Provider>
  );
};
const Usestore = () => {
  const s = useContext(store);
  if (!s) {
    throw new Error("context must be used with usestore context");
  }
  return s;
};
export { UsestoreProvider, Usestore };
