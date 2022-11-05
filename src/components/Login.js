import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../store/entities/auth";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
    // <div>
    //     <input onChange={getInfo} name='email' type='text'/>
    //     <input onChange={getInfo} name='password' type='text'/>
    //     <button onClick={submitLogin}>submit</button>
    // </div>
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        {/* <Modal.Header closeButton>
          <Modal.Title className="color-red">Modal title</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <div className="d-flex">
            <div className="left-content col-5">
              <div className="p-3 ">
                <div className="left-content__introduction">
                  <h3 className="">Welcome Back</h3>
                  <p>Log in to continue your account and explore new jobs.</p>
                </div>
                <div className="left-content__introduction">
                  <h3 className="">Welcome Back</h3>
                  <p>Log in to continue your account and explore new jobs.</p>
                </div>
              </div>
            </div>
            <div className="col-7 p-3 right-content">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default Login;
