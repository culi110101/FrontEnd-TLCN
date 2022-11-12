import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const Offer = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="offer">
                <div className="btn-apply" onClick={handleShow}>
                Apply to this job
                </div>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Body>
                        <div className='offer-block'>
                            <div className='container'>
                            <div className="close" onClick={handleClose}>
                                    <FontAwesomeIcon icon={faClose} />
                                </div>
                                <div className=''>
                                    <div className='offer__content'>
                                        <div className='offer__content__heading'>
                                            Price you want to offer
                                        </div>
                                        <div className='offer__content__input'>
                                            <input type="number" min="0" placeholder="Enter your price" />
                                        </div>
                                        <div className='offer__content__btn'>
                                            <button> Send Request</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
}

export default Offer
