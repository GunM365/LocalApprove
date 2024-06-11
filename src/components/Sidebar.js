import './Sidebar.css';
import React from 'react';
import { Pivot, PivotItem } from '@fluentui/react';


const Sidebar = ({data}) => {
    
    const comments = [
        { label: 'ความคิดเห็นโดย', value: 'Lorem Ipsum' },
        { label: 'เหตุผลที่ต้องแก้ไข', value: 'อัปโหลดเอกสารผิด' },
    ];
    const ccElements = data.cc ? (
        <>
          {data.cc.map((email, index) => (
            <div key={index}><a>{email}</a></div>
          ))}
        </>
      ) : "ไม่มีสำเนาถึง";
    
    const details = data ? [
        { label: 'เรื่อง', value: data.subject || "Loading..." },
        { label: 'เลขที่เอกสาร', value: data.id || "Loading..." }, // Corrected property name
        { label: 'สร้างโดย', value: data.createrEmail || "Loading..." },
        { label: 'สำเนาถึง', value: ccElements || "ไม่มีสำเนาถึง" },
      ]
    : [];
    
    return (
        <div className="containerSide">
        <div className="sidebar">
          <Pivot>
            <PivotItem headerText="รายละเอียด">
                 
            <div className="sidebar-content">
                {details.map((detail, index) => (
                    <div key={index} className="sidebar-detail">
                        <div className="sidebar-label">{detail.label}</div>
                        <div className="sidebar-value">{detail.value}</div>
                    </div>
                ))}
            </div>
            </PivotItem>  
            <PivotItem headerText="ความคิดเห็น">
            <div className="sidebar-content">
                {comments.map((detail, index) => (
                    <div key={index} className="sidebar-detail">
                        <div className="sidebar-label">{detail.label}</div>
                        <div className="sidebar-value">{detail.value}</div>
                    </div>
                ))}
            </div>
            </PivotItem>
            <PivotItem headerText="ไฟล์แนบ">
                <h2 style={{textAlign:"center"}}>ไฟล์แนบ</h2>
            </PivotItem>
            <PivotItem headerText="อ้างอิง">
                <h2 style={{textAlign:"center"}}>ไฟล์อ้างอิง</h2>
            </PivotItem>
            </Pivot>
        </div>
        </div>
    );
};

export default Sidebar;
