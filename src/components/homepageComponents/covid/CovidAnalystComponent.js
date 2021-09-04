import React, { useEffect, useState } from 'react'
import CovidCard from './CovidCard'
import { postSumPatient, postProvincesPatient } from '../../../api/covidAPI'

const CovidAnalystComponent = () => {
  const [nationData, setNationData] = useState({})
  const [danangData, setDanangData] = useState({})

  
  useEffect(() => {
    const funcCallAPI = async () => {
      const asyncSumPatient = postSumPatient()
      const asyncProvincesPatient = postProvincesPatient()
      const sumPatientData = await asyncSumPatient
      const provincesPatientData = await asyncProvincesPatient
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
          newCase: newCase,
          newRecovered: newRecovered,
          newDeath: newDeath,
        })
      }
      if (provincesPatientData?.success) {
        const danang = provincesPatientData?.list.find(
          (item) => item.id === 'VN-DN'
        )
        setDanangData({
          ...danangData,
          totalCases: danang?.confirmed,
          newCase: danang?.incconfirmed,
          newRecovered: 0,
          newDeath: danang?.incdeath,
        })
      }
    }

    funcCallAPI()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex-col mx-auto xl flex items-center py-10 px-10 card">
      <CovidCard patientData={nationData} location="Ca nuoc"></CovidCard>
      <CovidCard patientData={danangData} location="Da Nang"></CovidCard>
    </div>
  )
}

export default CovidAnalystComponent
