import "./sendemail.css";

const SendEmail = ({ setShowModal }) => {
  return (
    <form>
      <div className="send-email">
        <label>Subject</label>
        <input className="input" placeholder="vinaya" />
      </div>
      <div className="send-email">
        <label>Email-id</label>
        <input className="input" placeholder="vinaya123@gmail.com" />
      </div>
      <div className="send-email">
        <label>Notes/info</label>
        <input className="input" placeholder="Add details" />
      </div>
      <div className="send-email">
        <label>Attachment</label>
        <input className="input" />
      </div>
      <button
        className="btn-filled email-btn"
        onClick={() => setShowModal(false)}
      >
        send mail
      </button>
    </form>
  );
};

export default SendEmail;
