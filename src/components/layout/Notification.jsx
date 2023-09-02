import { useState } from "react";
import { Toast } from "react-bootstrap";

const Notification = (props) => {
  const [show, setShow] = useState(true);
  return (
    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong>Bootstrap</strong>
        <small>10 min ago</small>
      </Toast.Header>
      <Toast.Body>{props.text}</Toast.Body>
    </Toast>
  );
};

export default Notification;
