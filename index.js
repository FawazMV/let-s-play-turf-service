import dotenv from 'dotenv'
import express from 'express'
import Router from './Routes/Routes.js'
import adminRequests from './Routes/AdminRequests.js'
import mongoose from 'mongoose'
import cors from 'cors'


dotenv.config()
const app = express()
app.use(express.json());

const corsOptions = {
    origin: ['http://3.106.126.248', 'https://let-s-play.onrender.com', 'http://localhost:3.26.98.65'],
    methods: 'GET,POST,PATCH,PUT,DELETE',
    preflightContinue: true,
    optionsSuccessStatus: 200,
    credentials: true
};

app.use(cors(corsOptions));;

const DATABASE_URL = process.env.DATABASE_URL
mongoose.set("strictQuery", false);
mongoose.connect(DATABASE_URL, () => console.log('Database Connected'))


app.listen(8888, () => console.log('Connected to server 8888'))

app.use('/', Router)

app.use('/turf-admin', adminRequests)

app.use((err, req, res, next) => {
    if (err.code === 11000) {
        return res.status(500).json({ error: 'Duplicate found' })
    } else if (err.name === "ValidationError") {
        return res.json({ error: err.message })
    }
    else return res.json({ error: "Internal error", err: err })

})