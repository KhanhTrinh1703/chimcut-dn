import React from 'react'
import CardInfoComponent from './CardInfoComponent'
import { personInfo } from '../../../../data/data'

const CardInfoComponentBI = () => {
  return (
    <div className="">
      <div className="flex-col mx-auto xl flex items-center py-16">
        <div className="flex flex-wrap justify-center">
          {personInfo.map((item) => (
            <CardInfoComponent
              name={item?.name}
              key={item?.id}
              avatar={item?.avatar}
              time={item?.endTime}
            />
          ))}
        </div>
        <footer className="flex mt-auto text-white text-4xl">
          Made from us with love!
        </footer>
      </div>
    </div>
  )
}

export default CardInfoComponentBI
