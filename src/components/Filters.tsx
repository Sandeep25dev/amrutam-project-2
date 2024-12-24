import React from "react";
import { FilterOption } from "../types/filterOptions";

const Filters: React.FC<{ filters: FilterOption[] }> = ({ filters }) => {
  return (
    <div className="flex justify-center bg-white py-4 shadow-md">
      <div className="flex w-full gap-16 max-w-4xl">
        {filters.map((filter, index) => (
          <div key={index} className="relative">
            <select className="border bg-[#F3F3F3]   border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-200">
              <option value="">{filter.label}</option>
              {filter.options.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
        <select className="border bg-[#DCEEDC]   border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-200">
          <option>All filters</option>
          <option>Filter 1</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
