import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// action
import { loginAction } from "../../store/entities/auth";
import { getIntroAction } from "../../store/entities/job";

// components
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import swal from 'sweetalert';
// logic
import { checkEmailFormat, checkLengthPassword } from "../../common/validation";

// messageLogin: Lỗi hiện ra khi login thất bại
const Login = () => {
    const dispatch = useDispatch();

    const {successLogin, messageLogin, isLoadingLogin} = useSelector(state => state.auth.login)
    const {numJobs, numCompanies} = useSelector(state => state.job.getIntro)

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
        if (!checkEmailFormat(loginData.email)){
            swal({
                title: "Error",
                text: "Invalid Email Format",
                icon: "error",
                dangerMode: true,
              })
            return
        }
        if (!checkLengthPassword(loginData.password)){
            swal({
                title: "Error",
                text: "Password must be at least 6 characters",
                icon: "error",
                dangerMode: true,
              })
            return
        }
        dispatch(loginAction(loginData));
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        dispatch(getIntroAction())
    }, [])

    useEffect(() => {
        if (successLogin){
            window.location.reload()
        }
    }, [successLogin])


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
                                                New companies logined
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7 p-3 right-content-for-login">
                                <Logo />
                                {/* 
                                    // messageLogin: Lỗi hiện ra khi login thất bại
                                    {messageLogin && <p className="text-danger">{messageLogin}</p>} 
                                */}
                                <div className="right-content-for-login__common">
                                    <div className="right-content-for-login__common__content">
                                        <div className="mb-3">
                                            <label className="form-label">E-mail</label>
                                            <input name='email' onChange={getInfo} className="form-input" type="email" placeholder="example@gmail.com" />
                                            {/* 
                                                // validateMessage.messageEmail lỗi sai format của email
                                                {validateMessage.messageEmail != "" && (<p>{validateMessage.messageEmail}</p>)} 
                                            */}
                                            <p className="text-muted">
                                                We'll never share your email with anyone else.
                                            </p>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Password</label>
                                            <input name='password' onChange={getInfo} className="form-input" type="password" placeholder="Enter password" />
                                            {/* 
                                                // validateMessage.messagePassword lỗi sai khi password ít hơn 6 ký tự
                                                {validateMessage.messagePassword != "" && (<p>{validateMessage.messagePassword}</p>)} 
                                            */}
                                        </div>
                                        <div className="mb-3">
                                            <Form.Check type="checkbox" label="Check me out" />
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="col-6 px-2">
                                            <Button onClick={submitLogin} variant="primary" type="submit" className="btn-go-to-home">
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
