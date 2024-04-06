import "./card.css";

const Card = (props) => {
  return <div className="card-common">{props.children}</div>;
};

export default Card;
