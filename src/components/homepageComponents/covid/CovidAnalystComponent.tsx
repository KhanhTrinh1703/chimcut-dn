import React, { useEffect, useState } from 'react'
import CovidCard from './CovidCard'
import { postSumPatient, postProvincesPatient } from '../../../api/covidAPI'
import './covid.scss'
import { NationPatient, ProvincePatient } from '../../../types/covid'

const CovidAnalystComponent = () => {
  const [nationData, setNationData] = useState<NationPatient>({} as NationPatient)
  const [danangData, setDanangData] = useState<ProvincePatient>({} as ProvincePatient)


  useEffect(() => {
    const funcCallAPI = async () => {
      const asyncSumPatient = postSumPatient()
      const asyncProvincesPatient = postProvincesPatient()
      const sumPatientData: any = await asyncSumPatient
      const provincesPatientData: any = await asyncProvincesPatient
      if (sumPatientData?.success) {
        const sumPatientToday = sumPatientData?.data
        const sumPatientYesterday = sumPatientData?.dataL
        const newCase =
          sumPatientToday?.Confirmed - sumPatientYesterday?.Confirmed
        const newRecovered =
          sumPatientToday?.Recovered - sumPatientYesterday?.Recovered
        const newDeath = sumPatientToday?.Death - sumPatientYesterday?.Death
        setNationData({
          ...nationData,
          newCase: +newCase,
          newRecovered: +newRecovered,
          newDeath: +newDeath,
        })
      }
      if (provincesPatientData?.success) {
        const danang = provincesPatientData?.list.find(
          (item: any) => item.id === 'VN-DN'
        )
        setDanangData({
          ...danangData,
          totalCases: +danang?.confirmed,
          newCase: +danang?.incconfirmed,
          newRecovered: 0,
          newDeath: +danang?.incdeath,
        })
      }
    }

    funcCallAPI()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex-col w-full md:w-auto md:mx-auto xl flex items-center py-5 px-5 covid-wrapper">
      <CovidCard patientData={nationData} location="Ca nuoc"></CovidCard>
      <CovidCard patientData={danangData} location="Da Nang"></CovidCard>
    </div>
  )
}

export default CovidAnalystComponent
