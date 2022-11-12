import React from 'react'
import Button from "react-bootstrap/Button";
import ItemsDetailControl from './ItemsDetailControl';
import CreatePost from './CreatePost';
import PostProcessingItems from './PostProcessingItems';
import ManagePostForFreelancer from '../auth/freelancer/ManagePostForFreelancer';


const DashBoard = () => {
    return (
        <div className='dashboard-manage'>
            <div className='d-flex'>
                <div className='dashboard-manage__control'>
                    <CreatePost></CreatePost>
                </div>
                <div className='dashboard-manage__content'>
                    <div className='m-3'>
                        <h2 className='mb-3'>
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
                    <div className='mx-3 my-5 py-5'>
                        <h2 className='mb-3'>
                            Posted Jobs Processing (<span>4</span>)
                        </h2>
                        <div className='dashboard-manage__content__postlistprocessing'>
                            <div className='dashboard-manage__content__postlistprocessing__table'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th scope='col'>Name</th>
                                            <th scope='col'>Job Type</th>
                                            <th scope='col'>Start Day</th>
                                            <th scope='col'>End Day</th>
                                            <th scope='col'>Control</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope='row'>
                                                <PostProcessingItems></PostProcessingItems>
                                            </th>
                                            <td>Design</td>
                                            <td>12 July, 2020</td>
                                            <td>12 July, 2020</td>
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
                                                <PostProcessingItems></PostProcessingItems>
                                            </th>
                                            <td>Design</td>
                                            <td>12 July, 2020</td>
                                            <td>12 July, 2020</td>
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
                                                <PostProcessingItems></PostProcessingItems>
                                            </th>
                                            <td>Design</td>
                                            <td>12 July, 2020</td>
                                            <td>12 July, 2020</td>
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
                    <ManagePostForFreelancer></ManagePostForFreelancer>
                </div>
                

            </div>
        </div>
    )
}

export default DashBoard
