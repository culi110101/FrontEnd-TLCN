import React from 'react'
import Button from "react-bootstrap/Button";
import ItemsDetailControl from './ItemsDetailControl';


const DashBoard = () => {
    return (
        <div className='dashboard-manage'>
            <div className='d-flex'>
                <div className='dashboard-manage__control'>
                    <Button variant="primary" type="submit" className="btn-create-post">
                        + CREATE A NEW POST
                    </Button>
                </div>
                <div className='dashboard-manage__content'>
                    <div className='m-3'>
                        <h2>
                            Posted Jobs (<span>4</span>)
                        </h2>
                        <div className='dashboard-manage__content__postlist'>
                            <div className='dashboard-manage__content__postlist__table'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th scope='col'>Name</th>
                                            <th scope='col'>Job Type</th>
                                            <th scope='col'>Created on</th>
                                            <th scope='col'>Total Applicants</th>
                                            <th scope='col'>Control</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope='row'>
                                                <ItemsDetailControl></ItemsDetailControl>
                                            </th>
                                            <td>Design</td>
                                            <td>12 July, 2020</td>
                                            <td>47</td>
                                            <td>
                                                <div>
                                                    <Button variant="primary" className="btn-delete-post">
                                                        Delete
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>
                                                <ItemsDetailControl></ItemsDetailControl>
                                            </th>
                                            <td>Design</td>
                                            <td>12 July, 2020</td>
                                            <td>47</td>
                                            <td>
                                                <div>
                                                    <Button variant="primary" className="btn-delete-post">
                                                        Delete
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>
                                                <ItemsDetailControl></ItemsDetailControl>
                                            </th>
                                            <td>Design</td>
                                            <td>12 July, 2020</td>
                                            <td>47</td>
                                            <td>
                                                <div>
                                                    <Button variant="primary" className="btn-delete-post">
                                                        Delete
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

            </div>
        </div>
    )
}

export default DashBoard
