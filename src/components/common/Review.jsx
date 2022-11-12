import React from 'react'
import Avatar from '../../assets/img/avatar.png'

const Review = () => {
    return (
        <div className='review'>
            <div className='w-100 review__content'>
                <div className='review__content__heading d-flex justify-content-between'>
                    <div className='d-flex'>
                        <img className='review__content__heading--avatar' src={Avatar}></img>
                        <div >
                            <h3 className='review__content__heading--name'>David Henricks</h3>
                            <div class="review__content__heading__star-rating--start">
                                <input type="ratio" id="start1" name="rating" value="1"></input>
                                <label for="start1" title="1 start">☆</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* ngày đăng */}
                        <p className='review__content__heading--date'>
                            19 June 2020
                        </p>
                    </div>
                </div>
                <div className='review__content__decription'>
                    <p>
                        A talented professional with an academic background in IT and proven commercial development experience as C++ developer since 1999. Has a sound knowledge of the software development life cycle. Was involved in more than 140 software development outsourcing projects.Programming Languages: C/C++, .NET C++, Python, Bash, Shell, PERL, Regular expressions, Python, Active-script.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Review
