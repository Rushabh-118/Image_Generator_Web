import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectToMongo from './config/Mongo.js'
import userRouter from './routes/UserRoute.js'
import Imagerouter from './routes/ImageRoute.js'

const port = process.env.PORT || 4000
const app = express()

app.use(express.json())
app.use(cors())
await connectToMongo();

app.use('/api/user', userRouter);
app.use('/api/image', Imagerouter);
app.get('/', (req, res) => res.send('API is running...'))
app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`))