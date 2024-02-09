import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Home = React.lazy(() => import("./views/home"));
const About = React.lazy(() => import("./views/about"));

const Layout = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Layout;
