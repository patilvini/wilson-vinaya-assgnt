import { Link, useNavigate } from "react-router-dom";
import { ImUserCheck } from "react-icons/im";

import "./addpopup.css";

const AddPopup = ({ showModal, setShowModal }) => {
  const navigate = useNavigate();
  return (
    <div className="add-popup">
      <span>
        <ImUserCheck size={40} color="#00f5d3" />
      </span>
      <h2>Thank You!</h2>
      <p>Investor added Successfully!</p>
      <button className="btn-filled">
        <Link to="..">go to Investors</Link>
      </button>
    </div>
  );
};

export default AddPopup;
