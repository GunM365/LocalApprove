import './Sidebar.css';
import React from 'react';
import { Pivot, PivotItem } from '@fluentui/react';


const Sidebar = ({memoData}) => {
    console.log(memoData)
    const comments = [
        { label: 'ความคิดเห็นโดย', value: 'Lorem Ipsum' },
        { label: 'เหตุผลที่ต้องแก้ไข', value: 'อัปโหลดเอกสารผิด' },
    ];
      const details = [
        { label: 'เรื่อง', value:'memoData.subject' },
        { label: 'เลขที่เอกสาร', value: 'DEFAULT-PR-202404-0001' },
        { label: 'สร้างโดย', value: 'Lorem Ipsum' },
        { label: 'วันที่หมดอายุ', value: 'ไม่มีวันหมดอายุ' },
        { label: 'สำเนาถึง', value: 'ไม่มีสำเนาถึง' },
        { label: 'ประกาศ', value: 'ไม่มีประกาศ' },
    ];
    
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
