// import logo from './logo.svg';
import './Approval.css';
import React from 'react';
import { useState, useEffect } from "react";
import { initializeIcons } from "@fluentui/react";
import { Input } from "@fluentui/react-components";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
// import { createTheme } from "@fluentui/react";
import { Dropdown, Option } from "@fluentui/react-components";
import { DatePicker } from "@fluentui/react-datepicker-compat";
// import { makeStyles } from "@fluentui/react-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClock } from "@fortawesome/free-regular-svg-icons";
// @fortawesome/fontawesome-free, @fortawesome/free-solid-svg-icons, and @fortawesome/free-regular-svg-icons
import ResponsivePagination from "react-responsive-pagination";
import {makeStyles} from "@fluentui/react-components";
import Table from "../components/Table"


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
function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const styles = useStyles();
  const [memoData, setMemoData] = useState([]);
 
  const totalPages = Math.ceil(memoData.length / itemsPerPage); 
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = memoData.slice(indexOfFirstItem, indexOfLastItem);

  //Fetch memoList from API
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('/api/v2/memos', {
              headers: {
                  'x-api-key': process.env.REACT_APP_API_KEY
              }
          });
            const data = await response.json();
            setMemoData(data); // Update the state with fetched data
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        
    };

    fetchData(); 
}, []);

  return (
    
    <FluentProvider theme={webLightTheme}>
      
      <div className="adjust-page">
    <div className="flex-container">
      <div className="text">รอการอนุมัติ</div>
      <div className="box">
        <div className="clear-search">
          ล้างการค้นหา
        </div>
        <div className={styles.root}>
          <Input placeholder="ค้นหารายการ" input={{ style:{ fontFamily: "IBM Plex Sans Thai"}  }}/>
          </div>
      </div>
    </div>

    <div className="flex-container">
      <div className="text1" style={{ marginTop: 50 }}>
        รายการอนุมัติ
      </div>
      <div className={styles.status}>
        <Dropdown placeholder="เลือกสถานะ" appearance="outline" button={{ style:{ fontFamily: "IBM Plex Sans Thai"}  }} listbox={{ style:{ fontFamily: "IBM Plex Sans Thai"}  }}>
          <Option>ทั้งหมด</Option>
          <Option>อนุมัติ</Option>
          <Option>รอดำเนินการ</Option>
          <Option>รอการแก้ไข</Option>
          <Option>ไม่อนุมัติ</Option>
        </Dropdown>
      </div>

      {/* table */}
      <Table data={currentItems} />

      {/* Pagination */}
      <ResponsivePagination
          current={currentPage}
          total={totalPages}
          onPageChange={setCurrentPage}
        />
    </div>
    </div>
  </FluentProvider>
  );
}

export default App;
