import Image from "next/image";
import Component from "./component/Component";
import Options from "./component/Options";

export default function Home() {
  return (
    <>
      <div className="text-center text-3xl font-medium p-3 uppercase ">
        <h1> code to picture</h1>
      </div>
      <div className="min-h-screen w-full  lg:flex justify-center items-center      bg-white text-black">
        <div className=" w-full  p-3 min-h-[100vh]">
          <Options></Options>
        </div>
        <div className="w-full">
          <Component></Component>
        </div>
      </div>
    </>
  );
}
