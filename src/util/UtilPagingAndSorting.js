import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UtilPagingAndSorting = ({ data, itemsPerPage = 5 }) => {
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

  return (
    <div className="container mt-4">
      <table className="table table-bordered table-hover">
        <thead className="table-primary">
          <tr>
            {columnKeys.map((key) => (
              <th className="table_header_background_color"
                key={key}
                onClick={() => handleSort(key)}
                style={{ cursor: "pointer" }}
              >
                {key.toLocaleUpperCase()}
                {sortField === key ? (sortOrder === "asc" ? " ▲" : " ▼") : ""}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, rowIndex) => (
            <tr key={rowIndex}>
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
  );
};

export default UtilPagingAndSorting;
