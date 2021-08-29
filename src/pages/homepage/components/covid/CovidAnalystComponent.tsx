import React from 'react'
import CovidCard from './CovidCard'

const CovidAnalystComponent = () => {
  return (
    <div className="">
      <div className="flex-col mx-auto xl flex items-center py-16">
        <div className="flex flex-wrap justify-center">
          <CovidCard></CovidCard>
          <CovidCard></CovidCard>
        </div>
      </div>
    </div>
  )
}

export default CovidAnalystComponent
