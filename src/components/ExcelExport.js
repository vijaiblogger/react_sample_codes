import React from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const ExcelExport = () => {
  const data = [
    { id:1,name: "John", age: 30, email: "john@example.com" },
    { id:2,name: "Jane", age: 25, email: "jane@example.com" },
    { id:3,name: "Doe", age: 28, email: "doe@example.com" },
  ];
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
    <div className="container">
      <h3>Export Employee List</h3>
      <div>
      
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th style={{ backgroundColor: '#007bff', color: 'white' }}>Name</th>
            <th style={{ backgroundColor: '#007bff', color: 'white' }}>Age</th>
            <th style={{ backgroundColor: '#007bff', color: 'white' }}>Email</th>           
          </tr>
        </thead>
        <tbody>
          {data.map(member => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.age}</td>
              <td>{member.email}</td>
             
            </tr>
          ))}
           <tr >
              <td></td>
              <td></td>
              <td>              
              <button className="bi bi-file-earmark-excel-fill" onClick={exportToExcel}>
              Export to Excel
              </button>
             </td>
             
            </tr>
        </tbody>
      </table>
    </div>
      
    </div>
  );
};

export default ExcelExport;
