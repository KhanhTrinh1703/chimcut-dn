import React, { Fragment } from 'react'
import CardInfoComponentBI from '@components/homepageComponents/CardInfo/CardInfoComponentBI'
import CovidAnalystComponent from '@components/homepageComponents/covid/CovidAnalystComponent'
const HomePage = () => {
  return (
    <Fragment>
      <section className="flex info-section justify-evenly flex-wrap content-around">
        <CardInfoComponentBI />
      </section>
      <section className="flex-col flex items-center">
        <CovidAnalystComponent />
      </section>
    </Fragment>
  )
}
export default HomePage
