import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/dashboard/Navbar";
import Sidebar from "../components/dashboard/Sidebar";

import Logo from "../icons/Logo";
import LogoText from "../icons/LogoText";
import LogoText2 from "../icons/LogoText2";

import "./layoutpage.css";

const LayoutPage = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  console.log(showSideBar);

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="logo flex-vc-sb">
          <div>
            <span>
              <Logo />
            </span>
            <span>
              <LogoText />
            </span>
          </div>
          <span>
            <LogoText2 />
          </span>
        </div>
        <Sidebar showSideBar={showSideBar} />
      </div>
      <div>
        <div>
          <Navbar setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutPage;
