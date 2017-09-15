const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World infestus!!!')
})


module.exports=app;
//app.listen(3000)
//return app
