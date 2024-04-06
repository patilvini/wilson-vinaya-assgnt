import { useLocation } from "react-router-dom";
import BreadCrumb from "../breadcrumb/BreadCrumb";
import { SlMenu } from "react-icons/sl";

import "./dashboard.css";

const Navbar = ({ showSideBar, setShowSideBar }) => {
  const location = useLocation();
  let arr = location.pathname.split("/");

  let textArr = arr.pop().split("");
  let str = "";
  let regax = /[A-Z]/;

  textArr.map((char) => {
    if (char.match(regax)) {
      str += ` ${char}`;
    } else {
      str += char;
    }
  });

  return (
    <div className="navbar">
      <div className="navbar-cls">
        <h1 className="nav-logo">WillSon Wings</h1>

        <div className="menu-Icon-div">
          <div className="bread-div">
            <h2 className="info">{str.replace("%20", " ")}</h2>
            <BreadCrumb />
          </div>
          <span
            className="menu-icon"
            onClick={() => setShowSideBar(!showSideBar)}
          >
            <SlMenu size={25} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
