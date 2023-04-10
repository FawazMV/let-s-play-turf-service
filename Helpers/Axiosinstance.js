import Axios from 'axios'


export const AxiosReviw = Axios.create({
    baseURL: 'http://localhost:3.26.98.65'
})


export const Axiosbooking = Axios.create({
    baseURL: 'http://localhost:4321'
})

export const Axiosuser = Axios.create({
    baseURL: 'http://3.26.144.127'
})

