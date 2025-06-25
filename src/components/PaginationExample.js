import React, { useState } from "react";
import UtilPagingAndSorting from "../util/UtilPagingAndSorting";
//import Menubar from "../util/Menubar"; 
import SuccessModal from "../util/SuccessModal"; 

import EmployeeModal from "./Employee/EmployeeModal ";
import { Button } from 'react-bootstrap';
const PaginationExample = () => {

  const [showSuccess, setShowSuccess] = useState(false);
  //const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
const [modalShow, setModalShow] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employees, setEmployees] = useState([]);

  const handleSave = (data) => {
    setEmployees(prev =>
      selectedEmployee
        ? prev.map(emp => (emp.email === selectedEmployee.email ? data : emp))
        : [...prev, data]
    );
    setSelectedEmployee(null);
  };

  const handleEdit = (emp) => {
    setSelectedEmployee(emp);
    setModalShow(true);
  };

const emp={
    "name": "Alice Johnson", 
    "email": "alice.johnson@example.com", 
    "role": "Software Engineer",
};
  const [items,setItem]=useState([
  {
    "id": 1,
    "name": "Alice Johnson", 
    "age": 30,
    "position": "Software Engineer",
    "department": "Development",
    "email": "alice.johnson@example.com",
    "phone": "123-456-7890"
  },
  {
    "id": 2,
    "name": "Bob Smith",
    "age": 35,
    "position": "Project Manager",
    "department": "Management",
    "email": "bob.smith@example.com",
    "phone": "234-567-8901"
  },
  {
    "id": 3,
    "name": "Catherine Lee",
    "age": 28,
    "position": "UI/UX Designer",
    "department": "Design",
    "email": "catherine.lee@example.com",
    "phone": "345-678-9012"
  },
  {
    "id": 4,
    "name": "David Kumar",
    "age": 40,
    "position": "QA Analyst",
    "department": "Quality Assurance",
    "email": "david.kumar@example.com",
    "phone": "456-789-0123"
  },
  {
    "id": 5,
    "name": "Emily Chen",
    "age": 32,
    "position": "DevOps Engineer",
    "department": "Infrastructure",
    "email": "emily.chen@example.com",
    "phone": "567-890-1234"
  },
  {
    "id": 6,
    "name": "Alice Johnson",
    "age": 30,
    "position": "Software Engineer",
    "department": "Development",
    "email": "alice.johnson@example.com",
    "phone": "123-456-7890"
  },
  {
    "id": 7,
    "name": "Bob Smith",
    "age": 35,
    "position": "Project Manager",
    "department": "Management",
    "email": "bob.smith@example.com",
    "phone": "234-567-8901"
  },
  {
    "id": 8,
    "name": "Catherine Lee",
    "age": 28,
    "position": "UI/UX Designer",
    "department": "Design",
    "email": "catherine.lee@example.com",
    "phone": "345-678-9012"
  },
  {
    "id": 9,
    "name": "David Kuddmar",
    "age": 40,
    "position": "QA Analyst",
    "department": "Qualdddity Assurance",
    "email": "david.kumar@example.com",
    "phone": "456-7dd89-0123"
  },
  {
    "id": 10 ,
    "name": "Emidddly Chen",
    "age": 32,
    "position": "DedddvOps Engineer",
    "department": "Indddfrastructure",
    "email": "emily.cheddn@example.com",
    "phone": "567-890ddd-1234"
  }
]);

          const [rowData, setRowData] = useState();
          const [makeEditButtonDisable, setMakeEditButtonDisable] = useState(true);
          const [makeDeleteButtonDisable, setMakeDeleteButtonDisable] = useState(true);
   
          const handleCheckboxChange = (data,recordIds) => {
            console.log(data);
            setRowData(data);
            console.log(recordIds);  
              if(recordIds.length==0)
              {
              setMakeEditButtonDisable(true);
              setMakeDeleteButtonDisable(true);

              }
              else if(recordIds.length==1)
              {
                setMakeDeleteButtonDisable(false);
                setMakeEditButtonDisable(false);
              }
              else if(recordIds.length>1)
              {
                setMakeDeleteButtonDisable(false);
                setMakeEditButtonDisable(true);
              }
          };

        

          const onDeleteUser = () => {
            
            setTimeout(() => {
            setShowSuccess(true);
            }, 500);

            if(rowData==undefined)
            {
              alert('Please select record.');
            }
            //alert(JSON.stringify( rowData));
                      
          };


          const deleteSelectedUsers = (selectedIds) => {
          const confirmed = window.confirm("Are you sure you want to delete selected users?");
          if (confirmed) {
          setItem(prev => prev.filter(user => !selectedIds.includes(user.id)));
          }
          };
          const handleChildButtonClick=(id)=>{
          alert('Button in child clicked — handled in parent!');
          const value = localStorage.getItem('ids');
          alert(value);
          }

          const onUserEdit = () => {              
           setTimeout(() => {
            setShowSuccess(true);
            }, 500);
            
            if(rowData==undefined)
            {
              alert('Please select record.');
            }   
             
              setSelectedEmployee(emp);
              setModalShow(true);

          };


          const itemsPerPage = 5;

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
<>
        
 <div className="container mt-5 text-center">      
      <SuccessModal
        show={showSuccess}
        onClose={() => setShowSuccess(false)}
        message="Employee added successfully!"
      />
</div>
   

        <div className="container ">
          <h3 className="mb-3">Pagination Example</h3>          
          {/* <Menubar onDelete={deleteUser} editUser={editUser} makeEditButtonDisable={makeEditButtonDisable} />  */}
           <div>        
            <div id="menubar"  className="container menubar_background_color">               
              <div className=" justify-content-end d-flex gap-2">
             

                <button disabled={makeEditButtonDisable}  onClick={onUserEdit}  className="btn btn-outline-primary" >
                  <i className="bi bi-pencil-fill me-1"></i> Edit
                </button>

                <button disabled={makeDeleteButtonDisable} className="btn btn-outline-danger" onClick={onDeleteUser} >
                  <i className="bi bi-trash-fill me-1"></i> Delete
                </button>
              </div>
            </div>           
          </div>
          <UtilPagingAndSorting data={items} 
          itemsPerPage={3} 
          displayCheckbox={true} 
          setItem={setItem} 
          sendDataToParent={handleCheckboxChange}          
          /> 
        </div>
        </>
      );
    };

    export default PaginationExample;
