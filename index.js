const express = require('express')

const server = express()

server.get('/foo', (req, res) => {
  res.json({
    hello: 'world'
  })
})

server.listen(process.env.PORT || 3000, () => {
  console.log('zerver upz')
})
