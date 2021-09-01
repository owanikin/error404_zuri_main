const express = require('express')
const app = express()
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('https://zuri.chat/')
})

app.get("*",(req,res) => {
    res.sendFile(__dirname + "/404.html")
})

app.listen(port, function () {
  console.log("App is listening on Port 4000")
})