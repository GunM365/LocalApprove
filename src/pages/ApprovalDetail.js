import "./ApprovalDetail.css";
import React, { useState, useEffect } from "react";
import { Select } from "@fluentui/react-components";
import Sidebar from "../components/Sidebar";
import ModalApprove from "../components/ModalApprove";
import ModalApproveSuccess from "../components/ModalApproveSuccess"
import ModalEdit from "../components/ModalEdit";
import ModalEditSuccess from "../components/ModalEditSuccess"
import ModalReject from "../components/ModalReject";
import ModalRejectSuccess from "../components/ModalRejectSuccess"
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { useParams, Link } from "react-router-dom";
import { saveAs } from 'file-saver';
// Icon
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoReloadCircleOutline } from "react-icons/io5";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { GoDownload } from "react-icons/go";

function ApprovalDetail() {
  const { id } = useParams();
  const [memoData, setMemoData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModalOne, setShowModalOne] = useState(false);
  const [showModalTwo, setShowModalTwo] = useState(false);
  const [showModalEditOne, setShowEditOne] = useState(false);
  const [showModalEditTwo, setShowEditTwo] = useState(false);
  const [showModalRejectOne, setShowRejectOne] = useState(false);
  const [showModalRejectTwo, setShowRejectTwo] = useState(false);
  const [pdfData, setPdfData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(`/api/v2/memos/${id}`, {
              headers: {
                  'x-api-key': process.env.REACT_APP_API_KEY
              }
          });
            const data = await response.json();
            setMemoData(data); // Update the state with fetched data
        } catch (error) {
            console.error("Error fetching data:", error);
        }finally{
          setIsLoading(false);
        }  
    };
      
    fetchData();  
}, [id]);
useEffect(() => {
  const fetchData = async () => {
      try {
          // ... (fetch memoData logic)

          // Fetch PDF data
          const pdfResponse = await fetch(`/api/v2/memos/${id}/download-pdf/`, {
              headers: {
                  'x-api-key': process.env.REACT_APP_API_KEY
              }
          });
          const pdfBlob = await pdfResponse.blob(); // Get the PDF as a Blob
          setPdfData(URL.createObjectURL(pdfBlob)); // Create a URL for the Blob
      } catch (error) {
          // ... (error handling)
      }
  };

  fetchData();
}, [id]);

const handleDownload = async () => {
  console.log("sorry")
  try {
    const response = await fetch(pdfData); 
    const blob = await response.blob();
    saveAs(blob, `memo_${id}.pdf`); // Save the PDF with a dynamic name
  } catch (error) {
    console.error("Error downloading PDF:", error);
    // Handle the error (e.g., show a notification to the user)
  }
};

  const handleModalApprove = () => {
    setShowModalOne(!showModalOne);
  };


  const handleModalApproveSuccess = () => {
    setShowModalTwo(!showModalTwo);
    if(showModalTwo)
    handleModalApprove(); // ปิด ModalOne เมื่อเปิด ModalTwo
  };


  //Modal Edit
  const handleModalEdit = () => {
    setShowEditOne(!showModalEditOne);
  };


  const handleModalEditSuccess = () => {
    setShowEditTwo(!showModalEditTwo);
    if(showModalEditTwo)
    handleModalEdit(); // ปิด ModalOne เมื่อเปิด ModalTwo
  };

  //Model Reject
  const handleModalReject = () => {
    setShowRejectOne(!showModalRejectOne);
  };


  const handleModalRejectSuccess = () => {
    setShowRejectTwo(!showModalRejectTwo);
    if(showModalRejectTwo)
    handleModalReject(); // ปิด ModalOne เมื่อเปิด ModalTwo
  };

  
  //
  return (
    <FluentProvider theme={webLightTheme}>
      <div className="container">
        {/* back Page arrow left */}
        <Link to = {"/"} style={{color: "#242424"}}>
        <button className="backPage">
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style={{ verticalAlign: "-0.40rem" }}
          >
            <path
              d="M12.727 3.687a1 1 0 1 0-1.454-1.374l-8.5 9a1 1 0 0 0 0 1.374l8.5 9.001a1 1 0 1 0 1.454-1.373L4.875 12l7.852-8.313Z"
              fill="#212121"
            />
          </svg>
          กลับสู่หน้าหลัก
        </button>
        </Link>
        {/* back Page arrow left */}
        <div className="row">
          <div className="columnApprove">
            <div className="status-buttons">

              {/* ปุ่มไม่อนุมัติ */}

              <button className="status-button not-approved" onClick={handleModalReject}>
                <IoIosCloseCircleOutline className="icon-move" />
                ไม่อนุมัติ
              </button>
              {showModalRejectOne && ( // แสดง ModalOne เมื่อ showModalOne เป็น true
                <ModalReject onClose={handleModalReject}
                  onConfirm={handleModalRejectSuccess}
                />
              )}
              {showModalRejectTwo && ( // แสดง ModalTwo เมื่อ showModalTwo เป็น true
                <ModalRejectSuccess onClose={handleModalRejectSuccess}/>
              )}

              {/* ปุ่มแก้ไข */}

              <button className="status-button pending" onClick={handleModalEdit}>
                <IoReloadCircleOutline className="icon-move" />
                แก้ไข
              </button>
              {showModalEditOne && ( // แสดง ModalOne เมื่อ showModalOne เป็น true
                <ModalEdit onClose={handleModalEdit}
                  onConfirm={handleModalEditSuccess}
                />
              )}
              {showModalEditTwo && ( // แสดง ModalTwo เมื่อ showModalTwo เป็น true
                <ModalEditSuccess onClose={handleModalEditSuccess}/>
              )}


              {/* ปุ่มอนุมัติ */}

              <button className="status-button approved" onClick={handleModalApprove}>
                {/* <button className="status-button approved" onClick={() => setModal(true)}> */}
                <IoCheckmarkCircleOutline className="icon-move" />
                อนุมัติ
              </button>
              {/* {isModal && <Modal onConfirm={handleConfirm} onCancel={handleCancel} />} */}
              {showModalOne && ( // แสดง ModalOne เมื่อ showModalOne เป็น true
                <ModalApprove onClose={handleModalApprove}
                  onConfirm={handleModalApproveSuccess}
                />
              )}
              {showModalTwo && ( // แสดง ModalTwo เมื่อ showModalTwo เป็น true
                <ModalApproveSuccess onClose={handleModalApproveSuccess}/>
              )}


            </div>
            <div className="order">
              <div className="orderAprrove">
                {isLoading ? (
                  <p>Loading...</p>
                ) : memoData && memoData.loa && memoData.loa.loaLevel ? (
                <>ลำดับอนุมัติ: X / {memoData.loa.loaLevel.length}</>
              ) : (
                <p>No approval details available.</p>
            )}
          </div>
        </div>

            <div className="select-page">
              <button className="back-page-doc">
                <IoIosArrowBack style={{ marginRight: "10" }} />
              </button>
              <div className="move-text-back">หน้า</div>
              <Select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </Select>
              <div className="move-text-forward">จาก 1</div>
              <button className="forward-page-doc">
                <IoIosArrowForward style={{ marginLeft: "10" }} />
              </button>
              <button className="download" onClick={handleDownload}>
                <GoDownload style={{ marginRight: "10" }}  />
                ดาวน์โหลด
              </button>
            </div>
            <div className="boxDoc">
            {pdfData ? (
              <iframe src={pdfData} title="Memo PDF" width="100%" height="600px" />
            ) : (
              <p>Loading PDF...</p> // Or an appropriate loading indicator
          )}
            </div>
          </div>
          
          <div className="columnDetail">
            {console.log(memoData)}
          {memoData && <Sidebar data={memoData} />}
          </div>
          



        </div>
      </div>
    </FluentProvider>
  );
}

export default ApprovalDetail;
