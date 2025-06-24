import React, { useState } from "react";
const UtilDataPaginations = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [headerdata, setHeaderData] = useState(props.headerdata);  
  const [items, setItems] = useState(props.data);
  const [itemsPerPage, setitemsPerPage] = useState(props.itemsPerPage);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItem = items.slice(indexOfFirstItem, indexOfLastItem);
  const handleClick = (pageNumber) => setCurrentPage(pageNumber);

  const getLeafPropertyNames = (list) => {
  const keysSet = new Set();
  list.forEach(item => {
    Object.entries(item).forEach(([key, value]) => {
      if (
        value === null ||
        typeof value !== 'object' || 
        Array.isArray(value) === false && Object.keys(value).length === 0
      ) {
        keysSet.add(key);
      }
    });
  });
  return Array.from(keysSet);
};
const allKeys = getLeafPropertyNames(items);

  return (
    <>
    <div className="container mt-4">
      <h3 className="mb-3">{headerdata}</h3>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>                           
            {allKeys.map((item, index) => (
                <th className="table_header_background_color" key={index} >
                  {item.toUpperCase()}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
        {currentItem.map(itemr => (
            <tr className=" mb-3" key={itemr.id}>
            {allKeys.map((item, index) => (
              <td key={index} >
                    {itemr[item]}
                    
              </td>    
            ))}
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
    </div></>
  );
};

export default UtilDataPaginations;
