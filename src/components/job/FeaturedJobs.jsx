import React from 'react'
import JobItems from './JobItems'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getNewestJobsAction } from '../../store/entities/job'

const FeaturedJobs = () => {

  const dispatch = useDispatch()

  /* const {newestJobs, newestJobsCategories} = useSelector(state => state.job.getNewestJobs)

  useEffect(() => {
    dispatch(getNewestJobsAction({num: 3,status: "Open"}))
  }, []) */
  
  const {jobs, categories} = useSelector(state => state.job.getNewestJobs)
  

  useEffect(() => {
    dispatch(getNewestJobsAction({num: 3,status: "Open"}))
  }, [])



  return (
    <div className='container featuredjobs'>
      <div className='d-flex justify-content-center'>
      <div className='featuredjobs__content'>
        <h2 className='featuredjobs__content--header text-center'>Featured Jobs</h2>
        <p className='featuredjobs__content--decription text-center'>Leverage agile frameworks to provide a robust synopsis for high level overviews to start.</p>
      </div>
      </div>
      <ul>
          {jobs && jobs.map((item, index) => (
            <li key={index} className='d-flex justify-content-center'>
              <JobItems job={item} category={categories[index]}></JobItems>
            </li>
          ))}
          {/* <li className='d-flex justify-content-center'>
            <JobItems></JobItems>
          </li>
          <li className='d-flex justify-content-center'>
            <JobItems></JobItems>
          </li> */}
      </ul>
    </div>
  )
}

export default FeaturedJobs
