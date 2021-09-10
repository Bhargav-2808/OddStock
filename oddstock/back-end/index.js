const connectDB=require("./database")

const express = require('express')
const app = express()
const port = 5000

app.use(express.json())

app.use("/api/authenticate",require("./routes/authenticate"))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

connectDB();