import React from 'react'
import PersonComponent from './PersonComponent'
import { personInfo } from '../data/data'
import "./ChimCutComponent.css"

function ChimCutComponent() {
  return (
    <div className="wrapper">
      <div className="container flex-col mx-auto xl flex h-screen items-center py-16">
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
        <footer className="flex mt-auto text-white text-4xl">
          Made from us with love!
        </footer>
      </div>
    </div>
  )
}

export default ChimCutComponent
