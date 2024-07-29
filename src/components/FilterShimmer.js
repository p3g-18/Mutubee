import React from "react";

const FilterShimmer = () => {
  return (
    <div className="flex flex-col gap-4 ">
      {Array.from({ length: 50 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 p-4 rounded-lg shadow-lg animate-pulse"
        >
          <div className="flex flex-row items-start gap-4 w-full">
            <div className="w-80 h-60 border bg-slate-200 rounded-lg" />
            <div className="flex flex-col flex-grow gap-4">
              <div className="h-10 w-full bg-slate-200 " />
              <div className="h-10 w-40 bg-slate-200 " />
              <div className="h-12 w-full bg-slate-200 " />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterShimmer;
