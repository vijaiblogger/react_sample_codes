// EmployeeModal.jsx
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EmployeeModal = ({ show, handleClose, employee, handleSave }) => {
  const [formData, setFormData] = React.useState(employee || { name: '', email: '', role: '' });

  React.useEffect(() => {
    setFormData(employee || { name: '', email: '', role: '' });
  }, [employee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onSave = () => {
    handleSave(formData);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{employee ? 'Edit' : 'Add'} Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" value={formData.name} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formEmail" className="mt-3">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="email" value={formData.email} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formRole" className="mt-3">
            <Form.Label>Role</Form.Label>
            <Form.Control name="role" value={formData.role} onChange={handleChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
        <Button variant="primary" onClick={onSave}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EmployeeModal;
