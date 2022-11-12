import React from 'react'
import Button from "react-bootstrap/Button";

const UpdateInformation = () => {
    return (
        <div className="updateInformation">
            <div className="updateInformation__content">

                <div className="mb-3 w-100 block-name">
                    <div className="d-flex">
                        <div className="col-6 pe-3 block-name--firstname">
                            <label className="form-label">First Name</label>
                            <input className="form-input" type="text" placeholder="First Name" />
                        </div>
                        <div className="col-6 block-name--lastname">
                            <label className="form-label">Last Name</label>
                            <input className="form-input" type="text" placeholder="Last Name" />
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input className="form-input" type="tel" placeholder="Phone Number" />
                </div>
                <div className="mb-3">
                    <label className="form-label">E-mail</label>
                    <input className="form-input" type="email" placeholder="example@gmail.com" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input className="form-input" type="text" placeholder="Binh Thanh TP.HCM" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Experience</label>
                    <input className="form-input" type="text" placeholder="3 years in software development" />
                </div>
                <div>
                    <label htmlFor="decription">About your</label>
                    <textarea className='' name="" id="decription" rows="5"></textarea>
                </div>
            </div>
            <div className="d-flex mt-3">
                <div className="col-6 pe-3">
                    <Button variant="primary" type="submit" className="btn-go-to-home">
                        Update
                    </Button>
                </div>
                <div className="col-6">
                    <Button variant="primary" type="submit" className="btn-go-to-home">
                        Close
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default UpdateInformation
