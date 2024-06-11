import React from 'react';
import styles from './Table.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
// @fortawesome/fontawesome-free, @fortawesome/free-solid-svg-icons, and @fortawesome/free-regular-svg-icons
import { initializeIcons } from "@fluentui/react";
import {makeStyles} from "@fluentui/react-components";
import { Link } from 'react-router-dom';
import "./Table.css";

initializeIcons();
const useStyles = makeStyles({
    root: {
      margin: "10px",
      display: "inline-block", 
     "@media (max-width: 1000px)": {
      display: "flex",
      flexDirection: "column",
      marginBottom: "20px",
    },
    },
    status: {
      display: "flex",
      marginTop: "-25px",
      alignItems: "center",
      justifyContent: "flex-end",
     "@media (max-width: 600px)": {
      display: "block",
      flexDirection: "column",
      marginTop: "25px",
    }
    },
    orderProcess: {
      fontSize: "70%",
    },
    statusText: {
      display: "inline-block", 
      "@media (max-width: 600px)": {
        marginRight: "5px"
      }
    }
  });

function Table({ data }) {
    const dec = useStyles();
    return (
        <>
       
          {/* table */}
          <table className={styles.table}>
            <><thead>
            <tr>
                <th scope="col">รายการบันทึก</th>
                <th scope="col">สร้างโดย</th>
                <th scope="col">สถานะ</th>
                
            </tr>
        </thead>
        <tbody>
            
        {data.map((memo) =>
                (<tr key={memo.id} className={styles.tr}>
                
                    <td><Link to = {`/ApprovalDetail/${memo.id}`} style={{textDecoration:"none",color: "inherit"}}>
                        <div style={{ fontWeight: "bold", paddingBottom: 10 }}>
                            {memo.subject} 
                            {/* ชื่อหัวข้อ */}
                        </div>
                        
                        </Link>
                    </td> 
                    <td>
                        <div style={{ fontWeight: "bold", paddingBottom: 10 }}>
                            {memo.createrEmail} 
                            {/* ชื่อผู้ส่ง */}
                        </div>
                        
                    </td>
                    <td>
                        <div className="statusPending">
                            <FontAwesomeIcon icon={faClock} className="iconPending" />
                            <div className={dec.statusText}>{memo.status}</div>
                            <div style={{ fontSize: "70%" }}>ลำดับอนุมัติ: {memo.loa.loaLevel.length}</div>
                        </div>
                    </td>
                    
                </tr>
                )
            )}
            </tbody></>
          </table>
         
       </>
    );
  }
  
  export default Table;
  