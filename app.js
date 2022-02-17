import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import AuthRouter from './routes/Auth.js'
import eventRouter from './routes/events.js'






const app = express()
app.use(cors())
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))


/// routes
app.use('/api/auth', AuthRouter)
app.use('/api/events', eventRouter)



// db connection
mongoose.connect('mongodb://localhost:27017/glh', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to DB')
    })
    .catch(err => {
        console.log(err)
    })


app.listen(5000, (req,res) => {
    console.log('Server started on port 5000')
})


