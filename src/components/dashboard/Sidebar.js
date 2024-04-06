import { useState } from "react";
import { Link } from "react-router-dom";

import { MdDashboard } from "react-icons/md";
import { BsBuildingsFill } from "react-icons/bs";
import { SiDeepin } from "react-icons/si";
import { MdPeopleAlt } from "react-icons/md";
import { IoGlobeOutline } from "react-icons/io5";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

import image from "../../assets/dummy.jpeg";
import InvestorsIcon from "../../icons/InvestorsIcon";
import DealsIcon from "../../icons/DealsIcon";
import CompanyIcon from "../../icons/CompanyIcon";
import LogsIcon from "../../icons/LogsIcon";
import UpArrow from "../../icons/UpArrow";
import RightArrow from "../../icons/RightArrow";

const Sidebar = ({ showSideBar }) => {
  const [showDeals, setShowDeals] = useState(true);

  const handleShowDeals = () => {
    setShowDeals(!showDeals);
  };
  return (
    <div className="sidbar-list">
      <div>
        <ul>
          <li>
            <MdDashboard />
            <Link>Dashboard</Link>
          </li>
          <li>
            <CompanyIcon />
            <Link>Companies</Link>
          </li>

          <li className="flex-vc-sb">
            <div>
              <DealsIcon />
              <Link>Deals</Link>
            </div>
            <div onClick={handleShowDeals}>
              {showDeals ? <UpArrow /> : <IoArrowDownCircleOutline />}
            </div>

            {showDeals && (
              <div className="deals">
                <p>Primary Deals</p>
                <p>Secondary Deals</p>
              </div>
            )}
          </li>

          <li>
            <InvestorsIcon />
            <Link>Investors</Link>
          </li>
          <li>
            <LogsIcon />
            <Link>Logs</Link>
          </li>
        </ul>
      </div>
      <div className="flex-vc-sb sidebar-footer">
        <div className="flex-vc-sb">
          <img src={image} width={40} height={40} />
          <p className="footer-text">Vinaya Patil</p>
        </div>
        <span>
          <RightArrow />
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
