const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})


return app
//app.listen(3000)
//return app
