import express from 'express'

const server = express()
const HOST = 3000

server.get('/', (req, res) => {
    res.sendFile('./index.html')
})

server.post('/login', (req, res) => {

})

server.post('/sign', (req, res) => {

})

server.post('/add_order', (req, res) => {

})

server.get('/history', (req, res) => {
    
})

server.listen(HOST, () => {
    console.log('ready!')
})