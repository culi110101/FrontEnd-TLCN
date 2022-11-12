import React from 'react'
import Avatar from '../../assets/img/avatar.png';

const JobItems = () => {
    return (
        <div className='jobitems pulse'>
            <div className='row'>
                <div className='col-6'>
                    <div className='d-flex'>
                        <img className='jobitems--avatar' src={Avatar}></img>
                        <div className='jobitems__headinfomation'>
                            <p className='jobitems__headinfomation--header'>Product Designer</p>
                            <p className='jobitems__headinfomation--decription'>Gubagoo is a fast growing provider of messaging and commerce solutions for automotive dealers changing the future of how people find, buy and service their vehicles.</p>
                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='d-flex jobitems__price'>
                        {/* icon đô la */}
                        <i></i>
                        {/* số tiền target của job */}
                        <p className='jobitems__price--number'>
                            <span>80</span>
                            <span>-</span>
                            <span>90</span>
                            &nbsp;
                            Point
                        </p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <a className='jobitems--category text-capitalize'>design</a>
                </div>
                <div className='col-6'>
                    <p className='jobitems--timeforjob'>Start day: &nbsp;
                        <span>2022-10-19</span>
                        &nbsp;
                        End day: &nbsp;
                        <span>2022-10-19</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default JobItems
