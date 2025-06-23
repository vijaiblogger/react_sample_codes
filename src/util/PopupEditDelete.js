// App.jsx
import React, { useState } from 'react';
import EmployeeModal from './EmployeeModal';
import { Button } from 'react-bootstrap';

function PopupEditDelete() {
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleOpen = (employee = null) => {
    setSelectedEmployee(employee);
    setShowModal(true);
  };

  const handleSave = (employee) => {
    console.log('Saved employee:', employee);
    // Add save logic here (e.g., API call or update state)
  };

  return (
    <div className="container mt-5">
      <h2>Employee Management</h2>
      <Button variant="success" onClick={() => handleOpen()}>
        Add Employee
      </Button>

      {/* Sample edit button */}
      <Button variant="info" className="ml-2" onClick={() => handleOpen({ name: 'John', email: 'john@example.com', position: 'Developer' })}>
        Edit Employee
      </Button>

      <EmployeeModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        employeeData={selectedEmployee}
        onSave={handleSave}
      />
    </div>
  );
}

export default PopupEditDelete;
