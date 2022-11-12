import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Avatar from '../../assets/img/avatar.png';
import FreelancerApply from "./FreelancerApply";


const ItemsDetailControl = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="itemsdetailcontrol">
                <div variant="primary" onClick={handleShow}>
                    Senior Project Manager
                </div>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Body>
                        <div className='itemsdetailcontrol'>
                            <div className='container'>
                                <div className='itemsdetailcontrol-block'>
                                    <div className='itemsdetailcontrol__content'>
                                        <div className='itemsdetailcontrol__content__heading'>
                                            <div className='d-flex justify-content-between'>
                                                <div className='itemsdetailcontrol__content__heading__right d-flex'>
                                                    <img className='itemsdetailcontrol__content__heading__right--avatar pe-4 pb-4' src={Avatar}></img>
                                                    <div>
                                                        <h3 className='itemsdetailcontrol__content__heading__right--header'>
                                                            Product Designer
                                                        </h3>
                                                        {/* tên người đăng */}
                                                        <p className='itemsdetailcontrol__content__heading__right--name'>
                                                            Name
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='itemsdetailcontrol__content__heading__left d-flex'>
                                                    <div>
                                                        {/* ngày đăng */}
                                                        <p className='itemsdetailcontrol__content__heading__left--date'>
                                                            19 June 2020
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='d-flex justify-content-center'>
                                                <div className='d-flex'>
                                                    <div className='d-flex itemsdetailcontrol__price'>
                                                        {/* icon đô la */}
                                                        <i></i>
                                                        {/* số tiền target của job */}
                                                        <p className='itemsdetailcontrol__price--number'>
                                                            <span>80</span>
                                                            <span>-</span>
                                                            <span>90</span>
                                                            &nbsp;
                                                            Point
                                                        </p>
                                                    </div>
                                                    <div className=''>
                                                        <p className='itemsdetailcontrol--timeforjob'>Start day: &nbsp;
                                                            <span>2022-10-19</span>
                                                            &nbsp;
                                                            End day: &nbsp;
                                                            <span>2022-10-19</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='itemsdetailcontrol__content__body'>
                                            <div className=''>
                                                <div className='itemsdetailcontrol__content__body__decription mb-5'>
                                                    <h4 className='itemsdetailcontrol__content__body__decription--heading mb-4'>Job Description</h4>
                                                    <p className='itemsdetailcontrol__content__body__decription--detail'>
                                                        We’re looking for a passionate individual to design beautiful and functional products for our customers at Gubagoo. We move very fast and you will be expected to contribute to a cross-functional product development squad, that includes product managers and developers, to deliver the UX and UI for the team to bring to life.We are serious about remote work. You can work for from anywhere.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <FreelancerApply></FreelancerApply>
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

export default ItemsDetailControl
