import server from "./app.js"
import {Server} from "socket.io"

const PORT = 8080
const ready = () => console.log('server ready on port: '+PORT)

let http_server = server.listen (PORT,ready)
let socket_server = new Server(http_server)

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
                socket_server.emit(  //para todos los clientes, sino socket solo
                    'contador',
                    {contador}
                )
            }
        )
    }
)

