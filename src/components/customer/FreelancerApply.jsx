import React from 'react'
import Button from "react-bootstrap/Button";
import UserDetail from './UserDetail';

const FreelancerApply = () => {
    return (
        <div className='freelancerapply__content'>
            <div className=''>
                <h4>
                    Freelancer Applied (<span>4</span>)
                </h4>
                <div className='freelancerapply__content__postlist'>
                    <div className='freelancerapply__content__postlist__table'>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Applied on</th>
                                    <th scope='col'>Total Rate</th>
                                    <th scope='col'></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope='row'>
                                        <UserDetail></UserDetail>
                                    </th>
                                    <td>12 July, 2020</td>
                                    <td>
                                        <div className="d-flex justify-content-center profileuser__information__detail__star-rating--start">
                                            <label htmlFor="start1" title="1 start">☆</label>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <Button variant="primary" className="btn-contact-post">
                                                Contact
                                            </Button>
                                            <Button variant="primary" className="btn-reject-post">
                                                Reject
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope='row'>
                                        <UserDetail></UserDetail>
                                    </th>
                                    <td>12 July, 2020</td>
                                    <td>
                                        <div className="d-flex justify-content-center profileuser__information__detail__star-rating--start">
                                            <label htmlFor="start1" title="1 start">☆</label>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <Button variant="primary" className="btn-contact-post">
                                                Contact
                                            </Button>
                                            <Button variant="primary" className="btn-reject-post">
                                                Reject
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope='row'>
                                        <UserDetail></UserDetail>
                                    </th>
                                    <td>12 July, 2020</td>
                                    <td>
                                        <div className="d-flex justify-content-center profileuser__information__detail__star-rating--start">
                                            <label htmlFor="start1" title="1 start">☆</label>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <Button variant="primary" className="btn-contact-post">
                                                Contact
                                            </Button>
                                            <Button variant="primary" className="btn-reject-post">
                                                Reject
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FreelancerApply
