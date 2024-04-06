import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Investor from "./Investor";
import Filter from "../filter/Filter";

import { MdArrowBack } from "react-icons/md";
import { HiFilter } from "react-icons/hi";

import "./investor.css";
import data from "../../data";
import { useSelector } from "react-redux";
import Arrow from "../../icons/Arrow";
import FilterIcon from "../../icons/FilterIcon";

const InvestorsList = () => {
  const [showFilter, setShowFilter] = useState(false);
  const data = useSelector((state) => state.fileReducer.data);

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="flex-vc-sb add-investor">
        <div className="flex-vc" onClick={() => navigate("addInvestor")}>
          <span className="add-arrow-icon">
            <Arrow />
          </span>
          <p className="all-investor-text">All Investors</p>
        </div>
        <button
          className="btn-add btn-filled"
          onClick={() => navigate("addInvestor")}
        >
          add investor
        </button>
      </div>
      <div className="flex-vc search ">
        <input className="search-box" placeholder="Search" />

        <div>
          <div
            className="btn-filter"
            onClick={() => setShowFilter(!showFilter)}
          >
            <span>
              <FilterIcon />
            </span>
            <span className="filter-span"> Filter</span>
          </div>
        </div>
      </div>

      <div className="card-grid">
        {data?.map((investor) => (
          <div className="investor-list">
            <Investor data={investor} />
          </div>
        ))}
      </div>
      {showFilter && <Filter setShowFilter={setShowFilter} />}
    </div>
  );
};

export default InvestorsList;
