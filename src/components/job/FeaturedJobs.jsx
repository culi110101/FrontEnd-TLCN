import React from 'react'
import JobItems from './JobItems'

const FeaturedJobs = () => {
  return (
    <div className='container featuredjobs'>
      <div className='d-flex justify-content-center'>
      <div className='featuredjobs__content'>
        <h2 className='featuredjobs__content--header text-center'>Featured Jobs</h2>
        <p className='featuredjobs__content--decription text-center'>Leverage agile frameworks to provide a robust synopsis for high level overviews to start.</p>
      </div>
      </div>
      <ul>
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
  )
}

export default FeaturedJobs
