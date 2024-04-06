import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { IoArrowUpCircleOutline } from "react-icons/io5";

import "./filter.css";
import { useEffect, useState } from "react";
import CloseIcon from "../../icons/CloseIcon";
import FilterDownArr from "../../icons/FilterDownArr";

const Filter = ({ setShowFilter }) => {
  const [showAmount, setShowAmount] = useState(true);
  const [showTextFilter, setShowTextFilter] = useState(false);

  return (
    <div className="filter-card">
      <div className="flex-vc-sb filter-header">
        <h3>Filters</h3>
        <span onClick={() => setShowFilter(false)}>
          <CloseIcon />
        </span>
      </div>
      <div className="filter-body">
        <div className="amount-filter">
          <div className="flex-vc-sb ">
            <h4>Amount Invested</h4>
            <span onClick={() => setShowAmount(!showAmount)}>
              {showAmount ? (
                <FilterDownArr />
              ) : (
                <IoArrowUpCircleOutline size={20} color="#00f5d3" />
              )}
            </span>
          </div>
          {showAmount && (
            <ul>
              <li>
                <input className="filter-input" type="checkbox" id="10M" />
                <label htmlFor="10M">$10M - $20M</label>
              </li>
              <li>
                <input className="filter-input" type="checkbox" id="21M" />
                <label htmlFor="21M">$21M - $30M</label>
              </li>
              <li>
                <input className="filter-input" type="checkbox" id="31M" />
                <label htmlFor="31M">$31M - $40M</label>
              </li>
              <li>
                <input className="filter-input" type="checkbox" id="41M" />
                <label htmlFor="41M">$41M - $50M</label>
              </li>
              <li>
                <input className="filter-input" type="checkbox" id="51M" />
                <label htmlFor="51M">$51M - $60M</label>
              </li>
              <li>
                <input className="filter-input" type="checkbox" id="100M" />
                <label htmlFor="100M">{`> $100M`}</label>
              </li>
            </ul>
          )}
        </div>
        <div className="amount-filter">
          <div className="flex-vc-sb ">
            <h4>Investors Types</h4>
            <span onClick={() => setShowTextFilter(!showTextFilter)}>
              {!showTextFilter ? (
                <FilterDownArr />
              ) : (
                <IoArrowUpCircleOutline size={20} color="#00f5d3" />
              )}
            </span>
          </div>
          {showTextFilter && (
            <ul>
              <li>
                <input className="filter-input" type="checkbox" id="angel" />
                <label htmlFor="angel">Angel Investors</label>
              </li>
              <li>
                <input className="filter-input" type="checkbox" id="venture" />
                <label htmlFor="venture">Venture Capitalist</label>
              </li>
              <li>
                <input className="filter-input" type="checkbox" id="crowd" />
                <label htmlFor="crowd">Crowdfunding Investors</label>
              </li>
              <li>
                <input
                  className="filter-input"
                  type="checkbox"
                  id="corporate"
                />
                <label htmlFor="corporate">Corporate Investors</label>
              </li>
              <li>
                <input className="filter-input" type="checkbox" id="retail" />
                <label htmlFor="retail">Retail Investors</label>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="filter-footer flex-vc-sb">
        <button className="btn-reset">RESET</button>
        <button className="btn-filled">Apply Filter</button>
      </div>
    </div>
  );
};

export default Filter;
