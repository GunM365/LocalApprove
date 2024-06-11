import React from 'react';
import './ModalEdit.css';
import { IoIosClose } from "react-icons/io";
import { Field, Textarea} from "@fluentui/react-components";

const Modal = ({ onClose, onConfirm}) => {
  return (
    // <FluentProvider theme={webLightTheme}>
    <div className="modal-overlay">
      <div className="modal-container">
        
      <button className="close" onClick={onClose}><IoIosClose  size={'3rem'} ></IoIosClose></button>
      <div className="modal-message">ยืนยันการ<span className="modal-messageBold">แก้ไข</span>เอกสาร</div>
      <div className="line" />

        <div className="modal-content">
        <div className="textBox">
          <Field>
            <Textarea
              appearance="outline"
              placeholder="ระบุเหตุผล"
              
              textarea={{
                style:{
                  height: "100px",
                  fontFamily: "IBM Plex Sans Thai"
                }  
              }}

            />
        </Field>
        </div>
        <div className="line" />
          <div className="modal-actions">
            <button className="modal-button cancel-button" onClick={onClose}>ยกเลิก</button>
            <button className="modal-button confirm-button" onClick={onConfirm}>ยืนยัน</button>
          </div>
        </div>
      </div>
    </div>
    // </FluentProvider>
  );
};

export default Modal;
