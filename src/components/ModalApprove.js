import React from 'react';
import './ModalApprove.css';
import { IoIosClose } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";

const Modal = ({ onClose, onConfirm}) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
      <button className="close" onClick={onClose}><IoIosClose  size={'3rem'} ></IoIosClose></button>
        <div className="modal-content">
        <FaCheckCircle className="modal-icon"/>
          <div className="modal-message">
            ยืนยันการ<span className="modal-messageBold">อนุมัติ</span>เอกสาร
          </div>
          <div className="modal-actions">
            <button className="modal-button cancel-button" onClick={onClose}>ยกเลิก</button>
            <button className="modal-button confirm-button" onClick={onConfirm}>ยืนยัน</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
