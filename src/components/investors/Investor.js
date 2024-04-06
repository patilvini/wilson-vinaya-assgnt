import { useNavigate } from "react-router-dom";
import "./investor.css";
import { useSelector } from "react-redux";

const Investor = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="card-header">
        <div className="flex-vc">
          <img src={data.img} width={60} height={60} />
          <div className="card-name ">
            <p>{data.name}</p>
            <p className="font-work-sans">{data.email}</p>
          </div>
        </div>

        <p className={data.active ? "status" : "status-inactive"}>
          {data.active ? "Active" : "Inactive"}
        </p>
      </div>
      <div className="flex-vc-se bg">
        <div className="card-p">
          <p className="p-value">$12M</p>
          <p className="p-text ">INVESTMENTS</p>
        </div>
        <div className="card-p">
          <p className="p-value">03</p>
          <p className="p-text ">DEALS</p>
        </div>
        <div className="card-p">
          <p className="p-value">Long Term</p>
          <p className="p-text ">TYPE</p>
        </div>
      </div>
      <div className="card-header btn-container">
        <button className=" btn-o btn-outlined">create log</button>
        <button
          className=" btn-f btn-filled"
          onClick={() =>
            navigate(`/investors/${data.name}`, {
              state: data,
            })
          }
        >
          view details
        </button>
      </div>
    </div>
  );
};

export default Investor;
