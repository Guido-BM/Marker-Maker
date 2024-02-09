import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Texter from "../component/texter";
import Marker from "../component/marker";

const Home = () => {
  return (
    <>
      <div className="flex h-screen bg-gray-100 mt-2">
        <div className="w-1/2 bg-white p-0 overflow-auto">
          <Texter />
        </div>
        <div className="w-1/2 bg-gray-200 p-0 overflow-auto">
          <Marker />
        </div>
      </div>
    </>
  );
};

export default Home;
