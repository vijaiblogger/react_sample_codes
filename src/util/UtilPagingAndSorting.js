          import React, { useState } from "react";
          import "bootstrap/dist/css/bootstrap.min.css";
          import 'bootstrap-icons/font/bootstrap-icons.css';         

          const UtilPagingAndSorting = ({ data, itemsPerPage = 5,displayMenubar=false }) => {          
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
            // alert(id);
              setSelectedIds((prev) =>
                prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
              );
            };
          console.log(currentPage);
            const isChecked = (id) => selectedIds.includes(id);

              // 🧠 Edit action (customize as needed)
                const handleEdit = () => {
                  if (selectedIds.length === 1) {
                    alert("Editing ID: " + selectedIds[0]);
                  } else {
                    alert("Please select only 1 item to edit.");
                  }
                };

                // 🧠 Delete action
                const handleDelete = () => {
                  if (selectedIds.length === 0) return alert("Please select at least one item.");
                  if (window.confirm(`Delete ${selectedIds.length} item(s)?`)) {
                    alert("Deleted: " + selectedIds.join(", "));
                    // You can lift the delete action to parent via props
                  }
                };
            if (!data || data.length === 0) return <div>No data to display.</div>;


            return (
              <>
                   
                 {displayMenubar ? 
                <div id="menubar"  className="container menubar_background_color">               
                <div className=" justify-content-end d-flex gap-2">
                  <button className="btn btn-outline-primary" onClick={handleEdit}>
                    <i className="bi bi-pencil-fill me-1"></i> Edit
                  </button>
                  <button className="btn btn-outline-danger" onClick={handleDelete}>
                    <i className="bi bi-trash-fill me-1"></i> Delete
                  </button>
               </div>
              </div> 
              : <p></p>}  


              <div className="container mt-4">
                <table className="table table-bordered table-hover">
                  <thead className="table-primary">
                    
                    <tr>
                      <th className="table_header_background_color"></th>
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
                        <td>
                          <input
                            type="checkbox"
                            checked={isChecked(row.id)}
                            onChange={() => handleCheckboxChange(row.id)}
                          />
                        </td>

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
