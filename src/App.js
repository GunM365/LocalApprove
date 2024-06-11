import "./App.css";
import React from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Approval from "./pages/Approval";
import ApprovalDetail from "./pages/ApprovalDetail"
import { FluentProvider, webLightTheme } from "@fluentui/react-components";

function App() {
  
  return (
    <FluentProvider theme={webLightTheme}>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Approval />}/>
          <Route path='/ApprovalDetail/:id' element={<ApprovalDetail />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </FluentProvider>
  );
}

export default App;
