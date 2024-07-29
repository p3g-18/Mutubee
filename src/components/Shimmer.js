import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-between">
      {Array.from({ length: 50 }).map((_, index) => (
        <div key={index} className="m-2 animate-pulse">
          <div className="h-56 bg-slate-200 w-72 rounded-lg py-2 mb-2"></div>
          <div className="w-60 h-10 bg-slate-200 rounded-sm mb-2"></div>
          <div className="w-28 h-5 bg-slate-200 rounded-sm mb-2"></div>
          <div className="flex">
            <span className="px-10 h-5 bg-slate-200 rounded-sm mr-2"></span>
            <span className="px-14 h-5 bg-slate-200 rounded-sm"></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
