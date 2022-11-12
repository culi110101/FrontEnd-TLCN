import React from 'react'
import Button from "react-bootstrap/Button";
import UserDetail from './UserDetail';

const TaskList = () => {
    return (
        <div className='tasklist'>
            <div className='m-3'>
                <h4>
                    Tasks of job (<span>4</span>)
                </h4>
                <div className='tasklist__content'>
                    <div className='tasklist__content__table'>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Start Day</th>
                                    <th scope='col'>Start Day</th>
                                    <th scope='col'></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope='row'>
                                        <h4>Tên task</h4>
                                    </th>
                                    <td>12 July, 2020</td>
                                    <td>
                                        12 July, 2020
                                    </td>
                                    <td>
                                        <div>
                                            <Button variant="primary" className="btn-delete-task">
                                                Delete
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope='row'>
                                        <h4>Tên task</h4>
                                    </th>
                                    <td>12 July, 2020</td>
                                    <td>
                                        12 July, 2020
                                    </td>
                                    <td>
                                        <div>
                                            <Button variant="primary" className="btn-delete-task">
                                                Delete
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope='row'>
                                        <h4>Tên task</h4>
                                    </th>
                                    <td>12 July, 2020</td>
                                    <td>
                                        12 July, 2020
                                    </td>
                                    <td>
                                        <div>
                                            <Button variant="primary" className="btn-delete-task">
                                                Delete
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='tasklist__content__addtask my-4 p-3'>
                        <div className="mb-3">
                            <label className="form-label">Name of task</label>
                            <input className="form-input" type="text" placeholder="Name of task" />
                        </div>
                        <div className="mb-3 w-100">
                            <div className="d-flex">
                                <div className="col-6 pe-3">
                                    <label className="form-label">Start Day</label>
                                    <input className="form-input" type="date" placeholder="Start Day" />
                                </div>
                                <div className="col-6">
                                    <label className="form-label">End Day</label>
                                    <input className="form-input" type="date" placeholder="End Day" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <Button variant="primary" className="btn-add-task">
                                Add Task
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskList
