import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import "./mymodal.scss";

function ModalAA(props) {
  return (
    <>
      <div className="modal-container">
        <Modal {...props} centered>
          <div className="modal-wrapper">
            <h3 className="modal__title">Hisobga kirish uchun </h3>
            <Link className="modal__login-btn btn btn-primary" to={"/login"}>
              Kirish
            </Link>
            <p className="modal__text">Yoki</p>
            <Link className="modal__auth-btn btn" to={"/auth"}>
              Ro'yhatdan o'tish
            </Link>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default ModalAA;
