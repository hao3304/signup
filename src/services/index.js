import axios from './axios'

export default {
  getAuthCode(params) {
    return axios.get('getauthcode', {params})
  },
  register(params) {
    return axios.get('register', {params})
  },
  login(params) {
    return axios.get('login', {params})
  },
  resetpsd(params) {
    return axios.get('resetpsd', {params})
  },
  getStep(params) {
    return axios.get('getuserlevel', {params})
  },
  setuserbaseinfo(params) {
    return axios.get('setuserbaseinfo', {params})
  },
  setuserfamilyinfo(params) {
    return axios.get('setuserfamilyinfo', {params})
  },
  setuserarmyinfo(params) {
    return axios.get('setuserarmyinfo', {params})
  },
  setuserenterinfo(params) {
    return axios.get('setuserenterinfo', {params})
  },
  setuserzhiyuaninfo(params) {
    return axios.get('setuserzhiyuaninfo', {params})
  },
  getmzlist(params) {
    return axios.get('getmzlist', {params})
  },
  getuserbaseinfo(params) {
    return axios.get('getuserbaseinfo', {params})
  },
}
