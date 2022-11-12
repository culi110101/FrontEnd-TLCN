import React from 'react'

const Contact = () => {
    return (
        <div className='contact-form'>
            <form action="#">
                <div>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" />
                </div>
                <div className='d-flex'>
                    <div className='col-12 col-md-6 pe-3'>
                        <label htmlFor="name">E-mail</label>
                        <input type="email" />
                    </div>
                    <div className='col-12 col-md-6'>
                        <label htmlFor="name">Subject</label>
                        <input type="text" />
                    </div>
                </div>
                <div>
                    <label htmlFor="name">Message</label>
                    <textarea className='' name="" id="" rows="5"></textarea>
                </div>
                <button className='btn-contact'>Send</button>
            </form>
        </div>
    )
}
export default Contact
