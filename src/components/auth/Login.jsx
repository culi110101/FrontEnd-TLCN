import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../store/entities/auth";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { ReactComponent as Logo } from '../../assets/img/logo.svg';

const Login = () => {
    const dispatch = useDispatch();

    const [loginData, setData] = useState({
        email: "",
        password: "",
    });

    const getInfo = (event) => {
        setData({
            ...loginData,
            [event.target.name]: event.target.value,
        });
    };

    const submitLogin = () => {
        dispatch(loginAction(loginData));
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="login">
                <Button variant="primary" onClick={handleShow} className="login-btn">
                    login
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
                                        <p className="text-white text-center">Welcome Back</p>
                                        <p className="text-white text-center">Log in to continue your account and explore new jobs.</p>
                                    </div>
                                    <div className="left-content__introduction d-flex p-4">
                                        <div className="col-6 ps-3 left-content__introduction__postjob-today">
                                            <p className="text-white left-content__introduction__postjob-today--number">
                                                295
                                            </p>
                                            <p className="text-white left-content__introduction__postjob-today--decription">
                                                New jobs posted today
                                            </p>
                                        </div>
                                        <div className="col-6 ps-3 left-content__introduction__company">
                                            <p className="text-white left-content__introduction__company--number">
                                                295
                                            </p>
                                            <p className="text-white left-content__introduction__company--decription">
                                                New companies logined
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7 p-3 right-content-for-login">
                                <Logo />
                                <div className="right-content-for-login__common">
                                    <div className="right-content-for-login__common__content">
                                        <div className="mb-3">
                                            <label className="form-label">E-mail</label>
                                            <input className="form-input" type="email" placeholder="example@gmail.com" />
                                            <p className="text-muted">
                                                We'll never share your email with anyone else.
                                            </p>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Password</label>
                                            <input className="form-input" type="password" placeholder="Enter password" />
                                        </div>
                                        <div className="mb-3">
                                            <Form.Check type="checkbox" label="Check me out" />
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="col-6 px-2">
                                            <Button variant="primary" type="submit" className="btn-go-to-home">
                                                Login
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
    );
};

export default Login;
