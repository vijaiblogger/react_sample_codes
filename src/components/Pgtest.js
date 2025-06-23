import React, { useState } from "react";

const items = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 28 },
  { id: 4, name: "David", age: 35 },
  { id: 5, name: "Eva", age: 31 },
  { id: 6, name: "Frank", age: 40 },
  { id: 7, name: "Grace", age: 29 },
  { id: 8, name: "Helen", age: 33 },
  { id: 9, name: "Ian", age: 36 },
  { id: 10, name: "Jane", age: 27 }
];

const itemsPerPage = 5;

const Pgtest = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItem = items.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Employee List</h3>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {currentItem.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <nav>
        <ul className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <li
              key={num}
              className={`page-item ${currentPage === num ? "active" : ""}`}
            >
              <button className="page-link" onClick={() => handleClick(num)}>
                {num}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pgtest;
