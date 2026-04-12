const express = require('express')
const app = express()
const port = 3000

// Middleware (logging only)
app.use((req, res, next) => {
    const time = new Date().toLocaleTimeString()
    console.log(`Request received at ${time}`)
    next()
})

let user = [
    { id: '1', name: 'omkar', age: 22 },
    { id: '2', name: 'Darshan', age: 20 },
    { id: '3', name: 'Pradeep', age: 21 },
]

// Get all users
app.get('/user', (req, res) => {
    res.send(user)
})

// Get user by id
app.get('/user/:id', (req, res) => {
    const id = req.params.id
    const userData = user.find((u) => u.id === id)

    if (userData) {
        res.send(userData)
    } else {
        res.send(`User with id ${id} not found`)
    }
})

app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`)
})