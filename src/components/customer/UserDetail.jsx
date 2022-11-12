import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Avatar from '../../assets/img/avatar.png';
import Introduction from "../users/Introduction";
import Overview from "../users/Overview";
import Review from "../common/Review";
import Contact from "../common/Contact";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfileAction } from "../../store/entities/user";
const UserDetail = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="userdetail">
                <div variant="primary" onClick={handleShow}>
                    <img className='userdetail__content__heading__right--avatar pe-4 pb-4' src={Avatar}></img>
                    David
                </div>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Body>
                        <div className='userdetail-block'>
                            <div className='container'>
                                <div className='d-flex'>
                                    <div className='col-4 sticky'>
                                        <Introduction></Introduction>
                                    </div>
                                    <div className='col-8 px-3'>
                                        <div className='userdetail-block-content'>
                                            <Overview></Overview>
                                        </div>
                                        <div className='userdetail-block-content__review'>
                                            <Review></Review>
                                            <Review></Review>
                                            <Review></Review>
                                            <Review></Review>
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

export default UserDetail
