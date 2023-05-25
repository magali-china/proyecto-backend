import server from "./app.js"
import {Server} from "socket.io"

const PORT = process.env.PORT || 8080
const ready = () => console.log('server ready on port: '+PORT)

const http_server = server.listen (PORT,ready)
const socket_server = new Server(http_server)
const chats = []

let contador = 0

socket_server.on(  // es para escuchar
    'connection',
    socket => {
        //console.log(socket)
        console.log(`client ${socket.client.id} connected`)
        socket.on(
            'primer_conexion',
            data => {
                console.log(data.name)
                contador++
                socket.emit(  //para todos los clientes, sino socket solo
                    'contador',
                    {contador}
                )
            }
        )
        socket.on('auth',()=>{
            socket_server.emit("allMessagess", chats)

        });
        socket.on("new_message", data =>{
            chats.push(data)
            console.log(chats)
            socket_server.emit("allMessagess", chats)
        })
    }
)


