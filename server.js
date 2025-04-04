require('dotenv').config();
const { Socket } = require('dgram');
const express= require('express');
const http= require('http');

const socketIo= require('socket.io');

const app= express();

const server= http.createServer(app)

// intiate socket.io and attach this to the http server

const io= socketIo(server);

app.use(express.static('public'))

const users=new Set();

io.on("connection",(socket)=>{
    console.log("A user is connected");
    // handle users when they will join the chat
    socket.on('join',(userName)=>{
        users.add(userName)
        socket.userName=userName;

        // broadcast to all clients/ users that a new user has joined
        io.emit('userJoined',userName);
        //send the updated user list to all clients
        io.emit('userList',Array.from(users));
    })
    //handle incoming chat message
    socket.on('chatMessage',(message)=>{
        // broad cast the received message to all connnected clients
        io.emit('chatMessage',message);
    })

    //handle user disconnection
    socket.on("disconnect",()=>{
        console.log("An user is disconnected");

        users.forEach(user=>{
            if(user===socket.userName){
                users.delete(user);
                io.emit('userLeft',user);
                io.emit('userList',Array.from(users));
            }
        })
    })
});


const port=process.env.port ||5600;
server.listen(port,()=>{
    console.log(`Server is now running  on http://localhost:${port}`)
})