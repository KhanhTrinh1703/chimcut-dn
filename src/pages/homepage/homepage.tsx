import React, { Fragment } from 'react'
import CardInfoComponentBI from '@/components/homepageComponents/CardInfo/CardInfoComponentBI'
import CovidAnalystComponent from '@components/homepageComponents/covid/CovidAnalystComponent'
const HomePage = () => {
  return (
    <Fragment>
      <section className="flex info-section justify-evenly flex-wrap">
        <CardInfoComponentBI />
      </section>
      <CovidAnalystComponent />
    </Fragment>
  )
}
export default HomePage
