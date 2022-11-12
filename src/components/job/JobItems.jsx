import React from 'react'
import Avatar from '../../assets/img/avatar.png';
import { handleDate } from '../../common/lib';

const JobItems = ({job, category}) => {
    return (
        <div className='jobitems pulse'>
            <div className='row'>
                <div className='col-6'>
                    <div className='d-flex'>
                        <img className='jobitems--avatar' src={Avatar}></img>
                        <div className='jobitems__headinfomation'>
                            <p className='jobitems__headinfomation--header'>{job.name}</p>
                            <p className='jobitems__headinfomation--decription'>{job.description}</p>
                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='d-flex jobitems__price'>
                        {/* icon đô la */}
                        <i></i>
                        {/* số tiền target của job */}
                        <p className='jobitems__price--number'>
                            <span>{job.minPrice}</span>
                            <span>-</span>
                            <span>{job.maxPrice}</span>
                            &nbsp;
                            Point
                        </p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <a className='jobitems--category text-capitalize'>{category.name}</a>
                </div>
                <div className='col-6'>
                    <p className='jobitems--timeforjob'>Start day: &nbsp;
                        <span>{handleDate(job.startDate)}</span>
                        &nbsp;
                        End day: &nbsp;
                        <span>{handleDate(job.endDate)}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default JobItems
