import React, { Fragment } from 'react'
import PersonComponent from './PersonComponent'

const CardInfoComponent = () => {
  return (
    <Fragment>
      <PersonComponent
        persons={persons}
      ></PersonComponent>
    </Fragment>
  )
}
