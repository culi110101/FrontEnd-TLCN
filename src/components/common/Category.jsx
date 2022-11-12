import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoriesIntroAction } from '../../store/entities/category'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'

const Category = () => {
    const dispatch = useDispatch()

    const { categories } = useSelector(state => state.category.getCategoriesIntro)

    useEffect(() => {
        dispatch(getCategoriesIntroAction(4))
    }, [])

    return (
        <div className='content'>
            <div className='container category'>
                <div className='row category__header'>
                    <h2>Explore by category</h2>
                    <p>Leverage agile frameworks to provide a robust synopsis for high level overviews to start.</p>
                </div>
                <ul className='category__list row'>
                    {categories && categories.map((item, index) => (
                        <li key={index} className='col-3 category__list__items'>
                            <a href='#'>
                                <div>
                                    <div className='category__list__items--icon'>
                                        <FontAwesomeIcon icon={faDesktop} />
                                    </div>
                                    <p className='category__list__items--header'>{item.category.name}</p>
                                    <p className='category__list__items--decription'> <span className='category__list__items--sum-job'>{item.numJobs}</span> Vacancy </p>
                                </div>
                            </a>
                        </li>
                    ))}

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
