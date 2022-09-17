import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Login from './Login';
function NotAutToDelete(props) {
    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose} animation={false}>
                <Modal.Header className='no-auth' closeButton>
                    <Modal.Title>welcome to solve problem website</Modal.Title>
                </Modal.Header>
                <Modal.Body className='no-auth'>You Are't The Owner Of This Post</Modal.Body>
                <Modal.Footer className='no-auth'>
                    <Button className='rounded-pill' variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Login />
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default NotAutToDelete;
