import React from 'react'

const Category = () => {
    return (
        <div className='content'>
            <div className='container category'>
                <div className='row category__header'>
                    <h2>Explore by category</h2>
                    <p>Leverage agile frameworks to provide a robust synopsis for high level overviews to start.</p>
                </div>
                <ul className='category__list row'>
                    <li className='col-3 category__list__items'>
                        <a href='#'>
                            <div>
                                <div className='category__list__items--icon'>
                                    <i>icon</i>
                                </div>
                                <p className='category__list__items--header'>Development</p>
                                <p className='category__list__items--decription'> <span className='category__list__items--sum-job'>415</span> Vacancy </p>
                            </div>
                        </a>
                    </li>
                    <li className='col-3 category__list__items'>
                        <a href='#'>
                            <div>
                                <div className='category__list__items--icon'>
                                    <i>icon</i>
                                </div>
                                <p className='category__list__items--header'>Development</p>
                                <p className='category__list__items--decription'> <span className='category__list__items--sum-job'>415</span> Vacancy </p>
                            </div>
                        </a>
                    </li>
                    <li className='col-3 category__list__items'>
                        <a href='#'>
                            <div>
                                <div className='category__list__items--icon'>
                                    <i>icon</i>
                                </div>
                                <p className='category__list__items--header'>Development</p>
                                <p className='category__list__items--decription'> <span className='category__list__items--sum-job'>415</span> Vacancy </p>
                            </div>
                        </a>
                    </li>
                    <li className='col-3 category__list__items'>
                        <a href='#'>
                            <div>
                                <div className='category__list__items--icon'>
                                    <i>icon</i>
                                </div>
                                <p className='category__list__items--header'>Development</p>
                                <p className='category__list__items--decription'> <span className='category__list__items--sum-job'>415</span> Vacancy </p>
                            </div>
                        </a>
                    </li>
                </ul>
                <div className='d-flex justify-content-center'>
                    <a href="#" className='category--explore'>
                        Explore All
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Category
