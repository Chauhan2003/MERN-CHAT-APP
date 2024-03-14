import express from 'express'
import dotenv from 'dotenv'
dotenv.config();

const app = express()
const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})