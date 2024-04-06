import PropTypes from "prop-types";
import { IoCloseCircle } from "react-icons/io5";

import "./modal.css";

function Modal(props) {
  return (
    <div className="modal">
      <div className="modalx-body">
        <div className="modalx-header">
          <p>{props.header}</p>
          <i onClick={props.onDismiss} style={{ cursor: "pointer" }}>
            <IoCloseCircle size={20} />
          </i>
        </div>
        <div className="modalx-content">{props.children}</div>
      </div>
    </div>
  );
}

export default Modal;

Modal.propTypes = {
  header: PropTypes.string,
  onDismiss: PropTypes.func,
};
