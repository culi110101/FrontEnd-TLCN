import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CreatePost = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="createpost">
            <Button onClick={handleShow} variant="primary" type="submit" className="btn-create-post">
                + POST A NEW JOB
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body>
                    <div className="createpost">
                        <div className="createpost__content">

                            <div className="mb-3">
                                <label className="form-label">Name Of Job</label>
                                <input className="form-input" type="text" placeholder="Name Of Job" />
                            </div>
                            <div className="mb-3 w-100 block-date">
                                <div className="d-flex">
                                    <div className="col-6 mb-3 pe-3">
                                        <label className="form-label">Start Day</label>
                                        <input className="form-input" type="date" placeholder="Start Day" />
                                    </div>
                                    <div className="col-6 mb-3">
                                        <label className="form-label">End Day</label>
                                        <input className="form-input" type="date" placeholder="End Day" />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3 w-100 block-price">
                                <div className="d-flex">
                                    <div className="col-6 mb-3 pe-3">
                                        <label className="form-label">Limited Price</label>
                                        <input className="form-input" type="number" placeholder="Limited Price" />
                                    </div>
                                    <div className="col-6 mb-3">
                                        <label className="form-label">Max Price</label>
                                        <input className="form-input" type="number" placeholder="Max Price" />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Type Of Job </label>
                                <select className ="dropdown w-100" name="service-list" defaultValue={'0'}>
                                    <option className ="w-100" value="0" selected>Type Of Job</option>
                                    <option className ="w-100" value="1">One</option>
                                    <option className ="w-100" value="2">Two</option>
                                    <option className ="w-100" value="3">Three</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="decription">Decription</label>
                                <textarea className='' name="" id="decription" rows="5"></textarea>
                            </div>
                            <div className="d-flex mt-3">
                                <div className="col-6 pe-3">
                                    <Button variant="primary" type="submit" className="btn-go-to-home">
                                        Create
                                    </Button>
                                </div>
                                <div className="col-6">
                                    <Button variant="primary" type="submit" className="btn-go-to-home" onClick={handleClose}>
                                        Cancel
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default CreatePost
