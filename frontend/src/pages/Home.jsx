import React from 'react'
import UtilityCard from '../components/UtilityCard'

const Home = () => {
  return (
    <div className=' m-5 shadow-md shadow-gray-100 rounded-lg p-10 border-gray-100'>
      <h2 className='font-recursive font-bold text-lg'>Your Home Utilities</h2>
      <div className=' p-5 mt-5 border-2 rounded-lg border-gray-100 flex gap-10 '>
        
        <UtilityCard/>
        <UtilityCard/>
        <UtilityCard/>
        <UtilityCard/>
      </div>
    </div>
  )
}

export default Home
