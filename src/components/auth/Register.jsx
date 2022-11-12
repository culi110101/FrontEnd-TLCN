import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../store/entities/auth";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import swal from 'sweetalert';
import { checkEmailFormat, checkLengthPassword } from "../../common/validation";
import { registerAction } from "../../store/entities/auth";
import { getIntroAction } from "../../store/entities/job";

const Register = () => {

    const dispatch = useDispatch()

    const {numJobs, numCompanies} = useSelector(state => state.job.getIntro)
    const {messageRegister, loadingRegister, successRegister} = useSelector(state => state.auth.register)

    const [info, setInfo] = useState({
        firstName: '',
        lastName: '',
        confirmPassword: '',
        password: '',
        email: '',
        phone: ''
    })

    const getInfo = (event) => {
        setInfo({
            ...info,
            [event.target.name]: event.target.value
        })
    }

    const submitRegister = () => {
        if (!checkEmailFormat(info.email)){
            swal({
                title: "Error",
                text: "Invalid Email Format",
                icon: "error",
                dangerMode: true,
              })

            return
        }

        if (info.password != info.confirmPassword){
            swal({
                title: "Error",
                text: "Not Matched Password",
                icon: "error",
                dangerMode: true,
              })
            return
        }

        if (!checkLengthPassword(info.password)){
            swal({
                title: "Error",
                text: "Password must be at least 6 characters",
                icon: "error",
                dangerMode: true,
              })
            return
        }

        if (info.firstName === "" || info.lastName === "" || info.phone === ""){
            swal({
                title: "Error",
                text: "Empty Fields",
                icon: "error",
                dangerMode: true,
              })
            return
        }

        console.log({
            name: info.firstName + " " + info.lastName,
            password: info.password,
            email: info.email,
            phone: info.phone
        })

        dispatch(registerAction({
            name: info.firstName + " " + info.lastName,
            password: info.password,
            email: info.email,
            phone: info.phone
        }))

    }

    useEffect(() => {
        dispatch(getIntroAction())
    }, [])


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="register">
                <Button variant="primary" onClick={handleShow} className="login-btn">
                    Register
                </Button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Body>
                        <div className="d-flex common-content">
                            <div className="left-content col-5">
                                <div className="p-3 h-100 d-flex align-items-start flex-column">
                                    <div className="left-content__introduction mb-auto p-2">
                                        <p className="text-white text-center">Register Here</p>
                                        <p className="text-white text-center">Register your account and explore new jobs.</p>
                                    </div>
                                    <div className="left-content__introduction d-flex p-4">
                                        <div className="col-6 ps-3 left-content__introduction__postjob-today">
                                            <p className="text-white left-content__introduction__postjob-today--number">
                                                {numJobs ? (numJobs) : 0}
                                            </p>
                                            <p className="text-white left-content__introduction__postjob-today--decription">
                                                New jobs posted today
                                            </p>
                                        </div>
                                        <div className="col-6 ps-3 left-content__introduction__company">
                                            <p className="text-white left-content__introduction__company--number">
                                                {numCompanies ? (numCompanies) : 0}
                                            </p>
                                            <p className="text-white left-content__introduction__company--decription">
                                                New companies registered
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7 p-3 right-content-for-register">
                                <Logo />
                                <div className="right-content-for-register__common">
                                    <div className="right-content-for-register__common__content">

                                        <div className="mb-3 w-100 block-name">
                                            <div className="d-flex">
                                                <div className="col-6 block-name--firstname">
                                                    <label className="form-label">First Name</label>
                                                    <input name='firstName' onChange={getInfo} className="form-input" type="text" placeholder="First Name" />
                                                </div>
                                                <div className="col-6 block-name--lastname">
                                                    <label className="form-label">Last Name</label>
                                                    <input name='lastName' onChange={getInfo} className="form-input" type="text" placeholder="Last Name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Phone Number</label>
                                            <input name='phone' onChange={getInfo} className="form-input" type="tel" placeholder="Phone Number" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">E-mail</label>
                                            <input name='email' onChange={getInfo} className="form-input" type="email" placeholder="example@gmail.com" />
                                            <p className="text-muted">
                                                We'll never share your email with anyone else.
                                            </p>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Password</label>
                                            <input name='password' onChange={getInfo} className="form-input" type="password" placeholder="Enter password" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Confirm Password</label>
                                            <input name='confirmPassword' onChange={getInfo} className="form-input" type="password" placeholder="Enter password" />
                                        </div>
                                        <div className="mb-3">
                                            <Form.Check type="checkbox" label="Check me out" />
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="col-6 px-2">
                                            <Button onClick={submitRegister} variant="primary" type="submit" className="btn-go-to-home">
                                                Register
                                            </Button>
                                        </div>
                                        <div className="col-6 px-2" onClick={handleClose}>
                                            <Button variant="primary" type="submit" className="btn-go-to-home">
                                                Close
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}

export default Register
