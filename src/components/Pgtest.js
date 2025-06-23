import React, { useState } from "react";
import UtilPagingAndSorting from "../util/UtilPagingAndSorting";
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
      <h3 className=" mb-3">Employee List</h3>
     <UtilPagingAndSorting data={items}/>
    </div>
  );
};

export default Pgtest;
