import React from 'react'
import PersonComponent from './PersonComponent'
import { personInfo } from '../data/data'
import ChatPopupComponent from './ChatPopupComponent'

function ChimCutComponent() {
  return (
    <div className="container-fluid chimcut">
      <div className="row h-100p">
        {personInfo.map((item) => (
          <div className="col-6 h-50p p-0">
            <PersonComponent
              name={item?.name}
              key={item?.id}
              avatar={item?.avatar}
              time={item?.endTime}
            />
          </div>
        ))}
      </div>
      <ChatPopupComponent />
    </div>
  )
}

export default ChimCutComponent
