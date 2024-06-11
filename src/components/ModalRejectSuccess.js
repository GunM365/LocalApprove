import React from 'react';
import './ModalReject.css';
import { IoIosClose } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Modal = ({ onClose, onConfirm}) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
      <button className="close" onClick={onClose}><IoIosClose  size={'3rem'} ></IoIosClose></button>
        <div className="modal-content">
        <FaCheckCircle className="modal-icon"/>
          <div className="modal-message-success">
          บันทึกการ<span className="modal-messageBold-success">ไม่อนุมัติ</span>
          เอกสารเรียบร้อย
          </div>
          <div className="modal-actions-success">
          <Link Link to = {"/"}> <button className="modal-button-success approve-other" onClick={onClose}>อนุมัติเอกสารอื่นต่อ</button></Link>
            <button className="modal-button-success other-doc" onClick={onConfirm}>ตรวจสอบเอกสารทั้งหมด</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
