var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/public'));

/*app.get('/',function(request,response){
 response.send('Hola Mundo desde NdeJS Express')
}) */
var listEventos = [];

function registrarEvento(evento) {
    if (esUnEventoValido(evento))
        return guardarEvento(evento);
    else
        return mostrarError();
}

// GiardarEvento?nombre=""&direccion=""

function mostrarError(){
    return 'Verifique los datos introducidos';
}

function guardarEvento(evento) {
    listEventos.push(evento);
    return listEventos;
}

function esUnEventoValido(evento) {
    return evento.nombre && evento.direccion ? true : false;
}

app.get('/registrarEvento', function (request, response) {
   var evento= {nombre:request.query.nombre,direccion: request.query.direccion};
   response.send(registrarEvento(evento));
})


app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/pagina1', function (request, response) {
    response.sendFile(path.join(__dirname + '/pagina1.html'))
})

app.get('/pagina2', function (request, response) {
    response.sendFile(path.join(__dirname + '/pagina2.html'))
})

app.get('/user', function (request, response) {
    response.send({ name: 'tito', apellido: 'flores' });
})

app.listen(9090, function () {
    console.log('servidor corriendo en el browser');
})