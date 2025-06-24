          import React, { useState ,useEffect } from "react";
          import "bootstrap/dist/css/bootstrap.min.css";
          import 'bootstrap-icons/font/bootstrap-icons.css';    
          import Menubar from "./Menubar";     

          const UtilPagingAndSorting = ({ data, itemsPerPage = 5,displayCheckbox=false,sendDataToParent,setItem}) => {          
            const [currentPage, setCurrentPage] = useState(1);
            const [sortField, setSortField] = useState(null);
            const [sortOrder, setSortOrder] = useState("asc");
            // 🔁 Sort data
            const sortedData = [...data].sort((a, b) => {
              if (!sortField) return 0;
              const aVal = a[sortField]?.toString().toLowerCase() ?? "";
              const bVal = b[sortField]?.toString().toLowerCase() ?? "";
              return sortOrder === "asc" ? (aVal > bVal ? 1 : -1) : (aVal < bVal ? 1 : -1);
            });

            // const handleChange = () => {
            // sendDataToParent('Hello from Child!');
            // };


            // 📄 Paginate
            const indexOfLast = currentPage * itemsPerPage;
            const indexOfFirst = indexOfLast - itemsPerPage;
            const currentData = sortedData.slice(indexOfFirst, indexOfLast);
            const totalPages = Math.ceil(data.length / itemsPerPage);
            const [selectedIds, setSelectedIds] = useState([]);
            // 🔁 Sort handler
            const handleSort = (field) => {
              if (field === sortField) {
                setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
              } else {
                setSortField(field);
                setSortOrder("asc");
              }
            };

            // 🔁 Page change
            const handlePageChange = (page) => {
              if (page >= 1 && page <= totalPages) {
                setCurrentPage(page);
              }
            };
          
            if (!data || data.length === 0) return <div>No data to display.</div>;

            const columnKeys = Object.keys(data[0]);

            const handleCheckboxChange = (id) => {
               alert(id);
               const rowData = data.find(u => u.id === id);

               console.log(rowData);
               //const arrayData=[];

              // alert(id);
              // setSelectedIds((prev) =>
              //   prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
              // );

              sendDataToParent(rowData);
              //alert(selectedIds);
              //localStorage.setItem('ids', selectedIds);
            };


            console.log(currentPage);
            const isChecked = (id) => selectedIds.includes(id);

              // 🧠 Edit action (customize as needed)
                const handleEdit = () => {
                   
                  if (selectedIds.length === 0) {
                     alert("Please select an Item");
                  }
                  else if (selectedIds.length === 1) {
                    alert("Editing ID: " + selectedIds[0]);
                  } else {
                    alert("Please select only 1 item to edit.");
                  }
                  
                };


                    

                // 🧠 Delete action
              
                  const deleteSelectedUsers = (selectedIds) => {
                  const confirmed = window.confirm("Are you sure you want to delete selected users?");
                  if (confirmed) {
                  setItem(prev => prev.filter(user => !selectedIds.includes(user.id)));
                  }
                  };

              
                const handleSelectAll = () => {
                  if (selectedIds) {
                    setSelectedIds([]);
                  } else {
                    setSelectedIds(data.map(user => user.id));
                  }
                  setSelectedIds(!selectedIds);
                };
              
                const handleDelete = () => {
                  if (selectedIds.length === 0) {
         				  alert("Please select at least one row to delete.");
                    return;
                  }

                  // onDeleteSelected(selectedIds);
                };
              


            return (
              <>
                    

            {/* {displayMenubar &&<Menubar onButtonClick={handleEdit} onDelete={handleDelete}/>} */}

              <div className="container mt-4">
                <table className="table table-bordered table-hover">
                  <thead className="table-primary">
                    
                    <tr>
                      {displayCheckbox && <th className="table_header_background_color"></th>}
                      {columnKeys.map((key) => (
                        <th className="table_header_background_color"
                          key={key}
                          onClick={() => handleSort(key)}
                          style={{ cursor: "pointer" }}>
                          {key.toLocaleUpperCase()}
                          {sortField === key ? (sortOrder === "asc" ? " ▲" : " ▼") : ""}
                      </th>   
                                
                      ))}
                      
                    </tr>
                  </thead>
                  <tbody>
                    {currentData.map((row, rowIndex) => (
                      <tr key={rowIndex}>

                      {displayCheckbox && 
                      <td>
                        <input
                        type="checkbox"
                        checked={isChecked(row.id)}
                        onChange={() => handleCheckboxChange(row.id)}
                        />
                      </td>
                      }                    

                        {columnKeys.map((key) => (
                          <td  key={key}>{row[key]}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Pagination Controls */}
                <div className="d-flex justify-content-center">
                  <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                      <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                        Prev
                      </button>
                    </li>
                    {[...Array(totalPages)].map((_, i) => (
                      <li
                        key={i}
                        className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
                      >
                        <button className="page-link" onClick={() => handlePageChange(i + 1)}>
                          {i + 1}
                        </button>
                        
                      </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                      <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                        Next
                      </button>
                      
                    </li>
                  </ul>
                </div>
              </div>
          </> 
          );
          }

          export default UtilPagingAndSorting;
