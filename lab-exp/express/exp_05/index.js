//entry file -this file get execute first
//node js is runtime environment
//used to create fast ,scalable network application
//make backdend development easy and efficient,faster than other language

//npm-node package manager
//api methods - put,post,delete,get,

let date=new Date()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const time = new Date().toLocaleTimeString()
  const day = new Date().toLocaleDateString()
  const list = [time, day]
  res.send(`Hello World! The current time is ${time} and the date is ${day}`)

})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
