import axiosClient from './axiosClient'

const API_SUM_PATIENT = 'https://emag.thanhnien.vn/covid19/home/getSummPatient'
const API_PROVINCES_PATIENT =
  'https://emag.thanhnien.vn/covid19/home/getAllPatientProvinces'

export function postSumPatient() {
  return axiosClient.post(API_SUM_PATIENT)
}

export function postProvincesPatient() {
  return axiosClient.post(API_PROVINCES_PATIENT)
}
