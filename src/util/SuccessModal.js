import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const SuccessModal = ({ show, onClose, messageText,messageType='success' }) => {
  return (        
        <>
        <Modal show={show} onHide={onClose} centered>
            {messageType === "success" && (
            <Modal.Header closeButton className="bg-success text-white">
                <Modal.Title>Success</Modal.Title>
            </Modal.Header>
            )}

            {messageType === "error" && (
            <Modal.Header closeButton className="bg-danger text-white">
                <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            )}

            {messageType === "info" && (
            <Modal.Header closeButton className="bg-info text-white">
                <Modal.Title>Info</Modal.Title>
            </Modal.Header>
            )}

            {messageType === "warning" && (
            <Modal.Header closeButton className="bg-warning text-white">
                <Modal.Title>Warning</Modal.Title>
            </Modal.Header>
            )}

            <Modal.Body className="text-center">
            <p>{messageText || 'Action completed successfully!'}</p>
            </Modal.Body>

            {messageType === "success" && (
            <Modal.Footer>
                <Button variant="success" onClick={onClose}>
                OK
                </Button>
            </Modal.Footer>
            )}

            {messageType === "error" && (
            <Modal.Footer>
                <Button variant="danger" onClick={onClose}>
                OK
                </Button>
            </Modal.Footer>
            )}

            {messageType === "info" && (
            <Modal.Footer>
                <Button variant="info" onClick={onClose}>
                OK
                </Button>
            </Modal.Footer>
            )}

            {messageType === "warning" && (
            <Modal.Footer>
                <Button variant="warning" onClick={onClose}>
                OK
                </Button>
            </Modal.Footer>
            )}
        </Modal>
        </>
);
};

export default SuccessModal;