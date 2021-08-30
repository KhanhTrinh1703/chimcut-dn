import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

const CovidCard = () => {
  const _renderField = () => {
    return (
      <div className="flex flex-col p-4 rounded-2xl flex-1 items-center bg-gray-100 text-gray-900 w-32">
        <p className="text-md">{title}</p>
        <div className="flex flex-row text-2xl items-center font-bold mt-2">
          <AiOutlineArrowUp className="text-red-600"></AiOutlineArrowUp>
          <p>12.456</p>
        </div>
      </div>
    )
  }

  const _renderFieldList = () => {
    return (
      <div className="flex flex-row  space-x-4">
        {_renderField('Số ca nhiễm', patientData?.newCase)}
        {_renderField('Khỏi bệnh', patientData?.newRecovered)}
        {_renderField('Tử vong', patientData?.newDeath)}
      </div>
    )
  }

  return (
    <div
      className="
    flex 
    w-full
    m-2 
    rounded-2xl 
    shadow-xl"
    >
      {_renderFieldList()}
    </div>
  )
}

export default CovidCard
