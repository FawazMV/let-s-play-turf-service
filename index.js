import dotenv from 'dotenv'
import express from 'express'
import Router from './Routes/Routes.js'
import adminRequests from './Routes/AdminRequests.js'
import mongoose from 'mongoose'
import cors from 'cors'


dotenv.config()
const app = express()
app.use(express.json(), cors());

const DATABASE_URL = process.env.DATABASE_URL
mongoose.set("strictQuery", false);
mongoose.connect(DATABASE_URL, () => console.log('Database Connected'))


app.listen(8888, () => console.log('Connected to server 8888 - Turf service'))

app.use('/', Router)

app.use('/turf-admin', adminRequests)

app.use((err, req, res, next) => {
    if (err.code === 11000) {
        return res.status(500).json({ error: 'Duplicate found' })
    } else if (err.name === "ValidationError") {
        return res.status(500).json({ error: err.message })
    }
    else return res.status(500).json({ error: "Internal error", err: err })

})