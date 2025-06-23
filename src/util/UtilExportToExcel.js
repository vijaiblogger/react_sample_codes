

import React, { useEffect, useState } from 'react';
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const UtilExportToExcel = (props) => {

  const [data, setData] = useState(props.data);   
  const [headerdata, setHeaderData] = useState(props.headerdata);   

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data); // Convert JSON to sheet
    const workbook = XLSX.utils.book_new();            // Create new workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const blob = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });

    saveAs(blob, "data_export.xlsx"); // Trigger download
  };

  return (
    <>
    {/* <button className="bi bi-file-earmark-excel-fill" onClick={exportToExcel}>
      Export to Excel
    </button> */}
    <div className='my-2 col-8'>
     <button class="btn btn-primary bi-file-earmark-excel-fill" onClick={exportToExcel}>Export to Excel</button></div>
    </>
  );
};

export default UtilExportToExcel;
