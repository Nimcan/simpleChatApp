
const express = require("express")

const cors = require("cors")

const http = require('http')

const {Server} = require("socket.io")

const app = express()

app.use(cors())

const server = http.createServer(app)

const io = new Server(server, {
    cors:{
        origin:'http://localhost:3000',
        methods:["GET", "POST"]
    }

})


app.get('/', (req, res)=>{
    res.send('<h1>server is working</h1>')
})

io.on("connection", (socket)=>{
    console.log("a user is connected")
})

const PORT = 8000


server.listen(PORT, ()=> console.log('server is listening'))


