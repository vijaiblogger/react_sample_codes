import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const SuccessModal = ({ show, onClose, message }) => {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton className="bg-success text-white">
        <Modal.Title>Success</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <p>{message || 'Action completed successfully!'}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={onClose}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SuccessModal;