const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors') // Adicione esta linha
const sequelize = require('./config/database')
const userRoutes = require('./routes/userRoutes')

const app = express()

// Configure CORS
app.use(cors()) // Adicione esta linha

app.use(bodyParser.json())
app.use('/api', userRoutes)

// Sincronizar banco de dados
sequelize
    .sync()
    .then(() => {
        app.listen(3001, () => {
            console.log('Server is running on port 3001')
        })
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err)
    })
