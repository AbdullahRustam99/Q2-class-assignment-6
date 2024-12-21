import React from "react";

const Main = () => {
  return (
    <>
      <div className="text-center p-3  grid justify-center gap-3 grid-cols-3 grid-rows-[100px_200px_200px_100px] md:grid-rows-[100px_200px_200px_100px] max-lg:grid-rows-[150px_200px_200px_150px] xl:grid-rows-[100px_300px_300px_100px]">
        <div className="col-span-3 rounded-lg text-1xl font-extrabold text-stone-300 pt-10 bg-red-700     sm:col-span-3 sm:text-2xl  md:col-span-3  ">
          HEADER
        </div>
        <div className="row-span-3 rounded-lg text-1xl font-extrabold text-stone-300 pt-10 bg-orange-700 max-sm:hidden sm:row-span-2 sm:text-2xl  md:row-span-3   ">
          SIDE-BAR
        </div>
        <div className="col-span-2 rounded-lg text-1xl font-extrabold text-stone-300 pt-10 bg-yellow-600  max-sm:col-span-3 sm:text-2xl  md:col-span-2   ">
          WELCOME
        </div>
        <div className="col-span-2 rounded-lg text-1xl font-extrabold text-stone-300 pt-10 bg-green-700    max-sm:col-span-3 sm:text-2xl  md:row-span-2 md:col-span-1   ">
          MORE
        </div>
        <div className="col-span-2 rounded-lg text-1xl font-extrabold text-stone-300 pt-10 bg-blue-700    max-sm:col-span-3 sm:text-2xl  md:row-span-2  md:col-span-1  ">
          MORE
        </div>
        <div className="col-span-3 rounded-lg text-1xl font-extrabold text-stone-300 pt-10 bg-violet-700  sm:col-span-3 sm:text-2xl  md:col-span-3     ">
          FOOTER
        </div>
      </div>
    </>
  );
};

export default Main;
