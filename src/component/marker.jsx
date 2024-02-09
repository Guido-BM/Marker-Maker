import React from "react";

const Marker = () => {
  return (
    <>
      <h1 className="text-center text-3xl font-bold mb-4">Marker</h1>
      <div className="marker-bar flex flex-wrap bg-gray-200 p-4 space-x-2 space-y-2 overflow-auto">
        <div className="flex space-x-2">
          <button className="px-2 py-1 bg-white border rounded shadow hover:bg-gray-100">
            <span className="text-yellow-500">A</span>
          </button>
          <button className="px-2 py-1 bg-white border rounded shadow hover:bg-gray-100">
            <span className="text-pink-500">A</span>
          </button>
          <button className="px-2 py-1 bg-white border rounded shadow hover:bg-gray-100">
            <span className="text-purple-500">A</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Marker;
