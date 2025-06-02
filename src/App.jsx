import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import App1 from "./components/App1";
import App2 from "./components/App2";
import App3 from "./components/App3";
import App4 from "./components/App4";
import App5 from "./components/App5";
import App6 from "./components/App6";
import App7 from "./components/App7";
import App8 from "./components/App8";
import App9 from "./components/App9";
import App10 from "./components/App10";
import App11 from "./components/App11";
import App12 from "./components/App12";
import App13 from "./components/App13";
import App14 from "./components/App14";
import App15 from "./components/App15";
import App16 from "./components/App16";
import App17 from "./components/App17";
import App18 from "./components/App18";
import App19 from "./components/App19";
import App20 from "./components/App20";
import App21 from "./components/App21";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<App1 />}></Route>
        <Route path="/" element={<App1 />}></Route>
        <Route path="/app2" element={<App2 />}></Route>
        <Route path="/app3" element={<App3 />}></Route>
        <Route path="/app4" element={<App4 />}></Route>
         <Route path="/app5" element={<App5 />}></Route>
         <Route path="/app6" element={<App6 />}></Route>
         <Route path="/app7" element={<App7 />}></Route>
         <Route path="/app8" element={<App8 />}></Route>
         <Route path="/app9" element={<App9 />}></Route>
         <Route path="/app10" element={<App10 />}></Route>
         <Route path="/app11" element={<App11 />}></Route>
         <Route path="/app12" element={<App12 />}></Route>
          <Route path="/app13" element={<App13 />}></Route>
          <Route path="/app14" element={<App14 />}></Route>
          <Route path="/app15" element={<App15 />}></Route>
           <Route path="/app16" element={<App16 />}></Route>
            <Route path="/app17" element={<App17 />}></Route>
             <Route path="/app18" element={<App18 />}></Route>
             <Route path="/app19" element={<App19 />}></Route>
             <Route path="/app20" element={<App20 />}></Route>
             <Route path="/app21" element={<App21 />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;