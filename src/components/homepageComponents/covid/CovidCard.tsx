import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { CovidCardProps } from '../../../types/covid'

const CovidCard = ({ patientData, location }: CovidCardProps) => {

  const _renderField = (title: string, quantity: number) => {
    return (
      <div className="flex flex-col p-4 rounded-2xl flex-1 items-center bg-gray-100 text-gray-900 w-32">
        <p className="text-md">{title}</p>
        <div className="flex flex-row text-2xl items-center font-bold mt-2">
          <AiOutlineArrowUp className="text-red-600"></AiOutlineArrowUp>
          <p>{quantity}</p>
        </div>
      </div>
    )
  }

  const _renderFieldList = () => {
    return (
      <div className="flex flex-row space-x-4">
        {_renderField('Số ca nhiễm', patientData.newCase)}
        {_renderField('Khỏi bệnh', patientData.newRecovered)}
        {_renderField('Tử vong', patientData.newDeath)}
      </div>
    )
  }

  return (
    <div
      className="
    flex 
    items-center
    m-2 
    flex-col
    md:flex-row
    rounded-2xl 
    shadow-xl
    space-x-4"
    >
      <span className="text-xl mb-4 md:mb-0">{location}</span>
      {_renderFieldList()}
    </div>
  )
}

export default CovidCard
