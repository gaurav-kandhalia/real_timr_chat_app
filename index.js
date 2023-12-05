const express = require('express')
const app = express()
const http = require('http').createServer(app)
const db = require('./config/db');
const router = require('./router/register');
const exp = require('constants');
const PORT =  5911

http.listen(PORT, () => {
    console.log(`Listening on port `,PORT)
})

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})
app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/home.html')
})
app.get('/register',(req,res)=>{
    res.sendFile(__dirname+'/public/register.html')
})
app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/public/login.html')
})


app.use('/register',router)
app.use('/login',router)
// Socket 
const io = require('socket.io')(http)

io.on('connection', (socket) => {
   
    console.log('Connected...',socket.id);

    socket.on('disconnect', () => {
        console.log(`Socket disconnected: ${socket.id}`);
      });
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
     
    })

})
 
