// EmployeeModal.jsx
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EmployeeModal = ({ show, handleClose, employeeData=null, onHandleSaveEmployee }) => {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    position: ''
  });

  // Populate fields when editing an existing employee
  useEffect(() => {
    if (employeeData) {
      setEmployee(employeeData);
    } else {
      setEmployee({ name: '', email: '', position: '' });
    }
  }, [employeeData]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onHandleSaveEmployee(employee);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>      
      <Modal.Header closeButton>
        <Modal.Title><h1>{employee.email}</h1> {employeeData==null  ? 'Edit Employee' : 'Add Employee'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={employee.name}
              onChange={handleChange}
              placeholder="Enter name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={employee.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Position</Form.Label>
            <Form.Control
              type="text"
              name="position"
              value={employee.position}
              onChange={handleChange}
              placeholder="Enter position"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EmployeeModal;
