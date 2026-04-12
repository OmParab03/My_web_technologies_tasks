const express = require('express')//import express from 'express'
const app = express()
const port = 3000//port no

app.get('/', (req, res) => {//get request to the root route
  res.send('Hello World!')
})

app.get('/contact', (req, res) => {
  res.send('This is the contact page')
})

app.get('/project', (req, res) => {
  res.send('This is the project page')
})

app.get('/about', (req, res) => {
  res.send('This is the about page')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
