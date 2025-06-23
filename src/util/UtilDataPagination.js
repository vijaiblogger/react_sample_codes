
        import React, { useState } from "react";

        const UtilDataPagination = (props) => {
        const [headerdata, setHeaderData] = useState(props.headerdata);   
        const [items, setItems] = useState(props.data); 
        const [itemsPerPage, setItemsPerPage] = useState(props.itemsPerPage); 
        
        const allKeys = [
          ...new Set(items.flatMap(emp => Object.keys(emp)))
        ];
        console.log(allKeys);

        const [currentPage, setCurrentPage] = useState(1);
        const totalPages = Math.ceil(items.length / itemsPerPage);

        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

        const paginate = (pageNumber) => setCurrentPage(pageNumber);

          const renderPagination = () => {
            let pages = [];
            for (let i = 1; i <= totalPages; i++) {
              pages.push(
                <li
                  key={i}
                  className={`page-item ${currentPage === i ? "active" : ""}`}
                >
                  <button className="page-link" onClick={() => paginate(i)}>
                    {i}
                  </button>
                </li>
              );
            }
            return pages;
          };

          return (
            <div className="container ">
              <h3 className="mb-3">{headerdata}</h3>       
              <ul className="list-group mb-3">
                {currentItems.map((item, index) => (
                  <li key={index} className="list-group-item">
                    {item.name}
                  </li>
                ))}
              </ul>

               <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                  <tr>
            
                  {allKeys.map((item, index) => (
                    <th key={index} >
                    {item.toUpperCase()}
                    </th>
                    ))}
                      
                  </tr>
                </thead>
              
                <tbody>
                  {items.map(member => (
                    <tr className=" mb-3" key={member.id}>
                        {allKeys.map((item, index) => (
                        <td key={index} >
                          {member[item]}           
                        </td>
                      ))}
                    </tr>
                  ))} 
                </tbody>
              </table>

              <nav>
                <ul className="pagination justify-content-center">
                  <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                    <button className="page-link" onClick={() => paginate(currentPage - 1)}>
                      Previous
                    </button>
                  </li>

                  {renderPagination()}

                  <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                    <button className="page-link" onClick={() => paginate(currentPage + 1)}>
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          );
        };

        export default UtilDataPagination;
