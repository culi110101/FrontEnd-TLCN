import React from 'react'
import Header from '../components/layer/Header'
import Footer from '../components/layer/Footer'
import Introduction from '../components/users/Introduction'
import Overview from '../components/users/Overview'
import UpdateInformation from '../components/users/UpdateInformation'


const ProfileUser = () => {
    let body = (
        <div className='body'>
            <div className='profileuser'>
                <div className='container'>
                    <div className='d-flex'>
                        <div className='col-4 sticky'>
                            <Introduction></Introduction>
                            <UpdateInformation></UpdateInformation>
                        </div>
                        <div className='col-8 px-3'>
                            <Overview></Overview>
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
