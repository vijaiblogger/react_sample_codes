import React, { useState } from "react";
import UtilPagingAndSorting from "../util/UtilPagingAndSorting";
import SuccessModal from "../util/SuccessModal";
//import EmployeeModal from "./com/EmployeeModal";
import EmployeeModal from '../components/employee/EmployeeModal'
import { Button } from 'react-bootstrap';


  const EmployeeListingExample = () => {

      //start Emmployee model popup code
      const [showModal, setShowModal] = useState(false);
      const [selectedEmployee, setSelectedEmployee] = useState(null);    
      const handleOpen = (employee = null) => {       
        setSelectedEmployee(employee);
        setShowModal(true);
      };    
    
    //end Emmployee model popup code

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

    const [showSuccess, setShowSuccess] = useState(false);
    const [messageText, setMessageText] = useState('');
    const [messageType, setMessageType] = useState(''); 
    const [modalShow, setModalShow] = useState(false);  
    const [employees, setEmployees] = useState([]);
    const [rowData, setRowData] = useState();
    const [makeEditButtonDisable, setMakeEditButtonDisable] = useState(true);
    const [makeDeleteButtonDisable, setMakeDeleteButtonDisable] = useState(true);
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
          const handleSaveEmployee = (data) => {
           
          setEmployees(prev =>
              selectedEmployee
                ? prev.map(emp => (emp.email === selectedEmployee.email ? data : emp))
                : [...prev, data]
            );
            setSelectedEmployee(null);
             setTimeout(() => {
               setMessageText('Record has been saved succesfully!')
               setMessageType('success');
               setShowSuccess(true);
            }, 500);


          };         
    
          const handleCheckboxChange = (data,recordIds) => {   
            alert(data);     
            debugger;   
              setSelectedEmployee(data);
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
               setMessageText('Record has been deleted succesfully!')
               setMessageType('success');
               setShowSuccess(true);
            }, 500);

            if(rowData==undefined)
            {
              alert('Please select record.');
            }      
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
            //alert('Edit button clicked');
            //Below code will be inside success service call 
            setTimeout(() => {
               setMessageText('User updated succesfully!')
               setMessageType('success');
               setShowSuccess(true);
            }, 500);

          };

           const handleEmployeePopup = (employee=null) => {  
             setSelectedEmployee(employee);
             setShowModal(true);
            // setTimeout(() => {
            //    setMessageText('User updated succesfully!')
            //    setMessageType('success');
            //    setShowSuccess(true);
            // }, 500);
          };

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
            <div>      
              <SuccessModal
                show={showSuccess}
                onClose={() => setShowSuccess(false)}
                messageText={messageText} 
                messageType={messageType}
              />
              </div>   

          <div >
          <h3 className="mb-3">Employee Lists</h3>          
          {/* <Menubar onDelete={deleteUser} editUser={editUser} makeEditButtonDisable={makeEditButtonDisable} />  */}
           <div>        
            <div id="menubar"  className="container menubar_background_color">               
              <div className=" justify-content-end d-flex gap-2">
             
                <button  onClick={handleEmployeePopup}  className="btn btn-outline-primary" >
                  <i className="bi bi-pencil-fill me-1"></i> Add
                </button>

                <button disabled={makeEditButtonDisable}  onClick={handleEmployeePopup}  className="btn btn-outline-primary" >
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

        <EmployeeModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        employeeData={selectedEmployee}
        onHandleSaveEmployee={handleSaveEmployee}
        />

        </>
      );
    };

    export default EmployeeListingExample;
