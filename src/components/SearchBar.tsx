import React from "react";
import Button from "./Button";

const SearchBar: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-green-50 py-8 px-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Find Expert Doctors For An In-Clinic Session Here
      </h1>
      <div className="flex w-full max-w-4xl space-x-4">
        <select
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Select Location"
        >
          <option value="">Select Location</option>
        </select>
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="eg. Doctor, specialisation, clinic name"
        />
        <Button variant="primary">Search</Button>
      </div>
    </div>
  );
};

export default SearchBar;
