import React from 'react'
import PersonComponent from './PersonComponent'
import { personInfo } from '../data/data'
import ChatPopupComponent from './ChatPopupComponent'

function ChimCutComponent() {
  return (
    <div className="container mx-auto xl flex h-screen justify-center py-8">
      <div className="flex flex-wrap justify-center">
        {personInfo.map((item) => (
          <PersonComponent
            name={item?.name}
            key={item?.id}
            avatar={item?.avatar}
            time={item?.endTime}
          />
        ))}
      </div>
    </div>
  )
}

export default ChimCutComponent
