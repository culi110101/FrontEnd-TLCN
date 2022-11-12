import React from 'react'
import Avatar from '../../assets/img/avatar.png';

const JobDetails = () => {
    return (
        <div className='jobdetail'>
            <div className='container'>
                <div className='jobdetail-block'>
                    <div className='jobdetail__content'>
                        <div className='jobdetail__content__heading'>
                            <div className='d-flex justify-content-between'>
                                <div className='jobdetail__content__heading__right d-flex'>
                                    <img className='jobdetail__content__heading__right--avatar pe-4 pb-4' src={Avatar}></img>
                                    <div>
                                        <h3 className='jobdetail__content__heading__right--header'>
                                            Product Designer
                                        </h3>
                                        {/* tên người đăng */}
                                        <p className='jobdetail__content__heading__right--name'>
                                            Name
                                        </p>
                                    </div>
                                </div>
                                <div className='jobdetail__content__heading__left d-flex'>
                                    <div>
                                        {/* ngày đăng */}
                                        <p className='jobdetail__content__heading__left--date'>
                                            19 June 2020
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <button className='btn-apply'>Apply to this job</button>
                                <div className='d-flex'>
                                    <div className='d-flex jobdetail__price'>
                                        {/* icon đô la */}
                                        <i></i>
                                        {/* số tiền target của job */}
                                        <p className='jobdetail__price--number'>
                                            <span>80</span>
                                            <span>-</span>
                                            <span>90</span>
                                            &nbsp;
                                            Point
                                        </p>
                                    </div>
                                    <div className=''>
                                        <p className='jobdetail--timeforjob'>Start day: &nbsp;
                                            <span>2022-10-19</span>
                                            &nbsp;
                                            End day: &nbsp;
                                            <span>2022-10-19</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='jobdetail__content__body'>
                            <div className=''>
                            <div className='jobdetail__content__body__decription mb-5'>
                                <h4 className='jobdetail__content__body__decription--heading mb-4'>Job Description</h4>
                                <p className='jobdetail__content__body__decription--detail'>
                                    We’re looking for a passionate individual to design beautiful and functional products for our customers at Gubagoo. We move very fast and you will be expected to contribute to a cross-functional product development squad, that includes product managers and developers, to deliver the UX and UI for the team to bring to life.We are serious about remote work. You can work for from anywhere.
                                </p>
                            </div>
                            <div className='jobdetail__content__body__tast mb-5'>
                                <ul>
                                    <h4 className=' mb-4'>What you will be doing:</h4>
                                    <li>Contribute new controls or design improvements to our</li>
                                    <li>Contribute new controls or design improvements to our</li>
                                    <li>Contribute new controls or design improvements to our</li>
                                    <li>Contribute new controls or design improvements to our</li>
                                </ul>
                            </div>
                            <div className='d-flex justify-content-center'>

                            <button className='btn-apply'>Apply to this job</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetails
