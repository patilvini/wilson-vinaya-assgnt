import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { MdArrowBack } from "react-icons/md";
import { MdWifiTetheringErrorRounded } from "react-icons/md";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { MdAutoGraph } from "react-icons/md";
import { GrFan } from "react-icons/gr";

import data from "../../../data";
import Card from "../../card/Card";
import FundDetails from "./FundDetails";
import Modal from "../../Modal/Modal";
import SendEmail from "../../sendEmail/SendEmail";

import "./investorDetails.css";
import LogDetails from "./LogDetails";

const InvestorDetails = () => {
  let [showModal, setShowModal] = useState(false);
  let params = useParams();
  let location = useLocation();
  let state = location.state;
  let navigate = useNavigate();

  let investor = data?.find((val) => val.id === state.id);
  return (
    <div className="container">
      <div className="details-first-card">
        <div className=" details-share-row">
          <div className="flex-vc" onClick={() => navigate("/investors")}>
            <span className="details-arrow-icon">
              <MdArrowBack />
            </span>
            <h4>{investor.name}</h4>
          </div>
          <div className="flex">
            <button className="btn-outlined share-btn ">create log</button>
            <button
              className="btn-filled share-btn "
              onClick={() => setShowModal(true)}
            >
              share report
            </button>
          </div>
        </div>
        <div className="share-tabs">
          <div>
            <button
              className={
                params.subpage === "portfolio"
                  ? "details-btn-active"
                  : "details-btn"
              }
            >
              portfolio
            </button>
          </div>
          <div>
            <button className="details-btn">log</button>
          </div>
          <div>
            <button className="details-btn">investor Details</button>
          </div>
        </div>
      </div>
      <div className="details-card">
        <h4>Investment Details</h4>

        <div className="fn-details">
          <h3>Fund Details</h3>
          <div className="fund-details-grid">
            <div>
              <Card>
                <div className="fn-card-div">
                  <MdWifiTetheringErrorRounded size={30} color="#3081d2" />
                  <p className="fd-p">Funds Under Management</p>
                  <h2>{`$ ${investor?.fundDetails?.underManagement}`}</h2>
                </div>
              </Card>
            </div>
            <div>
              <Card>
                <div className="fn-card-div">
                  <FaHandHoldingDollar size={30} color="#3081d2" />
                  <p className="fd-p">Invested Value</p>
                  <h2>{`$ ${investor?.fundDetails?.inventedValue}`}</h2>
                </div>
              </Card>
            </div>
            <div>
              <Card>
                <div className="fn-card-div">
                  <MdAutoGraph size={30} color="#3081d2" />
                  <p className="fd-p">Current Porfolio Value </p>
                  <h2>{`$ ${investor?.fundDetails?.curPorfolioValue}`}</h2>
                </div>
              </Card>
            </div>
            <div>
              <Card>
                <div className="fn-card-div">
                  <MdAutoGraph size={30} color="#3081d2" />
                  <p className="fd-p">Growth Ratio </p>
                  <h2>{`$ ${investor?.fundDetails?.growthRatio}`}</h2>
                </div>
              </Card>
            </div>
            <div>
              <Card>
                <div className="fn-card-div">
                  <GrFan size={30} color="#3081d2" />
                  <p className="fd-p">Invested NO of Companies</p>
                  <h2>{`$ ${investor?.fundDetails?.investedNumOFComp}`}</h2>
                </div>
              </Card>
            </div>
            <div>
              <Card>
                <div className="fn-card-div">
                  <GrFan size={30} color="#3081d2" />
                  <p className="fd-p">Primary Deals</p>
                  <h2>{`$ ${investor?.fundDetails?.primaryDeals}`}</h2>
                </div>
              </Card>
            </div>
            <div>
              <Card>
                <div className="fn-card-div">
                  <GrFan size={30} color="#3081d2" />
                  <p className="fd-p">Secondary Deals </p>
                  <h2>{`$ ${investor?.fundDetails?.secondaryDeals}`}</h2>
                </div>
              </Card>
            </div>
            <div>
              <Card>
                <div className="fn-card-div">
                  <MdAutoGraph size={30} color="#3081d2" />
                  <p className="fd-p">Growth Ratio </p>
                  <h2>{`$ ${investor?.fundDetails?.growthRatio}`}</h2>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <div className="fn-details">
          <h3>Log Details</h3>
          <div className="log-details-grid">
            <div>
              <Card>
                <LogDetails />
              </Card>
            </div>
            <div>
              <Card>
                {" "}
                <LogDetails />
              </Card>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal onDismiss={() => setShowModal(false)} header="Send Email">
          <SendEmail setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
  );
};

export default InvestorDetails;
