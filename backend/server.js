import express from 'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'




connectDB()

dotenv.config()

const app = express()

app.get('/', (req, res) => {
    res.send('API is running')
})

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`))

