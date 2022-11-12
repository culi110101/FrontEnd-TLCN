import React from 'react'
import Header from '../components/layer/Header'
import Footer from '../components/layer/Footer'
import Review from '../components/common/Review'
import Contact from '../components/common/Contact'
import Avatar from '../assets/img/avatar.png'


const ProfileUser = () => {
    let body = (
        <div className='body'>
            <div className='profileuser'>
                <div className='container'>
                    <div className='d-flex'>
                        <div className='col-4 profileuser__information'>
                            <div className='profileuser__information__heading'>
                                <img className='profileuser__information__heading--avatar' src={Avatar}></img>
                                <p className='profileuser__information__heading--name'>David Henricks</p>
                                <p className='profileuser__information__heading--career'>Product Designer</p>
                            </div>
                            <div className='profileuser__information__detail'>
                                <div className='profileuser__information__detail__location text-center'>
                                    <i></i>
                                    <p className='profileuser__information__detail--header my-2'>Location</p>
                                    <p className='profileuser__information__detail--decription'>New York , USA</p>
                                </div>
                                <div className='profileuser__information__detail__email text-center'>
                                    <i></i>
                                    <p className='profileuser__information__detail--header my-2'>E-mail</p>
                                    <p className='profileuser__information__detail--decription'>name_ac@gmail.com</p>
                                </div>
                                <div className='profileuser__information__detail__phone text-center'>
                                    <i></i>
                                    <p className='profileuser__information__detail--header my-2'>Phone</p>
                                    <p className='profileuser__information__detail--decription'>+999 565 562</p>
                                </div>
                                <div className='profileuser__information__detail__experience text-center'>
                                    <i></i>
                                    <p className='profileuser__information__detail--header my-2'>Experience</p>
                                    <p className='profileuser__information__detail--decription'>3 years in software development</p>
                                </div>
                                <div class="profileuser__information__detail__star-rating">
                                    <div class="d-flex justify-content-center profileuser__information__detail__star-rating--start">

                                        <input type="ratio" id="start1" name="rating" value="<?= $i?>"></input>
                                        <label for="start1" title="1 start">☆</label>
                                    </div>
                                    <div class="text-center profileuser__information__detail__star-rating--decription">
                                        4/5 ( Đã có 101 đánh giá )
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-8 px-3'>
                            <div className='profileuser__overview'>
                                <div className='profileuser__overview__about'>
                                    <p className='profileuser__overview__about--heading'>About</p>
                                    <p className='profileuser__overview__about--decription'>A talented professional with an academic background in IT and proven commercial development experience as C++ developer since 1999. Has a sound knowledge of the software development life cycle. Was involved in more than 140 software development outsourcing projects.Programming Languages: C/C++, .NET C++, Python, Bash, Shell, PERL, Regular expressions, Python, Active-script.</p>
                                </div>
                                <div className='profileuser__overview__contact'>
                                    <p className='profileuser__overview__contact--heading'>Leave me your info</p>
                                    <Contact></Contact>
                                </div>
                            </div>
                            <div className='profileuser__overview__review'>
                                <Review></Review>
                                <Review></Review>
                                <Review></Review>
                                <Review></Review>
                            </div>
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

export default ProfileUser
