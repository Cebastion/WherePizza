import express from 'express'
import { db } from './DB/db'
import { LogIn } from './function/login'
import { GetHistory } from './function/GetHistory'

const server = express()
const HOST = 3000

server.get('/', (req, res) => {
    res.send(__dirname + 'index.html')
})

server.post('/login', (req, res) => {
    const user = req.body
    LogIn(user)
})

server.post('/sign', (req, res) => {
    const user = req.body
})

server.post('/add_order', (req, res) => {

})

server.get('/history', (req, res) => {
    
})

server.listen(HOST, () => {
    const db = new db('')
    try {
        db.connect()
    } catch (error) {
        console.error(error)
        db.disconnect()
    }
})

server.on("exit", async () => {
    const db = new db('')
    await db.disconnect()
})