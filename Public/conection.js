const socket = io()

function emit_data(){
    socket.emit(    //emit envia datos(cliente,servidor)
        'primer_conexion',
        {
            name: 'maga',
            age: 26
        }
    )
}

let selectors = document.querySelectorAll('.emit_data')
console.log(selectors)
selectors.forEach(each=> each.addEventListener('click',emit_data ))

socket.on(
    'contador',
    data=> console.log(data)
)