import Axios from 'axios'


export const AxiosReviw = Axios.create({
    baseURL: 'https://let-s-play-review-service.onrender.com'
})


export const Axiosbooking = Axios.create({
    baseURL: 'https://let-s-play-booking-service.onrender.com'
})

export const Axiosuser = Axios.create({
    baseURL: 'https://let-s-play-user-service.onrender.com'
})

