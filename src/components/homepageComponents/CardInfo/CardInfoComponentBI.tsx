import React, { Fragment } from 'react'
import CardInfoComponent from './CardInfoComponent'
import { personInfo } from '../../../data/data'

const CardInfoComponentBI = () => {
  return (
    <Fragment>
      {personInfo.slice(0, 4).map((item) => (
        <CardInfoComponent
          name={item?.name}
          key={item?.id}
          avatar={item?.avatar}
          time={item?.endTime}
          phone={item?.phone}
          address={item?.address}
          email={item?.email}
        />
      ))}
    </Fragment>
  )
}

export default CardInfoComponentBI
