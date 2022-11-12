import React from 'react'
import Header from '../components/layer/Header'
import Footer from '../components/layer/Footer'
import JobItems from '../components/job/JobItems'
import Baner from '../components/common/Baner'



const SearchList = () => {
    let body = (
        <div className='body'>
            <Baner></Baner>
            <div className='container searchlist'>
                <div className='d-flex'>
                    <div className='col-4 filter'>
                        <div className='filter__jobtype'>
                            <p>Job Type</p>
                            <div className='filter__jobtype--items'>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label for="html">HTML</label>
                            </div>
                            <div className='filter__jobtype--items'>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label for="html">HTML</label>
                            </div>
                            <div className='filter__jobtype--items'>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label for="html">HTML</label>
                            </div>
                        </div>
                        <div className='filter__salary'>
                            <p>Salary</p>
                            <div className='filter__salary--items'>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label for="html">200</label>
                            </div>
                            <div className='filter__salary--items'>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label for="html">500</label>
                            </div>
                            <div className='filter__salary--items'>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label for="html">More Than 500</label>
                            </div>
                        </div>
                        <div className='filter__post-time'>
                            <p>Posted Time</p>
                            <div className='filter__post-time--items'>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label for="html">Anytime</label>
                            </div>
                            <div className='filter__post-time--items'>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label for="html">Last Day</label>
                            </div>
                            <div className='filter__post-time--items'>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label for="html">Last Week</label>
                            </div>
                        </div>
                    </div>
                    <div className='col-8'>
                        <div className='searchlist__content'>
                            <label>
                                <span>120</span>
                                &nbsp;
                                results for
                                &nbsp;
                                <span>UI Designer</span>
                            </label>
                            <ul className='list-result'>
                                <li className='d-flex justify-content-center'>
                                    <JobItems></JobItems>
                                </li>
                                <li className='d-flex justify-content-center'>
                                    <JobItems></JobItems>
                                </li>
                                <li className='d-flex justify-content-center'>
                                    <JobItems></JobItems>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div>
            <Header></Header>
            {body}
            <Footer></Footer>
        </div>
    )
}

export default SearchList
