export interface NationPatient {
  newCase: number
  newRecovered: number
  newDeath: number
}

export interface ProvincePatient extends NationPatient {
  totalCases: number
}

export interface CovidCardProps {
  patientData: NationPatient | ProvincePatient
  location: string
}
