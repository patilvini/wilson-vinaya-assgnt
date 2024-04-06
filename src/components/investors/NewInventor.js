import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";

import Modal from "../Modal/Modal";
import AddPopup from "./AddPopup";
import { BiErrorCircle } from "react-icons/bi";
import { FaImage } from "react-icons/fa";

import "./newInvestor.css";
import data from "../../data";
import { useDispatch } from "react-redux";
import { fileUploadAction } from "../../redux/newInvestor/investorActions";
import ImageIcon from "../../icons/ImageIcon";
import ArrowDownIcon from "../../icons/ArrowDownIcon";
import Arrow from "../../icons/Arrow";

const NewInventor = () => {
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  let [file, setFile] = useState([]);

  let { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
      localStorage.setItem("img", acceptedFiles[0].path);
    },
  });
  const dispatch = useDispatch();
  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    type: "",
    bank: "",
    accountNo: "",
    subEmail: "",
    subBank: "",
    subAccountNo: "",
  });

  const handleSbmit = (e) => {
    e.preventDefault();

    let data1 = {
      ...formData,
      img: JSON.stringify(localStorage.getItem("img")),
    };

    dispatch(fileUploadAction(data1));
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.country === "" ||
      formData.phone === "" ||
      formData.type === "" ||
      formData.bank === "" ||
      formData.accountNo === ""
    ) {
      setShowError(true);
    } else {
      setShowModal(true);
      setformData({
        name: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        type: "",
        bank: "",
        accountNo: "",
        subEmail: "",
        subBank: "",
        subAccountNo: "",
      });
    }
  };

  return (
    <div className="container">
      <div className="flex-vc-sb add-investor">
        <div className="flex-vc" onClick={() => navigate("/investors")}>
          <span className="add-arrow-icon">
            <Arrow />
          </span>
          <p className="all-investor-text">Add Investor</p>
        </div>
      </div>
      <h3 className="overview flex-vc">Overview</h3>
      <form className="new-investor" onSubmit={handleSbmit}>
        <div>
          <label>Investor Profile Photo</label>
          <div className="dropzone-div">
            <div {...getRootProps()} className="profile-photo">
              <input {...getInputProps()} />
              <p className="img-text">Choose</p>
              <div className="img-icon flex-vc">
                <ImageIcon />
                <ul style={{ marginLeft: "10px", fontSize: "20px" }}>
                  <li>{file.path}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <label>Investor Name</label>

          <input
            className="input"
            placeholder="Enter investor name"
            value={formData.name}
            onChange={(e) => {
              setformData({
                ...formData,
                name: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label>Investor Email Address</label>

          <input
            className="input"
            placeholder="Enter email address"
            value={formData.email}
            onChange={(e) => {
              setformData({
                ...formData,
                email: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label>Contact Number</label>

          <input
            className="input"
            placeholder="Enter contact number"
            value={formData.phone}
            onChange={(e) => {
              setformData({
                ...formData,
                phone: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label>Country</label>

          <input
            className="input"
            placeholder="Choose country"
            value={formData.country}
            onChange={(e) => {
              setformData({
                ...formData,
                country: e.target.value,
              });
            }}
          />
        </div>
        <div className="city-tab">
          <label>City</label>

          <input
            className="input"
            placeholder="Choose city"
            value={formData.city}
            onChange={(e) => {
              setformData({
                ...formData,
                city: e.target.value,
              });
            }}
          />
          <span className="city-icon">
            <ArrowDownIcon />
          </span>
        </div>
        <div className="city-tab">
          <label>Investor Type</label>

          <input
            className="input"
            placeholder="Choose investor type"
            value={formData.type}
            onChange={(e) => {
              setformData({
                ...formData,
                type: e.target.value,
              });
            }}
          />
          <span className="city-icon">
            <ArrowDownIcon />
          </span>
        </div>
        <div>
          <label>Investor Bank</label>

          <input
            className="input"
            placeholder="Investor bank name"
            value={formData.bank}
            onChange={(e) => {
              setformData({
                ...formData,
                bank: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label>Investor Account No</label>

          <input
            className="input"
            placeholder="Investor account no"
            value={formData.accountNo}
            onChange={(e) => {
              setformData({
                ...formData,
                accountNo: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label>Subsidiary Email-id</label>

          <input
            className="input"
            placeholder="Enter your address"
            value={formData.subEmail}
            onChange={(e) => {
              setformData({
                ...formData,
                subEmail: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label>Subsidiary Bank Name</label>

          <input
            className="input"
            placeholder="Enter bank name"
            value={formData.subBank}
            onChange={(e) => {
              setformData({
                ...formData,
                subBank: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label>Subsidiary Account No</label>

          <input
            className="input"
            placeholder="Enter account no"
            value={formData.subAccountNo}
            onChange={(e) => {
              setformData({
                ...formData,
                subAccountNo: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <button type="submit" className="btn-filled btn-submitt">
            Submit
          </button>
        </div>
      </form>
      {(showModal || showError) && (
        <Modal
          onDismiss={() => {
            if (showError) {
              setShowError(false);
            }
            if (showModal) {
              setShowModal(false);
            }
          }}
          header={showError ? "Error" : "Added Investor"}
        >
          {showError ? (
            <div className="error-msg ">
              <span>
                <BiErrorCircle size={25} color="red" />
              </span>
              <h3>Please fill all the details !</h3>
            </div>
          ) : (
            <AddPopup setShowModal={setShowModal} showModal={showModal} />
          )}
        </Modal>
      )}
    </div>
  );
};

export default NewInventor;
