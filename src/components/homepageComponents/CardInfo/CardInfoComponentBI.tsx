import React, { Fragment } from 'react'
import CardInfoComponent from './CardInfoComponent'
import { personInfo } from '../../../data/data'
import CovidAnalystComponent from '../covid/CovidAnalystComponent'

const CardInfoComponentBI = () => {
  return (
    <Fragment>
      {personInfo.map((item) => (
        <CardInfoComponent
          name={item?.name}
          key={item?.id}
          avatar={item?.avatar}
          time={item?.endTime}
        />
      ))}
    </Fragment>
  )
}

export default CardInfoComponentBI
