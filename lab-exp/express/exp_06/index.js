const express = require('express')
const app = express()
const port = 3000

// Middleware (logging only)
app.use((req, res, next) => {
    const time = new Date().toLocaleTimeString()
    console.log(`Request received at ${time}`)
    next()
})

// Routes
app.get('/home', (req, res) => {
    res.send('Welcome to Home Page')
})

app.get('/about', (req, res) => {
    res.send('Welcome to About Page')
})

app.get('/contact', (req, res) => {
    res.send('Welcome to Contact Page')
})

// Server
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})