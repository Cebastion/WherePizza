import express from 'express'

const server = express()
const HOST = 3000

server.get('/', (req, res) => {
    res.sendFile('./index.html')
})

server.listen(HOST, () => {
    console.log('ready!')
})