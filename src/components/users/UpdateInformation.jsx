import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {useDispatch, useSelector} from 'react-redux'
import { editProfileAction } from "../../store/entities/user";

const UpdateInformation = ({user}) => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);

    const [info, setInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        experience: '',
        introduction: ''
    })


    useEffect(() => {
        if (user){
            setInfo({
                ...info,
                firstName: user.name,
                lastName: user.name,
                phone: user.phone,
                address: user.address,
                email: user.email,
                experience: user.experience,
                introduction: user.introduction
            })
        }
    }, [user])

    const getInfo = (event) => {
        setInfo({
            ...info,
            [event.target.name]: event.target.value
        })
    }

    const submitUpdate = () => {
        console.log(info)
        dispatch(editProfileAction({
            name: info.firstName + " " + info.lastName,
            email: info.email,
            phone: info.phone,
            address: info.address,
            experience: info.experience,
            introduction: info.introduction
        }))
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="updateInformation">
            <Button variant="primary" onClick={handleShow} className="setting-btn">
                Setting
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body>
                    <div className="updateInformation">
                        <div className="updateInformation__content">

                            <div className="mb-3 w-100 block-name">
                                <div className="d-flex">
                                    <div className="col-6 pe-3 block-name--firstname">
                                        <label className="form-label">First Name</label>
                                        <input name='firstName' onChange={getInfo} value={info.firstName} className="form-input" type="text" placeholder="First Name" />
                                    </div>
                                    <div className="col-6 block-name--lastname">
                                        <label className="form-label">Last Name</label>
                                        <input name='lastName' onChange={getInfo} value={info.lastName} className="form-input" type="text" placeholder="Last Name" />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone Number</label>
                                <input name='phone' onChange={getInfo} value={info.phone} className="form-input" type="tel" placeholder="Phone Number" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">E-mail</label>
                                <input name='email' onChange={getInfo} value={info.email} className="form-input" type="email" placeholder="example@gmail.com" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Address</label>
                                <input name='address' onChange={getInfo} value={info.address} className="form-input" type="text" placeholder="Binh Thanh TP.HCM" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Experience</label>
                                <input name='experiences' onChange={getInfo} value={info.experience} className="form-input" type="text" placeholder="3 years in software development" />
                            </div>
                            <div>
                                <label htmlFor="decription">About your</label>
                                <textarea onChange={getInfo} value={info.introduction} name='introduction' id="decription" rows="5"></textarea>
                            </div>
                        <div className="d-flex mt-3">
                            <div className="col-6 pe-3">
                                <Button onClick={submitUpdate} variant="primary" type="submit" className="btn-go-to-home">
                                    Update
                                </Button>
                            </div>
                            <div className="col-6">
                                <Button variant="primary" type="submit" className="btn-go-to-home" onClick={handleClose}>
                                    Close
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

export default UpdateInformation
