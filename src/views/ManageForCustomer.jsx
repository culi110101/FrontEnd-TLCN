import React from 'react'
import Header from '../components/layer/Header'
import Footer from '../components/layer/Footer'
import DashBoard from '../components/customer/DashBoard'


const ManageForCustomer = () => {
    let body = (
        <div className='manageforcustomer'>
            <DashBoard></DashBoard>
        </div>
    )

    return (
        <div>
            <Header></Header>
            {body}
            {/* <Footer></Footer> */}
        </div>
    )

}

export default ManageForCustomer
